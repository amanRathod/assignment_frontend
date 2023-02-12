import axios from 'axios';
import notify from '../components/public/notification';

const link = 'https://assignment-managements.onrender.com/api/v1';

const token = localStorage.getItem('accessToken');
const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
};

export async function SubmitAssignmentApi(formData) {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    };
    const response = await axios.post(`${link}/submission/`, formData, config);
    return response.data;
  } catch (err) {
    notify({
      type: 'error',
      message: err.message
    });
  }
}

export async function GetAssignmentApi(data) {
  try {
    const response = await axios.get(`${link}/submission/`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createAssignment(formData) {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.post(`${link}/assignment/create`, formData, config);
    return response.data;
  } catch (err) {
    notify({
      type: 'error',
      message: err.message
    });
  }
}

export async function evaluate(data) {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const response = await axios.post(`${link}/submission/evaluate`, data, config);
    return response.data;
  } catch (err) {
    notify({
      type: 'error',
      message: err.message
    });
  }
}

export async function editAssignment(data) {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    };
    const response = await axios.post(`${link}/assignment/update`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteAssignment(data) {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const response = await axios.put(`${link}/assignment/delete`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UpdateSubmittedAssignment(data) {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    };
    const response = await axios.put(`${link}/submission/update`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
