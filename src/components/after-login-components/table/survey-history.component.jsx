import React from 'react';

import { Collapse, List } from 'antd';
const { Panel } = Collapse;

const SurveyHistory = ({ historial, lista }) => {
  let paneles = [];
  historial.map((titulo, i) => {
    paneles.push(
      <Panel header={titulo.resultados} key={i}>
        {lista}
      </Panel>
    );
  });

  return (
    <Collapse onChange={key => console.log(key)}>
      {paneles}
      {/*} <Panel header="Resultados 2017-2" key="8" >
          <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta title={`Grupo: ${item.grupo}`} />
              <List.Item.Meta title={item.tipo} />
              <List.Item.Meta title={item.clave} />
              <List.Item.Meta title={item.materia} />              
            </List.Item>
          )}
        />  
          </Panel>
          */}
    </Collapse>
  );
};

export default SurveyHistory;
