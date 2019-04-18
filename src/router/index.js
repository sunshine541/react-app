/**
 * 路由
 */
import React from 'react';
import { Switch, Router, Route, Redirect } from 'dva/router';
import configs from './routerConfig';

const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        {configs.length && configs.map(item => <Route key={item} {...item} />)}
        <Redirect to={'/login'}/>
      </Switch>
    </Router>
)
}
export default RouterConfig;
