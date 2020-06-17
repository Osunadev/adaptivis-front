import { getTokenFromStorage } from 'utils/tokens/jwt-utils';

/*
 ** method = 'get' | 'post' | 'put' | 'patch' | 'delete'
 ** withAuthHeader = true | false - If we need to include the access token in the Bearer Authorization header
 ** endpointPath = The remaining endpoint path removing the base url
 ** queryParams = Text string with the actual query params | undefined if we don't want to send queryParams
 ** payload = The payload object to be sent
 */

export const easyFetch = (method, withAuthHeader = false) => {
  const accessToken = getTokenFromStorage('accessToken', 'local');
  let customFunction;

  switch (method) {
    case 'get':
    default:
      customFunction = async (endpointPath, queryParams = undefined) => {
        let completeUrlEndpoint;

        if (queryParams === undefined) {
          completeUrlEndpoint = `${process.env.REACT_APP_BACKEND_ENDPOINT}/${endpointPath}`;
        } else {
          completeUrlEndpoint = `${process.env.REACT_APP_BACKEND_ENDPOINT}/${endpointPath}?${queryParams}`;
        }

        const customHeaders = {
          'Content-Type': 'application/json'
        };

        if (withAuthHeader) {
          customHeaders['Authorization'] = `Bearer ${accessToken}`;
        }

        let body;
        let status;
        let error = null;

        try {
          const response = await fetch(completeUrlEndpoint, {
            headers: { ...customHeaders }
          });

          status = response.status;
          body = await response.json();
        } catch (e) {
          error = e;
        }

        return {
          body,
          status,
          error
        };
      };

      break;

    case 'post':
    case 'put':
      customFunction = async (endpointPath, payload = undefined) => {
        let body;
        let status;
        let error;

        const customFetchObj = {
          method,
          headers: {
            'Content-Type': 'application/json'
          }
        };

        if (withAuthHeader) {
          customFetchObj['headers']['Authorization'] = `Bearer ${accessToken}`;
        }

        if (payload) {
          customFetchObj['body'] = JSON.stringify(payload);
        }

        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND_ENDPOINT}/${endpointPath}`,
            {
              ...customFetchObj
            }
          );

          status = response.status;
          body = await response.json();
        } catch (e) {
          error = e;
        }

        return {
          body,
          status,
          error
        };
      };

      break;
    case 'delete':
      break;
  }

  return customFunction;
};
