import React, { Component } from 'react';

import PropTypes from 'prop-types';
import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';
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

    const { validateFields, resetFields } = this.props.form;
    const { isTeacher } = this.state;

    // The 'values' object contains all the values of the validated fields in our form
    validateFields((err, values) => {
      if (!err) {
        // If every field passes the validations
        const {
          firstName,
          secondName,
          middleName,
          lastName,
          gender,
          email,
          password
        } = values;

        if (isTeacher) {
          const urlTeacherEndpoint =
            'http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/register/professor';
          const { professorId } = values;

          this.setState({ isLoading: false });

          fetch(urlTeacherEndpoint, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName,
              secondName,
              middleName,
              lastName,
              gender,
              email,
              password,
              professorId
            })
          })
            .then(response => response.json())
            .then(registerMsg => {
              console.log(registerMsg);
              this.setState({ isLoading: false });
              alert(registerMsg);
              resetFields();
            })
            .catch(error => {
              this.setState({ isLoading: false });
              console.log(error);
            });
        } else {
          const { studentId } = values;
          const birthDay = values.birthDay.format('YYYY-MM-DD');

          const urlStudentEndpoint =
            'http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/register/student';

          fetch(urlStudentEndpoint, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName,
              secondName,
              middleName,
              lastName,
              birthDay,
              gender,
              email,
              password,
              studentId
            })
          })
            .then(response => response.json())
            .then(registerMsg => {
              console.log(registerMsg);
              resetFields();
            })
            .catch(error => console.log(error));
        }
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
      <GeneralContainer title='Registro de cuenta'>
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
                placeholder='Primer Nombre'
                size='large'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('secondName', {
              rules: [
                {
                  whitespace: true,
                  message: 'Campo vacío, no introduzca espacios en blanco.'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Segundo Nombre'
                size='large'
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('middleName', {
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
            {getFieldDecorator('lastName', {
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
            {getFieldDecorator('gender', {
              rules: [
                {
                  required: true,
                  message: 'Por favor seleccione alguna opción'
                }
              ]
            })(
              <Radio.Group size='large'>
                <Radio value='M'>Mujer</Radio>
                <Radio value='F'>Hombre</Radio>
                <Radio value='null'>Prefiero no responder</Radio>
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
            {getFieldDecorator(isTeacher ? 'professorId' : 'studentId', {
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

          <Form.Item hasFeedback>
            {getFieldDecorator('confirmPassword', {
              rules: [
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/,
                  message:
                    'Clave de 8 caracteres de mínimo, 1 número, 1 letra mayúscula y una minúscula'
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
      </GeneralContainer>
    );
  }
}

const RegisterForm = Form.create({ name: 'normal_register' })(
  NormalRegisterForm
);

export default RegisterForm;
