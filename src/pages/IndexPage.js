/**
 * 页面的入口文件
 */
import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/common/MainLayout/MainLayout';
import Home from '../components/Home/Home'

const IndexPage = (props) => {
  return (
    <MainLayout>
      <Home {...props} />
    </MainLayout>
  )
};

function mapStateToProps({ user }) {
  return { user }
}

export default connect(mapStateToProps)(IndexPage);
