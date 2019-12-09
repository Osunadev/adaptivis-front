import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
  Form,
  Input,
  Radio,
  Cascader,
  InputNumber,
  Select,
  Button
} from 'antd';

import TitledWrapper from 'components/after-login-components/general/titled-wrapper/titled-wrapper.component';

import { universities, studies } from './edit-info-form.data';

import { FormContainer, DisplayInOneRow } from './edit-info-form.styles';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 15 }
};

const customItemLayout = (labelSpan, itemSpan) => ({
  labelCol: { span: labelSpan },
  wrapperCol: { span: itemSpan },
  labelAlign: 'left',
  style: { width: '50%' }
});

const basicRules = requiredMsg => [
  {
    whitespace: true,
    message: 'No introduzca espacios en blanco.'
  },
  {
    required: true,
    message: `Por favor introduzca su ${requiredMsg}.`
  }
];

const spaceRules = [
  {
    whitespace: true,
    message: 'No introduzca espacios en blanco.'
  }
];

const mapTypeUser = user => {
  switch (user) {
    case 'alumno':
    case 'profesor':
    case 'administrador':
      return user;
    default:
      return 'alumno';
  }
};

class EditInfoForm extends Component {
  constructor(props) {
    super(props);

    const { user } = props;

    this.state = {
      isFetching: false,
      typeUser: mapTypeUser(user)
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { isFetching, typeUser } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <FormContainer>
        <TitledWrapper title='Editar mi Información' big>
          <Form
            {...formItemLayout}
            style={{ marginTop: '32px' }}
            onSubmit={this.handleSubmit}
          >
            {/* Personal Information Form Items */}
            <DisplayInOneRow>
              <Form.Item label='Primer Nombre' {...customItemLayout(9, 13)}>
                {getFieldDecorator('firstName', {
                  rules: basicRules('nombre')
                })(<Input size='large' />)}
              </Form.Item>

              <Form.Item label='Segundo Nombre' {...customItemLayout(9, 13)}>
                {getFieldDecorator('secondName', { rules: spaceRules })(
                  <Input size='large' />
                )}
              </Form.Item>
            </DisplayInOneRow>

            <DisplayInOneRow>
              <Form.Item label='Apellido Nombre' {...customItemLayout(9, 13)}>
                {getFieldDecorator('middleName', {
                  rules: basicRules('apellido paterno')
                })(<Input size='large' />)}
              </Form.Item>

              <Form.Item label='Apellido Materno' {...customItemLayout(9, 13)}>
                {getFieldDecorator('lastName', {
                  rules: basicRules('apellido materno')
                })(<Input size='large' />)}
              </Form.Item>
            </DisplayInOneRow>

            <Form.Item label='Género' labelAlign='left'>
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

            <Form.Item label='Matrícula' labelAlign='left'>
              {getFieldDecorator('studentId', {
                rules: [
                  ...basicRules('matrícula'),
                  {
                    pattern: /\d/,
                    message: 'No introduzca texto, introduzca números'
                  }
                ]
              })(<Input size='large' />)}
            </Form.Item>

            {typeUser === 'alumno' && (
              <>
                <p
                  style={{
                    fontSize: '16px',
                    textDecoration: 'underline',
                    marginBottom: '32px'
                  }}
                >
                  Información adicional para contestar cuestionarios
                </p>

                {/* Demographic Information Form Items */}
                <Form.Item label='Nivel de inglés' labelAlign='left'>
                  {getFieldDecorator('englishLevel', {
                    rules: basicRules('nivel de ingles')
                  })(
                    <Select
                      placeholder='Selecciona tu nivel de inglés'
                      size='large'
                    >
                      <Option value='C2'>Muy Competente (C2)</Option>
                      <Option value='C1'>Avanzado (C1)</Option>
                      <Option value='B2'>Intermedio Superior (B2)</Option>
                      <Option value='B1'>Intermedio (B1)</Option>
                      <Option value='A2'>Elemental (A2)</Option>
                      <Option value='A1'>Principiante (A1)</Option>
                      <Option value='N/A'>Nada</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item label='Background étnico' labelAlign='left'>
                  {getFieldDecorator('ethnicGroup', {
                    rules: basicRules('origen étnico')
                  })(
                    <Select
                      placeholder='Selecciona al grupo étnico al que perteneces'
                      size='large'
                    >
                      <Option value='E.U.A.'>E.U.A.</Option>
                      <Option value='Hispano'>Hispano</Option>
                      <Option value='Afroamericano'>Afroamericano</Option>
                      <Option value='Otro'>Otro</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item
                  label='Graducación de preparatoria'
                  labelAlign='left'
                >
                  {getFieldDecorator('highSchoolGradYear', {
                    rules: [
                      {
                        required: true,
                        message:
                          'Por favor introduzca su año de graduación de la preparatoria.'
                      }
                    ]
                  })(<InputNumber min={2000} max={2025} size='large' />)}
                </Form.Item>

                <Form.Item label='Universidad/Campus' labelAlign='left'>
                  {getFieldDecorator('univCampus', {
                    // initialValue: ['UABC', 'OTAY'],
                    rules: [
                      {
                        type: 'array',
                        required: true,
                        message: 'Por favor selecciona una universidad y campus'
                      },
                      {
                        required: true,
                        message:
                          'Por favor seleccione la unversidad y campus al que pertenece.'
                      }
                    ]
                  })(
                    <Cascader
                      options={universities}
                      placeholder='Selecciona tu Universidad y Campus'
                      size='large'
                    />
                  )}
                </Form.Item>

                <Form.Item label='Carrera actual' labelAlign='left'>
                  {getFieldDecorator('univStudies', {
                    // initialValue: ['INGENIERÍA', 'COMPUTACIÓN'],
                    rules: [
                      {
                        type: 'array',
                        required: true,
                        message: 'Please select your habitual residence!'
                      },
                      {
                        required: true,
                        message:
                          'Por favor seleccione la carrera que esté estudiando.'
                      }
                    ]
                  })(
                    <Cascader
                      placeholder='Selecciona tu carrera actual'
                      options={studies}
                      size='large'
                    />
                  )}
                </Form.Item>

                <DisplayInOneRow>
                  <Form.Item
                    label='Año de ingreso universidad'
                    {...customItemLayout(16, 8)}
                  >
                    {getFieldDecorator('univJoinYear', {
                      rules: [
                        {
                          required: true,
                          message:
                            'Por favor introduzca su año ingreso a la universidad.'
                        }
                      ]
                    })(<InputNumber min={2000} max={2025} size='large' />)}
                  </Form.Item>

                  <Form.Item label='Periodo' {...customItemLayout(12, 12)}>
                    {getFieldDecorator('univJoinPeriod', {
                      rules: [
                        {
                          required: true,
                          message:
                            'Por favor seleccione el periodo en el que entró a la universidad.'
                        }
                      ]
                    })(
                      <Radio.Group>
                        <Radio value='1'>1</Radio>
                        <Radio value='2'>2</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </DisplayInOneRow>
              </>
            )}

            <DisplayInOneRow style={{ justifyContent: 'flex-end' }}>
              <Link to='/alumno/perfil'>
                <Button type='secondary' size='large'>
                  Cancelar
                </Button>
              </Link>

              <Button
                type='primary'
                htmlType='submit'
                loading={false}
                size='large'
                style={{ margin: '0 32px 0 16px' }}
              >
                Guardar
              </Button>
            </DisplayInOneRow>
          </Form>
        </TitledWrapper>
      </FormContainer>
    );
  }
}

export default Form.create({ name: 'edit-info-form' })(EditInfoForm);
