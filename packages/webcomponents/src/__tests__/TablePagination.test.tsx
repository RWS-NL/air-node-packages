import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import TablePagination from '../TablePagination/TablePagination';

let tablePaginations: ShallowWrapper;
const mockOnChangePage = jest.fn();
const mockOnchangeRowsPerPage = jest.fn();

beforeAll(() => {
  tablePaginations = shallow(
    <TablePagination
      labelrowsperpage='rows per page' labelpaginationof='of'
      rowsPerPageOptions={[ 5, 10 ]} rowsPerPage={5}
      count={20} page={0}
      onChangePage={mockOnChangePage} onChangeRowsPerPage={mockOnchangeRowsPerPage}
    />);
});

test('should match snapshot', () => {
  expect(tablePaginations).toMatchSnapshot();
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const tablePagination = shallow(
      <TablePagination
        labelrowsperpage='rows per page' labelpaginationof='of'
        rowsPerPageOptions={[ 2, 5, 10 ]} rowsPerPage={5}
        count={20} page={0}
        onChangePage={mockOnChangePage} onChangeRowsPerPage={mockOnchangeRowsPerPage}
      />
    );
    expect(tablePagination).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const tablePagination = shallow(
      <TablePagination
        labelrowsperpage='rows per page' labelpaginationof='of'
        rowsPerPageOptions={[ 2, 5, 10 ]} rowsPerPage={5}
        count={20} page={0}
        onChangePage={mockOnChangePage} onChangeRowsPerPage={mockOnchangeRowsPerPage}
        data-qa='snapshot-qa' ActionsComponent='div'
        customclasses={[ 'snapshot-class' ]}
      />
    );
    expect(tablePagination).toMatchSnapshot();
  });
});