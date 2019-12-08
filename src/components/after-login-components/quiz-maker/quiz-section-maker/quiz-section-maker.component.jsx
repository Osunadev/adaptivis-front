import React, { Component } from 'react';

import QuizSectionHeader from 'components/after-login-components/quiz-maker/quiz-section-header/quiz-section-header.component';
import QuizSectionDescription from 'components/after-login-components/quiz-maker/quiz-section-description/quiz-section-description.component';
import QuizSectionQuestion from 'components/after-login-components/quiz-maker/quiz-section-question/quiz-section-question.component';

// These are just Object Templates that serve as a boilerplate
import {
  Description,
  LikertQuestion,
  MultipleQuestion
} from './quiz-section-maker.data';

import {
  SectionContainer,
  AddButtonsContainer,
  AddButton
} from './quiz-section-maker.styles';

class QuizSectionMaker extends Component {
  constructor() {
    super();

    this.state = {
      sectionTitle: '',
      sectionDescription: '',
      items: []
    };
  }

  handleAddItem = itemType => {
    let item;

    // By default we create a Linker Type Question
    if (itemType === 'question') item = { ...LikertQuestion };
    else if (itemType === 'description') item = { ...Description };

    this.setState(prevState => {
      const newItems = [...prevState.items];
      newItems.push(item);

      return {
        items: newItems
      };
    });
  };

  handleOnChange = e => {
    const key = e.target.name;

    this.setState({ [key]: e.target.value });
  };

  handleOnChangeItem = e => {
    const itemKey = e.target.name;
    const itemValue = e.target.value;
    const itemId = e.target.id;

    this.setState(prevState => {
      const itemsCopy = [...prevState.items];
      itemsCopy[itemId][itemKey] = itemValue;

      return {
        items: itemsCopy
      };
    });
  };

  handleOnDeleteItem = e => {
    const itemId = e.target.id;

    this.setState(prevState => {
      const itemsCopy = [...prevState.items];

      // Deleting that item from the items array;
      itemsCopy.splice(itemId, 1);

      return {
        items: itemsCopy
      };
    });
  };

  changeQuestionType = (questionType, questionId) => {
    this.setState(prevState => {
      const itemsCopy = [...prevState.items];
      let newQuestionType;

      // We're keeping the same question title because both types of questions have a title
      if (questionType === 'likert') {
        newQuestionType = { ...LikertQuestion };
      } else if (questionType === 'multiple') {
        // We neeed to make a deep copy because of our answers array
        newQuestionType = JSON.parse(JSON.stringify(MultipleQuestion));
      }

      itemsCopy[questionId] = {
        ...newQuestionType,
        title: itemsCopy[questionId].title
      };

      return { items: itemsCopy };
    });
  };

  // Handlers for the Likert Scale Questions
  changeLikertTopScale = (questionId, value) => {
    this.setState(prevState => {
      const itemsCopy = [...prevState.items];

      itemsCopy[questionId].topScale = value;

      return {
        items: itemsCopy
      };
    });
  };

  // Handlers for the Multiple Answer Questions
  addQuestionAnswer = questionId => {
    this.setState(prevState => {
      const itemsCopy = [...prevState.items];

      itemsCopy[questionId].answers.push('');

      return {
        items: itemsCopy
      };
    });
  };

  deleteQuestionAnswer = (questionId, answerId) => {
    this.setState(prevState => {
      const itemsCopy = [...prevState.items];
      const answersCopy = [...prevState.items[questionId].answers];

      answersCopy.splice(answerId, 1);

      itemsCopy[questionId].answers = answersCopy;

      return {
        items: itemsCopy
      };
    });
  };

  handleQuestionAnswerChange = e => {
    const questionId = e.target.id;
    const answerId = e.target.name;
    const answerValue = e.target.value;

    console.log(questionId, answerId, answerValue);

    this.setState(prevState => {
      const itemsCopy = [...prevState.items];

      itemsCopy[questionId].answers[answerId] = answerValue;

      return {
        items: itemsCopy
      };
    });
  };

  render() {
    const { sectionTitle, sectionDescription, items } = this.state;
    return (
      <SectionContainer>
        <QuizSectionHeader
          titleValue={sectionTitle}
          descrValue={sectionDescription}
          handleChange={this.handleOnChange}
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
                handleChange={this.handleOnChangeItem}
                handleDelete={this.handleOnDeleteItem}
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
              handleChange: this.handleOnChangeItem,
              handleDelete: this.handleOnDeleteItem,
              changeQuestionType: this.changeQuestionType
            };

            if (questionType === 'likert') {
              const { topScale, leftText, rightText } = item;

              const likertProps = {
                changeTopScale: this.changeLikertTopScale,
                topScale,
                leftText,
                rightText
              };

              return (
                <QuizSectionQuestion {...questionProps} {...likertProps} />
              );
            }

            if (questionType === 'multiple') {
              const { answers } = item;

              const multipleProps = {
                handleAnswerChange: this.handleQuestionAnswerChange,
                handleAddAnswer: this.addQuestionAnswer,
                handleDeleteAnswer: this.deleteQuestionAnswer,
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
              this.handleAddItem('description');
            }}
          >
            Descripción +
          </AddButton>
          <AddButton
            type='button'
            onClick={() => {
              this.handleAddItem('question');
            }}
          >
            Pregunta +
          </AddButton>
        </AddButtonsContainer>
      </SectionContainer>
    );
  }
}

export default QuizSectionMaker;
