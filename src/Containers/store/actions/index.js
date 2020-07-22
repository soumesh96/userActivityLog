import axios from 'axios';

import { GET_USER_DETAILS, GET_USER_DETAILS_API } from './constants';

export const getUserDetails = () => async (dispatch) => {
  try {
    const res = await axios.get(GET_USER_DETAILS_API);
    const { status, data } = res;
    if (status === 200) {
      dispatch({
        type: GET_USER_DETAILS,
        payload: {
          data: data,
        }
      })
    }
  } catch (err) {
    console.error('error', err);
  }
}
