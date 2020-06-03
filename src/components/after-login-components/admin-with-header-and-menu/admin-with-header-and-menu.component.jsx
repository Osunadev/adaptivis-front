import React from 'react';

import { Menu, Icon } from 'antd';

import WithHeaderAndMenu from 'components/after-login-components/general-purpose/with-header-and-menu/with-header-and-menu.component';

import { USER_TYPES } from 'utils/users/user-types';

const AdminMenuGroup = ({ onMenuItemClick }) => {
  return (
    <Menu
      theme='dark'
      mode='inline'
      defaultSelectedKeys={['1']}
      onClick={onMenuItemClick}
    >
      <Menu.ItemGroup key='inicio' title='Inicio'>
        <Menu.Item key='grupos'>
          <Icon type='team' />
          <span className='nav-text'>Mis grupos</span>
        </Menu.Item>
        <Menu.Item key='crear-grupo'>
          <Icon type='usergroup-add' />
          <span className='nav-text'>Crear grupo</span>
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

export default WithHeaderAndMenu(AdminMenuGroup, USER_TYPES.ADMIN);
