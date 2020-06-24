import React from 'react';
import { Link } from 'react-router-dom';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';

import { Table, Button, Icon } from 'antd';

const SubjectsTable = ({
  subjects,
  editSubject,
  setCreateSubjectView,
  match
}) => {
  // The table columns header
  const columns = [
    {
      title: 'Código',
      dataIndex: 'subject_code'
    },
    {
      title: 'Nombre',
      dataIndex: 'subject_name'
    },
    {
      title: 'Carrera',
      dataIndex: 'career'
    },
    {
      title: 'Plan de estudios',
      dataIndex: 'study_lan'
    },
    {
      title: 'Etapa',
      dataIndex: 'stage'
    },
    {
      title: '',
      dataIndex: 'editar',
      render: (text, record) => (
        // record.key is the subject_id
        <a onClick={() => editSubject(record.key)}>Editar</a>
      )
    }
  ];

  return (
    <TitledWrapper title='Materias Abiertas' big>
      <div style={{ textAlign: 'right ', margin: '0 32px 16px 0' }}>
        <Button type='primary' onClick={setCreateSubjectView}>
          <Icon type='plus' color='white' />
          Crear Materia
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={subjects}
        style={{ marginRight: '32px' }}
      />
    </TitledWrapper>
  );
};

export default SubjectsTable;
