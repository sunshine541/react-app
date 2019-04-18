/**
 * 页面的入口文件
 */
import React from 'react';
import { connect } from 'dva';
import MainLayout from '../component/common/MainLayout/Index';
import Home from '../component/Home/Index'

const IndexPage = (props) => {
  console.log(props, 'aaa1')
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
