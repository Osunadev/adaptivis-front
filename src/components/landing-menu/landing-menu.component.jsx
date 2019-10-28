import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import MENU_ROUTES from './menu-routes';

class LandingMenu extends Component {
  constructor() {
    super();

    this.state = {
      current: 'home'
    };
  }

  handleClick = e => {
    const { history } = this.props;

    // e.key is the key of the menu item selected
    history.push(MENU_ROUTES[e.key].path);
  };

  render() {
    const { current } = this.state;

    return (
      <Menu onClick={this.handleClick} selectedKeys={current} mode='horizontal'>
        <Menu.Item key='0'>
          <Icon type='home' />
          Bienvenida
        </Menu.Item>

        <Menu.Item key='1'>
          <Icon type='login' />
          Inicio de Sesión
        </Menu.Item>

        <Menu.SubMenu
          title={
            <span>
              <Icon type='user-add' />
              Registro
            </span>
          }
          key='2'
          onTitleClick={this.handleClick}
        >
          <Menu.ItemGroup title='Registro de usuario'>
            <Menu.Item key='3'>Alumno</Menu.Item>
            <Menu.Item key='4'>Profesor</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
    );
  }
}

export default withRouter(LandingMenu);
