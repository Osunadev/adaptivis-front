import React, { Component } from 'react';

import { emailRegEx, passwordRegEx } from 'utils/account-regex';
import { VERIFICATION_TYPES } from 'components/general-use-components/withVerification/withVerification.data';

import { Button, Input, Tooltip, Icon } from 'antd';
import GeneralContainer from 'components/general-use-components/general-container/general-container.component';
import withVerification from 'components/general-use-components/withVerification/withVerification.component';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isValidEmail: false,
      password: '',
      isValidPassword: false,
      confirmPassword: '',
      arePasswordsCorrect: false,
      isBtnEnabled: false,
      formTitle: 'Cambiar Contraseña',
      btnTitle: 'Enviar'
    };
  }

  shouldBtnBeEnabled = () => {
    const { isValidEmail, arePasswordsCorrect } = this.state;

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

  handlePasswordInput = e => {
    const { confirmPassword } = this.state;

    const passwordInput = e.target.value;
    const validPassword = passwordRegEx.test(passwordInput);

    this.setState(
      {
        password: passwordInput,
        isValidPassword: validPassword,
        arePasswordsCorrect: validPassword && passwordInput === confirmPassword
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
        confirmPassword: passwordConfirmInput,
        arePasswordsCorrect:
          isValidPassword && passwordConfirmInput === inputPassword
      },
      () => this.shouldBtnBeEnabled()
    );
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
      arePasswordsCorrect,
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
          onChange={this.handlePasswordInput}
          value={password}
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
          value={confirmPassword}
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
