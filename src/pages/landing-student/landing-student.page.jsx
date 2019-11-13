
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import MisCursos from 'pages/landing-student/mis-cursos';
import ViewScores from './view-scores';

const { Header, Content, Sider } = Layout;

const LandingStudent = () => {
    return (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div>
      <h3 style={{color:'#ffffff'}}>1214901 Nombre Apellidos Paterno Materno</h3>
      </div>
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
          <Icon type="schedule" />
          <span className="nav-text">Mis cursos</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          <span className="nav-text">Mi perfil</span>
        </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Encuestas">
        <Menu.Item key="3">
          <Icon type="file-search" />
          <span className="nav-text">Consultar resultados</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="upload" />
          <span className="nav-text">Subir resultados</span>
        </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g3" title="Mi sesión">
        <Menu.Item key="5">
          <Icon type="poweroff" />
          <span className="nav-text">Cerrar sesión</span>
        </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200,  marginTop: 64}}>
      <Content style={{  overflow: 'initial', }}>
        <div style={{ padding: 25, background: '#fff', }}>
          <MisCursos/>
          <ViewScores/>
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Content>
    </Layout>
    </Layout>
  </Layout>
  );
};

export default LandingStudent;