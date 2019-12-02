import React from 'react';

import { Collapse, List } from 'antd';

const { Panel } = Collapse;

const HistoryQuizResultsTable = ({ subjectsHistory }) => {
  // We're creating a List for each of the subjects in our subjectData array
  // and then we enclosed those lists in a Panel and then in a Collapse component
  return (
    <Collapse onChange={key => console.log(key)}>
      {subjectsHistory.map(subjectHistory => (
        <Panel header={subjectHistory.historyTitle} key={subjectHistory.key}>
          <List
            itemLayout='horizontal'
            dataSource={subjectHistory.subjectData}
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
      ))}
    </Collapse>
  );
};

export default HistoryQuizResultsTable;
