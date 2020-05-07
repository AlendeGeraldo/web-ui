// CORE LIBS
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import ImplantedExperimentsTable from './index';

// ACTIONS
import {
  fetchImplantedExperiments,
  deleteImplantedExperiment,
} from '../../../../../store/implantedExperiments/actions';
import testImplantedExperimentInference from '../../../../../store/testExperimentInference/actions';
import { getDeployExperimentLogs } from 'store/logs/actions';

// DISPATCHS
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchImplantedExperiments: () =>
      dispatch(fetchImplantedExperiments()),
    handleDeleteImplantedExperiment: (implantedExperimentUuid) =>
      dispatch(deleteImplantedExperiment(implantedExperimentUuid)),
    handleTestImplantedExperimentInference: (implantedExperimentUuid, file) =>
      dispatch(testImplantedExperimentInference(implantedExperimentUuid, file)),
    getDeployExperimentLogs: (deployId) =>
      dispatch(getDeployExperimentLogs(deployId)),
  };
};

// STATES
const mapStateToProps = (state) => {
  return { implantedExperiments: state.implantedExperiments };
};

// TODO: Implementar delete implanted experiment
/**
 * Implanted Experiments Table Container.
 * This component is responsible for create a logic container for implanted
 * experiments table with redux.
 */
const ImplantedExperimentsTableContainer = ({
  implantedExperiments,
  handleFetchImplantedExperiments,
  handleDeleteImplantedExperiment,
  handleTestImplantedExperimentInference,
  getDeployExperimentLogs,
}) => {
  // HOOKS
  // did mount hook
  useEffect(() => {
    // fetching projects
    handleFetchImplantedExperiments();
  }, []);

  const handleOpenLog = (deployId) => {
    getDeployExperimentLogs(deployId);
  };

  // RENDER
  return (
    <ImplantedExperimentsTable
      implantedExperiments={implantedExperiments}
      handleTestInference={handleTestImplantedExperimentInference}
      handleOpenLog={handleOpenLog}
    />
  );
};

// EXPORT
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImplantedExperimentsTableContainer);
