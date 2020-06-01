import React from 'react';

import { Select } from 'antd';

import QuizSectionQuestionMultiple from '../quiz-section-question-multiple/quiz-section-question-multiple.component';
import QuizSectionQuestionLikert from '../quiz-section-question-likert/quiz-section-question-likert.component';
import QuizSectionQuestionCheckboxGrid from '../quiz-section-question-checkbox-grid/quiz-section-question-checkbox-grid.component';

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
  ...otherProps
}) => {
  const selectOnChange = value => {
    // Could be 'likert', 'multiple', 'checkboxgrid'
    changeQuestionType(value, questionId);
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
          <Option
            style={{ fontSize: '20px', padding: '8px' }}
            value='checkboxgrid'
          >
            Grid de Casillas de Verificación
          </Option>
          <Option style={{ fontSize: '20px', padding: '8px' }} value='open'>
            Abierta
          </Option>
        </Select>
      </ContainerQuestionHeader>
      {
        {
          likert: (
            <QuizSectionQuestionLikert
              questionId={questionId}
              handleChange={handleChange}
              changeTopScale={otherProps.changeTopScale}
              topScale={otherProps.topScale}
              leftText={otherProps.leftText}
              rightText={otherProps.rightText}
            />
          ),
          multiple: (
            <QuizSectionQuestionMultiple
              options={otherProps.options}
              questionId={questionId}
              handleOptionChange={otherProps.handleOptionChange}
              handleAddOption={otherProps.handleAddOption}
              handleDeleteOption={otherProps.handleDeleteOption}
            />
          ),
          checkboxgrid: (
            <QuizSectionQuestionCheckboxGrid
              options={otherProps.options}
              handleChange={handleChange}
              leftColumnText={otherProps.leftColumnText}
              rightColumnText={otherProps.rightColumnText}
              questionId={questionId}
              handleGridOptionChange={otherProps.handleGridOptionChange}
              handleAddOption={otherProps.handleAddOption}
              handleDeleteOption={otherProps.handleDeleteOption}
            />
          )
          /* We don't check for an questionType === 'open' because that component only needs to
              define the title, and that's already shown by the TitleTextInput, which is the title of 
              the question, no matter what kind of question is */
        }[questionType]
      }
    </ContainerQuestion>
  );
};

export default QuizSectionQuestion;
