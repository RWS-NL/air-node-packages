/* eslint-disable no-console */
import { TableRow } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import React, { Fragment } from 'react';
import Table, { TableProps } from '../Table/Table';
import TableBodyCell from '../TableBodyCell/TableBodyCell';
import TableHeaderCell, { TableHeaderProps } from '../TableHeaderCell/TableHeaderCell';

interface DataForTableType {
  name: string;
  email: string;
  id: number;
}

const dataForTable: DataForTableType[] = [
  { name: 'Robin Hood', email: 'robin.hood@winked.com', id: 23456789 },
  { name: 'Darth Vader', email: 'darth.vader@thedeathstart.com', id: 9876 },
  { name: 'Kaladin Stormblessed', email: 'kaladin.stormblessed@thearmy.com', id: 567890 },
  { name: 'Steve Jobs', email: 'steve.jobs@apple.com', id: 1 }
];

const dataTableHeaderMapping: Map<string, string> = new Map()
  .set('name', 'name')
  .set('email', 'email')
  .set('id', 'id');

const tableHeaders: TableHeaderProps[] = [
  { label: Array.from(dataTableHeaderMapping.keys())[0] },
  { label: Array.from(dataTableHeaderMapping.keys())[1] },
  { label: Array.from(dataTableHeaderMapping.keys())[2], numeric: true }
];

const rowsPerPage = 5;
const page = 0;
const mockOnRequestSort = jest.fn();
const mockOnSearchInput = jest.fn();
const mockOnSearchClear = jest.fn();
const mockOnChangePage = jest.fn();
const mockOnChangeRowsPerPage = jest.fn();

const propsForTable: TableProps = {
  onsearchclear: mockOnSearchClear,
  onsearchinput: mockOnSearchInput,
  onRequestSort: mockOnRequestSort,
  tooltipplacement: 'bottom-start',
  order: 'asc',
  orderby: 'name',
  rowsPerPage,
  rowsPerPageOptions: [ 2, 4, 5, 10 ],
  page,
  onChangePage: mockOnChangePage,
  onChangeRowsPerPage: mockOnChangeRowsPerPage,
  headers: tableHeaders,
  headermapping: dataTableHeaderMapping,
  rowcount: dataForTable.length,
  labels: {
    labelpaginationof: 'of',
    labelrowsperpage: 'Rows per page',
    searchplaceholderlabel: 'Search...',
    tooltiplabel: 'Sort',
  },
  tableqas: {
    header: 'table-header',
    headerRow: 'table-header-row',
    pagination: 'table-pagination',
    table: 'table',
    toolbar: 'table-toolbar',
    headerCell: 'table-header-cell',
    tableBody: 'table-body',
  },
  tablebodycontent: (
    <Fragment>
      {dataForTable
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(row => (
          <TableRow hover tabIndex={-1} key={4567893} data-qa='table-body-row'>
            <TableBodyCell content={row.name} />
            <TableBodyCell content={row.email} />
            <TableBodyCell content={row.id} />
          </TableRow>
        ))
      }
    </Fragment>
  ),
};

describe('Component Tests', () => {
  let table: ShallowWrapper;

  beforeAll(() => {
    table = shallow(<Table {...propsForTable} />);
  });

  test('should request sorting on header click', () => {
    const tableSortHeader = table.find(TableHeaderCell).at(0).dive().find(`[data-qa="tableSortLabel_${tableHeaders[0].label}"]`);
    tableSortHeader.simulate('click');
    expect(mockOnRequestSort).toHaveBeenCalledWith('name');
    expect(mockOnRequestSort).toHaveBeenCalledTimes(1);
  });

  describe('Table Headers', () => {
    test('should render header rows', () => {
      expect(table.find('[data-qa="table-header-row"]')).toHaveLength(1);
    });

    test('should put header cells in header row with tableHeaders', () => {
      // Stub out the console errors coming from Material-UI
      const originalLogger = console.error;
      jest.spyOn(console, 'error').mockImplementation();

      const firstRow = table.find('[data-qa="table-header-row"]').first();
      const tableHeaderCell = firstRow.find(TableHeaderCell).first().dive().find(`[data-qa="tableSortLabel_${tableHeaders[0].label}"]`);
      expect(firstRow.find(TableHeaderCell)).toHaveLength(3);
      expect(tableHeaderCell.render().text()).toBe(tableHeaders[0].label);

      // Restore console errors
      console.error = originalLogger;
    });
  });

  describe('Table Body', () => {
    test('should render body rows for first page', () => {
      expect(table.find('[data-qa="table-body-row"]')).toHaveLength(4);
    });

    test('should fill first row with all assigned data', () => {
      const firstRow = table.find('[data-qa="table-body-row"]').first();
      expect(firstRow.find(TableBodyCell)).toHaveLength(3);

      expect(firstRow.find(TableBodyCell).at(0).prop('content')).toBe(dataForTable[0].name);
      expect(firstRow.find(TableBodyCell).at(1).prop('content')).toBe(dataForTable[0].email);
      expect(firstRow.find(TableBodyCell).at(2).prop('content')).toBe(dataForTable[0].id);
    });
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const table = shallow(<Table {...propsForTable} />);
    expect(table).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const table = shallow(<Table {...propsForTable} draggable showTopPagination showBottomPagination />);
    expect(table).toMatchSnapshot();
  });
});