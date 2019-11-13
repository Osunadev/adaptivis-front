import React from 'react';
import SurveyHistory from 'components/table/survey-history.component';
import CurrentResults from 'components/table/current-results.component';

const ViewScores = () => {
    return (
        <div>
        <h2>Resultado de materias actuales</h2>
        <CurrentResults/>
        <h2>Historial de materias</h2>
        <SurveyHistory/>
        </div>
    );

};

export default ViewScores;