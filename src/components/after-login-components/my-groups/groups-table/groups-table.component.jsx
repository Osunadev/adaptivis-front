import React from 'react';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';

import { List } from 'antd';

const SubjectsTable = ({ data }) => {
  return (
    <TitledWrapper title='Materias Cursadas'>
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
    </TitledWrapper>
  );
};

export default SubjectsTable;
