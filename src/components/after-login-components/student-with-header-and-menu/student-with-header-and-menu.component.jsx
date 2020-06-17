import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { Menu, Icon } from 'antd';
import withHeaderAndMenu from 'components/after-login-components/general-purpose/with-header-and-menu/with-header-and-menu.component';

import { USER_TYPES } from 'data/users/user-types';
import { setCurrentUser } from 'redux/user-auth/user-auth.actions';
import { selectCurrentUser } from 'redux/user-auth/user-auth.selectors';

const StudentMenuGroup = ({ onMenuItemClick }) => {
  return (
    <Menu
      theme='dark'
      mode='inline'
      // defaultSelectedKeys={['cursos']}
      onClick={onMenuItemClick}
    >
      <Menu.ItemGroup key='incio' title='Inicio'>
        <Menu.Item key='cursos'>
          <Icon style={{ fontSize: '18px' }} type='schedule' />
          <span className='nav-text'>Mis Cursos</span>
        </Menu.Item>
        <Menu.Item key='perfil'>
          <Icon style={{ fontSize: '18px' }} type='user' />
          <span className='nav-text'>Mi Perfil</span>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key='encuestas' title='Encuestas'>
        <Menu.Item key='consultar-resultados'>
          <Icon style={{ fontSize: '18px' }} type='file-search' />
          <span className='nav-text'>Consultar Resultados</span>
        </Menu.Item>
        <Menu.Item key='contestar-encuestas'>
          <Icon style={{ fontSize: '18px' }} type='solution' />
          <span className='nav-text'>Contestar Encuestas</span>
        </Menu.Item>
        <Menu.Item key='visualizar-encuesta'>
          <Icon style={{ fontSize: '18px' }} type='solution' />
          <span className='nav-text'>Visualizar Encuesta</span>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key='mi-sesion' title='Mi sesión'>
        <Menu.Item key='cerrar-sesion'>
          <Icon style={{ fontSize: '18px' }} type='poweroff' />
          <span className='nav-text'>Cerrar Sesión</span>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

// We are basically calling first a HOC withHeaderAndMenu to create a
// studentWithHeaderAndMenu component and then we provide with the routerProps
// and with the currentUser object and setUser dispatch method
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(withHeaderAndMenu(StudentMenuGroup, USER_TYPES.STUDENT));
