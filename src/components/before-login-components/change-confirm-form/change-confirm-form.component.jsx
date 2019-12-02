import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Input, Icon, Tooltip, Button } from 'antd';
import {
  emailRegEx,
  passwordRegEx
} from 'components/before-login-components/login-form/log-in.utils';

class ChangeConfirmForm extends Component {
  static propTypes = {
    formType: PropTypes.oneOf(['confirm-account', 'change-password'])
      .isRequired,
    onClickForm: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    const { formType } = props;

    this.state = {
      formType, // Could be 'change-password' or 'confirm-account'
      btnTitle:
        formType === 'change-password'
          ? 'Reestablecer contraseña'
          : 'Confirmación de cuenta',
      isBtnEnabled: false,
      inputEmail: '',
      isValidEmail: false,
      // Other state key-values to use when ChangeConfirmAccount components is used as a Confirm Account Utility
      inputPassword: '',
      isValidPassword: false,
      inputConfirmPassword: '',
      arePasswordsCorrect: false
    };
  }

  shouldBtnBeEnabled = () => {
    const { formType, isValidEmail, arePasswordsCorrect } = this.state;

    if (formType === 'change-password') {
      if (isValidEmail && arePasswordsCorrect)
        this.setState({ isBtnEnabled: true });
      else this.setState({ isBtnEnabled: false });
    } else if (formType === 'confirm-account') {
      if (isValidEmail) this.setState({ isBtnEnabled: true });
      else this.setState({ isBtnEnabled: false });
    }
  };

  handleEmailInput = e => {
    const emailInput = e.target.value;
    const validEmail = emailRegEx.test(emailInput);

    this.setState(
      {
        isValidEmail: validEmail,
        inputEmail: emailInput
      },
      () => this.shouldBtnBeEnabled()
    );
  };

  handlePasswordInput = e => {
    const { inputConfirmPassword } = this.state;

    const passwordInput = e.target.value;
    const validPassword = passwordRegEx.test(passwordInput);

    this.setState(
      {
        inputPassword: passwordInput,
        isValidPassword: validPassword,
        arePasswordsCorrect:
          validPassword && passwordInput === inputConfirmPassword
      },
      () => this.shouldBtnBeEnabled()
    );
  };

  handleConfirmPassword = e => {
    const { isValidPassword, inputPassword } = this.state;

    const passwordConfirmInput = e.target.value;

    // If isValidPassword=true we know that if passwordConfirmInput matches this.state.inputPassword
    // then, passwordConfirmInput follows the validation rule too

    this.setState(
      {
        inputConfirmPassword: passwordConfirmInput,
        arePasswordsCorrect:
          isValidPassword && passwordConfirmInput === inputPassword
      },
      () => this.shouldBtnBeEnabled()
    );
  };

  handleClick = () => {
    const { onClickForm } = this.props;
    const { inputEmail, inputPassword } = this.state;
    onClickForm(inputEmail, inputPassword);
  };

  render() {
    const {
      formType,
      isValidEmail,
      isValidPassword,
      arePasswordsCorrect,
      inputEmail,
      inputPassword,
      inputConfirmPassword,
      isBtnEnabled,
      btnTitle
    } = this.state;

    return (
      <>
        <Input
          placeholder='Introduce de nuevo tu correo institucional uabc'
          prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title='Se te solicita nuevamente tu correo por medidas de seguridad.'>
              <Icon type='info-circle' style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          addonBefore={
            <Tooltip
              placement='rightTop'
              title='Introduzca un correo uabc válido'
            >
              <Icon
                type='check-circle'
                theme='twoTone'
                twoToneColor={`${isValidEmail ? '#52c41a' : 'red'}`}
              />
            </Tooltip>
          }
          size='large'
          onChange={this.handleEmailInput}
          value={inputEmail}
          style={{ margin: '8px' }}
        />
        {/* Only rendering the Password Inputs when 'change-password' type is chosen */}
        {formType === 'change-password' && (
          <>
            <Input.Password
              placeholder='Introduce tu nueva contraseña (mínimo 8 caracteres)'
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              addonBefore={
                <Tooltip
                  placement='rightTop'
                  title='Clave de 8 caracteres de mínimo, 1 número, 1 letra mayúscula y una minúscula'
                >
                  <Icon
                    type='check-circle'
                    theme='twoTone'
                    twoToneColor={`${isValidPassword ? '#52c41a' : 'red'}`}
                  />
                </Tooltip>
              }
              size='large'
              onChange={this.handlePasswordInput}
              value={inputPassword}
              style={{ margin: '8px' }}
            />
            <Input.Password
              placeholder='Vuelve a introducir contraseña (mínimo 8 caracteres)'
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              addonBefore={
                <Tooltip
                  placement='rightTop'
                  title='Clave de 8 caracteres de mínimo, 1 número, 1 letra mayúscula y una minúscula'
                >
                  <Icon
                    type='check-circle'
                    theme='twoTone'
                    twoToneColor={`${arePasswordsCorrect ? '#52c41a' : 'red'}`}
                  />
                </Tooltip>
              }
              size='large'
              onChange={this.handleConfirmPassword}
              value={inputConfirmPassword}
              style={{ margin: '8px' }}
            />
          </>
        )}
        <Button
          type='primary'
          disabled={!isBtnEnabled}
          style={{
            width: '30%',
            textAlign: 'center',
            marginTop: '16px'
          }}
          onClick={this.handleClick}
        >
          {btnTitle}
        </Button>
      </>
    );
  }
}

export default ChangeConfirmForm;
