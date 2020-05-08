import React, { Component } from 'react';

// import { getJwt } from 'utils/token-helper';
import { withRouter } from 'react-router-dom';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';

import { Table, Button } from 'antd';

class CreateSubjectsTable extends Component {
  constructor(props) {
    super(props);

    const { data } = props;

    this.columns = [
      {
        title: 'Clave',
        dataIndex: 'clave'
      },
      {
        title: 'Carrera',
        dataIndex: 'carrera'
      },
      {
        title: 'Plan de estudios',
        dataIndex: 'periodo'
      },
      {
        title: 'Editar',
        dataIndex: 'editar',
        render: (text, record) => (
          <Button onClick={() => this.editSubject(record.clave)}>Editar</Button>
        )
      }
    ];

    this.state = {
      createdSubjects: data
    };
  }

  editSubject = subjectKey => {
    // const { createdSubjects } = this.state;
    // console.log(
    //   createdSubjects.filter(subject => subject.clave === subjectKey)
    // );
    const { history, match } = this.props;
    history.push(`${match.path}/editar/${subjectKey}`);
  };

  createSubject = () => {
    const { history, match } = this.props;

    history.push(`${match.path}/crear`);
  };

  render() {
    const { createdSubjects } = this.state;

    return (
      <TitledWrapper title='Grupos abiertos'>
        <Table
          columns={this.columns}
          dataSource={createdSubjects}
          size='medium'
          style={{ margin: '32px 16px 0px' }}
        />
      </TitledWrapper>
    );
  }
}

export default withRouter(CreateSubjectsTable);
