import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Form, Icon, Input, Button, Alert } from 'antd';
import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';
import ForgotPassModal from 'components/before-login-components/login/forgot-pass-modal/forgot-pass-modal.component';

import { easyFetch } from 'utils/requests/requests-utils';
import { getUserFromToken, saveTokenInStorage } from 'utils/tokens/jwt-utils';
import { emailRegEx } from 'data/users/account-regex';
import { setCurrentUser } from 'redux/user-auth/user-auth.actions';

class NormalLoginForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      isModalVisible: false,
      isFetching: false,
      errorTitle: undefined,
      errorMsg: undefined,
      hasError: false
    };
  }

  // FORM HANDLERS
  handleSubmit = e => {
    e.preventDefault();

    const { validateFields } = this.props.form;

    // The 'values' object contains all the values of the validated fields in our form
    validateFields(async (err, values) => {
      if (!err) {
        const { email, password } = values;
        const { setUser } = this.props;

        this.setState({ isFetching: true });

        const customFetch = easyFetch('post', false);
        const responseObj = await customFetch('login', { email, password });

        if (!responseObj.error) {
          if (responseObj.status >= 200 && responseObj.status < 300) {
            const {
              access_token: { access_token },
              refresh_token: { refresh_token }
            } = responseObj.body;

            saveTokenInStorage(access_token, 'local', 'accessToken');
            saveTokenInStorage(refresh_token, 'local', 'refreshToken');

            const user = getUserFromToken(access_token);
            setUser(user);
          } else if (responseObj.status >= 400 && responseObj.status < 500) {
            const { message } = responseObj.body;

            this.setState({
              isFetching: false,
              errorTitle: 'Fallo de inicio de sesión',
              errorMsg: message,
              hasError: true
            });
          }
        } else {
          this.setState({
            isFetching: false,
            errorTitle: 'Lo sentimos, fallo de inicio de sesión',
            errorMsg: 'Por favor revisa tu conexión a Internet.',
            hasError: true
          });
        }
      }
    });
  };

  closeErrorAlert = e => {
    this.setState({
      hasError: false,
      errorTitle: undefined,
      errorMsg: undefined
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
    const {
      isFetching,
      isModalVisible,
      errorTitle,
      errorMsg,
      hasError
    } = this.state;
    return (
      <>
        {isModalVisible && <ForgotPassModal hideModal={this.hideModal} />}

        <GeneralContainer title='Inicia Sesión' width='500px'>
          {hasError && (
            <Alert
              message={errorTitle}
              description={errorMsg}
              type='error'
              closable
              showIcon
              banner
              style={{ marginTop: '32px' }}
              afterClose={this.closeErrorAlert}
            />
          )}

          <Form onSubmit={this.handleSubmit} style={{ paddingTop: '2rem' }}>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    pattern: emailRegEx,
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
            <Form.Item style={{ margin: '0px' }}>
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
              <span
                style={{
                  float: 'right',
                  cursor: 'pointer',
                  color: '#2A289A',
                  marginBottom: '16px'
                }}
                onClick={this.handleForgotPass}
              >
                ¿Ha olvidado su contraseña?
              </span>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
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

const EnhancedLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
);

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(EnhancedLoginForm);
