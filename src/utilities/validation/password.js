const ValidatePassword = ({ value, setState }) => {
  const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!regPassword.test(value)) {
    setState((prevState) => ({
      ...prevState,
      error2: 'password should be minimum eight characters, at least one uppercase and one number'
    }));
  } else {
    setState((prevState) => ({ ...prevState, error2: '' }));
  }
};

export default ValidatePassword;
