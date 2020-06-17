import jwtDecode from 'jwt-decode';
import { easyFetch } from 'utils/requests/requests-utils';

export const getUserFromToken = accessToken => {
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

export const saveTokenInStorage = (token, storage, tokenName) => {
  if (storage === 'session') {
    sessionStorage.setItem(tokenName, JSON.stringify(token));
  } else if (storage === 'local') {
    localStorage.setItem(tokenName, JSON.stringify(token));
  }
};

export const getTokenFromStorage = (tokenName, storage) => {
  let token;

  if (storage === 'session') {
    token = JSON.parse(sessionStorage.getItem(tokenName));
  } else if (storage === 'local') {
    token = JSON.parse(localStorage.getItem(tokenName));
  }

  return token;
};

export const removeTokenFromStorage = (tokenName, storage) => {
  if (storage === 'session') {
    sessionStorage.removeItem(tokenName);
  } else if (storage === 'local') {
    localStorage.removeItem(tokenName);
  }
};

const getPayloadExpirationDate = payload => {
  const expInMs = (payload && payload.exp && payload.exp * 1000) || null;

  return expInMs;
};

export const isTokenExpired = token => {
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

// Function that look for an accessToken and refreshToken in session storage
// and checks if they havent expired.
// Could return: null or user obj
export const getUserFromStorage = async () => {
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
    //We need to request for a new one
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

export const logOutUser = async () => {
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
