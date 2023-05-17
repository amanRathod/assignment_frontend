import axios from 'axios';
import jwt from 'jwt-decode';
import notify from '../components/public/notification';

const link = 'https://assignment-managements.onrender.com/api/v1';

const token = localStorage.getItem('accessToken');

// check if token time is expired or not
const isTokenExpired = () => {
  if (token) {
    const decoded = jwt(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return true;
    }
    return false;
  }
  return true;
};

// if token is expired, logout user
const checkTokenExpired = () => {
  if (isTokenExpired()) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
};

// function to check expire-time of token
checkTokenExpired();

export async function UserUpdate(data) {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(
      `${link}/user/updateProfile`,
      data,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GoogleUserUpdate(data) {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${link}/user/updateGoogleProfile`,
      data,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetStudentData() {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${link}/student`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetTAData() {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${link}/TA`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetAdminData() {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${link}/admin`, config);
    return response.data;
  } catch (err) {
    notify({
      type: 'error',
      message: err.message,
    });
  }
}

export async function assignStudentsToTA(data) {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${link}/admin/student_to_TA`,
      data,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function removeStudentFromTA(data) {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${link}/admin/remove-student`,
      data,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function assignTA(data) {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `${link}/assignment/assign-to-TA`,
      data,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
