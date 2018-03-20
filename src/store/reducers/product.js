/*
 * @Author: DFC
 * @Date: 2018-03-14 15:43:05
 * @Last Modified by: DFC
 * @Last Modified time: 2018-03-14 16:59:33
 */

import { handleActions } from 'redux-actions';
import { GET_LIST } from '../actions/product';

export default handleActions(
  {
    [GET_LIST](state, action) {
      console.log(state);
      return {
        list:[...state.list,...action.payload]
      }
    }
  },
  {
    list: [{
      id:1,
      title:"title1"
    },{
      id:2,
      title:"title2"
    }]
  }
);
