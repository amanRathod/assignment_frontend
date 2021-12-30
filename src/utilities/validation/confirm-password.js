const ValidateConfirmPassword = ({ value, setState, password }) => {
  if (value !== password) {
    setState((prevState) => ({
      ...prevState,
      error3: "password doesn't match"
    }));
  } else {
    setState((prevState) => ({
      ...prevState,
      error3: ''
    }));
  }
};

export default ValidateConfirmPassword;
