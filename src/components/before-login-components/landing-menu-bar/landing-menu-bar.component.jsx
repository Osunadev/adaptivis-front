import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import MENU_ROUTES from './landing-menu-bar.data';

// The routes where menu should only be rendered
const showMenuInRoutes = [
  '/',
  '/login',
  '/registro',
  '/registro/alumno',
  '/registro/profesor'
];

const isCurrentRouteAllowed = currentRoute => {
  // We use the classic for loop instead of 'for of' because of the performance
  for (let i = 0; i < showMenuInRoutes.length; i++) {
    if (currentRoute === showMenuInRoutes[i]) return true;
  }

  return false;
};

class LandingMenu extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

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
    const showMenu = isCurrentRouteAllowed(this.props.location.pathname);

    return (
      showMenu && (
        <Menu
          onClick={this.handleClick}
          selectedKeys={current}
          mode='horizontal'
        >
          <Menu.Item key='0'>
            <Icon type='home' />
            Inicio
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
      )
    );
  }
}

export default withRouter(LandingMenu);
