import React from 'react';

import CurrentQuizResultsTable from 'components/after-login-components/my-results/current-quiz-results-table/current-quiz-results-table.component';
import HistoryQuizResultsTable from 'components/after-login-components/my-results/history-quiz-results-table/history-quiz-results-table.component';

import { SUBJECTS_DATA } from 'components/after-login-components/my-results/current-quiz-results-table/current-quiz-results-table.data';
import { SUBJECTS_HISTORY } from 'components/after-login-components/my-results/history-quiz-results-table/history-quiz-results-table.data';

const MyResultsPage = () => (
  <>
    <CurrentQuizResultsTable subjectsData={SUBJECTS_DATA} />
    <HistoryQuizResultsTable subjectsHistory={SUBJECTS_HISTORY} />
  </>
);

export default MyResultsPage;
