import React from 'react';
import PerfilProfesorTable from 'components/table/perfil-profesor.component';
import { dataPerfilProfesor } from 'testing-data/users.data';

const MiPerfil = () => {
    return (
        <div>
        <h2>Información básica</h2>
        <PerfilProfesorTable data={dataPerfilProfesor} />
        </div>
    );

};

export default MiPerfil;