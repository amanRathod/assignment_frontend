/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */

import React, { useContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import UserDataContext from '../../../utilities/context/userData';
import notify from '../../../components/public/notification';
import { SubmitAssignmentApi } from '../../../services/assignment';

const SubmitAssignment = ({ data, id, setId }) => {
  const { state, dispatch } = useContext(UserDataContext);
  const [temperoryLink, setTemperorylink] = useState('');
  const [assignment, setAssignment] = useState('');
  console.log(state);
  console.log('data', assignment);

  const handleFileUpload = (e) => {
    const linkObject = e.target.files[0];
    const temperoryLink = URL.createObjectURL(linkObject);
    setTemperorylink(temperoryLink);
    setAssignment(linkObject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // forData to send file to backened server and get the response back from server and then update the state of the component with the response data
      const formData = new FormData();
      formData.append('file', assignment);
      formData.append('ta_id', data.assigned_TA);
      formData.append('assignmentId', id);

      if (assignment === '') {
        notify({
          type: 'warning',
          message: 'Please select a file'
        });
      } else {
        const response = await SubmitAssignmentApi(formData);
        notify(response);
        if (response.type === 'success') {
          setId('');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${data._id === id && state.userType === 'Student' ? 'visible' : 'hidden'} `}>
      <ToastContainer />
      <h1>Details</h1>
      <div className="flex-col m-4">
        <div className="flex">
          <p className="dark-nine">description:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>{data.description}</p>
        </div>
        <div className="flex">
          <p className="dark-nine">Due:</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p>{moment(data.dueDate).format('DD-MM-YYYY')}</p>
        </div>
        <div className="flex">
          <p className="dark-nine">points:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>{data.totalMarks}</p>
        </div>
        <div className="flex flex-col">
          <p>submit assignment:</p>
          <div className="col">
            <object data={temperoryLink} type="application/pdf" width="100%" height="100%" />
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
              <button type="submit" className="btn bg-red-five" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitAssignment;
