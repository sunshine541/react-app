/**
 * 页面的入口文件
 */
import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/common/MainLayout/MainLayout';
import Login from '../components/Login/Login'

const LoginPage = (props) => {
  return (
    <MainLayout>
      <Login {...props} />
    </MainLayout>
  )
};

function mapStateToProps({ user }) {
  return { user }
}

export default connect(mapStateToProps)(LoginPage);
