/**
 * 全站通用
 */

export default {
  namespace: 'global',
  state: {
    lang: 'zh_CN',
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
  effects: {
    
  },
  reducers: {
    setLang(state, { payload }) {
      const { lang } = payload;
      return { ...state, lang };
    }
  }
}