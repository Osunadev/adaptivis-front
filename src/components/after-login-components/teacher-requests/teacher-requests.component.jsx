import React, { Component } from 'react';

import { getJwt } from 'utils/token-helper';

import TitledWrapper from 'components/after-login-components/general/titled-wrapper/titled-wrapper.component';

import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'fullName'
  },
  {
    title: 'Correo',
    dataIndex: 'email'
  },
  {
    title: 'Fecha de solicitud',
    dataIndex: 'date'
  }
];

class TeacherRequests extends Component {
  constructor(props) {
    super(props);

    const { data } = props;

    this.state = {
      selectedRowKeys: [],
      teacherRequests: data,
      isUpdatingRequests: false
    };
  }

  updateTeacherRequests = status => {
    this.setState({ isUpdatingRequests: true });

    const { teacherRequests, selectedRowKeys } = this.state;

    const selectedEmailRequests = selectedRowKeys.map(
      rowId => teacherRequests[rowId].email
    );

    console.log(selectedEmailRequests);

    const nonSelectedRequests = teacherRequests.filter(
      (request, id) => !selectedRowKeys.includes(id)
    );

    const updateRequestsEndpoint =
      'http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/update/request';

    fetch(updateRequestsEndpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getJwt()}`
      },
      body: JSON.stringify({ emails: selectedEmailRequests, status })
    })
      .then(res => res.json())
      .then(msg => {
        console.log(msg);

        this.setState({
          isUpdatingRequests: false,
          selectedRowKeys: [],
          teacherRequests: nonSelectedRequests
        });
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ isUpdatingRequests: false });
      });
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { isUpdatingRequests, selectedRowKeys, teacherRequests } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
      <TitledWrapper title='Solicitudes de Profesores'>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={teacherRequests}
          size='medium'
          bordered
          style={{ margin: '32px 16px 0px' }}
        />
        <div
          style={{
            margin: '16px 16px 0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Button
            type='secondary'
            size='large'
            style={{ margin: '0 8px' }}
            onClick={() => this.updateTeacherRequests('DENEGADO')}
            disabled={!hasSelected}
            loading={isUpdatingRequests}
          >
            Rechazar Solicitud
          </Button>
          <Button
            type='primary'
            size='large'
            style={{ margin: '0 8px' }}
            onClick={() => this.updateTeacherRequests('APROBADO')}
            disabled={!hasSelected}
            loading={isUpdatingRequests}
          >
            Aceptar Solicitud
          </Button>
        </div>
      </TitledWrapper>
    );
  }
}

export default TeacherRequests;
