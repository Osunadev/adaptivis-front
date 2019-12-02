import React from 'react';

import CurrentQuizResultsTable from 'components/after-login-components/current-quiz-results-table/current-quiz-results-table.component';
import HistoryQuizResultsTable from 'components/after-login-components/history-quiz-results-table/history-quiz-results-table.component';

import TitledWrapper from 'components/after-login-components/titled-wrapper/titled-wrapper.component';

import { SUBJECTS_DATA } from 'components/after-login-components/current-quiz-results-table/current-quiz-results-table.data';
import { SUBJECTS_HISTORY } from 'components/after-login-components/history-quiz-results-table/history-quiz-results-table.data';

const MyResultsPage = () => (
  <>
    <TitledWrapper title='Resultado de materias actuales'>
      <CurrentQuizResultsTable subjectsData={SUBJECTS_DATA} />
    </TitledWrapper>
    <TitledWrapper title='Historial de materias'>
      <HistoryQuizResultsTable subjectsHistory={SUBJECTS_HISTORY} />
    </TitledWrapper>
  </>
);

export default MyResultsPage;
