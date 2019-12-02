import React from 'react';
import { Button, Icon, Card } from 'antd';
import InfoRequestTable from 'components/after-login-components/table/info-request.component';
const { Meta } = Card;

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
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <Icon type='user' />
          <Meta title='Europe Street beat' />
        </Card>
        <InfoRequestTable />
      </div>
      <div align='center'>
        <Button>Regresar</Button>
        <Button>Rechazar</Button>
        <Button>Aceptar</Button>
      </div>
    </div>
  );
};

export default InfoRequest;
