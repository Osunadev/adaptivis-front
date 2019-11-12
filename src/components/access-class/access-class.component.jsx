import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

const AccessClassBox = () => {
    return(
        <form>
        <div>
            <h3>Ingrese el código de acceso:</h3>
            <Input/>
            <p></p>
            <Button>Unirse</Button>      
        </div>
      </form>
    );
};

export default AccessClassBox;