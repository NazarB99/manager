import {combineReducers} from 'redux';
import authReducer from '../reducers/authReducer';
import employersReducer from '../reducers/employersReducer';

export default combineReducers({
    auth:authReducer,
    employers:employersReducer
});