import React, {Component} from 'react';

import StudentQuizVisualizerHeader from '../quiz-visualizer-header/student-quiz-visualizer-header.component';

import './quiz-styles.css';

const StudentQuizVisualizer = () => {
  // JSX
  return (
    <div>
      <StudentQuizVisualizerHeader/>
      <div>
      <h1 className='quiz-title'>Student Quiz Visualizer</h1>
      <p>Estas visualizando el quiz de motivación</p>
      <p>Párrafo nuevo</p>
      </div>
    </div>
  );
};

export default StudentQuizVisualizer;
