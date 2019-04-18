/**
 * 所有路由对应组件配置
 */
import IndexPage from '../pages/IndexPage';
import Login from '../component/Login/Login';

export default [
  { path: '/index', exact: true, component: IndexPage }, // 首页
  { path: '/login', exact: true, component: Login }, // 首页
]