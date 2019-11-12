
import React from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import Requests from 'components/table/requests.component';
import InfoRequest from 'components/table/info-request.component';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LandingAdmin = () => {
    return (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'  }}>
      {/*<Avatar size="large" icon="user" />*/}
      <h3 style={{color:'#ffffff'}}>1214901 Nombre Apellidos Paterno Materno</h3>
    </Header>
    <Layout> 
      <Sider width={200} style={{ 
        overflow: 'auto',
        height: '100vh',
        position: 'fixed', 
        top: '64px'
      }}
      >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.ItemGroup key="g1" title="Inicio">
        <Menu.Item key="1">
        <Icon type="user" />
          <span className="nav-text">Mi perfil</span>
        </Menu.Item>
        <Menu.Item key="2">
        <Icon type="team" />
          <span className="nav-text">Mis grupos</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="usergroup-add" />
          <span className="nav-text">Crear grupo</span>
        </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Solicitudes">
        <Menu.Item key="4">
          <Icon type="user-add" />
          <span className="nav-text">Profesores</span>
        </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g3" title="Encuestas">
        <Menu.Item key="5">
          <Icon type="file-search" />
          <span className="nav-text">Consultar resultados</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="schedule" />
          <span className="nav-text">Materias abiertas</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="plus" />
          <span className="nav-text">Crear materia</span>
        </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g4" title="Mi sesión">
        <Menu.Item key="8">
          <Icon type="poweroff" />
          <span className="nav-text">Cerrar sesión</span>
        </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200,  marginTop: 64}}>
      <Content style={{  overflow: 'initial', }}>
        <div style={{ padding: 25, background: '#fff', }}>
          {/*<Requests/>*/}
          <p></p>
          <InfoRequest/>          
        </div>
      </Content>
    </Layout>
    </Layout>
  </Layout>
  );
};

export default LandingAdmin;