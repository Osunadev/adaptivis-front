import React from 'react';

import QuizUploader from 'components/after-login-components/upload-results/quiz-uploader/quiz-uploader.component';
import QuizTypeSelector from 'components/after-login-components/upload-results/quiz-type-selector/quiz-type-selector.component';

const UploadResults = () => {
  return (
    <>
      <QuizTypeSelector />
      <QuizUploader />
    </>
  );
};

export default UploadResults;
