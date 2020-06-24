import React, { Component } from 'react';

import { paginationFetch } from 'utils/requests/requests.utils';

import SubjectsTable from 'components/after-login-components/create-subjects/subjects-table/subjects-table.component';
import SubjectForm from 'components/after-login-components/create-subjects/subject-form/subject-form.component';
import LoadingSpinner from 'components/general-use-components/loading-spinner/loading-spinner.component';

import { SubjectsPanelData } from './create-subjects.data';
/**
 * An object that represents a registered subject
 * @typedef {Object} Subject
 * @property {String} subject_id - The unique id of the subject, assigned by the backend
 * @property {number} subject_code - The school official subject code of the subject
 * @property {String} study_plan - The study plan that subject belongs. Example. '2009-2'
 * @property {String} subject_name - The name of the subject
 * @property {String} career - The name of the career to which the subject belongs
 * @property {String} stage - The name of the subject stage: 'DISCIPLINARIA' | 'BASICA' | 'TERMINAL'
 * @property {String} caracter - If the subject is 'OPTATIVA' | 'OBLIGATORIA'
 */

class CreateSubjectsPage extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      isFetching: false,
      subjects: [],
      panelView: SubjectsPanelData.SUBJECTS_TABLE,
      subjectToEdit: null
    };
  }

  componentDidMount() {
    this.updateSubjectsTable();
  }

  updateSubjects = (callback = null) => {
    /**
     * @type {Array[Subject]}
     */
    let subjects = [];
    let hasError = false;

    this.setState({ isFetching: true }, async () => {
      try {
        subjects = await paginationFetch('subject', 10, undefined, resData => ({
          key: resData.subject_id,
          ...resData
        }));
      } catch (error) {
        hasError = true;
      } finally {
        this.setState(
          {
            isFetching: false,
            hasError,
            subjects
          },
          callback
        );
      }
    });
  };

  updateSubjectsTable = () => {
    // Whether we updated or created a subject, we need to fetch once again
    // the updated subjects from the backend

    this.updateSubjects(() => {
      // Our callback to be run after the subjects update
      this.setState({
        panelView: SubjectsPanelData.SUBJECTS_TABLE
      });
    });
  };

  editSubject = subject_id => {
    const { subjects } = this.state;

    const subjectIdx = subjects.findIndex(
      subject => subject.subject_id === subject_id
    );
    const subject = subjects[subjectIdx];

    this.setState({
      panelView: SubjectsPanelData.EDIT_SUBJECT,
      subjectToEdit: subject
    });
  };

  setSubjectsTableView = () => {
    this.setState({
      panelView: SubjectsPanelData.SUBJECTS_TABLE
    });
  };

  setCreateSubjectView = () => {
    this.setState({
      panelView: SubjectsPanelData.CREATE_SUBJECT
    });
  };

  render() {
    const {
      hasError,
      isFetching,
      subjects,
      panelView,
      subjectToEdit
    } = this.state;

    const { ...routeProps } = this.props;

    return isFetching ? (
      <LoadingSpinner />
    ) : (
      {
        [SubjectsPanelData.SUBJECTS_TABLE]: (
          <SubjectsTable
            subjects={subjects}
            editSubject={this.editSubject}
            setCreateSubjectView={this.setCreateSubjectView}
            {...routeProps}
          />
        ),
        [SubjectsPanelData.EDIT_SUBJECT]: (
          <SubjectForm
            subjectToEdit={subjectToEdit}
            setSubjectsTableView={this.setSubjectsTableView}
            updateSubjectsTable={this.updateSubjectsTable}
          />
        ),
        [SubjectsPanelData.CREATE_SUBJECT]: (
          <SubjectForm
            setSubjectsTableView={this.setSubjectsTableView}
            updateSubjectsTable={this.updateSubjectsTable}
          />
        )
      }[panelView]
    );
  }
}

export default CreateSubjectsPage;
