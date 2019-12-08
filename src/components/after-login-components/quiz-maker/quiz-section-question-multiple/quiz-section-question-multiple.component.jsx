import React from 'react';

import { Icon } from 'antd';

import {
  AnswerCircle,
  AnswerText,
  AnswerContainer,
  AddAnswerButton,
  ButtonContainer
} from './quiz-section-question-multiple.styles';

const QuizSectionQuestionMultiple = ({
  answers,
  questionId,
  handleAnswerChange,
  handleAddAnswer,
  handleDeleteAnswer
}) => {
  const addAnswer = () => {
    handleAddAnswer(questionId);
  };

  const deleteAnswer = answerId => {
    handleDeleteAnswer(questionId, answerId);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      // Enter was pressed
      addAnswer();
    }
  };

  return (
    <>
      {answers.map((ans, ansIdx) => (
        <AnswerContainer key={ansIdx}>
          <AnswerCircle />
          <AnswerText
            id={questionId}
            onChange={handleAnswerChange}
            onKeyDown={handleKeyDown}
            value={ans}
            name={ansIdx}
            placeholder='Añadir opción'
          />
          <Icon
            style={{ marginLeft: '16px', fontSize: '20px', color: '#a5b9b2' }}
            onClick={() => deleteAnswer(ansIdx)}
            type='close'
          />
        </AnswerContainer>
      ))}
      <ButtonContainer>
        <AddAnswerButton type='button' onClick={addAnswer}>
          Agregar respuesta +
        </AddAnswerButton>
      </ButtonContainer>
    </>
  );
};

export default QuizSectionQuestionMultiple;
