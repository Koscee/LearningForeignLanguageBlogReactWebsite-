import axios from 'axios';
import {
  GET_ERRORS,
  GET_FILTERED_POSTS,
  GET_POST, DELETE_POST,
  GET_USER_POSTS,
  GET_ALL_POSTS,
  GET_RELATED_POSTS,
  GET_ALERT
} from './types';

export const createPost = (postData, navigate, setLoading, setSuccess) => async (dispatch) => {
  try {
    await axios.post('/api/posts', postData);
    setSuccess(true);
    setLoading(false);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    navigate('/app/admin/posts/myPosts');
    // history.push('/home');
  } catch (error) {
    if (setLoading) setLoading(false);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    console.log(error.response.data, error.message);
  }
};

export const getAllPosts = () => async (dispatch) => {
  const res = await axios.get('/api/posts/all');
  dispatch({
    type: GET_ALL_POSTS,
    payload: res.data
  });
//   console.log(res.data);
};

export const getUserPosts = () => async (dispatch) => {
  const res = await axios.get('/api/posts/all/user');
  dispatch({
    type: GET_USER_POSTS,
    payload: res.data
  });
//   console.log(res.data);
};

export const getAllFilteredPosts = () => async (dispatch) => {
  const res = await axios.get('/api/posts/all-filtered');
  dispatch({
    type: GET_FILTERED_POSTS,
    payload: res.data
  });
//   console.log(res.data);
};

export const getRelatedPosts = (id, categoryName) => async (dispatch) => {
  const res = await axios.get(`/api/posts/all/${id}/${categoryName}`);
  dispatch({
    type: GET_RELATED_POSTS,
    payload: res.data
  });
//   console.log(res.data);
};

export const getPost = (id, navigate) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/id/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (error) {
    navigate('/404');
  }
};

export const deletePost = (id) => async (dispatch) => {
  if (window.confirm('Are you sure you want to delete this post')) {
    await axios.delete(`/api/posts/id/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id
    });
    dispatch({
      type: GET_ALERT,
      payload: { message: 'Deleted succesfully', type: 'success' }
    });
  }
};
