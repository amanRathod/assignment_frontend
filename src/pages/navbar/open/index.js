import React from 'react';
import List from './list';

const Open = () => {
  const [state, setState] = React.useState({});
  return (
    <div>
      <List />
    </div>
  );
};

export default Open;
