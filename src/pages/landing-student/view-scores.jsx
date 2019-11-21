import React from 'react';
import SurveyHistory from 'components/table/survey-history.component';
import CurrentResults from 'components/table/current-results.component';
import { dataCurrentResults } from 'testing-data/assigments.data';
import { dataHistorial } from 'testing-data/survey-history.data';
import { dataMaterias } from 'testing-data/materias.data';
import { dataLista } from 'testing-data/survey-history.data';

const ViewScores = () => {
    return (
        <div>
        <h2>Resultado de materias actuales</h2>
        <CurrentResults data={dataCurrentResults}/>
        <h2>Historial de materias</h2>
        <SurveyHistory historial={dataHistorial} lista={dataLista}/>
        </div>
    );

};

export default ViewScores;