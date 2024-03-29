/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { profilePlaceholder } from '../../components/public/placeholder';
import UserDataContext from '../../utilities/context/userData';
import { getDummyPicture } from '../../constants/theme';

const MobileBar = ({ setToggle, toggle }) => {
  const { state } = useContext(UserDataContext);

  const handleTOggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 text-blue-one bg-blue-nine lg:hidden">
      <button type="submit" id="menuToggle" onClick={handleTOggle} className="focus-ring">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 64 64"
      >
        <title>Assignment Management</title>
        <g id="Blue_Print" data-name="Blue Print">
          <path d="M63,12H12V1a1,1,0,0,0-1-1H7A7,7,0,0,0,0,7V57a7,7,0,0,0,7,7H63a1,1,0,0,0,1-1V13A1,1,0,0,0,63,12ZM2,7A5,5,0,0,1,7,2h3V50c-3.27,0-5.59-.34-8,2.11ZM62,62H7a5,5,0,0,1-3.53-8.54C6.58,50.32,12,53.46,12,51V14H62Z" />
          <path d="M61,0H23c-.32,0-.12-.06-3.61,1.69C16.54,3.11,16,3.17,16,4s.53.88,3.39,2.31C22.9,8.07,22.68,8,23,8H61a3,3,0,0,0,3-3V3A3,3,0,0,0,61,0ZM51,2V6H24.72a7.34,7.34,0,0,0,0-4ZM21,4.86a7.07,7.07,0,0,0,0-1.72l1.77-.88a5.52,5.52,0,0,1,0,3.48ZM53,2h2V6H53Zm9,3a1,1,0,0,1-1,1H57V2h4a1,1,0,0,1,1,1Z" />
          <path d="M17,29h6v9a1,1,0,0,0,1,1H36V52a1,1,0,0,0,1,1h5v3a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V48a1,1,0,0,0-1-1H43a1,1,0,0,0-1,1v3H38V39h4v3a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V34a1,1,0,0,0-1-1H43a1,1,0,0,0-1,1v3H38V25h4v3a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H43a1,1,0,0,0-1,1v3H37a1,1,0,0,0-1,1V37H25V29h6a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v8A1,1,0,0,0,17,29ZM44,49H56v6H44Zm0-14H56v6H44Zm0-14H56v6H44ZM18,21H30v6H18Z" />
          <path d="M32,45H21a1,1,0,0,0,0,2H32A1,1,0,0,0,32,45Z" />
          <path d="M32,50H21a1,1,0,0,0,0,2H32A1,1,0,0,0,32,50Z" />
          <path d="M32,55H21a1,1,0,0,0,0,2H32A1,1,0,0,0,32,55Z" />
          <path d="M17,47a1,1,0,0,0,0-2A1,1,0,0,0,17,47Z" />
          <path d="M17,52a1,1,0,0,0,0-2A1,1,0,0,0,17,52Z" />
          <path d="M17,57a1,1,0,0,0,0-2A1,1,0,0,0,17,57Z" />
        </g>
      </svg>
      <button type="submit" className="box1 space-x-2 xl:justify-start focus-ring">
        <span className="text-xs font-bold text-blue-one">{state.name}</span>
        <ReactPlaceholder ready={state.avatar} customPlaceholder={profilePlaceholder}>
          <img src={state.avatar || getDummyPicture(`${state.name}`)} alt="IMG" className="w-10 h-10 rounded-full" />
        </ReactPlaceholder>
      </button>
    </div>
  );
};

export default MobileBar;
