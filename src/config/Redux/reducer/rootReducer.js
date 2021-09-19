import { combineReducers } from 'redux';
import AuthReducer from './authReducer';

const reducer = combineReducers({
  user : AuthReducer,
  
})
export default reducer
