// CORE LIBS
import React from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { Button, Popconfirm } from 'antd';

/**
 * Delete Experiment Button.
 * This component is responsible for show delete experiment button.
 */
const DeleteExperimentButton = ({ handleClick, disabled, loading }) => (
  // Popconfirm component
  <Popconfirm
    title='Você tem certeza que deseja excluir esse experimento?'
    onConfirm={handleClick}
    okText='Sim'
    cancelText='Não'
    disabled={disabled}
  >
    {/* button component */}
    <Button
      disabled={disabled}
      className='deleteExperimentButton'
      type='danger'
      icon='delete'
      style={{ float: 'right' }}
      loading={loading}
    />
  </Popconfirm>
);

// PROP TYPES
DeleteExperimentButton.propTypes = {
  /** delete experiment button is disabled */
  disabled: PropTypes.bool.isRequired,
  /** delete experiment button click function */
  handleClick: PropTypes.func.isRequired,
};

// EXPORT
export default DeleteExperimentButton;
