
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Grupo',
    dataIndex: 'grupo',
    key: 'grupo',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo',
  },
  {
    title: 'Clave',
    dataIndex: 'clave',
    key: 'clave',
  },
  {
    title: 'Materia',
    dataIndex: 'materia',
    key: 'materia',
    render: text => <a>{text}</a>,
  },
];

const CurrentResults = ({data}) => {
    return(
        <Table columns={columns} dataSource={data} />
    );
};

export default CurrentResults;
          