import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ConfirmContainer from 'components/confirm-container/confirm-container.component';
import ChangeConfirmForm from 'components/change-confirm-form/change-confirm-form.component';

import { Button } from 'antd';

import {
  accountSuccessInfo,
  accountFailureInfo,
  passwordSuccessInfo,
  passwordFailureInfo
} from './change-confirm-account.data';

class ChangeConfirmAccount extends Component {
  constructor(props) {
    super(props);

    const { match, componentType } = props;

    this.state = {
      email: '',
      password: '',
      id: match.params.id,
      // If it isn't profesor, it's alumno
      isTeacher: match.path.includes('/profesor'),
      title:
        componentType === 'change-password'
          ? 'Reestablecer contraseña'
          : 'Confirmación de cuenta',
      changeRouteBtnTitle: 'Regresar al inicio',
      isLoading: false,
      description: '',
      hasServerResponded: false,
      serverGoodResponse: null,
      componentType
    };
  }

  handleClickRoute = () => {
    // No importa si es 'change-password' o si es 'confirm-account', siempre llevaran a las mismas rutas
    const route = this.state.serverGoodResponse
      ? accountSuccessInfo.btnClickRoute
      : accountFailureInfo.btnClickRoute;

    this.props.history.push(route);
  };

  handleClickForm = (formEmail, formPassword) => {
    const { componentType, email, password, id, isTeacher } = this.state;

    // Fake request to the backend
    if (componentType === 'change-password') {
      this.setState(
        { email: formEmail, password: formPassword, isLoading: true },
        () => {
          setTimeout(() => {
            this.setState({
              isLoading: false,
              hasServerResponded: true,
              serverGoodResponse: true,
              description: passwordSuccessInfo.description,
              title: passwordSuccessInfo.title,
              changeRouteBtnTitle: passwordSuccessInfo.btnTitle
            });
          }, 2000);
        }
      );
    } else if (componentType === 'confirm-account') {
      if (isTeacher) {
        const confirmTeacherRoute = `http://localhost:5000/api/v1/confirm/teacher/${id}`;

        fetch(confirmTeacherRoute, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password
          })
        })
          .then(resp => resp.json())
          .then(confirmationMsg => {
            console.log(confirmationMsg);
          })
          .catch(error => console.log(error));
      } else {
        const confirmStudentRoute = `http://localhost:5000/api/v1/confirm/student/${id}`;

        fetch(confirmStudentRoute, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password
          })
        })
          .then(resp => resp.json())
          .then(confirmationMsg => {
            console.log(confirmationMsg);
          })
          .catch(error => console.log(error));
      }

      // this.setState({ email: formEmail, isLoading: true }, () => {
      //   setTimeout(() => {
      //     this.setState({
      //       isLoading: false,
      //       hasServerResponded: true,
      //       serverGoodResponse: false,
      //       description: accountFailureInfo.description,
      //       title: accountFailureInfo.title,
      //       changeRouteBtnTitle: accountFailureInfo.btnTitle
      //     });
      //   }, 2000);
      // });
    }
  };

  render() {
    const {
      isTeacher,
      title,
      changeRouteBtnTitle,
      isLoading,
      hasServerResponded,
      description,
      componentType
    } = this.state;

    return (
      <>
        <ConfirmContainer
          title={`${title} (${isTeacher ? 'Profesor' : 'Alumno'})`}
          loading={isLoading}
        >
          {!hasServerResponded && (
            <ChangeConfirmForm
              formType={componentType}
              onClickForm={this.handleClickForm}
            />
          )}

          {hasServerResponded && (
            <>
              <h2>{description}</h2>
              <Button
                type='primary'
                style={{
                  width: '25%',
                  textAlign: 'center',
                  margin: '16px'
                }}
                onClick={this.handleClickRoute}
              >
                {changeRouteBtnTitle}
              </Button>
            </>
          )}
        </ConfirmContainer>
      </>
    );
  }
}

ChangeConfirmAccount.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  componentType: PropTypes.oneOf(['change-password', 'confirm-account'])
    .isRequired
};

export default ChangeConfirmAccount;
