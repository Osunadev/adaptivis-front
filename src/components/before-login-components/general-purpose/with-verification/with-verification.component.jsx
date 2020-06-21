import React, { Component } from 'react';

import { easyFetch } from 'utils/requests/requests.utils';

import { Button } from 'antd';
import GeneralContainer from 'components/before-login-components/general-purpose/general-container/general-container.component';
import LoadingWrapper from '../../../general-use-components/loading-wrapper/loading-wrapper.component';
import { ENDPOINT_PORTIONS } from './with-verification.data';

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

      const endpointPortion = ENDPOINT_PORTIONS[verificationType];

      const customFetch = easyFetch('post', false);
      const responseObj = await customFetch(endpointPortion, data);

      if (!responseObj.error) {
        const { responseTitle, responseInfo } = responseObj.body;

        this.setState({
          responseTitle,
          responseInfo,
          hasServerResponded: true,
          isSendingInfo: false
        });
      } else {
        console.log(responseObj.error);
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
        <LoadingWrapper
          isLoading={isSendingInfo}
          title='Cargando Resultados'
          large
        >
          <FormComponent handleFormSend={this.handleFormSend} />;
        </LoadingWrapper>
      );
    }
  };
};

export default withVerification;
