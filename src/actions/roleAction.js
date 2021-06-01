import axios from 'axios';
import { GET_ROLES } from './types';

const getAllRoles = () => async (dispatch) => {
  const res = await axios.get('/api/roles/all');
  dispatch({
    type: GET_ROLES,
    payload: res.data
  });
  // later add try catch to get the errors if its not an authorized user accesing this route
};

export default getAllRoles;
