/**
 * tab的容器
 */
import React from 'react';
import { connect } from 'dva';
import { Tabs, Button } from 'antd';
import CreateFlow from '../../../CreateFlow/CreateFlow';

const { TabPane } = Tabs;

class TabContainer extends React.Component {
  state = {
    activeKey: 1,
  }
  onChange = (activeKey) => {
    this.setState({ activeKey })
  }
  onEdit = (targetKey, action) => {
    // 关闭tag
    if (action === 'remove') {
      this.removeTag(targetKey)
    }
  }
  // 获取tab内容组件
  getTabContentComponnet = (key) => {
    switch(key) {
      case 'createFlow': return <CreateFlow />;
      default: return <CreateFlow />
    }
  }
  addTag = () => {
    this.props.dispatch({
      type: 'tabs/addTag',
      payload: {
        id: new Date().getTime(),
        title: `name-${new Date().getTime()}`
      }
    })
  }
  removeTag = (id) => {
    const { openedTabs } = this.props.tabs;
    this.props.dispatch({
      type: 'tabs/removeTag',
      payload: {
        id,
      }
    })
  }
  render() {
    const { openedTabs } = this.props.tabs;
    const { activeKey } = this.state;
    return (
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={`${activeKey}`}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {openedTabs.map(pane => <TabPane tab={pane.title} key={`${pane.id}`} closable={pane.closable}>{pane.content}</TabPane>)}
        </Tabs>
    );
  }
}

function mapStateToProps({ tabs }) {
  return { tabs };
}

export default connect(mapStateToProps)(TabContainer);