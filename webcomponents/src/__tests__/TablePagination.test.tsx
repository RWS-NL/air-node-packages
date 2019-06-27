import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import TablePagination from '../TablePagination/TablePagination';

let tablePagination: ShallowWrapper;
const mockOnChangePage = jest.fn();
const mockOnchangeRowsPerPage = jest.fn();

beforeAll(() => tablePagination = shallow(
  <TablePagination
    labelrowsperpage='rows per page' labelpaginationof='of'
    rowsPerPageOptions={[5, 10]} rowsPerPage={5}
    count={20} page={0}
    onChangePage={mockOnChangePage} onChangeRowsPerPage={mockOnchangeRowsPerPage}
  />
));

test('should render without crashing', () => {
  expect(tablePagination).toBeTruthy();
});