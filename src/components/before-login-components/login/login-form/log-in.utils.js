import { message, Modal } from 'antd';

// Configuring the message object
message.config({
  top: 55,
  duration: 5
});

export const studentMsgs = {
  notFound: () =>
    message.error(
      'No se encontró tu cuenta de alumno registrada en el sistema'
    ),
  verifyPending: () =>
    message.warning(
      'Falta verificar tu identidad, consulta tu correo para más información'
    ),
  success: () => message.success('Credenciales válidas, iniciando sesión')
};

export const teacherMsgs = {
  notFound: () =>
    message.error(
      'No se encontró tu cuenta de profesor registrada en el sistema'
    ),
  verifyPending: () =>
    message.warning(
      'Falta verificar tu identidad, consulta tu correo para más información'
    ),
  approvalPending: () =>
    message.warning(
      'En espera a que el administrador del sistema acepte tu solicitud de registro'
    ),
  success: () => message.success('Credenciales válidas, iniciando sesión')
};

export const forgotPassMsgs = {
  notFound: () =>
    Modal.error({
      title: 'Cuenta no existente',
      content:
        'Lo sentimos, no se encontró registrada en el sistema alguna cuenta con ese correo.'
    }),
  emailSent: () =>
    Modal.info({
      title: 'Correo de verificación pendiente',
      content:
        'Tú correo de verificación ya ha sido enviado, por favor revisa tu email para más información.'
    }),
  success: () =>
    Modal.success({
      title: 'Correo de verificación enviado',
      content:
        'Se te ha enviado exitosamente un correo para reestablecer tu contraseña a tu email, por favor revísalo.'
    })
};
