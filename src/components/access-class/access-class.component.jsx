import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

{/*El valor de input debe almacenar en alguna variable despues de presionar el boton Unirse*/}
const AccessClassBox = () => {
    return(
        <form>
        <div
      style={{
        backgroundColor: '#4BAF8B',
        width: '300px',
        padding: '20px'
      }}
    >
            <h3 style={{ color: '#fff' }}>Ingrese el código de acceso:</h3>
            <Input/>
            <p></p>
            <Button>Unirse</Button>      
        </div>
      </form>
    );
};

export default AccessClassBox;