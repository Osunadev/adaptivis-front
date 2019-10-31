import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ElementContainer from 'components/element-container/element-container.component';
import { Form, Icon, Input, Button, Radio, DatePicker } from 'antd';

const basicRules = requiredMsg => [
  {
    whitespace: true,
    message: 'Campo vacío, no introduzca espacios en blanco.'
  },
  {
    required: true,
    message: `Por favor introduzca su ${requiredMsg}.`
  }
];

class NormalRegisterForm extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    // It could be /registro/alumno or /registro/profesor
    const { path } = props.match;

    this.state = {
      isLoading: false,
      isTeacher: path === '/registro/profesor'
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { validateFields } = this.props.form;
    const { isTeacher } = this.state;

    // The 'values' object contains all the values of the validated fields in our form
    validateFields((err, values) => {
      if (!err) {
        // In this section we'll be making our fetch call to the server, whether we register
        // a student or a teacher
        console.log(isTeacher ? 'Profesor' : 'Alumno', values);
      }
    });
  };

  // These are custom validators to validate if passwords are the same
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;

    // If the confirmation password doesn't match with the first password
    if (value && value !== form.getFieldValue('password')) {
      callback('¡Las dos contraseñas no son iguales, verifícalas!');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoading, isTeacher } = this.state;

    return (
      <ElementContainer title='Registro de cuenta'>
        <Form
          onSubmit={this.handleSubmit}
          hideRequiredMark
          style={{ paddingTop: '2rem' }}
          layout='horizontal'
        >
          <Form.Item>
            {getFieldDecorator('firstName', {
              rules: basicRules('nombre')
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Nombre(s)'
                size='large'
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('firstLastName', {
              rules: basicRules('apellido paterno')
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Apellido Paterno'
                size='large'
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('secondLastName', {
              rules: basicRules('apellido materno')
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Apellido Materno'
                size='large'
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('userOption', {
              rules: [
                {
                  required: true,
                  message: 'Por favor seleccione alguna opción'
                }
              ]
            })(
              <Radio.Group size='large'>
                <Radio value='woman'>Mujer</Radio>
                <Radio value='man'>Hombre</Radio>
                <Radio value='none'>Prefiero no responder</Radio>
              </Radio.Group>
            )}
          </Form.Item>

          {// it only renders if it's we're in the student register form
          !isTeacher && (
            <Form.Item>
              {getFieldDecorator('birthDay', {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: 'Por favor introduce tu fecha de nacimiento'
                  }
                ]
              })(
                <DatePicker
                  format='YYYY-MM-DD'
                  size='large'
                  placeholder='Fecha de nacimiento'
                  style={{ width: '100%' }}
                />
              )}
            </Form.Item>
          )}

          <Form.Item>
            {getFieldDecorator(isTeacher ? 'employeeId' : 'studentId', {
              rules: [
                ...basicRules(
                  `${
                    isTeacher ? 'número de empleado' : 'matrícula estudiantil'
                  }`
                ),
                {
                  pattern: /\d/,
                  message: 'No introduzca texto, introduzca números'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type='number' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder={
                  isTeacher ? 'Número de empleado' : 'Matrícula de estudiante'
                }
                allowClear
                size='large'
              />
            )}
          </Form.Item>

          <Form.Item hasFeedback>
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
                size='large'
              />
            )}
          </Form.Item>

          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/,
                  message:
                    '8 characteres mínimo, 1 mayúscula, 1 minúscula y 1 número'
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

          <Form.Item hasFeedback>
            {getFieldDecorator('confirmPassword', {
              rules: [
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/,
                  message: (
                    <div>
                      8 characteres mínimo, 1 mayúscula, 1 minúscula y 1 número
                    </div>
                  )
                },
                {
                  required: true,
                  message: 'Por favor introduzca su contraseña'
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input.Password
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Confirmar contraseña'
                size='large'
              />
            )}
          </Form.Item>

          <Button
            type='primary'
            htmlType='submit'
            loading={isLoading}
            style={{ width: '100%', marginBottom: '2rem' }}
            size='large'
          >
            {`Crear cuenta de ${isTeacher ? 'profesor' : 'estudiante'}`}
          </Button>
        </Form>
      </ElementContainer>
    );
  }
}

const Register = Form.create({ name: 'normal_register' })(NormalRegisterForm);

export default Register;
