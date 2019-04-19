/**
 * 全站通用
 */

export default {
  namespace: 'root',
  state: {
    antdLang: 'zh_CN',
    localLang: 'zh',
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
  effects: {
    
  },
  reducers: {
    setLang(state, { payload }) {
      return { ...state, ...payload };
    }
  }
}