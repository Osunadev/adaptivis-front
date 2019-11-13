
import React from 'react';
import { Collapse, List } from 'antd';
import Table from 'components/table/table.component';

const { Panel } = Collapse;
const data = [
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
  
function callback(key) {
  console.log(key);
}

const groups = [
    {
        resultados: 'Resultados 2019-1'
    }


];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SurveyHistory = () => {
    return(
        <Collapse onChange={callback}>
          <Panel header="Resultados 2019-1" key="1">          
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
          <Panel header="Resultados 2018-2" key="2" >
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
          <Panel header="Resultados 2018-1" key="3">
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
        </Collapse>
      );
};

export default SurveyHistory;
          