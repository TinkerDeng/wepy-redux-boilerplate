import { combineReducers } from 'redux';
import counter from './counter';
import login from './login';
import loading from './loading';
import product from "./product";
export default combineReducers({
  counter,
  login,
  loading,
  product
});
