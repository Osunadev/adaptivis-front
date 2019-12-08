import React from 'react';

import {
  ContainerSectionHeader,
  DescriptionTextInput,
  TitleTextInput,
  SectionTitle
} from './quiz-section-header.styles';

const QuizSectionHeader = ({ titleValue, descrValue, handleChange }) => {
  return (
    <div>
      <SectionTitle>Sección</SectionTitle>
      <ContainerSectionHeader>
        <TitleTextInput
          type='text'
          placeholder='Sección sin título'
          value={titleValue}
          name='sectionTitle'
          id='section-title'
          onChange={handleChange}
        />

        <DescriptionTextInput
          type='text'
          placeholder='Descripción de la sección'
          value={descrValue}
          name='sectionDescription'
          id='section-description'
          onChange={handleChange}
        />
      </ContainerSectionHeader>
    </div>
  );
};

export default QuizSectionHeader;
