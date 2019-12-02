import React from 'react';
import PerfilProfesorTable from 'components/after-login-components/table/perfil-profesor.component';
import { dataPerfilProfesor } from 'testing-data/users.data';
import { Row, Col, Avatar } from 'antd';

const dataAlumno = [
  {
    nombres: 'Omar Alonso',
    apellidoP: 'Osuna',
    apellidoM: 'Angulo',
    usuario: 'omar.osuna',
    matricula: '1234561'
  }
];

const MiPerfil = () => {
  return (
    <div>
      <Row>
        <Col span={20} push={2}>
          <div
            style={{
              fontSize: '18px',
              marginLeft: '10px'
            }}
          >
            {`omar.osuna`}
            <br></br>
            {`Omar Alonso Osuna Angulo`}
            <br></br>
            {`1234561`}
          </div>
        </Col>
        <Col span={2} pull={20}>
          <Avatar
            size={80}
            src='https://www.petmd.com/sites/default/files/adult-homeless-cat-asking-for-food-picture-id847415388.jpg'
          />{' '}
        </Col>
      </Row>
      <p></p>
      <h2>Información básica</h2>
      <PerfilProfesorTable data={dataPerfilProfesor} />
    </div>
  );
};

export default MiPerfil;
