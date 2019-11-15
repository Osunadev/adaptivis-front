import React from 'react';

import BodyAttributes from 'components/body-attributes/body-attributes.component';
import { List } from 'antd';

const data = [
  {
    assigment: 'Ingeniería de software',
    professor: 'Nombre Apellidos Profesor',
    type: 'Clase'
  },
  {
    assigment: 'Ingeniería de software',
    professor: 'Nombre Apellidos Profesor',
    type: 'Taller'
  },
  {
    assigment: 'Organización de computadoras y lenguaje ensamblador',
    professor: 'Nombre Apellidos Profesor',
    type: 'Clase'
  },
  {
    assigment: 'Organización de computadoras y lenguaje ensamblador',
    professor: 'Nombre Apellidos Profesor',
    type: 'Taller'
  }
];

const Table = () => {
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
