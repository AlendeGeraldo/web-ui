// CORE LIBS
import React from 'react';

// UI LIBS
import { Row, Col } from 'antd';

// COMPONENTS
import EditableTitle from '../../../../../EditableTitle';
import DeleteExperimentButton from '../DeleteExperimentButton';
import TrainExperimentButton from '../TrainExperimentButton';
import DeployExperimentButton from '../DeployExperimentButton';

// editable title class name const
const editableTitleClassName = 'editable-title autosize-input-custom';

/**
 * Experiment Header.
 * This component is responsible for displaying the experiment header.
 */
const ExperimentHeader = () => (
  // row container
  <Row>
    {/* column container */}
    <Col span={18}>
      {/* editable title */}
      <EditableTitle
        title='Experimento 01'
        loading={false}
        className={editableTitleClassName}
        editingClassName={`${editableTitleClassName} edit-mode`}
      />
      {/* delete button */}
      <DeleteExperimentButton
        disabled={false}
        handleClick={() => alert('delete experiment')}
      />
    </Col>
    {/* column container */}
    <Col span={6}>
      {/* train button */}
      <TrainExperimentButton
        disabled={false}
        handleClick={() => alert('train experiment')}
      />
      {/* deploy button */}
      <DeployExperimentButton
        disabled={false}
        handleClick={() => alert('deploy experiment')}
      />
    </Col>
  </Row>
);

// EXPORT
export default ExperimentHeader;