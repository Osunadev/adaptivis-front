import React, {Component} from 'react';

import StudentQuizVisualizerHeader from '../quiz-visualizer-header/student-quiz-visualizer-header.component';

import './quiz-styles.css';
import StudentQuizVisualizerSection from '../student-quiz-visualizer-section/student-quiz-visualizer-section.component';

const StudentQuizVisualizer = () => {
  // JSX
  return (
    <div>
      <StudentQuizVisualizerHeader/>
      <StudentQuizVisualizerSection/>
      <StudentQuizVisualizerSection/>
      <StudentQuizVisualizerSection/>
    </div>
  );
};

export default StudentQuizVisualizer;
