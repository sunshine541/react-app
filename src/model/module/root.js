/**
 * 全站通用
 */

export default {
  namespace: 'root',
  state: {
    antdLang: 'zh_CN', // antd的组件国际化
    localLang: 'zh', // 本地站点的国际化
    theme: 'default', // 主题设置： default默认，后续再更新
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
  effects: {
    
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
}