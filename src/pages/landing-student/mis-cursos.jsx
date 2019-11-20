import React from 'react';
import Table from 'components/table/table.component';
import AccessClassBox from 'components/access-class/access-class.component';
import { misCursos } from 'testing-data/assigments.data';

const MisCursos = () => {
    return (
        <div>
        <h2>Materias cursadas</h2>
        <Table data={misCursos}/>
        <p></p>
        <p></p>
        <h2>Asignarse a un curso</h2>
        <AccessClassBox/>
        </div>
    );

};

export default MisCursos;