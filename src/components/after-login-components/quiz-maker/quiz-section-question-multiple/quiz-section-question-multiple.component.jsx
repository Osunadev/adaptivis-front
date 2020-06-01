import React from 'react';

import {
  OptionCircle,
  OptionText,
  RemoveText,
  OptionContainer,
  AddOptionButton,
  ButtonContainer
} from './quiz-section-question-multiple.styles';

const QuizSectionQuestionMultiple = ({
  options,
  questionId,
  handleOptionChange,
  handleAddOption,
  handleDeleteOption
}) => {
  const addOption = () => {
    handleAddOption(questionId);
  };

  const deleteOption = optionId => {
    handleDeleteOption(questionId, optionId);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      // Enter was pressed
      addOption();
    }
  };

  return (
    <>
      {options.map((opt, optIdx) => (
        <OptionContainer key={optIdx}>
          <OptionCircle />
          <OptionText
            id={questionId}
            onChange={handleOptionChange}
            onKeyDown={handleKeyDown}
            value={opt}
            name={optIdx}
            placeholder='Añadir opción'
          />
          <RemoveText type='close' onClick={() => deleteOption(optIdx)} />
        </OptionContainer>
      ))}
      <ButtonContainer>
        <AddOptionButton onClick={addOption}>
          Agregar respuesta +
        </AddOptionButton>
      </ButtonContainer>
    </>
  );
};

export default QuizSectionQuestionMultiple;
