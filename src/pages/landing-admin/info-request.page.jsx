import React from 'react';
import { Button, Icon } from 'antd';
import InfoRequestTable from 'components/table/info-request.component';

const InfoRequest = () => {
  return (
    <div
      style={{
        backgroundColor: '#4BAF8B'
      }}
    >
      <div align='center'>
        <Icon type='user' style={{ fontSize: '170px', color: '#fff' }} />
        <h2 style={{ color: '#fff' }}>Información del docente</h2>
      </div>
      <InfoRequestTable />
      <Button>Regresar</Button>
      <Button>Rechazar</Button>
      <Button>Aceptar</Button>
    </div>
  );
};

export default InfoRequest;
