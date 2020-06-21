import jwtDecode from 'jwt-decode';
import { easyFetch } from 'utils/requests/requests.utils';
import {
  getTokenFromStorage,
  removeTokenFromStorage,
  saveTokenInStorage
} from './handle-jwt.utils';

/**
 * A module to manage jwt's and their content.
 * @module jwt-utils
 */

/**
 * This is the current user that we extract from the payload of the jwt accessToken.
 * @typedef {Object} CurrentUser
 * @property {string} role - Could be 'student', 'teacher' or 'admin'
 * @property {string} name - Name of the user
 * @property {number} id - Id of the user
 */

/**
 * Get user from token
 * @param {string} accessToken - Jwt Access Token
 * @returns {CurrentUser} - The user from the payload of the token
 */
const getUserFromToken = accessToken => {
  try {
    const { identity, user_claims } = jwtDecode(accessToken);

    const user = {
      email: identity,
      ...user_claims
    };
    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Returns the expiration time of the jwt
 * @param {Object} payload - The jwt payload object
 * @param {number} payload.exp - The expiration time of the jwt in ms
 * @returns {number} - Expiration time in ms
 */
const getPayloadExpirationDate = payload => {
  const expInMs = (payload && payload.exp && payload.exp * 1000) || null;

  return expInMs;
};

/**
 * Checks if the jwt has expired or not
 * @param {string} token - Jwt token
 * @returns {boolean} - Returns if the true token it's expired, otherwise false
 */
const isTokenExpired = token => {
  try {
    const payload = jwtDecode(token);

    const expInMs = getPayloadExpirationDate(payload);

    if (expInMs) {
      return Date.now() > expInMs;
    }

    return true;
  } catch (error) {
    // If the token is bad formatted (not in the right format)
    return true;
  }
};

/**
 * Looks for an accessToken and refreshToken in local storage, if both are found,
 * checks their expiration date.
 *
 * If the refreshToken has expired, then it removes both tokens from storage, but,
 * if not, tries to get a new accessToken if this has expired.
 * @returns {Promise<null|Object>} - Would resolve 'null' or the CurrentUser object
 */
const getUserFromStorage = async () => {
  const accessToken = getTokenFromStorage('accessToken', 'local');
  const refreshToken = getTokenFromStorage('refreshToken', 'local');

  if (!accessToken || !refreshToken) return null;

  const isAccessTokenExpired = isTokenExpired(accessToken);
  const isRefreshTokenExpired = isTokenExpired(refreshToken);

  if (isRefreshTokenExpired) {
    // If refreshToken is expired, then accessToken is too
    removeTokenFromStorage('accessToken', 'local');
    removeTokenFromStorage('refreshToken', 'local');
    return null;
  }

  if (!isAccessTokenExpired) {
    // If our accessToken hasn't expired
    return getUserFromToken(accessToken);
  }

  // If we need to refresh our accessToken and our refreshToken hasn't expired
  if (!isRefreshTokenExpired) {
    // We need to request for a new one
    const customFetch = easyFetch('post', true);
    const responseObj = await customFetch('refresh');

    // If we had an error, we return null, representing no user object
    if (!responseObj.error) {
      return null;
    }

    const { access_token } = responseObj.body;
    // Saving the new token in session storage;
    saveTokenInStorage(access_token, 'local', 'accessToken');
    return getUserFromToken(access_token);
  }
};

/**
 * Logs the user out by making a fetch call to the backend and then
 * removing both accessToken and refreshToken from localstorage
 * @returns {Promise<void>}
 */
const logOutUser = async () => {
  const access_token = getTokenFromStorage('accessToken', 'local');
  const refresh_token = getTokenFromStorage('refreshToken', 'local');

  // If at least one of the tokens is missing (meaning that someone altered the tokens)
  if (!access_token || !refresh_token) return;

  if (!isTokenExpired(refresh_token)) {
    // If the refresh_token hasn't expired
    const customFetch = easyFetch('post', true);
    await customFetch('logout', {
      access_token,
      refresh_token
    });
  }

  // If refresh_token has expired, we shouldn't bother for sending it to the backend
  removeTokenFromStorage('accessToken', 'local');
  removeTokenFromStorage('refreshToken', 'local');
};

export { getUserFromToken, isTokenExpired, getUserFromStorage, logOutUser };
