import React from 'react';

import QuizDeleteItem from '../quiz-delete-item/quiz-delete-item.component';

import {
  ContainerSectionHeader,
  DescriptionTextInput,
  TitleTextInput
} from './quiz-section-description.styles';

const QuizSectionDescription = ({
  title,
  text,
  itemId,
  handleChange,
  handleDelete
}) => {
  return (
    <ContainerSectionHeader>
      <QuizDeleteItem
        id={itemId}
        onItemClick={handleDelete}
        title='Eliminar Descripción'
      />

      <TitleTextInput
        type='text'
        placeholder='Sin título'
        value={title}
        name='title'
        id={itemId}
        onChange={handleChange}
      />

      <DescriptionTextInput
        type='text'
        placeholder='Descripción'
        value={text}
        name='text'
        id={itemId}
        onChange={handleChange}
      />
    </ContainerSectionHeader>
  );
};

export default QuizSectionDescription;
