import React from 'react';

import { List } from 'antd';

const Table = ({data}) => {
  return (
    <div>
      <List
        bordered
        itemLayout='horizontal'
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.assigment}
              description={`Docente: ${item.professor}`}
            />
            <div>Tipo: {item.type}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Table;
