import React from 'react';
import { Table, Button } from 'antd';

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
      render: text => <a href='https://www.google.com'>{text}</a>,
    },
  ];


const data = [
    {
        key: '1',
        grupo: '123',
        tipo: 'Taller',
        clave: '12102',
        materia: 'Organización de computadoras y lenguaje ensamblador',
      },
      {
        key: '2',
        grupo: '611',
        tipo: 'Laboratorio',
        clave: '12099',
        materia: 'Programación orientada a objetos',
      },
      {
        key: '3',
        grupo: '214',
        tipo: 'Clase',
        clave: '12098',
        materia: 'Algoritmos y estructuras de datos',
      },
      {
        key: '4',
        grupo: '120',
        tipo: 'Taller',
        clave: '12119',
        materia: 'Ingeniería de software',
      },
    ];
class GruposTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  };

  eliminar = () => {
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
            onClick={this.eliminar}
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

export default GruposTable;
