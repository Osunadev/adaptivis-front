import React, { Component } from 'react';
import { Alert } from 'antd';

import withSpinner from 'components/general-use-components/with-spinner/with-spinner.component';
import { getTokenFromStorage } from 'utils/tokens/jwt-utils';
import TeacherRequests from './teacher-requests.component';

const TeacherRequestsWithSpinner = withSpinner(TeacherRequests);

async function getTeacherRequests() {
  // Mocking the actual data
  const accessToken = getTokenFromStorage('accessToken', 'local');

  const teachersReqArray = [];
  let teacherRequest;
  let pageIdx = 1;

  do {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_ENDPOINT}/professor/requests?type=PENDING&per_page=10&page=${pageIdx}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status !== 200) throw new Error();

    teacherRequest = await response.json();

    if (teacherRequest.resultSize > 0) {
      const formattedResults = teacherRequest.results.map(
        ({ email, employeeId, requestDate, request_id, ...namesObj }) => {
          return {
            fullName: Object.values(namesObj).join(' '),
            date: requestDate,
            // The key will be used as a unique identifier
            key: request_id,
            email
          };
        }
      );

      teachersReqArray.push(...formattedResults);
      pageIdx++;
    }
  } while (teacherRequest.next_page !== null);

  return teachersReqArray;
}

class CompleteTeacherRequests extends Component {
  constructor() {
    super();

    this.state = {
      isFetchingData: false,
      data: [],
      hasError: false,
      errorTitle: ''
    };
  }

  componentDidMount() {
    this.setState({ isFetchingData: true }, async () => {
      try {
        const teacherRequestsData = await getTeacherRequests();

        this.setState({ isFetchingData: false, data: teacherRequestsData });
      } catch (error) {
        this.setState({
          errorTitle:
            'Lo sentimos, tenemos problemas con con el servidor, inténtelo otra vez.',
          hasError: true
        });
      }
    });
  }

  render() {
    const { isFetchingData, data, errorTitle, hasError } = this.state;

    return hasError ? (
      <Alert message='Error' description={errorTitle} type='error' showIcon />
    ) : (
      <TeacherRequestsWithSpinner isLoading={isFetchingData} data={data} />
    );
  }
}

export default CompleteTeacherRequests;
