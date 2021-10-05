import axios from 'axios';

const link = 'http://localhost:5000/api/v1';

const token = localStorage.getItem('accessToken');
console.log('topken', token);

const { user } = localStorage.getItem('user');
const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
};

export async function UserUpdate(data) {
  try {
    const response = await axios.put(`${link}/user/updateProfile`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetStudentData() {
  try {
    const response = await axios.get(`${link}/student`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetTAData() {
  try {
    const response = await axios.get(`${link}/TA`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetAdminData() {
  try {
    const response = await axios.get(`${link}/admin`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
