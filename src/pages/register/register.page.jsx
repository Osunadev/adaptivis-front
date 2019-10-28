import React, { Component } from 'react';

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

const users = ['desconocido', 'alumno', 'profesor'];
const parseTypeUser = typeUser => {
  switch (typeUser) {
    case 'alumno':
      return 1;
    case 'profesor':
      return 2;
    default:
      return 0;
  }
};

class NormalRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      typeUserId: 0
    };
  }

  componentDidMount() {
    this.setState({
      typeUserId: parseTypeUser(this.props.match.params.typeUser)
    });
  }

  handleSubmitStudent = e => {
    e.preventDefault();

    // The 'values' object contains all the values of the validated fields in our form
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // In this section we'll be making our fetch call to the server, whether we register
        // a student or a teacher
        console.log('Alumno', values);
      }
    });
  };

  handleSubmitTeacher = e => {
    e.preventDefault();

    // The 'values' object contains all the values of the validated fields in our form
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // In this section we'll be making our fetch call to the server, whether we register
        // a student or a teacher
        console.log('Profesor', values);
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
    const { isLoading, typeUserId } = this.state;

    return (
      typeUserId && (
        <ElementContainer title='Registro de cuenta'>
          <Form
            onSubmit={
              typeUserId === 1
                ? this.handleSubmitStudent
                : this.handleSubmitTeacher
            }
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

            {typeUserId === 1 && (
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
              {/* Falta validar que este en formato de numero */}
              {getFieldDecorator(
                typeUserId === 1 ? 'studentId' : 'employeeId',
                {
                  rules: [
                    ...basicRules('número de empleado'),
                    {
                      pattern: /\d/,
                      message: 'No introduzca texto, introduzca números'
                    }
                  ]
                }
              )(
                <Input
                  prefix={
                    <Icon type='number' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder={
                    typeUserId === 1
                      ? 'Matrícula de estudiante'
                      : 'Número de empleado'
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
                        8 characteres mínimo, 1 mayúscula, 1 minúscula y 1
                        número
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
              loading={this.state.isLoading}
              style={{ width: '100%', marginBottom: '2rem' }}
              size='large'
            >
              Crear cuenta de profesor
            </Button>
          </Form>
        </ElementContainer>
      )
    );
  }
}

const Register = Form.create({ name: 'normal_register' })(NormalRegisterForm);

export default Register;
