import axios from 'axios';
import sha1 from 'sha1';
import { GET_ERRORS } from './types';

const uploadImage = (file, dir, setLoading) => async (dispatch) => {
  let res;
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const secret = process.env.REACT_APP_SECRET;
    const publicId = `${dir}`;
    const timestamp = Date.now();
    const uploadPreset = 'languagelearningBlog';
    const paramsStr = `public_id=${publicId}&timestamp=${timestamp}&upload_preset=${uploadPreset}`;
    const signature = sha1(paramsStr + secret);
    const data = new FormData();

    data.append('api_key', apiKey);
    data.append('file', file);
    data.append('upload_preset', uploadPreset);
    data.append('public_id', publicId);
    data.append('timestamp', timestamp);
    data.append('signature', signature);

    // fix to cloudinary not allowing app Authourization in request header
    const instance = axios.create();
    delete instance.defaults.headers.common.Authorization;

    res = await instance.post('https://api.cloudinary.com/v1_1/xclusivedev/image/upload', data);

    if (setLoading) setLoading(false);
    console.log(res);
    // dispatch({
    //   type: UPLOAD_IMAGE,
    //   payload: res.data.secure_url
    // });
  } catch (error) {
    if (setLoading) setLoading(false);
    dispatch({
      type: GET_ERRORS, // later change this to GET_ALERT type
      payload: error.response
    });
    console.log(error.response.data.message);
  }
  return res.data.secure_url;
};

export default uploadImage;
