import request from '../util/request';

const urlPrefix = 'http://rap2api.taobao.org/app/mock/165803/';
export default function fetchList(params) {
  return request(`${urlPrefix}getList.json`, {
    method: 'post',
    data: params,
  })
}