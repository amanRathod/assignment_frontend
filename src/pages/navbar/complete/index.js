import React from 'react';
import List from './list';

const Complete = () => {
  const [state, setState] = React.useState({});
  return (
    <div>
      <List />
    </div>
  );
};

export default Complete;
