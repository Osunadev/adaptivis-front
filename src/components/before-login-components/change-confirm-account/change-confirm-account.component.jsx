import React, { Component } from 'react';

import PropTypes from 'prop-types';
import SpinnerWrapper from 'components/before-login-components/spinner-wrapper/spinner-wrapper.component';
import ConfirmContainer from 'components/before-login-components/confirm-container/confirm-container.component';
import ChangeConfirmForm from 'components/before-login-components/change-confirm-form/change-confirm-form.component';

import { Button } from 'antd';
import { Title } from './change-confirm-account.styles';

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
      componentType
    };
  }

  handleClickRoute = () => {
    // No importa si es 'change-password' o si es 'confirm-account', siempre llevaran a las mismas rutas
    this.props.history.push('/');
  };

  handleClickForm = (formEmail, formPassword) => {
    const { componentType, id, isTeacher } = this.state;

    // Fake request to the backend
    if (componentType === 'change-password') {
      this.setState({ isLoading: true }, () => {
        setTimeout(() => {
          this.setState({
            isLoading: false,
            hasServerResponded: true,
            description: passwordSuccessInfo.description,
            title: passwordSuccessInfo.title,
            changeRouteBtnTitle: passwordSuccessInfo.btnTitle
          });
        }, 2000);
      });
    } else if (componentType === 'confirm-account') {
      // No matter if it's a student or a teacher

      const confirmEndpoint = `http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/confirm/email/${id}`;

      this.setState({ isLoading: true });

      fetch(confirmEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formEmail
        })
      })
        .then(resp => resp.json())
        .then(({ message }) => {
          this.setState({
            isLoading: false,
            hasServerResponded: true,
            description: message
          });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    const {
      title,
      changeRouteBtnTitle,
      isLoading,
      hasServerResponded,
      description,
      componentType
    } = this.state;

    return (
      <>
        <Title>{title}</Title>

        <SpinnerWrapper
          isLoading={isLoading}
          title='Cargando resultados...'
          large
        >
          <ConfirmContainer loading={isLoading}>
            {hasServerResponded ? (
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
            ) : (
              <ChangeConfirmForm
                formType={componentType}
                onClickForm={this.handleClickForm}
              />
            )}
          </ConfirmContainer>
        </SpinnerWrapper>
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
