import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ElementContainer from 'components/element-container/element-container.component';
import {
  Modal,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Radio,
  Tooltip
} from 'antd';

import {
  teacherMsgs,
  studentMsgs,
  forgotPassMsgs,
  emailRegEx
} from 'components/login-form/log-in.utils';

class NormalLoginForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      isLoading: false,
      modalEmail: '',
      modalButtonEnabled: false,
      modalVisible: false,
      modalConfirmLoading: false
    };
  }

  // FORM HANDLERS
  handleSubmit = e => {
    e.preventDefault();

    // The 'values' object contains all the values of the validated fields in our form
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.userOption === 'alumno') {
          studentMsgs.success();
        } else {
          // profesor
          teacherMsgs.approvalPending();
        }
      }
    });
  };

  // MODAL HANDLERS
  handleModalEmail = e => {
    this.setState({ modalEmail: e.target.value }, () => {
      // Enabling the button if the email is valid
      const isValidEmail = emailRegEx.test(this.state.modalEmail);
      this.setState({ modalButtonEnabled: isValidEmail });
    });
  };

  handleModalOk = () => {
    this.setState({ modalConfirmLoading: true });

    // In this handler we'll be doing the fetch to de backend and waiting for the response
    setTimeout(() => {
      this.setState(
        { modalConfirmLoading: false, modalVisible: false, modalEmail: '' },
        () => forgotPassMsgs.emailSent()
      );
    }, 2000);
  };

  handleModalCancel = () => {
    this.setState({ modalVisible: false, modalEmail: '' });
  };

  handleForgotPass = () => {
    this.setState({ modalVisible: true });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      isLoading,
      modalVisible,
      modalConfirmLoading,
      modalEmail,
      modalButtonEnabled
    } = this.state;

    return (
      <>
        {modalVisible && (
          <Modal
            title='Reestablecer Contraseña'
            visible={modalVisible}
            onOk={this.handleModalOk}
            onCancel={this.handleModalCancel}
            confirmLoading={modalConfirmLoading}
            footer={[
              <Button key='back' onClick={this.handleModalCancel}>
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
                  <Icon
                    type='info-circle'
                    style={{ color: 'rgba(0,0,0,.45)' }}
                  />
                </Tooltip>
              }
              value={modalEmail}
              onChange={this.handleModalEmail}
            />
          </Modal>
        )}

        <ElementContainer title='Inicia Sesión' width='500px'>
          <Form onSubmit={this.handleSubmit} style={{ paddingTop: '2rem' }}>
            <Form.Item>
              {getFieldDecorator('userOption', {
                initialValue: 'alumno'
              })(
                <Radio.Group size='large'>
                  <Radio value='alumno'>Alumno</Radio>
                  <Radio value='profesor'>Profesor</Radio>
                </Radio.Group>
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@uabc.edu.mx$/,
                    message: '¡Correo uabc inválido!'
                  },
                  {
                    required: true,
                    message: 'Por favor introduzca un correo uabc válido'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='Correo institucional uabc'
                  allowClear
                  size='large'
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/,
                    message:
                      'Clave de 8 caracteres de mínimo, 1 número, 1 letra mayúscula y una minúscula'
                  },
                  {
                    required: true,
                    message: 'Por favor introduzca su contraseña'
                  }
                ]
              })(
                <Input.Password
                  prefix={
                    <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='Contraseña'
                  size='large'
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Recordarme</Checkbox>)}
              <span
                style={{ float: 'right', cursor: 'pointer', color: '#2A289A' }}
                onClick={this.handleForgotPass}
              >
                ¿Ha olvidado su contraseña?
              </span>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
                style={{ width: '100%', height: '34px' }}
              >
                Ingresar
              </Button>
              O <Link to='/registro'>Regístrarse</Link>
            </Form.Item>
          </Form>
        </ElementContainer>
      </>
    );
  }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);
