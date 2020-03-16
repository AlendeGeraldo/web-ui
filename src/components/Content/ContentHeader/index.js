// CORE LIBS
import React from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { PageHeader } from 'antd';

// COMPONENTS
import EditableTitle from '../EditableTitle';

// STYLES
import './style.scss';

// editable title class name const
const editableTitleClassName =
  'ant-page-header-heading-title autosize-input-custom';

/**
 * Content Header.
 * This component is responsible for displaying the content header with editable
 * title and go back arrow.
 */
const ContentHeader = ({ handleGoBack, handleSubmit, editable, title }) => {
  // COMPONENTS RENDERS
  // common title
  const renderTitle = () => title;
  // editable title
  const renderEditableTitle = () => (
    // editable title component
    <EditableTitle
      loading={false}
      title={title}
      handleSubmit={handleSubmit}
      className={editableTitleClassName}
      editingClassName={`${editableTitleClassName} edit-mode`}
    />
  );

  // RENDER
  return (
    // page header component
    <PageHeader
      className='contentHeader'
      title={editable ? renderEditableTitle() : renderTitle()}
      onBack={handleGoBack}
    />
  );
};

// PROP TYPES
ContentHeader.propTypes = {
  /** content header go back function */
  handleGoBack: PropTypes.func.isRequired,
  /** content header edit submit function */
  handleSubmit: PropTypes.func,
  /** content header has editable title */
  editable: PropTypes.bool.isRequired,
  /** content header title */
  title: PropTypes.string.isRequired,
};

// PROP DEFAULT VALUES
ContentHeader.defaultProps = {
  /** content header edit submit function */
  handleSubmit: undefined,
};

// EXPORT
export default ContentHeader;
