import React from 'react';

import TitledWrapper from 'components/after-login-components/titled-wrapper/titled-wrapper.component';

import { Cascader } from 'antd';

const options = [
  {
    value: 'aprendizaje',
    label: 'Estilo de aprendizaje'
  },
  {
    value: 'personalidad',
    label: 'Estilo de personalidad'
  },
  {
    value: 'motivacion',
    label: 'Motivación por materias',
    disabled: true
  },
  {
    value: 'Ingenieria de software',
    label: 'Ingeniería de software',
    children: [
      {
        value: 'clase',
        label: 'Clase'
      },
      {
        value: 'taller',
        label: 'Taller'
      }
    ]
  },
  {
    value: 'Base de datos',
    label: 'Base de datos',
    children: [
      {
        value: 'clase',
        label: 'Clase'
      },
      {
        value: 'laboratorio',
        label: 'Laboratorio'
      }
    ]
  }
];

function onChange(value) {
  console.log(value);
}

const QuizTypeSelector = () => {
  return (
    <TitledWrapper title='Encuestas disponibles'>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder={`Selecciona el tipo de encuesta a entregar`}
        style={{ width: '50%' }}
      />
    </TitledWrapper>
  );
};

export default QuizTypeSelector;
