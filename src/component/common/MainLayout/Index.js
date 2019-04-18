/**
 * 主体layout
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { LocaleProvider, Button } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_GB from 'antd/lib/locale-provider/en_GB';
import './Index.scss';

class MainLayout extends Component {
  state = {
    lang: 'en_GB',
  }
  changeLang = () => {
    const newLang = this.state.lang === 'en_GB' ? 'zh_CN' : 'en_GB';
    this.props.dispatch({
      type: 'global/setLang',
      payload: {
        lang: newLang,
      }
    });
    this.setState({ lang: newLang })
  }
  render() {
    const { lang } = this.props.global;
    const getLocale = () => {
      switch(lang) {
        case 'zh_CN': return zh_CN;
        case 'en_GB': return en_GB;
        default: return zh_CN;
      }
    }
    return (
      <LocaleProvider locale={getLocale()}>
        <div className="main-wrap">
          这是mainlayout
          {this.props.children}
          <Button onClick={this.changeLang}>切换国际化</Button>
        </div>
      </LocaleProvider>
     )
  }
}

function mapPropsToState({ global }) {
  return { global };
}

export default connect(mapPropsToState)(MainLayout);
