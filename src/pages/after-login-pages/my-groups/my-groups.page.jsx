import React, { Component } from 'react';

import withSpinner from 'components/general-use-components/with-spinner/with-spinner.component';

import SubjectCodeBox from 'components/after-login-components/my-groups/group-code-box/group-code-box.component';
import SubjectsTable from 'components/after-login-components/my-groups/groups-table/groups-table.component';

import { SUBJECTS_DATA } from 'components/after-login-components/my-groups/groups-table/groups-table.data';
import { SubjectsContainer } from './my-groups.styles';

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
