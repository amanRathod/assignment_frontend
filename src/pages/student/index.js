/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState, useContext, useEffect } from 'react';
import UserDataContext from '../../utilities/context/userData';
import { assignStudentsToTA, removeStudentFromTA } from '../../services/user';
import notify from '../../components/public/notification';

const Student = ({ ta, id, setId }) => {
  const { state, dispatch } = useContext(UserDataContext);
  const [selectedStudents, setSelectedStudents] = useState([]);

  // check and uncheck the checkbox according to admin needs
  const handleCheckbox = (id) => {
    const duplicate = selectedStudents.includes(id);
    // uncheck the checkbox
    if (duplicate) {
      selectedStudents.splice(selectedStudents.indexOf(id), 1);
    } else {
      // check the checkbox
      setSelectedStudents((prev) => [...prev, id]);
    }
  };

  // add the selected student into particular TA's assign_student attribute
  const addSelectedStudent = async () => {
    try {
      const data = {
        ta_id: ta._id,
        student_ids: selectedStudents
      };

      const response = await assignStudentsToTA(data);
      if (response.type === 'success') {
        setId('');
      }
      notify(response);
    } catch (err) {
      console.log(err);
    }
  };

  // remove the selected student's from particuler TA's assign_student attribute
  const removeSelectedStudent = async () => {
    try {
      const data = {
        ta_id: ta._id,
        student_ids: selectedStudents
      };
      const response = await removeStudentFromTA(data);
      if (response.type === 'success') {
        setId('');
      }
      dispatch({});
      notify(response);
    } catch (err) {
      console.log(err);
    }
  };

  // Initially check the checkbox for already assign_student's of particular TA.
  useEffect(() => {
    if (ta._id === id) {
      // update the selectedStudent array for particular TA
      setSelectedStudents(ta.user_ref_id.assign_student);
    }
    if (id === '') {
      // if no TA is selected by admin then empty the selectedStudent array
      setSelectedStudents([]);
    }
  }, [id]);

  return (
    <div
      className={` ${
        ta._id === id && state.userType === 'Admin' ? 'visible' : 'hidden'
      } box-border1`}
    >
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Students</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-12">
        {state.students ? (
          state.students.map((student, index) => (
            <div
              key={index}
              className="flex hover rounded-lg items-center w-full space-x-4 focus-ring"
            >
              <img src={student.avatar} alt="profile" className="rounded-full w-14 h-14" />
              <div className="flex flex-col items-start flex-1 text-sm">
                <span className="font-bold dark-nine ">{student.name}</span>
                <span className="text-sm font-bold dark-eight opacity-80">
                  registration_no: {student.registration_no}
                </span>
              </div>
              <div>
                <input
                  type="checkbox"
                  defaultChecked={!!ta.user_ref_id.assign_student.includes(student._id)}
                  className="task-completed"
                  onChange={() => handleCheckbox(student._id)}
                />
              </div>
            </div>
          ))
        ) : (
          <h1>No student assigned</h1>
        )}
      </div>
      <button type="submit" className="btn bg-red-five" onClick={removeSelectedStudent}>
        Remove
      </button>
      <button type="submit" className="btn bg-green-five" onClick={addSelectedStudent}>
        Add
      </button>
    </div>
  );
};

export default Student;
