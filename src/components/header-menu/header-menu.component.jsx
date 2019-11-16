import React from 'react';

import { withRouter } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Sider } = Layout;

const HeaderMenu = ({ children, history }) => {
  const handleClick = e => {
    const keyPath = e.key;

    switch (keyPath) {
      case 'cursos':
        history.push('/loggedin/cursos');
        break;
      case 'resultados':
        history.push('/loggedin/resultados');
        break;
    }
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div>
          <h3 style={{ color: '#ffffff' }}>
            1214901 Nombre Apellidos Paterno Materno
          </h3>
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            top: '64px'
          }}
        >
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            onClick={handleClick}
          >
            <Menu.ItemGroup key='incio' title='Inicio'>
              <Menu.Item key='cursos'>
                <Icon type='schedule' />
                <span className='nav-text'>Mis cursos</span>
              </Menu.Item>
              <Menu.Item key='perfil'>
                <Icon type='user' />
                <span className='nav-text'>Mi perfil</span>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='g2' title='Encuestas'>
              <Menu.Item key='resultados'>
                <Icon type='file-search' />
                <span className='nav-text'>Consultar resultados</span>
              </Menu.Item>
              <Menu.Item key='subir-resultados'>
                <Icon type='upload' />
                <span className='nav-text'>Subir resultados</span>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='g3' title='Mi sesión'>
              <Menu.Item key='5'>
                <Icon type='poweroff' />
                <span className='nav-text'>Cerrar sesión</span>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200, marginTop: 64 }}>
          <Content style={{ overflow: 'initial' }}>
            <div style={{ padding: 25, background: '#fff' }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const HeaderMenuRouted = withRouter(HeaderMenu);

export default HeaderMenuRouted;
