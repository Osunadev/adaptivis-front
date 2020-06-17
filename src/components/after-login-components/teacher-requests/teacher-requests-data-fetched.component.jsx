import React, { Component } from 'react';
import { Alert } from 'antd';

import { easyFetch } from 'utils/requests/requests-utils';

import withSpinner from 'components/general-use-components/with-spinner/with-spinner.component';
import TeacherRequests from './teacher-requests.component';

const TeacherRequestsWithSpinner = withSpinner(TeacherRequests);

async function getTeacherRequests() {
  const teachersReqArray = [];
  let teacherRequest;
  let pageIdx = 1;

  // Creating a custom fetch function
  const customFetch = easyFetch('get', true);

  do {
    const { body, status, error } = await customFetch(
      'professor/requests',
      `type=PENDING&per_page=10&page=${pageIdx}`
    );

    if (status !== 200) throw new Error();

    teacherRequest = body;

    if (teacherRequest.resultSize > 0) {
      const formattedResults = teacherRequest.results.map(
        ({ email, employeeId, requestDate, request_id, ...namesObj }) => {
          // Every teacher request item has a fullName, date and email property
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
