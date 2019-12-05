import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import UserHeaderInfo from 'components/after-login-components/general/user-header-info/user-header-info.component';

const { Header, Content, Sider } = Layout;

const HeaderMenu = ({ children, history, match }) => {
  const handleClick = e => {
    const keyPath = e.key;

    let routeTo;

    if (keyPath === 'cerrar-sesion') {
      routeTo = '/';
    } else {
      routeTo = `${match.path}/${keyPath}`;
    }

    history.push(routeTo);
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          background: '#2D2D2D'
        }}
      >
        <UserHeaderInfo userName='Omar Alonso Osuna Angulo' userId='1246437' />
      </Header>
      <Layout>
        <Sider
          width={235}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            top: '48px',
            paddingTop: '1rem'
          }}
        >
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['cursos']}
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
            <Menu.ItemGroup key='encuestas' title='Encuestas'>
              <Menu.Item key='consultar-resultados'>
                <Icon type='file-search' />
                <span className='nav-text'>Consultar resultados</span>
              </Menu.Item>
              <Menu.Item key='subir-resultados'>
                <Icon type='upload' />
                <span className='nav-text'>Subir resultados</span>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='mi-sesion' title='Mi sesión'>
              <Menu.Item key='cerrar-sesion'>
                <Icon type='poweroff' />
                <span className='nav-text'>Cerrar sesión</span>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 235, marginTop: 64 }}>
          <Content style={{ overflow: 'initial' }}>
            <div style={{ padding: '2rem' }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(HeaderMenu);
