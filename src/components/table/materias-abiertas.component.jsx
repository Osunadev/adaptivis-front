import React from 'react';
import { Table, Button } from 'antd';

const columns = [
    {
      title: 'Clave',
      dataIndex: 'clave'
    },
    {
      title: 'Materia',
      dataIndex: 'nombre',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Plan de estudios',
      dataIndex: 'planEstudios'
    },
    {
        title: 'Etapa',
        dataIndex: 'etapa'
      }
  ];


const data = [
    {        
        clave: '12102',
        nombre: 'Organización de computadoras y lenguaje ensamblador',
        planEstudios: '20092',
        etapa: 'Disciplinaria',
    },
    {
        clave: '12098',
        nombre: 'Algoritmos y estructuras de datos',
        planEstudios: '20092',
        etapa: 'Disciplinaria',
    },
    {
        clave: '12119',
        nombre: 'Ingeniería de software',
        planEstudios: '20092',
        etapa: 'Terminal',
    },
    {
        clave: '12099',
        nombre: 'Programación orientada a objetos',
        planEstudios: '20092',
        etapa: 'Disciplinaria',
    },
]
class MateriasAbiertasTable extends React.Component {
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
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected
              ? `${selectedRowKeys.length} elementos seleccionados`
              : ''}
          </span>
        </div>
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
            Borrar
          </Button>
      </div>
    );
  }
}

export default MateriasAbiertasTable;
