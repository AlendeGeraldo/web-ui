// CORE LIBS
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';

// COMPONENTS
import ExperimentHeader from './index';

// ACTIONS
// experiment
import {
  fetchExperimentRequest,
  editExperimentNameRequest,
  deployExperiment,
  deleteExperimentRequest,
} from '../../../../../../store/experiment/actions';
// pipelines
import { trainExperimentRequest } from '../../../../../../store/pipelines/actions';

// DISPATCHS
const mapDispatchToProps = (dispatch, routerProps) => {
  return {
    handleDeleteExperiment: (projectId, experimentId) =>
      dispatch(deleteExperimentRequest(projectId, experimentId, routerProps)),
    handleFetchExperiment: (projectId, experimentId) =>
      dispatch(fetchExperimentRequest(projectId, experimentId)),
    handleEditExperimentName: (projectId, experimentId, newName) =>
      dispatch(editExperimentNameRequest(projectId, experimentId, newName)),
    handleTrainExperiment: (experiment, operators) =>
      dispatch(trainExperimentRequest(experiment, operators)),
    handleDeployExperiment: (experimentId) =>
      dispatch(deployExperiment(experimentId)),
  };
};

// STATES
const mapStateToProps = (state) => {
  return { experiment: state.experiment, operators: state.operators };
};

/**
 * Experiment Header Container.
 * This component is responsible for create a logic container for experiment
 * header with redux.
 */
const ExperimentHeaderContainer = ({
  experiment,
  operators,
  handleDeleteExperiment,
  handleFetchExperiment,
  handleEditExperimentName,
  handleTrainExperiment,
  handleDeployExperiment,
}) => {
  // CONSTANTS
  // getting project uuid
  const { projectId, experimentId } = useParams();

  // HOOKS
  // did mount hook
  useEffect(() => {
    // fetching projects
    handleFetchExperiment(projectId, experimentId);
  }, []);

  // HANDLERS
  // delete experiment
  const deleteHandler = () => handleDeleteExperiment(projectId, experimentId);
  // edit experiment name
  const editExperimentNameHandler = (newName) =>
    handleEditExperimentName(projectId, experimentId, newName);
  // edit experiment name
  const trainExperimentHandler = () =>
    handleTrainExperiment(experiment, operators);

  // RENDER
  return (
    <ExperimentHeader
      title={experiment.name}
      handleEditExperimentName={editExperimentNameHandler}
      handleDeleteExperiment={deleteHandler}
      handleTrainExperiment={trainExperimentHandler}
      handleDeployExperiment={handleDeployExperiment}
    />
  );
};

// EXPORT
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ExperimentHeaderContainer)
);
