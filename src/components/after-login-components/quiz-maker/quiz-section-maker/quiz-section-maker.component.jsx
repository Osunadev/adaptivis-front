import React, { Component } from 'react';

import QuizSectionHeader from 'components/after-login-components/quiz-maker/quiz-section-header/quiz-section-header.component';
import QuizSectionDescription from 'components/after-login-components/quiz-maker/quiz-section-description/quiz-section-description.component';
import QuizSectionQuestion from 'components/after-login-components/quiz-maker/quiz-section-question/quiz-section-question.component';

import {
  SectionContainer,
  AddButtonsContainer,
  AddButton
} from './quiz-section-maker.styles';

const QuizSectionMaker = ({ section, sectionId, ...sectionHandlers }) => {
  const handleOnChange = e => {
    const key = e.target.name;
    const { value } = e.target;

    const { changeSectionHeaderInput } = sectionHandlers;

    changeSectionHeaderInput(key, value, sectionId);
  };

  const handleOnChangeItem = e => {
    const itemKey = e.target.name;
    const itemValue = e.target.value;
    const itemId = e.target.id;

    const { changeSectionItemValue } = sectionHandlers;
    changeSectionItemValue(itemKey, itemValue, itemId, sectionId);
  };

  const handleOnDeleteItem = e => {
    const itemId = e.target.id;

    const { deleteSectionItem } = sectionHandlers;

    deleteSectionItem(itemId, sectionId);
  };

  const changeQuestionType = (questionType, questionId) => {
    const { changeSectionQuestionType } = sectionHandlers;

    changeSectionQuestionType(questionType, questionId, sectionId);
  };

  const changeLikertTopScale = (questionId, value) => {
    const { changeSectionLikertScale } = sectionHandlers;

    changeSectionLikertScale(questionId, value, sectionId);
  };

  const addQuestionOption = questionId => {
    const { addSectionQuestionOption } = sectionHandlers;

    addSectionQuestionOption(questionId, sectionId);
  };

  const deleteQuestionOption = (questionId, optionId) => {
    const { deleteSectionQuestionOption } = sectionHandlers;

    deleteSectionQuestionOption(questionId, optionId, sectionId);
  };

  const handleQuestionOptionChange = e => {
    const questionId = e.target.id;
    const optionId = e.target.name;
    const optionValue = e.target.value;

    const { changeQuestionOptionValue } = sectionHandlers;

    changeQuestionOptionValue(questionId, optionId, optionValue, sectionId);
  };

  const { sectionTitle, sectionDescription, items } = section;
  const { addSectionItem, handleDeleteSection } = sectionHandlers;

  return (
    <SectionContainer>
      <QuizSectionHeader
        previewTitle={`Sección #${sectionId + 1}`}
        titleValue={sectionTitle}
        descrValue={sectionDescription}
        handleChange={handleOnChange}
        deleteSection={() => handleDeleteSection(sectionId)}
      />

      {items.map((item, itemIdx) => {
        const { itemType, title } = item;

        if (itemType === 'description') {
          const { text } = item;

          return (
            <QuizSectionDescription
              key={itemIdx}
              title={title}
              text={text}
              itemId={itemIdx}
              handleChange={handleOnChangeItem}
              handleDelete={handleOnDeleteItem}
            />
          );
        }

        if (itemType === 'question') {
          const { questionType } = item;

          // General props for our question component
          const questionProps = {
            key: itemIdx,
            title: title,
            questionId: itemIdx,
            questionType: questionType,
            handleChange: handleOnChangeItem,
            handleDelete: handleOnDeleteItem,
            changeQuestionType: changeQuestionType
          };

          // Particular Props for the specified questionType
          let particularProps = {};

          if (questionType === 'likert') {
            particularProps.changeTopScale = changeLikertTopScale;
            particularProps.topScale = item.topScale;
            particularProps.leftText = item.leftText;
            particularProps.rightText = item.rightText;
          } else if (
            questionType === 'multiple' ||
            questionType === 'checkboxgrid'
          ) {
            particularProps.options = item.options;

            if (questionType === 'checkboxgrid') {
              particularProps.leftColumnText = item.leftColumnText;
              particularProps.rightColumnText = item.rightColumnText;
            }

            particularProps.handleOptionChange = handleQuestionOptionChange;
            particularProps.handleAddOption = addQuestionOption;
            particularProps.handleDeleteOption = deleteQuestionOption;
          }

          return (
            <QuizSectionQuestion {...questionProps} {...particularProps} />
          );
        }
      })}

      <AddButtonsContainer>
        <AddButton
          type='button'
          onClick={() => {
            addSectionItem('description', sectionId);
          }}
        >
          Descripción +
        </AddButton>
        <AddButton
          type='button'
          onClick={() => {
            addSectionItem('question', sectionId);
          }}
        >
          Pregunta +
        </AddButton>
      </AddButtonsContainer>
    </SectionContainer>
  );
};

export default QuizSectionMaker;
