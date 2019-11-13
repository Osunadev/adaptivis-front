import React, { Component } from 'react';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class SideBar extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
        theme='dark'
      >
          <Menu.Item key="1">Option 9</Menu.Item>
          <Menu.Item key="2">Option 10</Menu.Item>
          <Menu.Item key="3">Option 11</Menu.Item>
          <Menu.Item key="4">Option 12</Menu.Item>

      </Menu>
    );
  }
}

export default SideBar;