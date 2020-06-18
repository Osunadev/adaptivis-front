export const schoolEmailRegEx = schoolDomain => {
  const customRegex =
    `^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@` +
    schoolDomain +
    `$`;

  const regExp = new RegExp(customRegex);
  return regExp;
};
export const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/;
