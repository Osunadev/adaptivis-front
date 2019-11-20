import React from 'react';
import PerfilAlumnoTable from 'components/table/perfil-alumno.component';
import { dataPerfilAlumno } from 'testing-data/users.data';

const MiPerfil = () => {
    return (
        <div>
        <h2>Información básica</h2>
        <PerfilAlumnoTable data={dataPerfilAlumno}/>
        </div>
    );

};

export default MiPerfil;