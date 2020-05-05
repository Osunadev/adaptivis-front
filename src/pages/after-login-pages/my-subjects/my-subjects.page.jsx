import React, { Component } from 'react';

import withSpinner from 'components/general-use-components/with-spinner/with-spinner.component';

import SubjectCodeBox from 'components/after-login-components/my-subjects/subject-code-box/subject-code-box.component';
import SubjectsTable from 'components/after-login-components/my-subjects/subjects-table/subjects-table.component';

import { SUBJECTS_DATA } from 'components/after-login-components/my-subjects/subjects-table/subjects-table.data';
import { SubjectsContainer } from './my-subjects.styles';

const MySubjects = () => (
  <SubjectsContainer>
    <SubjectsTable data={SUBJECTS_DATA} />
    <SubjectCodeBox />
  </SubjectsContainer>
);

const MySubjectsWithSpinner = withSpinner(MySubjects);

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
