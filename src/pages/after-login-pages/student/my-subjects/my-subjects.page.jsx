import React from 'react';

import TitledWrapper from 'components/after-login-components/titled-wrapper/titled-wrapper.component';
import SubjectCodeBox from 'components/after-login-components/subject-code-box/subject-code-box.component';
import SubjectsTable from 'components/after-login-components/subjects-table/subjects-table.component';

import { misCursos } from 'testing-data/assigments.data';

import { SubjectsContainer } from './my-subjects.styles';

const MySubjectsPage = () => {
  return (
    <SubjectsContainer>
      <TitledWrapper title='Materias Cursadas'>
        <SubjectsTable data={misCursos} />
      </TitledWrapper>

      <TitledWrapper title='Asignarse a un curso'>
        <SubjectCodeBox />
      </TitledWrapper>
    </SubjectsContainer>
  );
};

export default MySubjectsPage;
