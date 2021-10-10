/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FormInputName from '../../../components/input/name';
import Date from '../../../components/input/date';
import FormInputNumber from '../../../components/input/number';
import notify from '../../../components/public/notification';
import { createAssignment, editAssignment, deleteAssignment } from '../../../services/assignment';
import UserDataContext from '../../../utilities/context/userData';

const Form = ({ assignment }) => {
  const { dispatch } = useContext(UserDataContext);
  const [state, setState] = useState({
    title: assignment ? assignment.title : '',
    description: assignment ? assignment.description : '',
    startDate: assignment ? moment(assignment.startDate).format('YYYY-MM-DD') : '',
    dueDate: assignment ? moment(assignment.dueDate).format('YYYY-MM-DD') : '',
    totalMarks: assignment ? assignment.totalMarks : '',
    temperoryLink: '',
    assignment: ''
  });

  const isInputEmpty =
    state.title === '' ||
    state.description === '' ||
    state.startDate === '' ||
    state.endDate === '' ||
    state.totalMarks === '';

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const linkObject = e.target.files[0];
    const temperoryLink = URL.createObjectURL(linkObject);
    setState({
      ...state,
      temperoryLink,
      assignment: linkObject
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', state.assignment);
      formData.append('title', state.title);
      formData.append('description', state.description);
      formData.append('startDate', state.startDate);
      formData.append('dueDate', state.dueDate);
      formData.append('totalMarks', state.totalMarks);

      if (state.assignment === '') {
        notify({
          type: 'warning',
          message: 'Please select a file'
        });
      } else {
        const response = await createAssignment(formData);
        notify(response);
        if (response.type === 'success') {
          dispatch({ type: 'currentNav', fieldName: 'currentNav', payload: 'all' });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', state.assignment);
      formData.append('title', state.title);
      formData.append('description', state.description);
      formData.append('startDate', state.startDate);
      formData.append('dueDate', state.dueDate);
      formData.append('totalMarks', state.totalMarks);
      formData.append('assignmentId', assignment._id);
      formData.append('filepath', assignment.filePath);

      const response = await editAssignment(formData);
      notify(response);
      if (response.type === 'success') {
        dispatch({ type: 'currentNav', fieldName: 'currentNav', payload: 'all' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      const data = {
        assignmentId: assignment._id
      };
      const response = await deleteAssignment(data);
      notify(response);
      if (response.type === 'success') {
        dispatch({ type: 'currentNav', fieldName: 'currentNav', payload: 'all' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="box-border1">
      <form className="">
        <div className="text-2xl dark-nine font-bold">Assignment</div>
        <div className="mb-6">
          <div>
            <label htmlFor="title">title</label>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className="input-name"
            value={state.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <div>
            <label htmlFor="description">description</label>
          </div>
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            className="input-name"
            value={state.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="startDate">Start Date</label>
          </div>
          <Date value={state.startDate} handleChange={handleChange} name="startDate" />
        </div>
        <div>
          <div>
            <label htmlFor="dueDate">Due Date</label>
          </div>
          <Date value={state.dueDate} handleChange={handleChange} name="dueDate" />
        </div>
        <div className="mt-4">
          <div>
            <label htmlFor="Total Marks">Total Marks</label>
          </div>
          <input
            type="text"
            name="totalMarks"
            placeholder="Enter Marks"
            className="input-name"
            value={state.totalMarks}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <div>
            <label htmlFor="assignmet">Submit Assignment:</label>
          </div>
          <div className="col">
            <object data={state.temperoryLink} type="application/pdf" width="100%" height="100%">
              <a
                href={assignment ? assignment.filePath : null}
                className={`text-xl underline ${assignment ? 'visible' : 'hidden'}`}
              >
                Assignment PDF!
              </a>
            </object>
            <div className="flex">
              <label className="btn">
                <input
                  type="file"
                  name="file"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                  required
                />{' '}
                Upload file
              </label>
            </div>
          </div>
        </div>
        <div className="button">
          <button
            type="submit"
            onClick={assignment ? handleEdit : handleSubmit}
            className={`btn ${isInputEmpty && 'opacity-70 cursor-not-allowed'} 
              }`}
            disabled={isInputEmpty}
          >
            Submit
          </button>
          <button
            type="submit"
            onClick={handleDelete}
            className={`btn bg-red-five ${assignment ? 'visible' : 'hidden'}`}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

// propType validation
Form.propTypes = {
  assignment: PropTypes.object
};
