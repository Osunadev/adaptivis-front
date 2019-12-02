import React from 'react';
import { List } from 'antd';

const data = [
  {
    titulo: 'Usuario:',
    descripcion: 'nombre.usuario'
  },
  {
    titulo: 'Nombre:',
    descripcion: 'Nombre Apellidos Profesor'
  },
  {
    titulo: 'Número de empleado:',
    descripcion: '12984'
  },
  {
    titulo: 'Género:',
    descripcion: 'Mujer'
  },
  {
    titulo: 'Correo electrónico UABC:',
    descripcion: 'nombre.apellido@uabc.edu.mx'
  }
];

const InfoRequestTable = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff'
      }}
    >
      <List
        bordered
        itemLayout='horizontal'
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={item.titulo} />
            <List.Item.Meta title={item.descripcion} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default InfoRequestTable;
