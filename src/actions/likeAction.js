import axios from 'axios';
import { GET_LIKES, GET_ERRORS } from './types';

export const likePost = (postId, likeData, navigate, setIsLiked) => async (dispatch) => {
  try {
    await axios.post(`/api/post/${postId}/like`, likeData);
    // navigate(`/article/${postId}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    // window.location.href = `/article/${postId}`;
    setIsLiked(true);
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

export const getLikes = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/post/likes/all');
    dispatch({
      type: GET_LIKES,
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

export const deleteLike = (postId, navigate, setIsLiked) => async (dispatch) => {
  try {
    await axios.delete(`/api/post/${postId}/unlike`);
    // window.location.href = `/article/${postId}`;
    setIsLiked(false);
    // dispatch({
    //   type: DELETE_LIKE,
    //   payload: false
    // });
  } catch (error) {
    dispatch({
      type: GET_ERRORS, // later set ALERT
      payload: error.response.data
    });
    navigate(`/article/${postId}`);
    console.log(error.response.data, error.message);
  }
};
