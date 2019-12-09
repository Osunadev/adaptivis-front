import React, { Component } from 'react';

import SpinnerHOC from 'components/after-login-components/general/spinner-hoc/spinner-hoc.component';
import TeacherRequests from './teacher-requests.component';

import { getJwt } from 'utils/token-helper';

// const fakeData = [
//   {
//     fullName: 'J. Reyes Juarez',
//     email: 'reyesjua@uabc.edu.mx',
//     date: '09/12/2019'
//   },
//   {
//     fullName: 'Guillermo Licea',
//     email: 'glicea@uabc.edu.mx',
//     date: '12/12/2019'
//   },
//   {
//     fullName: 'Leocundo Aguilar Contreras',
//     email: 'leo.aguilarjua@uabc.edu.mx',
//     date: '01/12/2019'
//   }
// ];

const TeacherRequestsWithSpinner = SpinnerHOC(TeacherRequests);

class CompleteTeacherRequests extends Component {
  state = {
    isFetchingData: false,
    data: []
  };

  componentDidMount() {
    this.setState({ isFetchingData: true });

    const teacherRequestsEndpoint =
      'http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/pending?page=1&size=10';

    fetch(teacherRequestsEndpoint, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${getJwt()}`
      }
    })
      .then(res => res.json())
      .then(({ results }) => {
        this.setState({ isFetchingData: false, data: results });
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ isFetchingData: false });
      });
  }

  render() {
    const { isFetchingData, data } = this.state;
    return (
      <TeacherRequestsWithSpinner isLoading={isFetchingData} data={data} />
    );
  }
}

export default CompleteTeacherRequests;
