import React, { Component } from 'react';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';

import { Upload, Icon, message } from 'antd';

const { Dragger } = Upload;

// This is the webserver endpoint where the image is going to be send in base64 encoding
const serverUrl = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

class QuizUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: []
    };
  }

  handleBeforeUpload = file => {
    const isHtml = file.type === 'text/html';

    if (!isHtml) {
      message.error('Sólo se pueden subir archivos HTML, inténtalo de nuevo.');
    }

    // If we return false, then the upload it doesn't gets done
    return false;
  };

  handleFileChange = ({ file, fileList }) => {
    // We already have one file
    if (fileList.length > 1) {
      message.error('Solo puedes subir un archivo de resultado por encuesta.');
    }

    if (file.type === 'text/html') {
      // So that the user can't upload more than 1 file
      const listFiles = fileList.length > 1 ? [fileList[0]] : fileList;
      this.setState({ fileList: listFiles });
    }
  };

  handleUploadFile = () => {
    const file = this.state.fileList[0].originFileObj;
    const reader = new FileReader();

    // When our data is fully read as a base64 string
    reader.onload = e => {
      console.log('image', e.target.result);
      const image64 = e.target.result;

      // Making our fetch request
      fetch(serverUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image64 })
      })
        .then(res => res.json())
        .then(msg => console.log(msg));
    };

    // reading the uploaded File Object and passsing it to a base64 string
    reader.readAsDataURL(file);
  };

  render() {
    // We use fileList to manage the Dragger as a controlled component
    const { fileList } = this.state;

    return (
      <TitledWrapper title='Adjuntar archivo'>
        <Dragger
          fileList={fileList}
          multiple={false}
          onChange={this.handleFileChange}
          beforeUpload={this.handleBeforeUpload}
          style={{ padding: '48px' }}
        >
          <p className='ant-upload-drag-icon'>
            <Icon type='file-text' theme='twoTone' />
          </p>
          <p className='ant-upload-text'>
            Haga click o arrastre un archivo a ésta área para subirlo
          </p>
          <p className='ant-upload-hint'>
            Sólo se permite subir un solo archivo. No subas ningún archivo que
            no sea HTML y que contenga los resultados de tu quiz.
          </p>
        </Dragger>

        <button onClick={this.handleUploadFile}>Enviar archivo</button>
      </TitledWrapper>
    );
  }
}

export default QuizUploader;
