import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd';
import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';
import ForgotPassModal from 'components/before-login-components/login/forgot-pass-modal/forgot-pass-modal.component';

class NormalLoginForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      isModalVisible: false,
      isFetching: false
    };
  }

  // FORM HANDLERS
  handleSubmit = e => {
    e.preventDefault();

    const { validateFields, resetFields } = this.props.form;

    // The 'values' object contains all the values of the validated fields in our form
    validateFields((err, values) => {
      if (!err) {
        const { email, password, userOption } = values;

        let logInEndpoint;
        if (userOption === 'alumno') {
          logInEndpoint =
            'http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/login/student';
        } else if (userOption === 'profesor') {
          logInEndpoint =
            'http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/login/professor';
        }

        this.setState({ isFetching: true });

        fetch(logInEndpoint, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password
          })
        })
          .then(res => res.json())
          .then(({ message }) => {
            // If there's a message about a wrong login
            resetFields();

            if (message) {
              this.setState({ isFetching: false });
            } else {
              // Saving token in Local Storage

              this.setState({ isFetching: false });
            }
          })
          .catch(error => {
            this.setState({ isFetching: false });
            console.log(error);
          });
      }
    });
  };

  handleForgotPass = () => {
    this.setState({ isModalVisible: true });
  };

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isFetching, isModalVisible } = this.state;

    return (
      <>
        {isModalVisible && <ForgotPassModal hideModal={this.hideModal} />}

        <GeneralContainer title='Inicia Sesión' width='500px'>
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
              {getFieldDecorator('rememberEmail', {
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
                loading={isFetching}
                style={{ width: '100%', height: '34px' }}
              >
                Ingresar
              </Button>
              O <Link to='/registro'>Regístrarse</Link>
            </Form.Item>
          </Form>
        </GeneralContainer>
      </>
    );
  }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm);
