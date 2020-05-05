import React from 'react';

import { Typography } from 'antd';

const { Title } = Typography;

const TitledWrapper = ({ title, big, children }) => {
  return (
    <div style={{ marginBottom: '1rem', marginLeft: big ? '32px' : '0' }}>
      <Title level={big ? 2 : 3} style={{ fontWeight: 'normal' }}>
        {title}
      </Title>
      {children}
    </div>
  );
};

export default TitledWrapper;
