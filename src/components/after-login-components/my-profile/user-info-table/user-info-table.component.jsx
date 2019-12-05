import React from 'react';
import { List } from 'antd';

const UserInfoTable = ({ userData }) => (
  <List
    bordered
    size='middle'
    itemLayout='horizontal'
    dataSource={userData}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta title={<strong>{item.titulo}</strong>} />
        <List.Item.Meta description={item.descripcion} />
      </List.Item>
    )}
  />
);

export default UserInfoTable;
