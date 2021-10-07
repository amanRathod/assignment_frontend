import axios from 'axios';

const link = 'http://localhost:5000/api/v1';

const token = localStorage.getItem('accessToken');

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

export async function assignStudentsToTA(data) {
  try {
    const response = await axios.post(`${link}/admin/student_to_TA`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function removeStudentFromTA(data) {
  try {
    const response = await axios.post(`${link}/admin/remove-student`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
