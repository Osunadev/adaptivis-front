import React from 'react';
import { Table } from 'antd';

import TitledWrapper from 'components/after-login-components/general/titled-wrapper/titled-wrapper.component';
import { TextLink } from './current-quiz-results-table.styles';

const columnsTitleFormat = [
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
    render: subjectName => <TextLink>{subjectName}</TextLink>,
    onCellClick: event => {
      const { tipo, clave, grupo, materia } = event;
      console.log(tipo, clave, grupo, materia);
    }
  }
];

const CurrentResults = ({ subjectsData }) => (
  <TitledWrapper title='Resultado de materias actuales'>
    <Table columns={columnsTitleFormat} dataSource={subjectsData} />
  </TitledWrapper>
);

export default CurrentResults;
