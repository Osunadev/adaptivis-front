import React from 'react';

import TitledWrapper from 'components/after-login-components/titled-wrapper/titled-wrapper.component';
import QuizUploader from 'components/after-login-components/quiz-uploader/quiz-uploader.component';
import QuizTypeSelector from 'components/after-login-components/quiz-type-selector/quiz-type-selector.component';

const UploadResults = () => {
  return (
    <>
      <TitledWrapper title='Encuestas disponibles'>
        <QuizTypeSelector />
      </TitledWrapper>
      <TitledWrapper title='Adjuntar archivo'>
        <QuizUploader />
      </TitledWrapper>
    </>
  );
};

export default UploadResults;
