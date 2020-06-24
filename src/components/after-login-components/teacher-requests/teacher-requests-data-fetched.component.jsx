import React, { Component } from 'react';

import { paginationFetch } from 'utils/requests/requests.utils';

import withHandleResponse from '../general-purpose/with-handle-response/with-handle-response.component';
import TeacherRequests from './teacher-requests.component';

const TeacherRequestswithHandleResponse = withHandleResponse(TeacherRequests);

class CompleteTeacherRequests extends Component {
  constructor() {
    super();

    this.state = {
      isFetchingData: false,
      data: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.setState({ isFetchingData: true }, async () => {
      try {
        // This function will be applied to every element in the response array
        const formattingFunction = resData => {
          const {
            email,
            employeeId,
            requestDate,
            request_id,
            ...namesObj
          } = resData;

          // Every teacher request item has a fullName, date and email property
          return {
            fullName: Object.values(namesObj).join(' '),
            date: requestDate,
            // The key will be used as a unique identifier
            key: request_id,
            email
          };
        };

        const teacherRequestsData = await paginationFetch(
          'professor/requests',
          10,
          { type: 'PENDING' },
          formattingFunction
        );

        this.setState({ isFetchingData: false, data: teacherRequestsData });
      } catch (error) {
        this.setState({
          hasError: true,
          isFetchingData: false
        });
      }
    });
  }

  render() {
    const { isFetchingData, data, hasError } = this.state;

    return (
      <TeacherRequestswithHandleResponse
        isLoading={isFetchingData}
        hasServerError={hasError}
        data={data}
      />
    );
  }
}

export default CompleteTeacherRequests;
