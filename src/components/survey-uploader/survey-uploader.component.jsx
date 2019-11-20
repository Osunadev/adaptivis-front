
import React from 'react';
import { Upload, Icon, message, Button } from 'antd';

const { Dragger } = Upload;

{/*action: Sitio donde se subiran los archivos 

Falta validar que solo se pueda subir un archivo,
si el usuario vuelve a subir un archivo se debe borrar el anterior.
*/}

const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', 
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`El archivo ${info.file.name} ha sido cargado con éxito.`);
    } else if (status === 'error') {
      message.error(`El archivo ${info.file.name} no se ha podido cargar.`);
    }
  },
};

const SurveyUploader = () => {
    return(
    <Dragger {...props}>
        <p className="ant-upload-drag-icon">
        <Icon type="file-text" />
        </p>
        <p className="ant-upload-text">
            Arrastra tu archivo aquí
            <p></p>
            o 
            <p></p>
            <Button type="primary">Selecciona archivos de tu dispositivo</Button>
            </p>
    </Dragger>
    );
};

export default SurveyUploader;