import { useEffect, useState } from 'react';

const UserAuthListener = () => {
  const [user, setUser] = useState({});

  const UserExists = () => {
    const userExists = localStorage.getItem('user');
    if (userExists) {
      setUser(userExists);
    } else {
      setUser(null);
    }
  };
  useEffect(() => {
    UserExists();
  }, []);
  return user;
};
export default UserAuthListener;
