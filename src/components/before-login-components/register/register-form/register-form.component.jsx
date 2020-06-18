import React, { Component } from 'react';

import { easyFetch } from 'utils/requests/requests-utils';
import { passwordRegEx, schoolEmailRegEx } from 'data/users/account-regex.data';

import PropTypes from 'prop-types';
import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';
import LoadingWrapper from 'components/general-use-components/loading-wrapper/loading-wrapper.component';
import {
  Form,
  Icon,
  Input,
  Button,
  Radio,
  DatePicker,
  Modal,
  Cascader
} from 'antd';
import UNIVERSITIES from 'data/universities/universities.data';

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
      isTeacher: path === '/registro/profesor',
      schoolDomain: undefined
    };
  }

  checkResponseStatus = responseObj => {
    const { resetFields } = this.props.form;

    this.setState({ isLoading: false }, () => {
      if (!responseObj.error) {
        if (responseObj.status >= 200 && responseObj.status < 300) {
          Modal.success({
            title: 'Usuario creado exitosamente',
            content: responseObj.body.message
          });
        } else if (responseObj.status >= 400 && responseObj.status < 500) {
          Modal.error({
            title: 'Error al registrar usuario',
            content: responseObj.body.message
          });
        }

        resetFields();
      } else {
        Modal.error({
          title: '¡Error de conexión!',
          content:
            'No pudimos contectarnos con el servidor, por favor revisa tu conexión a internet.'
        });
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { validateFields } = this.props.form;
    const { isTeacher } = this.state;

    // The 'values' object contains all the values of the validated fields in our form
    validateFields(async (err, values) => {
      // If every field passes the validations
      if (!err) {
        const {
          birthDay,
          studentId,
          employeeId,
          univCascader,
          ...generalValues
        } = values;

        // We only care about the college code
        const college = univCascader[1];

        const userSpecificValues = {};
        if (isTeacher) {
          userSpecificValues.employeeId = employeeId;
        } else {
          userSpecificValues.studentId = studentId;
          userSpecificValues.birthDay = birthDay.format('YYYY-MM-DD');
        }

        this.setState({ isLoading: true });

        const customFetch = easyFetch('post', false);
        const responseObj = await customFetch(
          isTeacher ? 'professor' : 'student',
          { ...generalValues, ...userSpecificValues, college }
        );

        this.checkResponseStatus(responseObj);
      }
    });
  };

  updateSchoolDomain = univCascader => {
    const schoolDomain = univCascader[0];

    this.setState({ schoolDomain }, () => {
      const { setFieldsValue } = this.props.form;
      // Clearing the email field
      setFieldsValue({ email: '' });
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
    const { isLoading, isTeacher, schoolDomain } = this.state;

    return (
      <LoadingWrapper isLoading={isLoading} title='Registrando usuario' large>
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

            <Form.Item>
              {getFieldDecorator('univCascader', {
                rules: [
                  {
                    required: true,
                    message:
                      'Seleccione su universidad para poder introducir su correo.'
                  }
                ]
              })(
                <Cascader
                  placeholder='Seleccione la universidad a la que pertenece'
                  options={UNIVERSITIES}
                  size='large'
                  onChange={this.updateSchoolDomain}
                />
              )}
            </Form.Item>

            <Form.Item hasFeedback>
              {getFieldDecorator('email', {
                rules: [
                  {
                    pattern: schoolEmailRegEx(schoolDomain),
                    message: `Correo inválido, debe ser dominio ${schoolDomain}`
                  },
                  {
                    required: true,
                    message: 'Por favor introduzca un correo válido'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder='Correo institucional universitario'
                  size='large'
                  disabled={!schoolDomain}
                />
              )}
            </Form.Item>

            <Form.Item hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    pattern: passwordRegEx,
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
                    pattern: passwordRegEx,
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
              style={{ width: '100%', marginBottom: '2rem' }}
              size='large'
            >
              {`Crear cuenta de ${isTeacher ? 'profesor' : 'estudiante'}`}
            </Button>
          </Form>
        </GeneralContainer>
      </LoadingWrapper>
    );
  }
}

const RegisterForm = Form.create({ name: 'normal_register' })(
  NormalRegisterForm
);

export default RegisterForm;
