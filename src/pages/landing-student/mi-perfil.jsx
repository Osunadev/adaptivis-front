import React from 'react';
import PerfilAlumnoTable from 'components/table/perfil-alumno.component';
import { dataPerfilAlumno } from 'testing-data/users.data';
import { Row,Col, Avatar } from 'antd';

const MiPerfil = () => {
    return (
        <div>
                    <Row>
            <Col span={20} push={2}>
            <div style={{
                fontSize: '18px',
                marginLeft: '10px'
            }}>
            {`omar.osuna`}<br></br>
                        {`Omar Alonso Osuna Angulo`}<br></br>
                        {`1234561`}
                        </div>
            </Col>
            <Col span={2} pull={20}>
            <Avatar size={80} 
                    src="https://www.petmd.com/sites/default/files/adult-homeless-cat-asking-for-food-picture-id847415388.jpg" />      </Col>
            </Row>
        <h2>Información básica</h2>
        <PerfilAlumnoTable data={dataPerfilAlumno}/>
        </div>
    );

};

export default MiPerfil;