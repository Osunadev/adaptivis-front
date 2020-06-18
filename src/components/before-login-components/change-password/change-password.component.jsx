import React, { Component } from 'react';

import { emailRegEx, passwordRegEx } from 'data/users/account-regex.data';
import { VERIFICATION_TYPES } from 'components/before-login-components/general-purpose/with-verification/with-verification.data';

import { Button, Input, Tooltip, Icon } from 'antd';
import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';
import withVerification from 'components/before-login-components/general-purpose/with-verification/with-verification.component';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isValidEmail: false,
      password: '',
      isValidPassword: false,
      confirmPassword: '',
      isValidConfirmPassword: false,
      isBtnEnabled: false,
      formTitle: 'Cambiar Contraseña',
      btnTitle: 'Enviar'
    };
  }

  shouldBtnBeEnabled = () => {
    const {
      isValidEmail,
      isValidPassword,
      password,
      confirmPassword
    } = this.state;

    const arePasswordsCorrect = isValidPassword && password === confirmPassword;

    const enableBtn = isValidEmail && arePasswordsCorrect;

    this.setState({ isBtnEnabled: enableBtn });
  };

  handleEmailInput = e => {
    const email = e.target.value;
    const validEmail = emailRegEx.test(email);

    this.setState(
      {
        isValidEmail: validEmail,
        email
      },
      () => this.shouldBtnBeEnabled()
    );
  };

  handlePassword = e => {
    const input = e.target.value;
    const inputName = e.target.name;

    const validPassword = passwordRegEx.test(input);

    // Making the inputName Capitalized only the first letter, to match the state key name
    const isValid = `isValid${inputName
      .charAt(0)
      .toUpperCase()}${inputName.slice(1)}`;

    const statePortion = {
      [inputName]: input,
      [isValid]: validPassword
    };

    this.setState(statePortion, () => this.shouldBtnBeEnabled());
  };

  render() {
    const {
      email,
      isValidEmail,
      formTitle,
      btnTitle,
      password,
      isValidPassword,
      confirmPassword,
      isValidConfirmPassword,
      isBtnEnabled
    } = this.state;
    const { handleFormSend } = this.props;

    return (
      <GeneralContainer width='750px' height='300px' title={formTitle} rounded>
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
          value={email}
          style={{ margin: '8px' }}
        />
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
          onChange={this.handlePassword}
          value={password}
          name='password'
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
                twoToneColor={`${isValidConfirmPassword ? '#52c41a' : 'red'}`}
              />
            </Tooltip>
          }
          size='large'
          onChange={this.handlePassword}
          value={confirmPassword}
          name='confirmPassword'
          style={{ margin: '8px' }}
        />
        <Button
          type='primary'
          disabled={!isBtnEnabled}
          style={{
            width: '30%',
            textAlign: 'center',
            marginTop: '16px'
          }}
          onClick={() => handleFormSend({ email, password })}
        >
          {btnTitle}
        </Button>
      </GeneralContainer>
    );
  }
}

export default withVerification(
  ChangePassword,
  VERIFICATION_TYPES.CHANGE_PASSWORD
);
