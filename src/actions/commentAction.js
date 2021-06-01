import axios from 'axios';
import { GET_COMMENTS, GET_ERRORS } from './types';

export const createComment = (postId, commentData, navigate) => async (dispatch) => {
  try {
    await axios.post(`/api/post/${postId}/comment`, commentData);
    // navigate(`/article/${postId}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    window.location.href = `/article/${postId}`;
    // history.push('/home');
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    navigate(`/article/${postId}`);
    console.log(error.response.data, error.message);
  }
};

export const getComment = () => async (dispatch) => {
  try {
    const res = await axios.post('/api/post/comments/all');
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    console.log(error.response.data, error.message);
  }
};
