import React from 'react';

import { Typography } from 'antd';

const { Title } = Typography;

const TitleWrapper = ({ title, children }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Title level={3} style={{ fontWeight: 'normal' }}>
        {title}
      </Title>
      {children}
    </div>
  );
};

export default TitleWrapper;
