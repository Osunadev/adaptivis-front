
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

const data = [
  {
    key: '1',
    grupo: '123',
    tipo: 'Taller',
    clave: '123459',
    materia: 'Organización de computadoras y lenguaje ensamblador',
  },
  {
    key: '2',
    grupo: '611',
    tipo: 'Laboratorio',
    clave: '611289',
    materia: 'Programación orientada a objetos',
  },
  {
    key: '3',
    grupo: '214',
    tipo: 'Clase',
    clave: '214359',
    materia: 'Algoritmos y estructuras de datos',
  },
  {
    key: '3',
    grupo: '120',
    tipo: 'Taller',
    clave: '124911',
    materia: 'Ingeniería de software',
  },
];

const CurrentResults = () => {
    return(
        <Table columns={columns} dataSource={data} />
    );
};

export default CurrentResults;
          