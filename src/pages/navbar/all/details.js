/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Details = ({ data }) => {
  const [state, setState] = React.useState({});
  return (
    <div>
      <h1>Details</h1>
      <div className="flex-col m-4">
        <div className="flex">
          <p>25 assigned</p>
          <p className="text-gray-base">&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <p>{data.submission.length} submitted</p>
        </div>
        <div className="flex-col">
          <div className="flex">
            <p>file:</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>{data.filePath}</p>
          </div>
          <div className="flex">
            <p>Due:</p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <p>{data.dueDate}</p>
          </div>
          <div className="flex">
            <p>published:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{data.startDate}</p>
          </div>
          <div className="flex">
            <p>points:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>{data.totalMarks}</p>
          </div>
          <div className="flex">
            <p>Graded:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
