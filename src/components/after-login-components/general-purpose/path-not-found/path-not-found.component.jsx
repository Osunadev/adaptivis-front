import React from 'react';

import { Result, Button } from 'antd';

import { Link } from 'react-router-dom';

const PathNotFound = ({ btnTitle, btnRoute }) => (
  <Result
    status='404'
    title='404'
    subTitle='Lo sentimos, esta página que visitó no existe.'
    extra={
      <Link to={btnRoute}>
        <Button type='primary' size='large'>
          {btnTitle}
        </Button>
      </Link>
    }
  />
);

export default PathNotFound;
