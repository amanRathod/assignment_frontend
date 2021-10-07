/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import FormInputName from '../../../components/input/name';
import Date from '../../../components/input/date';
import FormInputNumber from '../../../components/input/number';
import notify from '../../../components/public/notification';
import { createAssignment } from '../../../services/assignment';

const Form = () => {
  // title, discription, startDate, endDate, totalMarks, file
  const [state, setState] = useState({
    title: '',
    description: '',
    startDate: '',
    dueDate: '',
    totalMarks: '',
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
      assignment: linkObject,
    })
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

      const response = await createAssignment(formData);
      notify(response);
      console.log('response', response);
    } catch (err) {
      console.log(err);
    }
  }

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
              <FormInputName value={state.description} handleChange={handleChange} name="description" />
          </div>
          <div>
              <label htmlFor="startDate">Start Date</label>
              <Date value={state.startDate} handleChange={handleChange} name="startDate" />
          </div>
          <div>
              <label htmlFor="dueDate">Due Date</label>
              <Date value={state.endDate} handleChange={handleChange} name="dueDate" />
            </div>
            <div>
              <label htmlFor="Total Marks">Total Marks</label>
              <FormInputNumber value={state.totalMarks} handleChange={handleChange} name="totalMarks" />
            </div>
            <div className="flex flex-col">
          <p>submit assignment:</p>
          <div className="col">
            <object
              data={state.temperoryLink}
              type="application/pdf"
              width="100%"
              height="100%"
             />
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
                onClick={handleSubmit}
                className={`btn ${isInputEmpty && 'opacity-70 cursor-not-allowed'}`}
                disabled={isInputEmpty}
              >
                Submit
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
