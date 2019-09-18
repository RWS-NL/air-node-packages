import MUITable, { TableProps as MUITableProps } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import { TablePaginationProps as MUITablePaginationProps } from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import React, { FC, Fragment, ReactNode } from 'react';
import css from './Table.scss';
import TableHeaderCell, { TableHeaderCellProps, TableHeaderProps } from '../TableHeaderCell/TableHeaderCell';
import TablePagination, { TablePaginationProps } from '../TablePagination/TablePagination';
import TableToolbar, { TableToolbarProps } from '../TableToolbar/TableToolbar';
import { dataQa } from '../constants';

export type TableLabels =
  & Pick<TableToolbarProps, 'searchplaceholderlabel'>
  & Pick<TablePaginationProps, 'labelrowsperpage' | 'labelpaginationof'>
  & Pick<TableHeaderCellProps, 'tooltiplabel'>;

export interface TableQAs {
  /** Data-qa applied to the root table */
  table: dataQa;
  /** Data-qa applied to the pagination components */
  pagination: dataQa;
  /** Data-qa applied to the toolbar */
  toolbar: dataQa;
  /** Data-qa applied to the header wrapper */
  header: dataQa;
  /** Data-qa applied to the header row */
  headerRow: dataQa;
  /** Data-qa applied to each header cell */
  headerCell: dataQa;
  /** Data-qa applied to the table body wrapper */
  tableBody: dataQa;
}

export interface TableCustomClasses {
  /** Custom class(es) for table */
  table?: string[];
  /** Custom class(es) for table toolbar */
  tableToolbar?: string[];
  /** Custom class(es) for table paginations */
  tablePagination?: string[];
  /** Custom class(es) for table pagination actions */
  tablePaginationActions?: string[];
  /** Custom class(es) for table header */
  tableHeader?: string[];
  /** Custom class(es) for table header row */
  tableHeaderRow?: string[];
  /** Custom class(es) for table header cell */
  tableHeaderCell?: string[];
  /** Custom class(es) for table body */
  tableBody?: string[];
  /** Custom class(es) for table toolbar searchbar */
  tableSearchbar?: string[];
}

export type TableProps =
  & Pick<TableToolbarProps, 'onsearchclear' | 'onsearchinput' | 'paperElevation' | 'extraIcons'>
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
    /** Data-qa's used in the table */
    tableqas: TableQAs;
    /** Content for the table */
    tablebodycontent: ReactNode;
    /** Customization CSS classes for table components */
    tablecss?: TableCustomClasses;
    /** Control whether the top bar pagination should be shown */
    showTopPagination?: boolean;
    /** Control whether the bottom bar pagination should be shown */
    showBottomPagination?: boolean;
  };

const Table: FC<TableProps> = props => {
  const addCustomClasses = (component: keyof TableCustomClasses, baseClass?: string): string[] => {
    const classes: string[] = [];
    if (baseClass) classes.push(baseClass);
    if (props.tablecss && props.tablecss[component]) classes.push(...props.tablecss[component]);

    return classes;
  };

  return (
    <Fragment>
      <TableToolbar
        searchplaceholderlabel={props.labels.searchplaceholderlabel}
        onsearchinput={props.onsearchinput}
        onsearchclear={props.onsearchclear}
        data-qa={props.tableqas.toolbar}
        customclasses={classnames(addCustomClasses('tableToolbar'))}
        customSearchbarClasses={classnames(addCustomClasses('tableSearchbar'))}
        paperElevation={props.paperElevation}
        extraIcons={props.extraIcons}
      />
      {props.showTopPagination ?
        <TablePagination
          labelrowsperpage={props.labels.labelrowsperpage}
          labelpaginationof={props.labels.labelpaginationof}
          rowsPerPageOptions={props.rowsPerPageOptions}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          count={props.rowcount}
          onChangePage={props.onChangePage}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
          customclasses={classnames(addCustomClasses('tablePagination', css.tableTopPagination))}
          data-qa={props.tableqas.pagination}
        /> : <Fragment />
      }
      <MUITable className={classnames(addCustomClasses('table', css.table))} data-qa={props.tableqas.table}>
        <TableHead data-qa={props.tableqas.header} className={classnames(addCustomClasses('tableHeader'))}>
          <TableRow data-qa={props.tableqas.headerRow} className={classnames(addCustomClasses('tableHeaderRow'))}>
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
                customclasses={classnames(addCustomClasses('tableHeaderCell'))}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody data-qa={props.tableqas.tableBody} className={classnames(addCustomClasses('tableBody'))}>
          {props.tablebodycontent}
        </TableBody>
      </MUITable>
      {props.showBottomPagination ?
        <TablePagination
          labelrowsperpage={props.labels.labelrowsperpage}
          labelpaginationof={props.labels.labelpaginationof}
          rowsPerPageOptions={props.rowsPerPageOptions}
          rowsPerPage={props.rowsPerPage}
          page={props.page}
          count={props.rowcount}
          onChangePage={props.onChangePage}
          onChangeRowsPerPage={props.onChangeRowsPerPage}
          customclasses={classnames(addCustomClasses('tablePagination'))}
          data-qa={props.tableqas.pagination}
        /> : <Fragment />
      }
    </Fragment>
  );
};

export default Table;