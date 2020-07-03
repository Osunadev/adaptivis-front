import React, { Component } from 'react';

import { Form, Input, Button, Select, Radio, message } from 'antd';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';
import { FormContainer } from 'components/after-login-components/my-profile/edit-info-form/edit-info-form.styles';

import { easyFetch } from 'utils/requests/requests.utils';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 }
};

const basicRules = requiredMsg => [
  {
    whitespace: true,
    message: 'No introduzca espacios en blanco.'
  },
  {
    required: true,
    message: `Por favor introduzca ${requiredMsg}.`
  }
];

class CreateSubjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditForm: !!props.subjectToEdit,
      isFetching: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { validateFields } = this.props.form;

    // The 'values' object contains all the values of the validated fields in our form
    validateFields((err, values) => {
      if (!err) {
        this.setState({ isFetching: true }, async () => {
          const { updateSubjectsTable } = this.props;
          const { isEditForm } = this.state;

          // Preparing values to be sent
          const { studyPeriod, studyYear, ...valuesToBeSent } = values;

          const study_plan = `${studyYear}-${studyPeriod}`;
          valuesToBeSent.study_plan = study_plan;

          let responseObj;

          if (isEditForm) {
            const {
              subjectToEdit: { subject_id }
            } = this.props;

            // We add the subject_id so the subject is identified
            valuesToBeSent.subject_id = subject_id;

            // If we're editing the subject
            const customFetch = easyFetch('put', true);
            responseObj = await customFetch('subject', valuesToBeSent);
          } else {
            // If we are creating a new subject
            const customFetch = easyFetch('post', true);
            responseObj = await customFetch('subject', valuesToBeSent);
          }

          if (responseObj.error || responseObj.status >= 300) {
            this.setState({ isFetching: false });
            message.error(
              `Lo sentimos, no se pudo ${
                isEditForm ? 'editar la materia.' : 'crear  la materia.'
              }`
            );
          } else {
            this.setState({ isFetching: false });
            message.success(
              `Materia ${isEditForm ? 'editada' : 'creada'} correctamente.`
            );
            updateSubjectsTable();
          }
        });
      }
    });
  };

  render() {
    const { isEditForm, isFetching } = this.state;
    const { subjectToEdit, setSubjectsTableView } = this.props;
    const { getFieldDecorator, resetFields } = this.props.form;

    let studyYear;
    let studyPeriod;

    if (isEditForm) {
      const { study_plan } = subjectToEdit;
      const splittedPlan = study_plan.split('-');

      // Meaning that only studyYear is present
      if (splittedPlan.length < 2) {
        [studyYear] = splittedPlan;
        studyPeriod = 1;
      } else if (splittedPlan.length === 2) {
        [studyYear, studyPeriod] = splittedPlan;
      }
    }

    return (
      <FormContainer>
        <TitledWrapper
          title={`${isEditForm ? 'Editar' : 'Crear'} Materia`}
          big
          backCallback={setSubjectsTableView}
        >
          <Form
            style={{ marginTop: '32px' }}
            onSubmit={this.handleSubmit}
            hideRequiredMark
            colon={false}
            {...formItemLayout}
          >
            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Clave</span>}
              labelAlign='left'
            >
              {getFieldDecorator('subject_code', {
                rules: [
                  ...basicRules('el código identificador de la materia'),
                  {
                    pattern: /^[0-9]+$/,
                    message: 'No introduzca texto, introduzca números'
                  }
                ],
                initialValue: isEditForm
                  ? subjectToEdit.subject_code.toString()
                  : ''
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Nombre</span>}
              labelAlign='left'
            >
              {getFieldDecorator('subject_name', {
                rules: basicRules('el nombre de la materia'),
                initialValue: isEditForm ? subjectToEdit.subject_name : ''
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Carrera</span>}
              extra='Nombre de la carrera a la que pertenece la materia'
              labelAlign='left'
            >
              {getFieldDecorator('career', {
                rules: basicRules('el nombre de la carrera.'),
                initialValue: isEditForm ? subjectToEdit.career : ''
              })(<Input size='large' />)}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Etapa</span>}
              extra='Etapa a la que pertenece la materia a registrar.'
              labelAlign='left'
            >
              {getFieldDecorator('stage', {
                rules: basicRules('la etapa de la materia.'),
                initialValue: isEditForm ? subjectToEdit.stage : ''
              })(
                <Select size='large'>
                  <Option value='BASICA'>Básica</Option>
                  <Option value='DISCIPLINARIA'>Disciplinaria</Option>
                  <Option value='TERMINAL'>Terminal</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Tipo</span>}
              extra='Tipo de la materia a registrar.'
              labelAlign='left'
            >
              {getFieldDecorator('caracter', {
                rules: basicRules('la carrera a la que pertenece la materia.'),
                initialValue: isEditForm ? subjectToEdit.caracter : ''
              })(
                <Select size='large'>
                  <Option value='OBLIGATORIA'>Obligatoria</Option>
                  <Option value='OPTATIVA'>Optativa</Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item
              label={<span style={{ fontSize: '16px' }}>Plan</span>}
              labelAlign='left'
            >
              <Form.Item
                label='Año del plan de estudios'
                style={{ display: 'inline-block', width: '50%' }}
              >
                {getFieldDecorator('studyYear', {
                  rules: basicRules('el año del plan de estudios'),
                  initialValue: isEditForm ? studyYear : undefined
                })(<Input size='large' type='number' />)}
              </Form.Item>

              <Form.Item
                label='Periodo del plan de estudios'
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 32px)',
                  marginLeft: '32px'
                }}
              >
                {getFieldDecorator('studyPeriod', {
                  rules: basicRules('el periodo del plan de estudios'),
                  initialValue: isEditForm ? studyPeriod : undefined
                })(
                  <Radio.Group size='large'>
                    <Radio.Button value='1'>Semestre 1</Radio.Button>
                    <Radio.Button value='2'>Semestre 2</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
            </Form.Item>

            <Form.Item
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18, offset: 5 }}
            >
              <Button
                size='large'
                type='secondary'
                onClick={() => resetFields()}
                style={{ marginRight: '8px' }}
                disabled={isFetching}
              >
                Borrar Cambios
              </Button>

              <Button
                size='large'
                type='primary'
                htmlType='submit'
                loading={isFetching}
                onClick={this.handleSubmit}
              >
                {isEditForm ? 'Editar Materia' : 'Crear Materia'}
              </Button>
            </Form.Item>
          </Form>
        </TitledWrapper>
      </FormContainer>
    );
  }
}

export default Form.create({ name: 'create-subject-form' })(CreateSubjectForm);
