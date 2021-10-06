import React, { useContext, useState } from 'react';
import { FaFile, FaFilePdf } from 'react-icons/fa';
import UserDataContext from '../../../utilities/context/userData';
import Details from '../all/details';

const List = () => {
  const { state } = useContext(UserDataContext);
  const [id, setId] = useState();

  const handleToggle = (idx) => {
    if (!id) {
      setId(idx);
    } else {
      setId('');
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
                <th className="table-x-y">Grade</th>
                <th className="table-x-y">Due Date</th>
                <th className="table-x-y">Status</th>
              </tr>
            </thead>
            <tbody>
              {state.assignment ? (
                state.assignment.map((item, idx) =>
                  item.status === 'active' ? (
                    <>
                      <tr
                        key={item._id}
                        className="dark-eight dark:text-blue-fifty divide-y divide-blue-one dark:divide-grey-six text-opacity-80 whitespace-nowrap"
                        onClick={() => handleToggle(item._id)}
                      >
                        <td className="table-x-y flex cursor-pointer">
                          <FaFilePdf className="w-6 h-6" />
                          {item.title}
                        </td>
                        <td className="table-x-y">{item.totalMarks}&nbsp;pts</td>
                        <td className="table-x-y">{item.dueDate}</td>
                        <td
                          className={`table-x-y ${
                            item.status === 'inactive' ? 'status1' : 'status2'
                          }`}
                        >
                          {item.status}
                        </td>
                      </tr>
                      <Details data={item} id={id} />
                    </>
                  ) : null
                )
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

export default List;
