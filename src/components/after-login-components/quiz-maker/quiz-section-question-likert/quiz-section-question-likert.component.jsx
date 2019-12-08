import React from 'react';

import { Select } from 'antd';

import {
  LikertTopRangeContainer,
  LikertQuestionContainer,
  LikertLabelInput,
  LikertRangeContainer,
  LikertRangeNumber
} from './quiz-section-question-likert.styles';

const { Option } = Select;

// The possible top values for the likert scale
const selectOptionValues = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const QuizSectionQuestionLikert = ({
  questionId,
  handleChange,
  changeTopScale,
  topScale,
  leftText,
  rightText
}) => {
  const selectTopScale = value => {
    changeTopScale(questionId, value);
  };

  return (
    <LikertQuestionContainer>
      <LikertTopRangeContainer>
        <span style={{ fontSize: '20px' }}>De</span>
        <span style={{ fontSize: '20px' }}>1</span>
        <span style={{ fontSize: '20px' }}>a</span>

        <Select
          size='large'
          value={topScale}
          onChange={selectTopScale}
          style={{ width: '75px', fontSize: '20px' }}
        >
          {selectOptionValues.map(optValue => (
            <Option
              key={`opt-${optValue}`}
              style={{ fontSize: '20px', padding: '8px' }}
              value={optValue}
            >
              {optValue}
            </Option>
          ))}
        </Select>
      </LikertTopRangeContainer>

      <LikertRangeContainer>
        <LikertRangeNumber>1</LikertRangeNumber>
        <LikertLabelInput
          placeholder='Etiqueta Izquierda'
          type='text'
          name='leftText'
          id={questionId}
          value={leftText}
          onChange={handleChange}
        />
      </LikertRangeContainer>

      <LikertRangeContainer>
        <LikertRangeNumber>{topScale}</LikertRangeNumber>
        <LikertLabelInput
          placeholder='Etiqueta derecha'
          type='text'
          name='rightText'
          id={questionId}
          value={rightText}
          onChange={handleChange}
        />
      </LikertRangeContainer>
    </LikertQuestionContainer>
  );
};

export default QuizSectionQuestionLikert;
