
import { combineReducers } from 'redux';
import activityLogReducer from '../Containers/store/reducers';

export default combineReducers({
    activityLog: activityLogReducer,
});