import React from 'react';

import { Typography, Icon } from 'antd';

const { Title } = Typography;

const TitledWrapper = ({ title, big, backCallback, children }) => {
  return (
    <div style={{ marginBottom: '1rem', marginLeft: big ? '32px' : '0' }}>
      {backCallback && (
        <Icon
          type='arrow-left'
          style={{
            display: 'inline-block',
            fontSize: '24px',
            color: 'black',
            marginRight: '24px'
          }}
          onClick={backCallback}
        />
      )}
      <Title
        level={big ? 2 : 3}
        style={{
          fontWeight: 'normal',
          display: 'inline-block'
        }}
      >
        {title}
      </Title>
      {children}
    </div>
  );
};

export default TitledWrapper;
