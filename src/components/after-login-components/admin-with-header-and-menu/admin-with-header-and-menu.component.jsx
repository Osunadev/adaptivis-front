import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { Menu, Icon } from 'antd';
import withHeaderAndMenu from 'components/after-login-components/general-purpose/with-header-and-menu/with-header-and-menu.component';

import { USER_TYPES } from 'data/users/user-types.data';
import { setCurrentUser } from 'redux/user-auth/user-auth.actions';
import { selectCurrentUser } from 'redux/user-auth/user-auth.selectors';

const AdminMenuGroup = ({ onMenuItemClick }) => {
  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['1']}
      onClick={onMenuItemClick}
    >
      <Menu.ItemGroup key='inicio' title='Inicio'>
        <Menu.Item key='materias'>
          <Icon type='team' />
          <span className='nav-text'>Mis materias</span>
        </Menu.Item>
        <Menu.Item key='materias/crear'>
          <Icon type='usergroup-add' />
          <span className='nav-text'>Crear materia</span>
        </Menu.Item>
        <Menu.Item key='perfil'>
          <Icon type='user' />
          <span className='nav-text'>Mi perfil</span>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key='g2' title='Solicitudes'>
        <Menu.Item key='solicitud-profesor'>
          <Icon type='user-add' />
          <span className='nav-text'>Profesores</span>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key='g3' title='Encuestas'>
        <Menu.Item key='consultar-resultados'>
          <Icon type='file-search' />
          <span className='nav-text'>Consultar resultados</span>
        </Menu.Item>
        <Menu.Item key='encuestas-abiertas'>
          <Icon type='schedule' />
          <span className='nav-text'>Materias abiertas</span>
        </Menu.Item>
        <Menu.Item key='crear-encuesta'>
          <Icon type='plus' />
          <span className='nav-text'>Crear Encuesta</span>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key='g4' title='Mi sesión'>
        <Menu.Item key='cerrar-sesion'>
          <Icon type='poweroff' />
          <span className='nav-text'>Cerrar sesión</span>
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(withHeaderAndMenu(AdminMenuGroup, USER_TYPES.ADMIN));
