import React from 'react';

import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Matricula',
    dataIndex: 'matricula'
  },
  {
    title: 'Alumno',
    dataIndex: 'alumno'
  },
  {
    title: 'Correo',
    dataIndex: 'correo'
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    matricula: `1237954`,
    alumno: `Nombre Apellido Apellido`,
    correo: `nombre.apellido@uabc.edu.mx`
  });
}

class AlumnosGrupoTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
        <Button
            type='primary'
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Eliminar
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected
              ? `${selectedRowKeys.length} elementos seleccionados`
              : ''}
          </span>
      </div>
    );
  }
}

export default AlumnosGrupoTable;
