import React, { Component } from 'react';

import { Button } from 'antd';

import GeneralContainer from 'components/general-use-components/general-container/general-container.component';
import { VERIFICATION_ENDPOINTS } from './withVerification.data';
import SpinnerWrapper from '../spinner-wrapper/spinner-wrapper.component';

const withVerification = (FormComponent, verificationType) => {
  return class FormComponentwithVerification extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSendingInfo: false,
        hasServerResponded: false,
        responseTitle: '',
        responseInfo: ''
      };
    }

    handleFormSend = async data => {
      this.setState({ isSendingInfo: true });

      const fetchEndpoint = VERIFICATION_ENDPOINTS[verificationType];

      try {
        const response = await fetch(fetchEndpoint, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            Accept: 'application/json'
          }
        });

        const { responseTitle, responseInfo } = await response.json();

        this.setState({
          responseTitle,
          responseInfo,
          hasServerResponded: true,
          isSendingInfo: false
        });
      } catch (error) {
        console.log(error);
      }
    };

    render() {
      const {
        isSendingInfo,
        hasServerResponded,
        responseTitle,
        responseInfo
      } = this.state;

      return hasServerResponded ? (
        <GeneralContainer
          width='700px'
          height='300px'
          title={responseTitle}
          rounded
        >
          <h2>{responseInfo}</h2>
          <Button
            type='primary'
            style={{
              width: '25%',
              textAlign: 'center',
              margin: '16px'
            }}
            onClick={() => this.props.history.push('/')}
          >
            Regresar al Inicio
          </Button>
        </GeneralContainer>
      ) : (
        <SpinnerWrapper
          isLoading={isSendingInfo}
          title='Cargando Resultados'
          large
        >
          <FormComponent handleFormSend={this.handleFormSend} />;
        </SpinnerWrapper>
      );
    }
  };
};

export default withVerification;
