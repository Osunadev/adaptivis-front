import React, { Component } from 'react';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';
import { getTokenFromStorage } from 'utils/tokens/jwt-utils';

import { Table, Button, message } from 'antd';

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
    dataIndex: 'date',
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    sortDirections: ['descend', 'ascend']
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

  updateTeacherRequests = async status => {
    this.setState({
      isUpdatingRequests: true
    });

    // These selectedRowKeys are the requests_ids
    const { teacherRequests, selectedRowKeys } = this.state;

    const accessToken = getTokenFromStorage('accessToken', 'local');

    try {
      const reqPromises = selectedRowKeys.map(reqKey =>
        fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/professor/requests`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            request_id: String(reqKey),
            set_status: status // APPROVED o DENIED
          })
        })
      );

      for await (const res of reqPromises) {
        const data = await res.json();

        if (res.status === 200) {
          message.info(data.message);
        }
      }

      // Removing the settled requests by filtering
      const nonSelectedRequests = teacherRequests.filter(
        ({ key }) => !selectedRowKeys.includes(key)
      );

      this.setState({
        isUpdatingRequests: false,
        selectedRowKeys: [],
        teacherRequests: nonSelectedRequests
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isUpdatingRequests: false
      });
    }
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
            onClick={() => this.updateTeacherRequests('DENIED')}
            disabled={!hasSelected}
            loading={isUpdatingRequests}
          >
            Rechazar Solicitud
          </Button>
          <Button
            type='primary'
            size='large'
            style={{ margin: '0 8px' }}
            onClick={() => this.updateTeacherRequests('APPROVED')}
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
