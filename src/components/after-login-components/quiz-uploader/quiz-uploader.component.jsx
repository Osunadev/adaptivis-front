import React from 'react';
import { Upload, Icon, message } from 'antd';

const { Dragger } = Upload;

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
      message.success(
        `El archivo ${info.file.name} ha sido cargado con éxito.`
      );
    } else if (status === 'error') {
      message.error(`El archivo ${info.file.name} no se ha podido cargar.`);
    }
  }
};

const QuizUploader = () => {
  return (
    <Dragger {...props} style={{ padding: '48px' }}>
      <p className='ant-upload-drag-icon'>
        <Icon type='file-text' theme='twoTone' />
      </p>
      <p className='ant-upload-text'>
        Haga click o arrastre un archivo a ésta área para subirlo
      </p>
      <p className='ant-upload-hint'>
        Sólo se permite subir un solo archivo. No subas ningún archivo que no
        sea HTML y que contenga los resultados de tu quiz.
      </p>
    </Dragger>
  );
};

export default QuizUploader;
