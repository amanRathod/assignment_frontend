import React, { useState, useContext } from 'react';
import { FaFile, FaFilePdf } from 'react-icons/fa';
import notify from '../../../components/public/notification';
import UserDataContext from '../../../utilities/context/userData';
import { evaluate } from '../../../services/assignment';

const Grade = () => {
  const { state } = useContext(UserDataContext);
  const [grade, setGrade] = useState(0);

  const handleSubmit = async (id) => {
    try {
      const data = {
        assignmentId: id,
        grade,
        submission_status: 'accepted'
      };
      setGrade('');
      const response = await evaluate(data);
      notify(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4 py-4 mt-8 bg-white dark:bg-grey-eight rounded-lg large-x-y">
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Assignments</h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle">
          <table className="min-w-full">
            <thead className="text-left bg-blue-fifty dark:bg-grey-six">
              <tr>
                <th className="table-x-y">Assignment</th>
                <th className="table-x-y">Points</th>
              </tr>
            </thead>
            <tbody>
              {state.gradeSubmittedAssignment ? (
                state.gradeSubmittedAssignment.map((item, idx) => (
                  <>
                    <tr
                      key={item._id}
                      className="dark-nine divide-y divide-blue-one dark:divide-grey-six text-opacity-80 whitespace-nowrap"
                      // onClick={() => handleToggle(item._id)}
                    >
                      <td className="table-x-y flex cursor-pointer">
                        <FaFilePdf className="w-6 h-6" />
                        <a
                          target="_blank"
                          href={item.filePath}
                          rel="noreferrer"
                          className="underline"
                        >
                          Submitted Assignment - {item.id}
                        </a>
                      </td>
                      <td className="table-x-y">
                        <input
                          className="h-5 w-10 border-2"
                          onChange={(e) => setGrade(e.target.value)}
                        />
                        <button
                          className="btn ml-4"
                          type="submit"
                          onClick={() => handleSubmit(item._id)}
                        >
                          Grade
                        </button>
                      </td>
                    </tr>
                    {/* <Details data={item} id={id} /> */}
                  </>
                ))
              ) : (
                <h1>No assignment found</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Grade;
