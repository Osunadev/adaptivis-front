import React, { Component } from 'react';

import { Form, Button, Select, InputNumber, Cascader } from 'antd';

import ElementContainer from 'components/before-login-components/element-container/element-container.component';

import { basicRules, universities } from './demographic-form.data';

const { Option } = Select;

class DemographicQuestionsForm extends Component {
  state = {
    isFetching: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { validateFields, resetFields } = this.props.form;

    // We need to use the validateFields Method in order to show the wrong validated fields mesages
    validateFields((err, values) => {
      // If every field passes validations
      if (!err) {
        // Making our fetch request
        const { englishLevel, ethnicGroup, highSchoolGradYear } = values;
        const [university, campus] = values.universityCampus;

        this.setState({ isFetching: true });
        setTimeout(() => {
          this.setState({ isFetching: false });
        }, 2000);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <ElementContainer
        title='Información adicional para los cuestionarios'
        width='800px'
      >
        <div style={{ padding: '2rem 0' }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              colon={false}
              label={
                <span style={{ fontSize: '20px' }}>
                  ¿Cuál consideras que es tu nivel de inglés?
                </span>
              }
            >
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

            <Form.Item
              colon={false}
              label={
                <span style={{ fontSize: '20px' }}>
                  ¿Cuál es tu background étnico?
                </span>
              }
            >
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
              colon={false}
              label={
                <span style={{ fontSize: '20px' }}>
                  ¿En qué año te graduaste de la preparatoria?
                </span>
              }
            >
              {getFieldDecorator('highSchoolGradYear', {
                rules: [
                  {
                    required: true,
                    message:
                      'Por favor introduzca su año de graduación de la preparatoria.'
                  }
                ],

                initialValue: 2016
              })(<InputNumber min={2000} max={2100} size='large' />)}
            </Form.Item>

            <Form.Item
              colon={false}
              label={
                <span style={{ fontSize: '20px' }}>
                  ¿A qué Universidad/Campus perteneces?
                </span>
              }
            >
              {getFieldDecorator('universityCampus', {
                initialValue: ['UABC', 'OTAY'],
                rules: [
                  {
                    type: 'array',
                    required: true,
                    message: 'Please select your habitual residence!'
                  },
                  {
                    required: true,
                    message:
                      'Por favor seleccione la unversidad y campus al que pertenece.'
                  }
                ]
              })(<Cascader options={universities} />)}
            </Form.Item>

            <Button
              type='primary'
              htmlType='submit'
              size='large'
              style={{ width: '100%', height: '40px' }}
            >
              Enviar respuestas
            </Button>
          </Form>
        </div>
      </ElementContainer>
    );
  }
}

const DemographicForm = Form.create({ name: 'demografphic_form' })(
  DemographicQuestionsForm
);

export default DemographicForm;