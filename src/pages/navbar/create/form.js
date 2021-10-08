/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import moment from 'moment';
import FormInputName from '../../../components/input/name';
import Date from '../../../components/input/date';
import FormInputNumber from '../../../components/input/number';
import notify from '../../../components/public/notification';
import { createAssignment, editAssignment, deleteAssignment } from '../../../services/assignment';
import UserDataContext from '../../../utilities/context/userData';

const Form = ({ assignment }) => {
  const { dispatch } = useContext(UserDataContext);
  console.log('edit', assignment);
  const [state, setState] = useState({
    title: assignment ? assignment.title : '',
    description: assignment ? assignment.description : '',
    startDate: assignment ? moment(assignment.startDate).format('YYYY-MM-DD') : '',
    dueDate: assignment ? moment(assignment.dueDate).format('YYYY-MM-DD') : '',
    totalMarks: assignment ? assignment.totalMarks : '',
    temperoryLink: '',
    assignment: ''
  });

  console.log('state state', state);

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
    <div className="grid-element ">
      <div className="box1 col-span-2 w-96">
        <form className="box2 border-blue-fifty bg-white ">
          <div className="text-2xl font-semibold">Create Assignment</div>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <FormInputName value={state.title} handleChange={handleChange} name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="title">description</label>
            <FormInputName
              value={state.description}
              handleChange={handleChange}
              name="description"
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <Date value={state.startDate} handleChange={handleChange} name="startDate" />
          </div>
          <div>
            <label htmlFor="dueDate">Due Date</label>
            <Date value={state.dueDate} handleChange={handleChange} name="dueDate" />
          </div>
          <div>
            <label htmlFor="Total Marks">Total Marks</label>
            <FormInputNumber
              value={state.totalMarks}
              handleChange={handleChange}
              name="totalMarks"
            />
          </div>
          <div className="flex flex-col">
            <p>submit assignment:</p>
            <div className="col">
              <object data={state.temperoryLink} type="application/pdf" width="100%" height="100%">
                <a
                  href={assignment ? assignment.filePath : null}
                  className={`text-xl ${assignment ? 'visible' : 'hidden'}`}
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
    </div>
  );
};

export default Form;
