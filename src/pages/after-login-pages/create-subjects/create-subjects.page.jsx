import React from 'react';

import { Route } from 'react-router-dom';

import CreateSubjectsTableFetched from 'components/after-login-components/create-subjects/create-subjects-table/create-subjects-table-fetched.component';
import createSubjectForm from 'components/after-login-components/create-subjects/create-subject-form/create-subject-form.component';

const CreateSubjectsPage = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={CreateSubjectsTableFetched} />
      <Route exact path={`${match.path}/crear`} component={createSubjectForm} />
      <Route
        exact
        path={`${match.path}/editar/:idMateria`}
        component={({ match }) => <p>{match.params.idMateria}</p>}
      />
      {/* <Route exact path={match.path} component={CreateSubjectsTableFetched} /> */}
    </div>
  );
};

export default CreateSubjectsPage;
