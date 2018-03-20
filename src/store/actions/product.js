/*
 * @Author: DFC
 * @Date: 2018-03-14 15:42:35
 * @Last Modified by: DFC
 * @Last Modified time: 2018-03-14 18:20:17
 */
import {createAction} from 'redux-actions'
import {SHOW, HIDE} from './loading'
export const GET_LIST = 'GET_LIST'

export const getList = createAction(GET_LIST, (store={}) => {
  store.dispatch({type:SHOW});
  return new Promise((resolve, reject) => {
    //setTimeout模拟异步请求数据
    setTimeout(() => {
      const data=[
        {
          id:3,
          title:"title3"
        },{
          id:4,
          title:"title4"
        }
      ];
      resolve(data);
      store.dispatch({type:HIDE});
    }, 1000)
  })
})
