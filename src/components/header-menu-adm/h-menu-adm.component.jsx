import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Content, Sider } = Layout;

const HeaderMenuAdm = ({ children, history }) => {
  const handleClick = e => {
    const keyPath = e.key;

    switch (keyPath) {
      case 'perfil':
        history.push('/loggedinAdm/perfil');
        break;
      case 'mis-grupos':
          history.push('/loggedinAdm/mis-grupos');
          break;
      case 'solicitudes':
        history.push('/loggedinAdm/solicitudes');
        break;
      case 'resultados':
          history.push('/loggedinAdm/consulta-resultados');
          break;
      case 'materias-abiertas':
          history.push('/loggedinAdm/materias-abiertas');
          break;
      case 'cerrar-sesion':
            history.push('/loggedinAdm/info-solicitud');
            break;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <div style={{ display: 'flex', flexDisplay: 'row' }}>
          <Avatar
            size='large'
            src='https://www.petmd.com/sites/default/files/adult-homeless-cat-asking-for-food-picture-id847415388.jpg'
            style={{ marginTop: '8px', marginRight: '16px' }}
          />
          <h3 style={{ color: '#ffffff' }}>
            1234561 Omar Alonso Osuna Angulo
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
            <Menu.ItemGroup key='inicio' title='Inicio'>
              <Menu.Item key='perfil'>
                <Icon type='user' />
                <span className='nav-text'>Mi perfil</span>
              </Menu.Item>
              <Menu.Item key='mis-grupos'>
                <Icon type='team' />
                <span className='nav-text'>Mis grupos</span>
              </Menu.Item>
              <Menu.Item key='crear-grupo'>
                <Icon type='usergroup-add' />
                <span className='nav-text'>Crear grupo</span>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='g2' title='Solicitudes'>
              <Menu.Item key='solicitudes'>
                <Icon type='user-add' />
                <span className='nav-text'>Profesores</span>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='g3' title='Encuestas'>
              <Menu.Item key='resultados'>
                <Icon type='file-search' />
                <span className='nav-text'>Consultar resultados</span>
              </Menu.Item>
              <Menu.Item key='materias-abiertas'>
                <Icon type='schedule' />
                <span className='nav-text'>Materias abiertas</span>
              </Menu.Item>
              <Menu.Item key='crear-materia'>
                <Icon type='plus' />
                <span className='nav-text'>Crear materia</span>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='g4' title='Mi sesión'>
              <Menu.Item key='cerrar-sesion'>
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

const HeaderMenuRouted = withRouter(HeaderMenuAdm);

export default HeaderMenuRouted;
