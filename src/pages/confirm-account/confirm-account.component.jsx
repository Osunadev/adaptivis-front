import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ConfirmContainer from 'components/confirm-container/confirm-container.component';
import { Input, Icon, Tooltip, Button, Typography } from 'antd';

import { emailRegEx } from 'pages/log-in/log-in.utils';
import { initialStateDefinition } from './confirm-account.utils';
import { accountSuccessInfo, accountFailureInfo } from './confirm-account.data';

class ConfirmAccount extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    forgotPassword: PropTypes.bool
  };

  static defaultProps = {
    forgotPassword: false
  };

  constructor(props) {
    super(props);
    // If forgotPassword prop is true, then we'll use this component as a Forgot Password Utility
    this.state = initialStateDefinition(props);
  }

  handleClickRoute = () => {
    const route = this.state.serverGoodResponse
      ? accountSuccessInfo.btnClickRoute
      : accountFailureInfo.btnClickRoute;

    this.props.history.push(route);
  };

  handleClick = () => {
    // We're going to send to the backend the confirmation id of the user with its email account
    const { id, inputText, isTeacher } = this.state;

    this.setState({ isLoading: true }, () => {
      setTimeout(() => {
        this.setState({ isLoading: false, hasServerResponded: true }, () => {
          // We make a fetch call and inform if it's a teacher user or a student user
          /*
              isTeacher ? '' : ''
          */

          // By the moment all this serverGoodResponse value is fake
          // then we'll have a response, wheter the confirmation was successful or not
          this.setState({ serverGoodResponse: false }, () => {
            if (this.state.serverGoodResponse) {
              this.setState({
                title: accountSuccessInfo.title,
                btnTitle: accountSuccessInfo.btnTitle,
                description: accountSuccessInfo.description
              });
            } else {
              this.setState({
                title: accountFailureInfo.title,
                btnTitle: accountFailureInfo.btnTitle,
                description: accountFailureInfo.description
              });
            }
          });
        });
      }, 2000);
    });
  };

  handleInput = e => {
    this.setState({ inputText: e.target.value }, () => {
      // Enabling the button if the email is valid
      const isValidEmail = emailRegEx.test(this.state.inputText);
      this.setState({ btnEnabled: isValidEmail });
    });
  };

  render() {
    const {
      isTeacher,
      title,
      isLoading,
      btnEnabled,
      btnTitle,
      inputText,
      hasServerResponded,
      description
    } = this.state;

    return (
      <>
        <ConfirmContainer title={title} loading={isLoading}>
          <Typography.Title type='secondary'>
            {isTeacher ? 'Profesor' : 'Alumno'}
          </Typography.Title>
          {!hasServerResponded && (
            <Input
              placeholder='Introduce de nuevo tu correo institucional uabc'
              prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Tooltip title='Se te solicita nuevamente tu correo por medidas de seguridad.'>
                  <Icon
                    type='info-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
              onChange={this.handleInput}
              value={inputText}
            />
          )}

          {hasServerResponded && <p>{description}</p>}
          <Button
            type='primary'
            disabled={!btnEnabled}
            style={{
              width: '25%',
              textAlign: 'center',
              margin: '16px'
            }}
            onClick={
              hasServerResponded ? this.handleClickRoute : this.handleClick
            }
          >
            {btnTitle}
          </Button>
        </ConfirmContainer>
      </>
    );
  }
}

export default ConfirmAccount;
