import React from 'react';

import { Menu, Icon } from 'antd';

const StudentMenuGroup = ({ onMenuItemClick }) => {
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
        <Menu.Item key='crear-encuesta'>
          <Icon style={{ fontSize: '18px' }} type='file-add' />
          <span className='nav-text'>Crear Encuesta</span>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key='solicitudes' title='Solicitudes'>
        <Menu.Item key='solicitud-profesor'>
          <Icon style={{ fontSize: '18px' }} type='user-add' />
          <span className='nav-text'>Profesores</span>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup key='materias' title='Materias'>
        <Menu.Item key='materias'>
          <Icon style={{ fontSize: '18px' }} type='read' />
          <span className='nav-text'>Materias Abiertas</span>
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

export default StudentMenuGroup;
