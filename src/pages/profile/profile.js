/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import notify from '../../components/public/notification';
import { UserUpdate } from '../../services/user';
import UserDataContext from '../../utilities/context/userData';

const Profile = () => {
  const { state } = useContext(UserDataContext);
  const [profile, setProfile] = useState({
    name: state.name,
    phone: state.phone,
    imageObject: '',
    avatar: state.avatar
  });

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const fileImage = e.target.files[0];
    const temperoryLink = URL.createObjectURL(fileImage);
    setProfile({
      ...state,
      avatar: temperoryLink,
      imageObject: fileImage
    });
  };

  const handleChange = (e) => {
    e.persist();
    setProfile((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', profile.imageObject);
      formData.append('name', profile.name);
      formData.append('phone', profile.phone);
      formData.append('avatar', profile.avatar);

      const response = await UserUpdate(formData);
      notify(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="box-border1">
      <h1 className="mb-5 text-xl font-bold dark-nine">Basic Info</h1>
      <div className="mb-6">
        <div>
          <label htmlFor="name">Full Name</label>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="input-name"
          value={profile.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <div>
          <label htmlFor="number">Phone</label>
        </div>
        <input
          type="number"
          name="phone"
          placeholder="Enter Your Phone No."
          className="input-name"
          value={profile.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="Photo" className="block mb-2 dark-eight">
          Profile Photo
        </label>
        <div className="mt-1 flex items-center">
          <span className="inline-block h-40 w-40 rounded-full overflow-hidden">
            <img src={`${profile.avatar}`} className="" alt="profile" />
          </span>
          <label className="btn ml-3">
            <input
              type="file"
              name="file"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />{' '}
            Update Image
          </label>
        </div>
      </div>
      <button
        type="submit"
        className=" mb-2  bg-transparent hover dark-eight font-semibold  py-2 px-4 border-2 border-blue-five rounded  duration-500  focus-ring"
        onClick={handleUpdate}
      >
        Update Information
      </button>
    </div>
  );
};

export default Profile;
