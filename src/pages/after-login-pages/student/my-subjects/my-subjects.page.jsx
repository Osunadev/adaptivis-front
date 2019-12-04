import React, { Component } from 'react';

import SpinnerHOC from 'components/after-login-components/spinner-hoc/spinner-hoc.component';

import SubjectCodeBox from 'components/after-login-components/subject-code-box/subject-code-box.component';
import SubjectsTable from 'components/after-login-components/subjects-table/subjects-table.component';

import { misCursos } from 'testing-data/assigments.data';
import { SubjectsContainer } from './my-subjects.styles';

const MySubjects = () => (
  <SubjectsContainer>
    <SubjectsTable data={misCursos} />
    <SubjectCodeBox />
  </SubjectsContainer>
);

const MySubjectsWithSpinner = SpinnerHOC(MySubjects);

class MySubjectsPage extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    // This should be the request fetch call
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    return <MySubjectsWithSpinner isLoading={isLoading} />;
  }
}

export default MySubjectsPage;
