import axios from 'axios';

const studentlink = 'http://localhost:5000/api/v1/student';
const userlink = 'http://localhost:5000/api/v1/user';

const token = localStorage.getItem('accessToken');
const { user } = localStorage.getItem('user');
const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
};

export async function UserUpdate(data) {
  try {
    const response = await axios.put(`${userlink}/updateProfile`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetUserData() {
  try {
    const response = await axios.get(studentlink, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
