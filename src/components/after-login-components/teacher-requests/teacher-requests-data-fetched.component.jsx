import React, { Component } from 'react';

import withSpinner from 'components/general-use-components/with-spinner/with-spinner.component';
import TeacherRequests from './teacher-requests.component';

import { fakeData } from './teacher-requests.data';

const TeacherRequestsWithSpinner = withSpinner(TeacherRequests);

class CompleteTeacherRequests extends Component {
  constructor() {
    super();

    this.state = {
      isFetchingData: false,
      data: []
    };
  }

  componentDidMount() {
    // Mocking the actual data
    this.setState({ data: fakeData });
  }

  render() {
    const { isFetchingData, data } = this.state;
    return (
      <TeacherRequestsWithSpinner isLoading={isFetchingData} data={data} />
    );
  }
}

export default CompleteTeacherRequests;
