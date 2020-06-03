import React from 'react';

import { Menu, Icon } from 'antd';

import WithHeaderAndMenu from 'components/after-login-components/general-purpose/with-header-and-menu/with-header-and-menu.component';

import { USER_TYPES } from 'utils/users/user-types';

const TeacherMenuGroup = ({ onMenuItemClick }) => {
  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['grupos']}
      onClick={onMenuItemClick}
    >
      <Menu.ItemGroup key='incio' title='Inicio'>
        <Menu.Item key='grupos'>
          <Icon style={{ fontSize: '20px' }} type='team' />
          <span className='nav-text'>Mis Grupos</span>
        </Menu.Item>
        <Menu.Item key='crear-grupo'>
          <Icon style={{ fontSize: '20px' }} type='usergroup-add' />
          <span className='nav-text'>Crear Grupo</span>
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

export default WithHeaderAndMenu(TeacherMenuGroup, USER_TYPES.TEACHER);
