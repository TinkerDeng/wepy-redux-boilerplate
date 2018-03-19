/*
 * @Author: DFC
 * @Date: 2018-03-14 15:42:35
 * @Last Modified by: DFC
 * @Last Modified time: 2018-03-14 18:20:17
 */
import {createAction} from 'redux-actions'
import moment from 'moment'
import HomeService from '../../services/Home'
import {SHOW, HIDE} from './loading'
export const LOGIN_IN = 'LOGIN_IN'
export const LOGIN_OUT = 'LOGIN_OUT'

export const loginIn = createAction(LOGIN_IN, data => {
  data.store.dispatch({type:SHOW});
  return 1
})

export const loginOut = createAction(LOGIN_OUT, (data = {}) => {
  data.store.dispatch({type: SHOW})

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
      data.store.dispatch({type: HIDE})
    }, 1000)
  })
})
