/**
 * 所有路由对应组件配置
 */
import IndexPage from '../pages/IndexPage';
import LoginPage from '../pages/LoginPage';

export default [
  { path: '/index', exact: true, component: IndexPage }, // 首页
  { path: '/login', exact: true, component: LoginPage }, // 首页
]