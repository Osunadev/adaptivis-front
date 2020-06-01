import React, { Component } from 'react';

import { Icon } from 'antd';

import GlobalStyle from 'components/general-use-components/global-style/global-style.component';
import QuizSectionMaker from '../quiz-section-maker/quiz-section-maker.component';
import { QuizTitle } from './complete-quiz-maker.styles';

import {
  AddSectionSpan,
  AddSectionContainer,
  CenteredContainer,
  CreateQuizButton,
  CreateQuizButtonContainer
} from './complete-quiz-maker.styles';

// These are just Object Templates that serve as a boilerplate
import {
  Description,
  LikertQuestion,
  MultipleQuestion,
  CheckboxGridQuestion,
  Section
} from './complete-quiz-maker.data';

class CompleteQuizMaker extends Component {
  state = {
    // We start this component always with 1 section
    sections: [{ sectionTitle: '', sectionDescription: '', items: [] }],
    quizTitle: ''
  };

  /* GENERAL QUIZ HANDLERS */
  handleQuizTitleChange = ({ target }) => {
    this.setState({ quizTitle: target.value });
  };

  handleCreateQuiz = () => {
    console.log(JSON.stringify(this.state));
  };

  /* SECTION HANDLERS */
  handleAddNewSection = () => {
    this.setState(prevState => {
      const sectionsCopy = [...prevState.sections];
      sectionsCopy.push({ ...Section });

      return { sections: sectionsCopy };
    });
  };

  changeSectionHeaderInput = (fieldKey, fieldValue, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId][fieldKey] = fieldValue;

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  handleDeleteSection = sectionId => {
    this.setState(prevState => {
      const sectionsDeepCopy = JSON.parse(JSON.stringify(prevState.sections));

      sectionsDeepCopy.splice(sectionId, 1);

      return {
        sections: sectionsDeepCopy
      };
    });
  };

  /* SECTION ITEMS HANDLERS */
  addSectionItem = (itemType, sectionId) => {
    let item;

    // By default we create a Liktert Type Question
    if (itemType === 'question') item = { ...LikertQuestion };
    else if (itemType === 'description') item = { ...Description };

    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      const newItems = [...prevState.sections[sectionId].items];
      newItems.push(item);

      sectionsShallowCopy[sectionId].items = newItems;

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  deleteSectionItem = (itemId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      // Deleting that item from the corresponding section items array;
      sectionsShallowCopy[sectionId].items.splice(itemId, 1);

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  changeSectionItemValue = (itemKey, itemValue, itemId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[itemId][itemKey] = itemValue;

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  /* SECTION QUESTIONS HANDLERS */
  changeSectionQuestionType = (questionType, questionId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      let newQuestionType;

      // We're keeping the same question title because all questions have a title
      switch (questionType) {
        case 'likert':
          newQuestionType = { ...LikertQuestion };
          break;
        case 'multiple':
          // We neeed to make a deep copy because of our options array
          newQuestionType = JSON.parse(JSON.stringify(MultipleQuestion));
          break;
        case 'checkboxgrid':
          // We neeed to make a deep copy because of our options array
          newQuestionType = JSON.parse(JSON.stringify(CheckboxGridQuestion));
          break;
      }

      sectionsShallowCopy[sectionId].items[questionId] = {
        ...newQuestionType,
        title: sectionsShallowCopy[sectionId].items[questionId].title
      };

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  // Handlers for the Likert Scale Questions
  changeSectionLikertScale = (questionId, value, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[questionId].topScale = value;

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  // Handlers for the Multiple Questions and for Checkbox Grid Questions
  addSectionQuestionOption = (questionId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[questionId].options.push('');

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  deleteSectionQuestionOption = (questionId, answerId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[questionId].options.splice(
        answerId,
        1
      );

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  changeQuestionOptionValue = (questionId, answerId, value, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[questionId].options[
        answerId
      ] = value;

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  render() {
    const { quizTitle, sections } = this.state;

    const sectionHandlers = {
      handleDeleteSection: this.handleDeleteSection,
      addSectionItem: this.addSectionItem,
      changeSectionHeaderInput: this.changeSectionHeaderInput,
      changeSectionItemValue: this.changeSectionItemValue,
      deleteSectionItem: this.deleteSectionItem,
      changeSectionQuestionType: this.changeSectionQuestionType,
      changeSectionLikertScale: this.changeSectionLikertScale,
      addSectionQuestionOption: this.addSectionQuestionOption,
      deleteSectionQuestionOption: this.deleteSectionQuestionOption,
      changeQuestionOptionValue: this.changeQuestionOptionValue
    };

    return (
      <div>
        <GlobalStyle bgColor='#E8E8E8' />
        <QuizTitle
          placeholder='Título de la Encuesta'
          value={quizTitle}
          onChange={this.handleQuizTitleChange}
        />
        {sections.map((section, id) => {
          return (
            <QuizSectionMaker
              key={id}
              section={section}
              sectionId={id}
              {...sectionHandlers}
            />
          );
        })}
        <CenteredContainer>
          <AddSectionContainer onClick={this.handleAddNewSection}>
            <AddSectionSpan>AÑADIR SECCIÓN </AddSectionSpan>
            <Icon
              style={{
                fontSize: '20px',
                color: 'black',
                marginLeft: '8px'
              }}
              type='plus-circle'
            />
          </AddSectionContainer>
        </CenteredContainer>

        <CreateQuizButtonContainer>
          <CreateQuizButton onClick={this.handleCreateQuiz}>
            TERMINAR ENCUESTA
          </CreateQuizButton>
        </CreateQuizButtonContainer>
      </div>
    );
  }
}

export default CompleteQuizMaker;
