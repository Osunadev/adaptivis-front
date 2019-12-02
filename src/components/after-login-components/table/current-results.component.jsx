import React from 'react';
import { Table } from 'antd';

const headerColumnsTitle = [
  {
    title: 'Grupo',
    dataIndex: 'grupo',
    key: 'grupo'
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo'
  },
  {
    title: 'Clave',
    dataIndex: 'clave',
    key: 'clave'
  },
  {
    title: 'Materia',
    dataIndex: 'materia',
    key: 'materia',
    render: subjectName => (
      <span style={{ color: '#2A289A' }}>{subjectName}</span>
    ),
    onCellClick: event => {
      const { tipo, clave, grupo, materia } = event;
      console.log(tipo, clave, grupo, materia);
    }
  }
];

const CurrentResults = ({ data }) => (
  <Table columns={headerColumnsTitle} dataSource={data} />
);

export default CurrentResults;
