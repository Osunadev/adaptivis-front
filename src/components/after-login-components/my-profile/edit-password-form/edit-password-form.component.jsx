import React, { Component } from 'react';

import { Form, Input, Button, Icon } from 'antd';

import TitledWrapper from 'components/after-login-components/general/titled-wrapper/titled-wrapper.component';

import {
  FormContainer,
  DisplayRightContainer
} from './edit-password-form.styles';

class EditPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { validateFields, resetFields } = this.props.form;

    validateFields((err, values) => {
      if (!err) {
        // Here we make our fetch call
        const { password, confirmPassword } = values;
      }
    });
  };

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
    const { getFieldDecorator, resetFields } = this.props.form;
    const { isFetching } = this.state;

    return (
      <FormContainer>
        <TitledWrapper title='Cambiar contraseña' big>
          <Form
            style={{ marginTop: '16px' }}
            onSubmit={this.handleSubmit}
            hideRequiredMark
          >
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

            <DisplayRightContainer>
              <Button
                type='secondary'
                size='large'
                onClick={() => resetFields()}
              >
                Borrar cambios
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                loading={isFetching}
                size='large'
                style={{ marginLeft: '16px' }}
              >
                Aceptar
              </Button>
            </DisplayRightContainer>
          </Form>
        </TitledWrapper>
      </FormContainer>
    );
  }
}

export default Form.create({ name: 'edit-password-form' })(EditPasswordForm);
