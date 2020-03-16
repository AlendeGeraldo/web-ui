// CORE LIBS
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

// COMPONENTS
import ProjectsTable from './index';

// ACTIONS
import {
  fetchProjects,
  deleteProject,
} from '../../../../store/projects/actions';

// DISPATCHS
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchProjects: () => dispatch(fetchProjects()),
    handleDeleteProject: (projectUuid) => dispatch(deleteProject(projectUuid)),
  };
};

// STATES
const mapStateToProps = (state) => {
  return { projects: state.projects };
};

/**
 * Projects Table Container.
 * This component is responsible for create a logic container for projects table
 * with redux.
 */
const ProjectsTableContainer = ({
  projects,
  handleFetchProjects,
  handleDeleteProject,
}) => {
  // CONSTANTS
  // getting history
  const history = useHistory();

  // HOOKS
  // did mount hook
  useLayoutEffect(() => {
    // fetching projects
    handleFetchProjects();
  }, []);

  // HANDLERS
  // project click
  const handleClickProject = (projectUuid) =>
    history.push(`/projetos/${projectUuid}`);

  // RENDER
  return (
    <ProjectsTable
      projects={projects}
      handleClickProject={handleClickProject}
      handleClickDelete={handleDeleteProject}
    />
  );
};

// EXPORT
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsTableContainer);
