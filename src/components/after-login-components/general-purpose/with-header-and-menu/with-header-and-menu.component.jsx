import React from 'react';

import { Layout } from 'antd';
import UserHeaderInfo from 'components/after-login-components/general-purpose/with-header-and-menu/user-header-info/user-header-info.component';

import { logOutUser } from 'utils/tokens/jwt.utils';

const { Header, Content, Sider } = Layout;

const WithHeaderAndMenu = (MenuGroup, userType) => ({
  currentUser,
  setUser,
  history,
  children
}) => {
  const handleClick = ({ key }) => {
    if (key === 'cerrar-sesion') {
      logOutUser();
      setUser(null);
      history.push('/login');
    } else {
      // The rest of the menu options
      const routeTo = `/${userType}/${key}`;

      history.push(routeTo);
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
          justifyContent: 'flex-end',
          background: '#2D2D2D'
        }}
      >
        <UserHeaderInfo
          userName={currentUser.fullName}
          userId={currentUser.id}
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
          <Content style={{ padding: '32px 32px 0 32px', overflow: 'auto' }}>
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default WithHeaderAndMenu;
