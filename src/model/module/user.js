/**
 * 用户的全局状态
 */

import fetchList from '../../services/user';
export default {
  namespace: 'user',
  state: {
    initState: '这是model层默认的值'
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // dispatch({
      //   type: 'queryList',
      //   payload: {
      //     pageIndex: 1,
      //   }
      // })
    }
  },
  effects: {
    *queryList({ payload }, { call, put }) {
      const data = yield call(fetchList, payload);
      yield put({
        type: 'updateState',
        payload: {
          fresh: data,
        }
      })
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
}