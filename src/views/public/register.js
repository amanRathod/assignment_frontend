import React, { useEffect, useState } from 'react';

const Register = () => {
  const [state, setState] = useState();
  useEffect(() => {
    document.title = 'Register';
  }, []);

  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

export default Register;
