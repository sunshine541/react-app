/**
 * 主体layout
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { FormattedMessage } from 'react-intl';
import Locale from '../Locale/Locale';
import './MainLayout.scss';

class MainLayout extends Component {
  changeLang = () => {
    const newAntdLang = this.props.root.antdLang === 'en_GB' ? 'zh_CN' : 'en_GB';
    const newLocalLang = this.props.root.localLang === 'en' ? 'zh' : 'en';
    this.props.dispatch({
      type: 'root/setLang',
      payload: {
        antdLang: newAntdLang,
        localLang: newLocalLang,
      }
    });
  }
  render() {
    return (
      <Locale>
        <div className="main-wrap">
          这是mainlayout
          <p>
            来自本地国际化配置的文字  <br />
            <FormattedMessage id="home.hello" /><br />
            <FormattedMessage id="home.name" values={{ name: '小明' }} />
          </p>
          <Button onClick={this.changeLang}>切换国际化（antd组件 + 本地）</Button>
          <p>---------------以下来自mainlayout以外的组件</p>
          {this.props.children}
        </div>
      </Locale>
     )
  }
}

function mapStateToProps({ root }) {
  return { root };
}
export default connect(mapStateToProps)(MainLayout);
