import React from 'react';
import { List } from 'antd';

const PerfilAlumnoTable = ({data}) => {
  return (
    <div
      style={{
        backgroundColor: '#fff'
      }}
    >
      <List
        bordered
        itemLayout='horizontal'
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={item.titulo} />
            <List.Item.Meta title={item.descripcion} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PerfilAlumnoTable;
