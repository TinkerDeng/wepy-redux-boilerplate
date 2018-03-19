/*
 * @Author: DFC 
 * @Date: 2018-03-14 15:43:05 
 * @Last Modified by: DFC
 * @Last Modified time: 2018-03-14 16:59:33
 */

import { handleActions } from 'redux-actions';
import { LOGIN_IN, LOGIN_OUT, loginIn } from '../actions/login';

export default handleActions(
  {
    [LOGIN_IN](state, action) {
      console.log(state);
      return {
        ...state,
        isLogin: true
      };
    },
    [LOGIN_OUT](state, action) {
      console.log(action);
      return {
        ...state,
        isLogin: false
      };
    }
  },
  {
    isLogin: false
  }
);
