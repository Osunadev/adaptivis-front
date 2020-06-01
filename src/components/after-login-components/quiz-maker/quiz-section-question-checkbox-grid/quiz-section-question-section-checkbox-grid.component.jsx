import React from 'react';

import {
  OptionText,
  OptionNumber,
  OptionContainer,
  OptionColumnBox,
  OptionColumnBoxContainer,
  RemoveOption,
  ButtonContainer,
  AddOptionButton,
  ColumnText,
  GridColumnsContainer
} from './quiz-section-question-checkbox-grid.styles';

const QuizSectionQuestionCheckboxGrid = ({
  options,
  leftColumnText,
  rightColumnText,
  questionId,
  handleChange,
  handleOptionChange,
  handleAddOption,
  handleDeleteOption
}) => {
  const deleteOption = optionId => {
    handleDeleteOption(questionId, optionId);
  };

  const addOption = () => {
    handleAddOption(questionId);
  };

  return (
    <>
      {!!options.length && (
        <GridColumnsContainer>
          <ColumnText
            type='text'
            id={questionId}
            value={leftColumnText}
            onChange={handleChange}
            name='leftColumnText'
            placeholder='Columna 1'
          />
          <ColumnText
            type='text'
            id={questionId}
            value={rightColumnText}
            onChange={handleChange}
            name='rightColumnText'
            placeholder='Columna 2'
            rightMargin
          />
        </GridColumnsContainer>
      )}

      {options.map((opt, optIdx) => (
        <OptionContainer>
          <OptionNumber>{optIdx + 1} - </OptionNumber>
          <OptionText
            id={questionId}
            onChange={handleOptionChange}
            value={opt}
            name={optIdx}
            placeholder='Texto del renglón'
          />

          {/* These are only column boxes for decoration purposes */}
          <OptionColumnBoxContainer>
            <OptionColumnBox />
          </OptionColumnBoxContainer>
          <OptionColumnBoxContainer>
            <OptionColumnBox />
          </OptionColumnBoxContainer>

          <RemoveOption type='close' onClick={() => deleteOption(optIdx)} />
        </OptionContainer>
      ))}
      <ButtonContainer>
        <AddOptionButton type='button' onClick={addOption}>
          Agregar Renglón +
        </AddOptionButton>
      </ButtonContainer>
    </>
  );
};

export default QuizSectionQuestionCheckboxGrid;
