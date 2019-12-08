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

    const { changeSectionField } = sectionHandlers;

    changeSectionField(key, value, sectionId);
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

  const addQuestionAnswer = questionId => {
    const { addSectionQuestionAnswer } = sectionHandlers;

    addSectionQuestionAnswer(questionId, sectionId);
  };

  const deleteQuestionAnswer = (questionId, answerId) => {
    const { deleteSectionQuestionAnswer } = sectionHandlers;

    deleteSectionQuestionAnswer(questionId, answerId, sectionId);
  };

  const handleQuestionAnswerChange = e => {
    const questionId = e.target.id;
    const answerId = e.target.name;
    const answerValue = e.target.value;

    const { changeQuestionAnswerValue } = sectionHandlers;

    changeQuestionAnswerValue(questionId, answerId, answerValue, sectionId);
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

          if (questionType === 'likert') {
            const { topScale, leftText, rightText } = item;

            const likertProps = {
              changeTopScale: changeLikertTopScale,
              topScale,
              leftText,
              rightText
            };

            return <QuizSectionQuestion {...questionProps} {...likertProps} />;
          }

          if (questionType === 'multiple') {
            const { answers } = item;

            const multipleProps = {
              handleAnswerChange: handleQuestionAnswerChange,
              handleAddAnswer: addQuestionAnswer,
              handleDeleteAnswer: deleteQuestionAnswer,
              answers
            };

            return (
              <QuizSectionQuestion {...questionProps} {...multipleProps} />
            );
          }
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
