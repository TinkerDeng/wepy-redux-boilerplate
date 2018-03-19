/* eslint-disable semi */
/*
 * @Author: DFC
 * @Date: 2018-03-14 16:50:50
 * @Last Modified by: DFC
 * @Last Modified time: 2018-03-14 16:56:17
 */

import BasicService from './BasicService';
import Api from '../api/interface';

function getProductList() {
  const api = Api.getProductList;
  return BasicService(api);
}
function getProductDetail() {
  const api = Api.getProductDetail;
  return BasicService(api, {});
}

export default { getProductList, getProductDetail };
