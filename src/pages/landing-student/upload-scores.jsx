import React from 'react';
import SurveyUploader from 'components/survey-uploader/survey-uploader.component';
import SurveySelector from 'components/survey-selector/survey-selector.component';

const UploadScores = () => {
    return (
        <div>
        <h2>Encuestas disponibles</h2>
        <SurveySelector/>
        <p></p>
        <p></p>
        <h2>Adjuntar archivo</h2>
        <SurveyUploader/>
        </div>
    );

};

export default UploadScores;