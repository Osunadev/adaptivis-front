import React, { Component } from 'react';

import { Icon } from 'antd';

import BodyAttributes from 'components/before-login-components/body-attributes/body-attributes.component';
import QuizSectionMaker from '../quiz-section-maker/quiz-section-maker.component';

import {
  AddSectionSpan,
  AddSectionContainer,
  CreateQuizButton,
  CreateQuizButtonContainer
} from './complete-quiz-maker.styles';

// These are just Object Templates that serve as a boilerplate
import {
  Description,
  LikertQuestion,
  MultipleQuestion,
  Section
} from './complete-quiz-maker.data';

class CompleteQuizMaker extends Component {
  state = {
    // We start this component always with 1 section
    sections: [{ sectionTitle: '', sectionDescription: '', items: [] }]
  };

  handleAddNewSection = () => {
    this.setState(prevState => {
      const sectionsCopy = [...prevState.sections];
      sectionsCopy.push({ ...Section });

      return { sections: sectionsCopy };
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

  // Handlers for the sections
  addSectionItem = (itemType, sectionId) => {
    let item;

    // By default we create a Linker Type Question
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

  changeSectionField = (fieldKey, fieldValue, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId][fieldKey] = fieldValue;

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

  changeSectionQuestionType = (questionType, questionId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      let newQuestionType;

      // We're keeping the same question title because both types of questions have a title
      if (questionType === 'likert') {
        newQuestionType = { ...LikertQuestion };
      } else if (questionType === 'multiple') {
        // We neeed to make a deep copy because of our answers array
        newQuestionType = JSON.parse(JSON.stringify(MultipleQuestion));
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

  // Handlers for the Multiple Answer Questions

  addSectionQuestionAnswer = (questionId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[questionId].answers.push('');

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  deleteSectionQuestionAnswer = (questionId, answerId, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[questionId].answers.splice(
        answerId,
        1
      );

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  changeQuestionAnswerValue = (questionId, answerId, value, sectionId) => {
    this.setState(prevState => {
      const sectionsShallowCopy = [...prevState.sections];

      sectionsShallowCopy[sectionId].items[questionId].answers[
        answerId
      ] = value;

      return {
        sections: sectionsShallowCopy
      };
    });
  };

  handleCreateQuiz = () => {
    console.log(this.state.sections);
  };

  render() {
    const { sections } = this.state;

    const sectionHandlers = {
      handleDeleteSection: this.handleDeleteSection,
      addSectionItem: this.addSectionItem,
      changeSectionField: this.changeSectionField,
      changeSectionItemValue: this.changeSectionItemValue,
      deleteSectionItem: this.deleteSectionItem,
      changeSectionQuestionType: this.changeSectionQuestionType,
      changeSectionLikertScale: this.changeSectionLikertScale,
      addSectionQuestionAnswer: this.addSectionQuestionAnswer,
      deleteSectionQuestionAnswer: this.deleteSectionQuestionAnswer,
      changeQuestionAnswerValue: this.changeQuestionAnswerValue
    };

    return (
      <div>
        <BodyAttributes background='lightblue' />

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
        <AddSectionContainer onClick={this.handleAddNewSection}>
          <AddSectionSpan>AÑADIR SECCIÓN</AddSectionSpan>
          <Icon
            style={{ fontSize: '34px', color: 'black', cursor: 'pointer' }}
            type='plus-circle'
          />
        </AddSectionContainer>

        <CreateQuizButtonContainer>
          <CreateQuizButton type='button' onClick={this.handleCreateQuiz}>
            Terminar Cuestionario
          </CreateQuizButton>
        </CreateQuizButtonContainer>
      </div>
    );
  }
}

export default CompleteQuizMaker;
