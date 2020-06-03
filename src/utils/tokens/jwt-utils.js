import jwtDecode from 'jwt-decode';

export const getUserFromToken = accessToken => {
  const { identity, user_claims } = jwtDecode(accessToken);

  const user = {
    email: identity,
    ...user_claims
  };
  return user;
};
