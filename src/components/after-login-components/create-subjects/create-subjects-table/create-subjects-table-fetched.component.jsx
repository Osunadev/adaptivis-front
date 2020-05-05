import React, { Component } from 'react';

import withSpinner from 'components/general-use-components/with-spinner/with-spinner.component';
import CreateSubjectsTable from './create-subjects-table.component';

const fakeData = [
  {
    key: '0',
    clave: '123459',
    carrera: 'Organización de Computadoras y Lenguaje Ensamblador',
    periodo: '2009-2'
  },
  {
    key: '1',
    clave: '611289',
    carrera: 'Programación Orientada a Objetos',
    periodo: '2009-2'
  },
  {
    key: '2',
    clave: '214359',
    carrera: 'Algoritmos y Estructuras de Datos',
    periodo: '2009-2'
  }
];

const CreateSubjectsTableWithSpinner = withSpinner(CreateSubjectsTable);

class CreateSubjectsTableFetched extends Component {
  state = {
    isFetchingData: false,
    data: []
  };

  componentDidMount() {
    this.setState({ isFetchingData: true });

    // const teacherRequestsEndpoint =
    //   'http://ec2-18-234-39-40.compute-1.amazonaws.com/api/v1/pending?page=1&size=10';

    // fetch(teacherRequestsEndpoint, {
    //   method: 'get',
    //   headers: {
    //     Authorization: `Bearer ${getJwt()}`
    //   }
    // })
    //   .then(res => res.json())
    //   .then(({ results }) => {
    //     this.setState({ isFetchingData: false, data: results });
    //   })
    //   .catch(error => console.log(error.message));
    setTimeout(() => {
      this.setState({ isFetchingData: false, data: fakeData });
    }, 1000);
  }

  render() {
    const { isFetchingData, data } = this.state;
    return (
      <CreateSubjectsTableWithSpinner isLoading={isFetchingData} data={data} />
    );
  }
}

export default CreateSubjectsTableFetched;
