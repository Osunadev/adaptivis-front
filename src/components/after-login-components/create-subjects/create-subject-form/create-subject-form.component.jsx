import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Form, Input, Radio, Cascader, Select, Button } from 'antd';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';

import {
  universities,
  studies
} from 'components/after-login-components/my-profile/edit-info-form/edit-info-form.data';

import {
  FormContainer,
  DisplayInOneRow
} from 'components/after-login-components/my-profile/edit-info-form/edit-info-form.styles';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
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

class CreateSubjectForm extends Component {
  constructor(props) {
    super(props);

    const { user } = props;

    this.state = {
      isFetching: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { isFetching } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <FormContainer>
        <TitledWrapper title='Editar mi Información' big>
          <Form
            {...formItemLayout}
            style={{ marginTop: '32px' }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item label='Clave' labelAlign='left'>
              {getFieldDecorator('subjectId', {
                rules: [
                  ...basicRules('matrícula'),
                  {
                    pattern: /\d/,
                    message: 'No introduzca texto, introduzca números'
                  }
                ]
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item label='Nombre' labelAlign='left'>
              {getFieldDecorator('name', {
                rules: basicRules('apellido paterno')
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item label='Universidad/Campus' labelAlign='left'>
              {getFieldDecorator('univCampus', {
                initialValue: ['UABC', 'OTAY'],
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
                initialValue: ['INGENIERÍA', 'COMPUTACIÓN'],
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

export default Form.create({ name: 'create-subject-form' })(CreateSubjectForm);
