import axios from 'axios';

const link = 'http://localhost:5000/api/v1';

const token = localStorage.getItem('accessToken');
const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
};

const configs = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`
  }
};

export async function SubmitAssignmentApi(formData) {
  try {
    const configs = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    };
    const response = await axios.post(`${link}/submission/`, formData, configs);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetAssignmentApi(data) {
  try {
    const response = await axios.get(`${link}/submission/get-assignment`, config);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createAssignment(formData) {
  try {
    const response = await axios.post(`${link}/assignment/create`, formData, configs);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function evaluate(data) {
  try {
    const response = await axios.put(`${link}/submission/evaluate`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function editAssignment(data) {
  try {
    const response = await axios.put(`${link}/assignment/update`, data, configs);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteAssignment(data) {
  try {
    const response = await axios.put(`${link}/assignment/delete`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
