/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Form from '../create/form';

const EditAssignment = ({ assignment }) => {
  const [state, setState] = useState({});
  console.log('assass', assignment);
  return (
    <div>
      <h1>Edit Assignment</h1>
      <Form assignment={assignment} />
    </div>
  );
};

export default EditAssignment;
