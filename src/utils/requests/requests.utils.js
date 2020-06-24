import { getTokenFromStorage } from 'utils/tokens/handle-jwt.utils';

/**
 * A module to handle fetch requests without repeating the same code over and over
 * @module requests
 */

/**
 * An object that represents the response of a fetch call
 * @typedef {Object} ResponseObject
 * @property {Object} body - The body (content) of the response
 * @property {number} status - The status code of the response
 * @property {Object|null} error - The error object if things went wrong | null if there wasn't an error
 */

/**
 * easyFetch is a closure function, returns a function that uses the provided values to make a tailored fetch call
 * @param {string} method - The http method for the request: 'get' | 'post' | 'put' | 'patch' | 'delete'
 * @param {boolean} withAuthHeader - It is 'true' if we need to include the access token in the
 * Bearer Authorization header of the request, otherwise 'false'
 * @param {string} typeHeaderToken - The type of header token to be sent on the Bearer Authorization header: 'access' | 'refresh'
 * @returns {function} - Returns a custom function, tailored to 'method' and 'withAuthHeader' parameters
 * @example
 * const customFetch = easyFetch('get', false);
 * const customObj = await customFetch('teachers', page_row=10)
 */
const easyFetch = (
  method,
  withAuthHeader = false,
  typeHeaderToken = 'access'
) => {
  let customFunction;

  switch (method) {
    case 'get':
    default:
      /**
       * A custom functions that fits to the 'get' method
       * @function getCustomFunction
       * @param {string} endpointPath - The remaining endpoint path removing the base url
       * @param {string|undefined} queryParams - String with the actual query params | undefined if we don't want to send queryParams
       * @returns {Promise<ResponseObject>}
       */
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
          let token;

          if (typeHeaderToken === 'access') {
            token = getTokenFromStorage('accessToken', 'local');
          } else if (typeHeaderToken === 'refresh') {
            token = getTokenFromStorage('refreshToken', 'local');
          }

          customHeaders.Authorization = `Bearer ${token}`;
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
      /**
       * A custom functions that fits to the 'post' and 'put' methods
       * @function postOrPutCustomFunction
       * @param {string} endpointPath - The remaining endpoint path removing the base url
       * @param {Object|undefined} payload - The payload object to be sent | undefined if there's no data to be sent
       * @returns {Promise<ResponseObject>}
       */
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
          let token;

          if (typeHeaderToken === 'access') {
            token = getTokenFromStorage('accessToken', 'local');
          } else if (typeHeaderToken === 'refresh') {
            token = getTokenFromStorage('refreshToken', 'local');
          }

          customFetchObj.headers.Authorization = `Bearer ${token}`;
        }

        if (payload) {
          customFetchObj.body = JSON.stringify(payload);
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

/**
 * paginationFetch returns an array of items after making one or several fetch requests
 * to the endpointPath provided. It can be provided a queryParamsObj to specify query
 * parameters and also, a formattingFunction to format every single item returned by
 * the fetch response body.
 * @param {string} endpointPath - The remaining endpoint path removing the base url
 * @param {number} pageSize - It's the page size to be requested in every call, by default, 10.
 * @param {Object} [queryParamsObj] - An object will the key-value pairs of the query parameters.
 * @param {function} [formattingFunction] - A formatting function that's applied to every single element we get from the api.
 */
const paginationFetch = async (
  endpointPath,
  pageSize = 10,
  queryParamsObj,
  formattingFunction
) => {
  let queryString;

  if (queryParamsObj) {
    queryString = Object.keys(queryParamsObj).reduce(
      (acc, objKey) => acc + `&${objKey}=${queryParamsObj[objKey]}`,
      `per_page=${pageSize}`
    );
  } else {
    queryString = `per_page=${pageSize}`;
  }

  const responseArr = [];
  let responseBody;
  let pageIdx = 1;

  const customFetch = easyFetch('get', true);

  do {
    const { body, status, error } = await customFetch(
      endpointPath,
      queryString + `&page=${pageIdx}`
    );

    if (status !== 200) throw new Error();

    responseBody = body;

    if (responseBody.resultSize > 0) {
      let finalResults;

      if (formattingFunction) {
        finalResults = responseBody.results.map(formattingFunction);
      } else {
        finalResults = responseBody.results;
      }

      responseArr.push(...finalResults);
      pageIdx++;
    }
  } while (responseBody.next_page !== null);

  return responseArr;
};

export { easyFetch, paginationFetch };
