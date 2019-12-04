import React from 'react';

import QuizUploader from 'components/after-login-components/quiz-uploader/quiz-uploader.component';
import QuizTypeSelector from 'components/after-login-components/quiz-type-selector/quiz-type-selector.component';

const UploadResults = () => {
  return (
    <>
      <QuizTypeSelector />
      <QuizUploader />
    </>
  );
};

export default UploadResults;
