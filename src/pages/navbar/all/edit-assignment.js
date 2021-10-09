import React from 'react';
import PropTypes from 'prop-types';
import Form from '../create/form';

const EditAssignment = ({ assignment }) => (
  <div>
    <h1 className="m-4 text-2xl">Edit Assignment</h1>
    <Form assignment={assignment} />
  </div>
);

export default EditAssignment;

EditAssignment.propTypes = {
  assignment: PropTypes.object.isRequired
};
