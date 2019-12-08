import React from 'react';

import { Icon } from 'antd';

import {
  ContainerSectionHeader,
  DescriptionTextInput,
  TitleTextInput,
  SectionTitle,
  SectionTitleContainer
} from './quiz-section-header.styles';

const QuizSectionHeader = ({
  previewTitle,
  titleValue,
  descrValue,
  handleChange,
  deleteSection
}) => {
  return (
    <div>
      <SectionTitleContainer>
        <SectionTitle>{previewTitle}</SectionTitle>
        <Icon
          onClick={deleteSection}
          type='close-circle'
          style={{ color: 'white', fontSize: '36px' }}
        />
      </SectionTitleContainer>
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
