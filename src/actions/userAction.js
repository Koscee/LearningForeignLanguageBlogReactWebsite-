import axios from 'axios';
import { Navigate } from 'react-router';
import {
  GET_USER, GET_USERS, GET_ERRORS, SET_CURRENT_USER, DELETE_USER, GET_ALERT
} from './types';

export const getUsers = () => async (dispatch) => {
  const res = await axios.get('/api/users/all');
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/id/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (error) {
    // Alert error
    // navigate('/404');
  }
};

export const updateUser = (id, role, updateRequest, setLoading, setSuccess) => async (dispatch) => {
  try {
    await axios.patch(`/api/users/update/${id}`, updateRequest);
    console.log('update successfull');
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    setSuccess(true);
    setLoading(false);
    if (role === 'SUPER_ADMIN') {
      <Navigate to="/app/manage/users" />;
    } else {
      window.location.href = '/app/account';
    }
  } catch (error) {
    setLoading(false);
    if (error.response.status === 401) {
      dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      });
      window.location.href = '/user/login';
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }

    console.log(error.response.data, error.response);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    if (window.confirm('Are you sure you want to delete this user')) {
      await axios.delete(`/api/users/id/${id}`);
      dispatch({
        type: DELETE_USER,
        payload: id
      });
      dispatch({
        type: GET_ALERT,
        payload: { message: 'Deleted succesfully', type: 'success' }
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS, // later set ALERT
      payload: error.response.data
    });
  }
};
