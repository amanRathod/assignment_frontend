/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { FaFile, FaFilePdf } from 'react-icons/fa';
import UserDataContext from '../../../utilities/context/userData';
import Details from './details';

const List = () => {
  const { state } = useContext(UserDataContext);
  return (
    <div className="px-4 py-4 mt-8 bg-white dark:bg-grey-eight rounded-lg large-x-y">
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Assigments</h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle">
          <table className="min-w-full">
            <thead className="text-left bg-purple-fifty dark:bg-grey-six">
              <tr>
                <th className="table-x-y">Assignment</th>
                <th className="table-x-y">Grade</th>
                <th className="table-x-y">Due Date</th>
                <th className="table-x-y">Status</th>
              </tr>
            </thead>
            <tbody>
              {state.assignment ? (
                state.assignment.map((item, idx) => (
                  <>
                    <tr className="dark-eight dark:text-purple-fifty divide-y divide-purple-one dark:divide-grey-six text-opacity-80 whitespace-nowrap">
                        <td className="table-x-y flex">
                          <FaFilePdf className="w-6 h-6" />
                          {item.title}
                        </td>
                        <td className="table-x-y">{item.totalMarks}&nbsp;pts</td>
                        <td className="table-x-y">{item.dueDate}</td>
                        <td className="table-x-y">{item.status}</td>
                    </tr>
                    <Details data={item}/>
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

export default List;
