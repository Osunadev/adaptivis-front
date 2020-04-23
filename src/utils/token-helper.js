import jwt_decode from 'jwt-decode';

export const getJwt = () => {
  return localStorage.getItem('jwt');
};

export const getUserFromJwt = () => {
  // const jwt = localStorage.getItem('jwt');

  // if (!jwt) return null;

  // const payload = jwt_decode(jwt);

  // const { user_claims } = payload;

  // return user_claims;
  return {
    type: 'admin',
    name: 'Omar Osuna',
    imgUrl: '',
    user_ide: 1246437,
    isFirstTimeAcces: false
  };
};

export const setToken = token => {
  localStorage.setItem('jwt', token);
};

export const deleteToken = () => {
  localStorage.removeItem('jwt');
};
