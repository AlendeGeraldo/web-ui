// TODO: Alterar nome de components para tasks

// CORE LIBS
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

// COMPONENTS
import ComponentsMenuBlock from './index';

// ACTIONS
import { addFlowTask } from '../../../../../store/experimentFlow/actions';
import fetchFlowMenuTasks from '../../../../../store/flowMenuTasks/actions';

// DISPATCHS
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchMenuTasks: () => dispatch(fetchFlowMenuTasks()),
    handleAddFlowTask: (experimentUuid, task) =>
      dispatch(addFlowTask(experimentUuid, task)),
  };
};

// STATES
const mapStateToProps = (state) => {
  return { flowMenuTasks: state.flowMenuTasks };
};

/**
 * Components Menu Block Container.
 * This component is responsible for create a logic container for components
 * menu block with redux.
 */
const ComponentsMenuBlockContainer = ({
  flowMenuTasks,
  handleFetchMenuTasks,
  handleAddFlowTask,
  disabled,
}) => {
  // CONSTANTS
  // getting experiment uuid
  const { experimentUuid } = useParams();

  // HOOKS
  // did mount hook
  useEffect(() => {
    // fetching menu tasks
    handleFetchMenuTasks();
  }, []);

  // HANDLERS
  const addFlowTaskHandler = (taskUuid) =>
    handleAddFlowTask(experimentUuid, taskUuid);

  // RENDER
  return (
    <ComponentsMenuBlock
      handleTaskMenuClick={addFlowTaskHandler}
      components={flowMenuTasks}
      disabled={disabled}
    />
  );
};

// EXPORT
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentsMenuBlockContainer);
