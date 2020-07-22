import { GET_USER_DETAILS } from '../actions/constants';

import { initialState } from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload.data,
        isUserDataFetched: true,
      };
    default:
      return state
  }
}