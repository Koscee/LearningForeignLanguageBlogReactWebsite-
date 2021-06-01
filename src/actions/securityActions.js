/* eslint-disable camelcase */
import axios from 'axios';
import setJWTToken from 'src/securityUtils/setJWTToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const registerUser = (newUser, navigate, setLoading, setSuccess) => async (dispatch) => {
  try {
    await axios.post('/api/users/register', newUser);
    if (setLoading && setSuccess) {
      setSuccess(true);
      setLoading(false);
    }
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    navigate('/user/login');
  } catch (error) {
    if (setLoading) {
      setLoading(false);
    }
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const login = (loginRequest) => async (dispatch) => {
  try {
    // post => Login Request
    const res = await axios.post('/api/users/login', loginRequest);

    // extract token from res.
    const { token } = res.data;

    // store the token in the localStorage
    localStorage.setItem('jwtToken', token);

    // Set the token in header ****
    setJWTToken(token);

    // decode token on React
    const decoded = jwt_decode(token);

    // dispatch to our securityReducer
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setJWTToken(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};
