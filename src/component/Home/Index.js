/**
 * 首页
 */
import React from 'react';
import { Button } from 'antd';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: ' Alice'
    }
  }
  // 更新组件内状态
  updateState = (itemObj) => {
    this.setState({ ...itemObj })
  }
  // 走model发的请求
  fetchList = () => {
    this.props.dispatch({
      type: 'user/queryList',
      payload: {
        count: '123'
      }
    })
  }
  // 跳转路由
  switchToLogin = () => {
    this.props.history.push({ pathname: '/login' })
  }
  render() {
    const { name } = this.state;
    const { user } = this.props;
    return (
      <div>
        <p>这是组件内的状态：{name}</p>
        <p>这是来自model里的数据：  {JSON.stringify(user.initState)}</p>
        <p>这是走完接口后更新到model层，再反应到view层的数据：{JSON.stringify(user.fresh)}</p>
        <Button onClick={this.fetchList}>点击请求</Button>
        <Button type="primary" onClick={this.switchToLogin}>点击跳转至登录页</Button>
      </div>
    )
  }
}
export default Home;