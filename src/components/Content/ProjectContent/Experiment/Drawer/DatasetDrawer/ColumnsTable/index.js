// CORE LIBS
import React from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { Table, Select, Tooltip } from 'antd';

// STYLES
import './style.scss';

// SELECT COMPONENTS
const { Option } = Select;

/**
 * Columns Table.
 * This component is responsible for displaying dataset columns table
 */
const ColumnsTable = ({ columns, targetColumnId, handleChangeType }) => {
  // columns configuration
  const columnsConfig = [
    {
      title: 'Atributo',
      dataIndex: 'name',
      key: 'name',
      render: (value, row, index) => (
        <Tooltip title={value}>
          <span>{value}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Tipo de dado',
      dataIndex: 'datatype',
      key: 'datatype',
      render: (value, row, index) => (
        <TypeSelect
          value={value}
          onChange={(e) => {
            handleChangeType(e, row);
          }}
        />
      ),
    },
  ];

  // FUNCTIONS
  // setting row key
  const setRowKey = (record) => record.uuid;
  // highlighting target column
  const highlightTargetColumn = (record) =>
    record.uuid === targetColumnId ? 'targetColumn' : null;

  // COMPONENTS
  // type select
  const TypeSelect = ({ value, ...others }) => {
    // getting value
    let fixedVal = value;
    // types regex
    const numRegex = /num/i;
    const dateRegex = /dat/i;
    const factorRegex = /fact|cate/i;
    // checking type
    if (value.match(numRegex)) {
      fixedVal = 'numeric';
    } else if (value.match(dateRegex)) {
      fixedVal = 'DateTime';
    } else if (value.match(factorRegex)) {
      fixedVal = 'factor';
    }

    // rendering component
    return (
      // select component
      <Select value={fixedVal} {...others}>
        {/* options */}
        <Option value='DateTime'>Data/Hora</Option>
        <Option value='numeric'>Numérico</Option>
        <Option value='factor'>Categórico</Option>
      </Select>
    );
  };

  // RENDER
  return (
    // table component
    <Table
      className='datasetTable'
      dataSource={columns}
      columns={columnsConfig}
      rowKey={setRowKey}
      rowClassName={(record) => highlightTargetColumn(record, targetColumnId)}
      size='middle'
      scroll={{ y: 340 }}
    />
  );
};

// PROP TYPES
ColumnsTable.propTypes = {
  /** columns table rows list */
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** columns table target column id string */
  targetColumnId: PropTypes.string.isRequired,
  /** columns table change row type handler */
  handleChangeType: PropTypes.func.isRequired,
};

// EXPORT
export default ColumnsTable;