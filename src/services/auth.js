import axios from 'axios';

const link = 'http://localhost:5000/api/v1/user';
const config = {
  headers: { 'Content-type': 'application/json' }
};

export async function UserLogin(data) {
  try {
    const response = await axios.post(`${link}/login`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UserRegister(data) {
  try {
    const response = await axios.post(`${link}/register`, data, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UserForgotPassword(data) {
  try {
    const response = await axios.post(`${link}/forgotPassword`, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function UserResetPassword(state) {
  try {
    const response = await axios.put(`${link}/resetPassword`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
