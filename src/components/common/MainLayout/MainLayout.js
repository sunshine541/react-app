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
      type: 'root/updateState',
      payload: {
        antdLang: newAntdLang,
        localLang: newLocalLang,
      }
    });
  }
  handleChangeTheme = () => {
    console.log(this.props.root, 'aaa')
    this.props.dispatch({
      type: 'root/updateState',
      payload: {
        theme: this.props.root.theme === 'red' ? 'default' : 'red',
      }
    })
  }
  render() {
    const { theme } = this.props.root;
    return (
      <Locale>
        <div className={`theme-${theme}`}>
          <div className="main-wrap">
            这是mainlayout
            <Button onClick={this.handleChangeTheme}>切换肤色</Button>
            <p>
              来自本地国际化配置的文字  <br />
              <FormattedMessage id="home.hello" /><br />
              <FormattedMessage id="home.name" values={{ name: '小明' }} />
            </p>
            <Button onClick={this.changeLang}>切换国际化（antd组件 + 本地）</Button>
            <p>---------------以下来自mainlayout以外的组件</p>
            {this.props.children}
          </div>
        </div>  
      </Locale>
     )
  }
}

function mapStateToProps({ root }) {
  return { root };
}
export default connect(mapStateToProps)(MainLayout);
