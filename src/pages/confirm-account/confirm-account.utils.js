// This function helps us to define the initial state whether we're using the ConfirmAccount component
// as an Email Verifier Utility or as a Forgot Password Utility
export const initialStateDefinition = propsObj => {
  const { forgotPassword, match } = propsObj;

  const initialState = {
    id: match.params.id,
    // If the path contains the word 'profesor' it means we're refering to a teacher, if not we're refering to a student
    isTeacher: match.path.includes('/profesor'),
    title: '',
    inputText: '',
    btnTitle: '',
    btnEnabled: false,
    isLoading: false,
    description: '',
    hasServerResponded: false,
    serverGoodResponse: null
  };

  // If we're using the component as a Forgot Password Utility
  if (forgotPassword) {
    initialState.title = 'Reestablecer contraseña';
    initialState.btnTitle = 'Confirmar contraseña';
  } else {
    // If we're using the component as an Email Verifier Utility
    initialState.title = 'Confirmación de cuenta';
    initialState.btnTitle = 'Confirmar cuenta';
  }

  return initialState;
};
