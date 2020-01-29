// CORE LIBS
import React from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { Layout } from 'antd';

// COMPONENTS
import ContentHeader from '../ContentHeader';

// CONTENTS
import ProjectsContent from '../ProjectsContent/_';
import ProjectContent from '../ProjectContent/_';

// STYLES
import './style.scss';

// MOCKS
import projectsMock from '../ProjectsContent/ProjectsTable/_projectsMock';

/**
 * Content.
 * This component is responsible for displaying the content.
 */
const Content = ({ showHeader }) => {
  // COMPONENTS RENDERS
  // content header
  const renderContentHeader = () => (
    <ContentHeader
      title='Título'
      editable
      handleGoBack={() => alert('goBack!')}
    />
  );

  // RENDER
  return (
    // layout component
    <Layout>
      {/* content header */}
      {showHeader && renderContentHeader()}
      {/* div content page */}
      <div className='contentPage'>
        {/* projects content */}
        {/* <ProjectsContent projects={projectsMock} /> */}
        {/* project content */}
        <ProjectContent />
      </div>
    </Layout>
  );
};

// PROP TYPES
Content.propTypes = {
  /** content show sheader */
  showHeader: PropTypes.bool.isRequired,
};

// EXPORT
export default Content;