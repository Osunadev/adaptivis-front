import React from 'react';

import { Select } from 'antd';

import QuizSectionQuestionMultiple from '../quiz-section-question-multiple/quiz-section-question-multiple.component';
import QuizSectionQuestionLikert from '../quiz-section-question-likert/quiz-section-question-likert.component';

import QuizDeleteItem from '../quiz-delete-item/quiz-delete-item.component';

import {
  ContainerQuestionHeader,
  TitleTextInput,
  ContainerQuestion
} from './quiz-section-question.styles';

const { Option } = Select;

const QuizSectionQuestion = ({
  title,
  questionId,
  questionType,
  handleChange,
  handleDelete,
  changeQuestionType,
  changeTopScale = null,
  topScale = null,
  leftText = null,
  rightText = null,
  answers = null,
  handleAnswerChange = null,
  handleAddAnswer = null,
  handleDeleteAnswer = null
}) => {
  const selectOnChange = value => {
    if (value === 'likert') {
      changeQuestionType('likert', questionId);
    } else if (value === 'multiple') {
      changeQuestionType('multiple', questionId);
    }
  };

  return (
    <ContainerQuestion>
      <QuizDeleteItem
        itemId={questionId}
        onItemClick={handleDelete}
        title='Eliminar Pregunta'
      />

      <ContainerQuestionHeader>
        <TitleTextInput
          type='text'
          placeholder='Pregunta'
          value={title}
          name='title'
          id={questionId}
          onChange={handleChange}
        />
        <Select
          size='large'
          value={questionType}
          onChange={selectOnChange}
          style={{ width: '32%', fontSize: '24px', marginTop: '12px' }}
        >
          <Option style={{ fontSize: '20px', padding: '8px' }} value='likert'>
            Escala Likert
          </Option>
          <Option style={{ fontSize: '20px', padding: '8px' }} value='multiple'>
            Opción Múltiple
          </Option>
        </Select>
      </ContainerQuestionHeader>
      {
        {
          likert: (
            <QuizSectionQuestionLikert
              questionId={questionId}
              handleChange={handleChange}
              changeTopScale={changeTopScale}
              topScale={topScale}
              leftText={leftText}
              rightText={rightText}
            />
          ),
          multiple: (
            <QuizSectionQuestionMultiple
              answers={answers}
              questionId={questionId}
              handleAnswerChange={handleAnswerChange}
              handleAddAnswer={handleAddAnswer}
              handleDeleteAnswer={handleDeleteAnswer}
            />
          )
        }[questionType]
      }
    </ContainerQuestion>
  );
};

export default QuizSectionQuestion;
