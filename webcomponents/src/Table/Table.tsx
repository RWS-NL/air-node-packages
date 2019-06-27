import MUITable, { TableProps as MUITableProps } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import { TablePaginationProps as MUITablePaginationProps } from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { FC, Fragment, ReactNode } from 'react';
import css from './Table.scss';
import TableHeaderCell, { TableHeaderCellProps, TableHeaderProps } from '../TableHeaderCell/TableHeaderCell';
import TablePagination, { TablePaginationProps } from '../TablePagination/TablePagination';
import TableToolbar, { TableToolbarProps } from '../TableToolbar/TableToolbar';

export type TableLabels =
  & Pick<TableToolbarProps, 'searchplaceholderlabel'>
  & Pick<TablePaginationProps, 'labelrowsperpage' | 'labelpaginationof'>
  & Pick<TableHeaderCellProps, 'tooltiplabel'>;

export type TableQAs = {
  /** data-qa applied to the root table */
  table: string;
  /** data-qa applied to the pagination components */
  pagination: string;
  /** data-qa applied to the toolbar */
  toolbar: string;
  /** data-qa applied to the header wrapper */
  header: string;
  /** data-qa applied to the header row */
  headerRow: string;
  /** data-qa applied to each header cell */
  headerCell: string;
  /** data-qa applied to the table body wrapper */
  tableBody: string;
};

export type TableProps =
  & Pick<TableToolbarProps, 'onsearchclear' | 'onsearchinput'>
  & Pick<TableHeaderCellProps, 'onRequestSort' | 'orderby' | 'order' | 'tooltipplacement'>
  & Pick<MUITablePaginationProps, 'rowsPerPage' | 'rowsPerPageOptions' | 'page' | 'onChangePage' | 'onChangeRowsPerPage'>
  & MUITableProps
  & {
  /** Headers for the table */
  headers: TableHeaderProps[];
  /** Map that defines how the headers are sorted, either by key or function when targeting nested properties */
  headermapping: Map<string, string>;
  /** The amount of rows for the table (generally the length of the data) */
  rowcount: number;
  /** Labels used in the table */
  labels: TableLabels;
  /** data-qa's used in the table */
  tableqas: TableQAs;
  /** Content for the table */
  tablebodycontent: ReactNode;
};

const Table: FC<TableProps> = props => (
  <Fragment>
    <TableToolbar
      searchplaceholderlabel={props.labels.searchplaceholderlabel}
      onsearchinput={props.onsearchinput}
      onsearchclear={props.onsearchclear}
      data-qa={props.tableqas.toolbar}
    />
    <TablePagination
      labelrowsperpage={props.labels.labelrowsperpage}
      labelpaginationof={props.labels.labelpaginationof}
      rowsPerPageOptions={props.rowsPerPageOptions}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      count={props.rowcount}
      onChangePage={props.onChangePage}
      onChangeRowsPerPage={props.onChangeRowsPerPage}
      customclasses={css.tableTopPagination}
      data-qa={props.tableqas.pagination}
    />
    <MUITable className={css.table} data-qa={props.tableqas.table}>
      <TableHead data-qa={props.tableqas.header}>
        <TableRow data-qa={props.tableqas.headerRow}>
          {props.headers.map(header => (
            <TableHeaderCell
              key={header.label}
              header={header}
              orderby={props.orderby}
              order={props.order || 'asc'}
              tooltiplabel={props.labels.tooltiplabel}
              tooltipplacement={props.tooltipplacement}
              onRequestSort={props.onRequestSort}
              data-qa={props.tableqas.headerCell}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody data-qa={props.tableqas.tableBody}>
        {props.tablebodycontent}
      </TableBody>
    </MUITable>
    <TablePagination
      labelrowsperpage={props.labels.labelrowsperpage}
      labelpaginationof={props.labels.labelpaginationof}
      rowsPerPageOptions={props.rowsPerPageOptions}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      count={props.rowcount}
      onChangePage={props.onChangePage}
      onChangeRowsPerPage={props.onChangeRowsPerPage}
      data-qa={props.tableqas.pagination}
    />
  </Fragment>
);

export default Table;