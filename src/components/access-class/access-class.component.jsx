import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

const AccessClassBox = () => {
    return(
        <form>
        <div
      style={{
        backgroundColor: '#4BAF8B'
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