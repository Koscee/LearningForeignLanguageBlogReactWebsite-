import axios from 'axios';
import {
  DELETE_CATEGORY, GET_ALERT, GET_CATEGORIES, GET_CATEGORY, GET_ERRORS
} from './types';

export const createCategory = (newCategory, navigate, setLoading, setSuccess) => async (dispatch) => {
  try {
    await axios.post('/api/categories', newCategory);
    setSuccess(true);
    setLoading(false);
    navigate('/app/manage/categories');
  } catch (error) {
    setLoading(false);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    console.log(error.response.data, error.message);
  }
};
export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/categories/all');
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS, // change to alert later
      payload: error.response.data
    });
  }
};
export const getCategory = (id, navigate) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/categories/id/${id}`);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS, // change to alert later
      payload: error.response.data
    });
    navigate('/404');
  }
};
export const getCategoryByName = (name, navigate) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/categories/name/${name}`);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS, // change to alert later
      payload: error.response.data
    });
    navigate('/404');
  }
};
export const deleteCategory = (id) => async (dispatch) => {
  try {
    if (window.confirm('Are you sure you want to delete this category')) {
      await axios.delete(`/api/categories/id/${id}`);
      dispatch({
        type: DELETE_CATEGORY,
        payload: id
      });
      dispatch({
        type: GET_ALERT,
        payload: { message: 'Deleted succesfully', type: 'success' }
      });
    }
  } catch (error) {
    // dispatch({
    //   type: GET_ERRORS, // change to alert later
    //   payload: error.response.data
    // });
  }
};
