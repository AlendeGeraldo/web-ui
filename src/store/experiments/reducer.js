// UI LIBS
import { message } from 'antd';

// ACTION TYPES
import actionTypes from './actionTypes';

// INITIAL STATE
const initialState = [];

/**
 * experiments reducer
 */
const experiments = (state = initialState, action) => {
  switch (action.type) {
    // SUCCESS
    case actionTypes.FETCH_EXPERIMENTS_SUCCESS:
      return action.experiments;
    case actionTypes.ORGANIZE_EXPERIMENTS_SUCCESS:
      return action.experiments;

    // FAIL
    case actionTypes.FETCH_EXPERIMENTS_FAIL:
      return message.error(action.errorMessage);
    case actionTypes.ORGANIZE_EXPERIMENTS_FAIL:
      return message.error(action.errorMessage);

    // DEFAULT
    default:
      return state;
  }
};

// EXPORT
export default experiments;
