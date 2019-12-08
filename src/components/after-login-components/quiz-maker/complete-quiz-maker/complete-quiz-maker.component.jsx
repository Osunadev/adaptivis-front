import React, { Component } from 'react';

import QuizSectionMaker from '../quiz-section-maker/quiz-section-maker.component';

const Section = {
  sectionTitle: '',
  sectionDescription: '',
  items: []
};

class CompleteQuizMaker extends Component {
  state = {
    // We start this component always with 1 section
    sections: [{ sectionTitle: '', sectionDescription: '', items: [] }]
  };

  render() {
    const { sections } = this.state;

    return (
      <div>
        {sections.map((section, id) => {
          return <QuizSectionMaker key={id} section={section} sectionId={id} />;
        })}
      </div>
    );
  }
}

export default CompleteQuizMaker;
