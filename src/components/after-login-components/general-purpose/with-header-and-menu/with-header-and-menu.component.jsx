import React from 'react';

import { Layout } from 'antd';
import UserHeaderInfo from 'components/after-login-components/general-purpose/with-header-and-menu/user-header-info/user-header-info.component';

const { Header, Content, Sider } = Layout;

const WithHeaderAndMenu = (MenuGroup, userType) => ({
  user,
  history,
  children
}) => {
  const handleClick = ({ key }) => {
    const routeTo = `/${userType}/${key}`;

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
        <UserHeaderInfo
          userName={user.name}
          userId={user.id}
          imgSrc={user.imgUrl}
        />
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
          <MenuGroup onMenuItemClick={handleClick} />
        </Sider>
        <Layout
          style={{
            marginLeft: 235,
            marginTop: 48
          }}
        >
          <Content style={{ overflow: 'initial' }}>
            <div style={{ padding: '1rem 2rem' }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default WithHeaderAndMenu;
