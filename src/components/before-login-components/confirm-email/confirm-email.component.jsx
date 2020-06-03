import React, { Component } from 'react';

import { Button, Spin, Icon } from 'antd';
import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';

const antIcon = <Icon type='loading' style={{ fontSize: '42px' }} spin />;

class ConfirmEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmId: props.match.params.id,
      status: undefined,
      message: undefined,
      hasServerResponded: false
    };
  }

  async componentDidMount() {
    const { confirmId } = this.state;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/email/${confirmId}`,
        { method: 'POST' }
      );

      const { message } = await response.json();

      if (response.status >= 200 && response.status < 300) {
        this.setState({ hasServerResponded: true, status: 'success', message });
      } else if (response.status >= 400 && response.status < 500) {
        this.setState({ hasServerResponded: true, status: 'error', message });
      }
    } catch (error) {
      this.setState({
        hasServerResponded: true,
        status: 'error',
        message: 'Revisa tu conexión a internet.'
      });
    }
  }

  render() {
    const { hasServerResponded, status, message } = this.state;

    return (
      <GeneralContainer
        width='700px'
        height='220px'
        title='Confirmación de Cuenta'
        rounded
      >
        {hasServerResponded ? (
          <>
            <p>{message}</p>
            <Button
              type='primary'
              style={{
                width: '30%',
                textAlign: 'center',
                marginTop: '16px'
              }}
              onClick={() => {
                this.props.history.push(status ? '/' : '/login');
              }}
            >
              {status === 'success'
                ? 'Regresar al Inicio de Sesión'
                : 'Regresar al Inicio'}
            </Button>
          </>
        ) : (
          <Spin tip='Cargando resultados' indicator={antIcon} />
        )}
      </GeneralContainer>
    );
  }
}

export default ConfirmEmail;
