/* eslint-disable no-useless-escape */
const ValidateEmail = ({ value, setState }) => {
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  if (!regEmail.test(value)) {
    setState((prevState) => ({ ...prevState, error1: 'Invalid email' }));
  } else {
    setState((prevState) => ({ ...prevState, error1: '' }));
  }
  return null;
};

export default ValidateEmail;
