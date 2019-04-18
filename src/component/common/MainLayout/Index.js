/**
 * 主体layout
 */
import React, { Component } from 'react';
import './Index.scss';

class MainLayout extends Component {
  render() {
    return (
      <div className="main-wrap">
        这是mainlayout
        {this.props.children}
      </div>
    )
  }
}

export default MainLayout;
