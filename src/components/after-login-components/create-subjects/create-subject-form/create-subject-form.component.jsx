import React, { Component } from 'react';

import { Form, Input, Button, Select, Radio } from 'antd';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';

import { FormContainer } from 'components/after-login-components/my-profile/edit-info-form/edit-info-form.styles';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 }
};

const basicRules = requiredMsg => [
  {
    whitespace: true,
    message: 'No introduzca espacios en blanco.'
  },
  {
    required: true,
    message: `Por favor introduzca ${requiredMsg}.`
  }
];

class CreateSubjectForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const { validateFields } = this.props.form;

    // The 'values' object contains all the values of the validated fields in our form
    validateFields(async (err, values) => {
      if (!err) {
        const { studyPeriod, studyYear, ...valuesToBeSent } = values;
        const study_plan = `${studyYear}-${studyPeriod}`;

        valuesToBeSent.study_plan = study_plan;

        console.log(valuesToBeSent);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <FormContainer>
        <TitledWrapper title='Crear Materia' big>
          <Form
            {...formItemLayout}
            style={{ marginTop: '32px' }}
            onSubmit={this.handleSubmit}
            hideRequiredMark
            colon={false}
          >
            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Clave</span>}
              labelAlign='left'
            >
              {getFieldDecorator('subject_code', {
                rules: [
                  ...basicRules('el código identificador de la materia'),
                  {
                    pattern: /^[0-9]+$/,
                    message: 'No introduzca texto, introduzca números'
                  }
                ]
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Nombre</span>}
              labelAlign='left'
            >
              {getFieldDecorator('subject_name', {
                rules: basicRules('el nombre de la materia')
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Carrera</span>}
              help='Nombre de la carrera a la que pertenece la materia'
              labelAlign='left'
            >
              {getFieldDecorator('career', {
                rules: basicRules('el nombre de la carrera.')
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Etapa</span>}
              help='Etapa a la que pertenece la materia a registrar.'
              labelAlign='left'
            >
              {getFieldDecorator('stage', {
                rules: basicRules('la etapa de la materia.')
              })(
                <Select size='large'>
                  <Option value='basica'>Básica</Option>
                  <Option value='disciplinaria'>Disciplinaria</Option>
                  <Option value='terminal'>Terminal</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Tipo</span>}
              help='Tipo de la materia a registrar.'
              labelAlign='left'
            >
              {getFieldDecorator('caracter', {
                rules: basicRules('la carrera a la que pertenece la materia.')
              })(
                <Select size='large'>
                  <Option value='obligatoria'>Obligatoria</Option>
                  <Option value='opativa'>Optativa</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Plan</span>}
              labelAlign='left'
            >
              <Form.Item
                label='Año del plan de estudios'
                style={{ display: 'inline-block', width: '50%' }}
              >
                {getFieldDecorator('studyYear', {
                  rules: basicRules('el año del plan de estudios')
                })(<Input size='large' type='number' />)}
              </Form.Item>

              <Form.Item
                label='Periodo del plan de estudios'
                style={{
                  display: 'inline-block',
                  width: '40%',
                  marginLeft: '16px'
                }}
              >
                {getFieldDecorator('studyPeriod', {
                  rules: basicRules('el periodo del plan de estudios')
                })(
                  <Radio.Group size='large'>
                    <Radio.Button value='1'>Semestre 1</Radio.Button>
                    <Radio.Button value='2'>Semestre 2</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
            </Form.Item>

            <Form.Item
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18, offset: 5 }}
            >
              <Button
                size='large'
                type='secondary'
                onClick={() => this.props.form.resetFields()}
                style={{ marginRight: '8px' }}
              >
                Borrar Cambios
              </Button>

              <Button
                size='large'
                type='primary'
                htmlType='submit'
                loading={false}
              >
                Crear Materia
              </Button>
            </Form.Item>
          </Form>
        </TitledWrapper>
      </FormContainer>
    );
  }
}

export default Form.create({ name: 'create-subject-form' })(CreateSubjectForm);
