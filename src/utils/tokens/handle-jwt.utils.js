/**
 * A module to handle storing, retrieving and removing tokens from web storage
 * @module handle-jwt
 */

/**
 * Gets the specified token from the specified storage
 * @param {string} tokenName - Name of the token to be stored
 * @param {string} storage - Whether to be stored on 'local' or 'session' storage
 * @returns {Object} - The jwt object
 */
const getTokenFromStorage = (tokenName, storage) => {
  let token;

  if (storage === 'session') {
    token = JSON.parse(sessionStorage.getItem(tokenName));
  } else if (storage === 'local') {
    token = JSON.parse(localStorage.getItem(tokenName));
  }

  return token;
};

/**
 * Removes the specified token from the specified storage
 * @param {string} tokenName - Name of the token to be stored
 * @param {string} storage - Whether to be stored on 'local' or 'session' storage
 * @returns {void}
 */
const removeTokenFromStorage = (tokenName, storage) => {
  if (storage === 'session') {
    sessionStorage.removeItem(tokenName);
  } else if (storage === 'local') {
    localStorage.removeItem(tokenName);
  }
};

/**
 * Saves token in web storage (local or session)
 * @param {string} token - The jwt token to be stored
 * @param {string} storage - Whether local or session storage
 * @param {string} tokenName - The name of the token to be stored
 * @returns {void}
 */
const saveTokenInStorage = (token, storage, tokenName) => {
  if (storage === 'session') {
    sessionStorage.setItem(tokenName, JSON.stringify(token));
  } else if (storage === 'local') {
    localStorage.setItem(tokenName, JSON.stringify(token));
  }
};

export { getTokenFromStorage, removeTokenFromStorage, saveTokenInStorage };
