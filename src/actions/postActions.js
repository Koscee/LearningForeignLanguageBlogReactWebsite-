import axios from 'axios';
import { GET_ERRORS, GET_POSTS, GET_POST } from './types';

export const createPost = (postData, navigate) => async (dispatch) => {
  try {
    await axios.post('http://localhost:8080/api/posts', postData);
    navigate('/app/posts');
    // history.push('/home');
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    console.log(error.response.data, error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  const res = await axios.get('http://localhost:8080/api/posts/all');
  dispatch({
    type: GET_POSTS,
    payload: res.data
  });
//   console.log(res.data);
};

export const getPost = (id, navigate) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/posts/id/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (error) {
    navigate('/404');
  }
};
