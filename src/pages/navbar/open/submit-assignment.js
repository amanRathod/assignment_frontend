/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import UserDataContext from '../../../utilities/context/userData';
import notify from '../../../components/public/notification';
import { SubmitAssignmentApi, UpdateSubmittedAssignment } from '../../../services/assignment';

const SubmitAssignment = ({ data, id, setId }) => {
  const { state } = useContext(UserDataContext);
  const [temperoryLink, setTemperorylink] = useState('');
  const [assignmentObject, setAssignmentObject] = useState('');
  const [submittedAssignment, setSubmittedAssignment] = useState();

  // to check if student assignment is accepted or not
  const assignmentAccepted =
    submittedAssignment && submittedAssignment.submission_status === 'accepted';

  console.log('subb', submittedAssignment);

  // upload assignment
  const handleFileUpload = (e) => {
    const linkObject = e.target.files[0];
    const temperoryLink = URL.createObjectURL(linkObject);
    setTemperorylink(temperoryLink);
    setAssignmentObject(linkObject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // forData to send file to backened server and get the response back from server and then update the state of the component with the response data
      const formData = new FormData();
      formData.append('file', assignmentObject);
      formData.append('assignmentId', data._id);

      if (assignmentObject === '') {
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', assignmentObject);
      formData.append('submission_id', submittedAssignment._id);

      if (assignmentObject === '') {
        notify({
          type: 'warning',
          message: 'Please select a file to Update assignment'
        });
      } else {
        const response = await UpdateSubmittedAssignment(formData);
        notify(response);
        if (response.type === 'success') {
          setId('');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // get the submitted assignment of the student for this particular assignment
    if (id && state.submittedAssignment) {
      state.submittedAssignment.map((assignment) => {
        if (assignment.assignmentId === id) {
          setSubmittedAssignment(assignment);
          return assignment;
        }
      });
    } else {
      setSubmittedAssignment('');
    }
  }, [id]);

  return (
    <div className={`${data._id === id && state.userType === 'Student' ? 'visible' : 'hidden'} `}>
      <ToastContainer />
      <h1>Details</h1>
      <div className="flex-col m-4">
        <h1 className={assignmentAccepted ? 'visible' : 'hidden'}>
          Your assignment is accepted and graded with{' '}
          {submittedAssignment && submittedAssignment.grade} marks
        </h1>
        <div className="flex">
          <p className="dark-nine">Assignment:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <a target="_blank" href={data.filePath} className="underline" rel="noreferrer">
            link
          </a>
        </div>
        <div className="flex">
          <p className="dark-nine">Description:</p>
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
          <p className="dark-nine">submit assignment:</p>
          <div className="col">
            <object data={temperoryLink} type="application/pdf" width="100%" height="100%">
              <a
                href={submittedAssignment ? submittedAssignment.filePath : null}
                className={`text-xl underline ${submittedAssignment ? 'visible' : 'hidden'}`}
              >
                Submitted Assignment PDF!
              </a>
            </object>
            <div className="flex">
              <label className={`btn ${assignmentAccepted && 'opacity-70 cursor-not-allowed'}`}>
                <input
                  type="file"
                  name="file"
                  disabled={assignmentAccepted}
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                  required
                />{' '}
                Upload file
              </label>
              <button
                type="submit"
                className={`btn bg-red-five ${submittedAssignment ? 'hidden' : 'visible'}`}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="submit"
                disabled={assignmentAccepted}
                className={`btn bg-red-five ${submittedAssignment ? 'visible' : 'hidden'} ${
                  assignmentAccepted && 'opacity-70 cursor-not-allowed'
                }`}
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitAssignment;

// props validation
SubmitAssignment.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string,
  setId: PropTypes.func.isRequired
};
