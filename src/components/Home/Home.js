/**
 * 首页
 */
import React from 'react';
import { Button, Pagination, Form, Input } from 'antd';
import { FormattedMessage } from 'react-intl';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: ' Alice',
      key: new Date().getTime(),
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
  // 组件刷新
  freshComp = () => {
    this.setState({
      key: new Date().getTime(),
    })
    this.props.form.resetFields();
  }
  render() {
    const { name, key } = this.state;
    const { user, form } = this.props;
    const { getFieldDecorator } = form;
    console.log(name, 'aaa ')
    return (
      <div key={key}>
        <Button onClick={this.freshComp}>刷新组件，key：{key}</Button>
        <Form>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
              initialValue: 123
            })(
              <Input  placeholder="Username" />
            )}
          </Form.Item>
        </Form>
        <p>这是组件内的状态：{name}</p>
        <p>这是来自model里的数据：  {JSON.stringify(user.initState)}</p>
        <p>这是走完接口后更新到model层，再反应到view层的数据：{JSON.stringify(user.fresh)}</p>
        <Button onClick={this.fetchList}>点击请求</Button>
        <Button type="primary" onClick={this.switchToLogin}>点击跳转至登录页</Button>
        <br />
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
        <FormattedMessage id="home.hello" />
      </div>
    )
  }
}
export default Form.create()(Home);