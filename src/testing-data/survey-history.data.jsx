

import React from 'react';
import { List } from 'antd';
const dataMaterias = [
    {
      grupo: '611',
      tipo: 'Taller',
      clave: '611289',
      materia: 'Programación orientada a objetos avanzada'
    },
    {
      grupo: '214',
      tipo: 'Laboratorio',
      clave: '214359',
      materia: 'Circuitos digitales'
    },
  ];

  /*Este objeto tal vez haya que crearlo como un componente */
export const dataLista = [
  <List
  itemLayout='horizontal'
  dataSource={dataMaterias}
  renderItem={item => (
    <List.Item>
      <List.Item.Meta title={`Grupo: ${item.grupo}`} />
      <List.Item.Meta title={item.tipo} />
      <List.Item.Meta title={item.clave} />
      <List.Item.Meta title={item.materia} />              
    </List.Item>
  )}
/>  
]

export const dataHistorial = [
  {
      resultados: 'Resultados 2019-1'
  },
  {
    resultados: 'Resultados 2018-2'
},
  {
    resultados: 'Resultados 2018-1'
  },
  ,
  {
    resultados: 'Resultados 2018-7'
  },
];
