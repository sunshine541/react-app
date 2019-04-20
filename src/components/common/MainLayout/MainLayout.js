/**
 * 主体layout
 * 包括Header/Sidebar/Footer
 */
import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import { connect } from 'dva';
import { FormattedMessage } from 'react-intl';
import Locale from '../Locale/Locale';
import Head from './Head/Head';
import Sidebar from './Sidebar/Sidebar';
import Container from './Container/Container';
import './MainLayout.scss';

class MainLayout extends Component {
  render() {
    const { theme } = this.props.root;
    return (
      <Locale>
        <div className={`theme-${theme}`}>
          <Layout>
            <Head />
            <Layout>
              <Sidebar />
              <Container>
                {this.props.children}
              </Container>
            </Layout>
          </Layout>
        </div>  
      </Locale>
     )
  }
}

function mapStateToProps({ root }) {
  return { root };
}
export default connect(mapStateToProps)(MainLayout);
