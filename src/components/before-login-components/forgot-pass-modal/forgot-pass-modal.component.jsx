import React, { Component } from 'react';

import { Modal, Button, Input, Icon, Tooltip } from 'antd';

import {
  teacherMsgs,
  studentMsgs,
  forgotPassMsgs,
  emailRegEx
} from 'components/before-login-components/login-form/log-in.utils';

class ForgotPassModal extends Component {
  constructor() {
    super();

    this.state = {
      modalConfirmLoading: false,
      modalButtonEnabled: false,
      modalEmail: ''
    };
  }

  // MODAL HANDLERS
  handleModalEmail = e => {
    const email = e.target.value;

    this.setState({ modalEmail: email }, () => {
      this.setState(prevState => {
        // Enabling the button if the email is valid
        const { modalEmail } = prevState;
        const isValidEmail = emailRegEx.test(modalEmail);

        return { modalButtonEnabled: isValidEmail };
      });
    });
  };

  handleModalOk = () => {
    this.setState({ modalConfirmLoading: true });

    // In this handler we'll be doing the fetch to de backend and waiting for the response
    setTimeout(() => {
      this.setState({ modalConfirmLoading: false, modalEmail: '' }, () => {
        forgotPassMsgs.emailSent();

        const { hideModal } = this.props;
        hideModal();
      });
    }, 2000);
  };

  render() {
    const { modalConfirmLoading, modalButtonEnabled, modalEmail } = this.state;

    const { hideModal } = this.props;

    return (
      <Modal
        title='Reestablecer Contraseña'
        visible
        onOk={this.handleModalOk}
        onCancel={hideModal}
        confirmLoading={modalConfirmLoading}
        footer={[
          <Button key='back' onClick={hideModal}>
            Regresar
          </Button>,
          <Button
            disabled={!modalButtonEnabled}
            key='submit'
            type='primary'
            loading={modalConfirmLoading}
            onClick={this.handleModalOk}
          >
            Enviar correo de verificación
          </Button>
        ]}
      >
        <p>Introduce tu correo:</p>
        <Input
          placeholder='Correo institucional uabc'
          prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title='Debe ser un correo válido con dominio uabc.edu.mx'>
              <Icon type='info-circle' style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={this.handleModalEmail}
          value={modalEmail}
        />
      </Modal>
    );
  }
}

export default ForgotPassModal;
