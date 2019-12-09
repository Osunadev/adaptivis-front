import React from 'react';

import { Route } from 'react-router-dom';

import CreateSubjectsTableFetched from 'components/after-login-components/create-subject/create-subjects-table-fetched.component';
import createSubjectForm from 'components/after-login-components/create-subject/create-subject-form.component';

const SubjectsLanding = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={CreateSubjectsTableFetched} />
      <Route exact path={`${match.path}/crear`} component={createSubjectForm} />
      <Route
        exact
        path={`${match.path}/editar/:idMateria`}
        component={({ idMateria }) => <p>{idMateria}</p>}
      />
      {/* <Route exact path={match.path} component={CreateSubjectsTableFetched} /> */}
    </div>
  );
};

export default SubjectsLanding;
