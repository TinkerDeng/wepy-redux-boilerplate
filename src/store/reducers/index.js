import { combineReducers } from 'redux';
import counter from './counter';
import login from './login';
import loading from './loading';
export default combineReducers({
  counter,
  login,
  loading
});
