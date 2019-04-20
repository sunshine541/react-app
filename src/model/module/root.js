/**
 * 全站通用
 */

export default {
  namespace: 'root',
  state: {
    antdLang: 'zh_CN', // antd的组件国际化，zh_CN中文，en_GB英文
    localLang: 'zh', // 本地站点的国际化， zh-中文，en-英文
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