import React, { useContext, useState } from 'react';
import moment from 'moment';
import ReactPlaceholder from 'react-placeholder';
import { FaFilePdf } from 'react-icons/fa';
import { awesomePlaceholder } from '../../../components/public/placeholder';
import UserDataContext from '../../../utilities/context/userData';
import Details from './details';
import Option from './option';

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
    <div className="box-border1">
      <h2 className="mb-4 text-xl font-bold dark-nine lg:mb-6">Assignments</h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle">
          <ReactPlaceholder ready={state.name} customPlaceholder={awesomePlaceholder}>
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
                {state.assignment.map((item) => (
                  <>
                    <tr key={item._id} className="small-box" onClick={() => handleToggle(item._id)}>
                      <td className="table-x-y flex cursor-pointer">
                        <FaFilePdf className="w-6 h-6" />
                        {item.title}
                      </td>
                      <td className="table-x-y">{item.totalMarks}&nbsp;pts</td>
                      <td className="table-x-y">{moment(item.dueDate).format('DD-MM-YYYY')}</td>
                      <td className="table-x-y ">
                        <span
                          className={
                            (item.status === 'missing' && 'status-red') ||
                            (item.status === 'completed' && 'status-green') ||
                            'status-yellow'
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                    <Details data={item} id={id} />
                    <Option data={item} id={id} setId={setId} />
                  </>
                ))}
              </tbody>
            </table>
          </ReactPlaceholder>
        </div>
      </div>
    </div>
  );
};

export default List;
