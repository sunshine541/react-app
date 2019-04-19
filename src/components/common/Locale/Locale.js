/**
 * 国际化
 */
import React from 'react';
import { LocaleProvider } from 'antd';
import { connect } from 'dva';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import locales from '../../../locales/index';

const { antdLocale, localLocale } = locales;
addLocaleData([...en, ...zh]);

class Locale extends React.Component {
  render() {
    const { antdLang, localLang } = this.props.root;
    return (
      <IntlProvider key={localLang} locale={localLang} messages={localLocale[localLang]}>
        <LocaleProvider locale={antdLocale[antdLang]}>
          {this.props.children}
        </LocaleProvider>
      </IntlProvider>
    )
  }
}

function mapStateToProps({ root }) {
  return { root };
}

export default connect(mapStateToProps)(Locale);