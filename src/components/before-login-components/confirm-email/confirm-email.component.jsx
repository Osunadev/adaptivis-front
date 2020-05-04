import React, { Component } from 'react';

import { emailRegEx } from 'utils/account-regex';
import { VERIFICATION_TYPES } from 'components/general-use-components/withVerification/withVerification.data';

import { Button, Input, Tooltip, Icon } from 'antd';
import GeneralContainer from 'components/general-use-components/general-container/general-container.component';
import withVerification from 'components/general-use-components/withVerification/withVerification.component';

class ConfirmEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isValidEmail: false,
      formTitle: 'Confirmación de Cuenta',
      btnTitle: 'Enviar'
    };
  }

  handleEmailInput = e => {
    const emailInput = e.target.value;
    const validEmail = emailRegEx.test(emailInput);

    this.setState({
      isValidEmail: validEmail,
      email: emailInput
    });
  };

  render() {
    const { email, isValidEmail, formTitle, btnTitle } = this.state;
    const { handleFormSend } = this.props;

    return (
      <GeneralContainer width='700px' height='220px' title={formTitle} rounded>
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
        <Button
          type='primary'
          disabled={!isValidEmail}
          style={{
            width: '30%',
            textAlign: 'center',
            marginTop: '16px'
          }}
          onClick={() => handleFormSend({ email })}
        >
          {btnTitle}
        </Button>
      </GeneralContainer>
    );
  }
}

export default withVerification(ConfirmEmail, VERIFICATION_TYPES.CONFIRM_EMAIL);
