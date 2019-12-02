import React from 'react';

import { List } from 'antd';

const SubjectsTable = ({ data }) => {
  return (
    <List
      style={{ width: '60vw' }}
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
  );
};

export default SubjectsTable;
