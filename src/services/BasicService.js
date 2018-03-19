/*
 * @Author: DFC
 * @Date: 2018-03-13 16:41:52
 * @Last Modified by: DFC
 * @Last Modified time: 2018-03-14 15:41:52
 */
import wepy from 'wepy'
import Config from '../config'
import Promise from 'promise-polyfill'

/**
 *
 * @param {*} api 请求的url（必填）
 * @param {*} data 请求的参数 默认为空对象
 * @param {*} method 请求的method  默认为post
 */
export default function Send(api, data = {}, method = 'post') {
  return new Promise((resolve, reject) => {
    const params = {
      url: Config.host
    }
    wepy.request(params).then(function(data) {
      resolve(data)
    })
  })
}
