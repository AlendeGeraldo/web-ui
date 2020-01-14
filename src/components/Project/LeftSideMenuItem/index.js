import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

/**
 * Common project menu item.
 */
const LeftSideMenuItem = ({ title, disabled }) => (
  <div
    onClick={() => console.log('Cliclou no menu', title)}
    className={`collapse-menu-items${disabled ? ' disabled' : ''}`}
    role='presentation'
  >
    <Icon className='icon-collapse-header' type='more' />
    {title}
  </div>
);

LeftSideMenuItem.propTypes = {
  /** item is disabled */
  disabled: PropTypes.bool,
  /** item title */
  title: PropTypes.string.isRequired,
};

LeftSideMenuItem.defaultProps = {
  /** disabled prop default is null */
  disabled: false,
};

export default LeftSideMenuItem;
