import React, { Component } from 'react';

import { Upload, Button, Icon, message, Avatar } from 'antd';

import TitledWrapper from 'components/after-login-components/general/titled-wrapper/titled-wrapper.component';

import { ChangeImageContainer } from './edit-change-image.styles';

class EditChangeImage extends Component {
  state = {
    fileList: [],
    imgBase64: null,
    uploading: false
  };

  handleUpload = () => {
    // const { imgBase64 } = this.state;

    // Making our request
    this.setState({ uploading: true });
    setTimeout(() => {
      this.setState({ uploading: false, fileList: [] }, () => {
        message.success('Imagen de perfil actualizada correctamente.');
      });
    }, 2000);
  };

  handleOnRemove = file => {
    this.setState({ fileList: [], imgBase64: null });
  };

  handleBeforeUpload = file => {
    const { fileList } = this.state;
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLessThan2M = file.size / 1024 / 1024 < 2;

    // If there's already an existing file
    if (fileList.length) {
      message.error('¡No puedes subir más de una foto!');
      return false;
    }

    if (isJpgOrPng && isLessThan2M) {
      const reader = new FileReader();

      // Passing the image file to a base64 format
      reader.onload = e => {
        const imgBase64 = e.target.result;

        this.setState({ fileList: [file], imgBase64 });
      };

      reader.readAsDataURL(file);
    } else {
      if (!isLessThan2M) message.error('¡La imagen debe pesar menos de 2MB!');

      if (!isJpgOrPng)
        message.error('Sólo se permite subir imágenes JPG o PNG.');
    }

    // Returning false so that the Upload component doesn't uploads the file automatically
    return false;
  };

  render() {
    const { uploading, fileList, imgBase64 } = this.state;
    const avatarProps = imgBase64 ? { src: imgBase64 } : { icon: 'user' };

    return (
      <TitledWrapper title='Cambiar imagen de perfil' big>
        <ChangeImageContainer>
          <Avatar
            {...avatarProps}
            size={150}
            style={{ margin: '16px 0 32px' }}
          />
          <Upload
            fileList={fileList}
            onRemove={this.handleOnRemove}
            beforeUpload={this.handleBeforeUpload}
          >
            <Button size='large' style={{ width: '200px' }}>
              <Icon type='upload' /> Seleccionar archivo
            </Button>
          </Upload>
          <Button
            type='primary'
            onClick={this.handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            size='large'
            style={{ marginTop: '16px', width: '200px' }}
          >
            {uploading ? 'Subiendo imagen' : 'Subir Imagen'}
          </Button>
        </ChangeImageContainer>
      </TitledWrapper>
    );
  }
}

export default EditChangeImage;
