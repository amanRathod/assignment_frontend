import React, { useEffect, useState } from 'react';

const Login = () => {
  const [state, setState] = useState();
  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="bg-purple-two ">
      <h1>Login</h1>
    </div>
  );
};

export default Login;
