import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';

import { Table, Button, Icon, Space } from 'antd';

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
        title: '',
        dataIndex: 'editar',
        render: (text, record) => (
          <Link to={`${this.props.match.path}/editar/${record.clave}`}>
            Editar
          </Link>
        )
      }
    ];

    this.state = {
      createdSubjects: data
    };
  }

  createSubject = () => {
    const { history, match } = this.props;

    history.push(`${match.path}/crear`);
  };

  render() {
    const { createdSubjects } = this.state;

    return (
      <TitledWrapper title='Materias Abiertas' big>
        <Table
          columns={this.columns}
          dataSource={createdSubjects}
          style={{ margin: '32px 32px 0 0' }}
        />
        <div style={{ textAlign: 'center ' }}>
          <Link to={`${this.props.match.path}/crear`}>
            <Button type='primary' size='large'>
              <Icon type='plus' color='white' />
              Crear Materia
            </Button>
          </Link>
        </div>
      </TitledWrapper>
    );
  }
}

export default withRouter(CreateSubjectsTable);
