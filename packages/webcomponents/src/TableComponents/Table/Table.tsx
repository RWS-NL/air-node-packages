import MUITable, { TableProps as MUITableProps } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import { TablePaginationProps as MUITablePaginationProps } from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import classnames from 'classnames';
import React, { FC, Fragment, ReactNode, memo } from 'react';
import css from './Table.scss';
import TableHeaderCell, { TableHeaderCellProps, TableHeaderProps } from '../HeaderCell/HeaderCell';
import Pagination, { PaginationProps } from '../Pagination/Pagination';
import TableToolbar, { TableToolbarProps } from '../Toolbar/Toolbar';

export type TableLabels =
  & Pick<TableToolbarProps, 'searchplaceholderlabel'>
  & Pick<PaginationProps, 'labelRowsPerPage' | 'labelPaginationOf'>
  & Pick<TableHeaderCellProps, 'tooltiplabel'>;

export interface TableQAs {
  /** Data-qa applied to the root table */
  table: string;
  /** Data-qa applied to the pagination components */
  pagination: string;
  /** Data-qa applied to the toolbar */
  toolbar: string;
  /** Data-qa applied to the header wrapper */
  header: string;
  /** Data-qa applied to the header row */
  headerRow: string;
  /** Data-qa applied to each header cell */
  headerCell: string;
  /** Data-qa applied to the table body wrapper */
  tableBody: string;
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

export interface TableProps extends
  Pick<TableToolbarProps, 'onsearchclear' | 'onsearchinput' | 'paperElevation' | 'extraIcons' | 'searchdebounce'>,
  Pick<TableHeaderCellProps, 'onRequestSort' | 'orderby' | 'order' | 'tooltipplacement'>,
  Pick<MUITablePaginationProps, 'rowsPerPage' | 'rowsPerPageOptions' | 'page' | 'onChangePage' | 'onChangeRowsPerPage'>,
  MUITableProps {
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
}

/**
 * Constructs a table using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the table
 * @example
 * <Table
 *   showBottomPagination
 *   showTopPagination
 *   paperElevation={1}
 *   onsearchclear={props.handleSearchClear}
 *   onsearchinput={props.handleSearchInput}
 *   onRequestSort={props.handleRequestSort}
 *   onChangePage={props.handleChangePage}
 *   onChangeRowsPerPage={props.handleChangeRowsPerPage}
 *   tooltipplacement='bottom-start'
 *   order={props.tableOrder}
 *   orderby={props.tableOrderBy}
 *   rowsPerPage={props.tableRowsPerPage}
 *   rowsPerPageOptions={tableRowsPerPage}
 *   page={props.tablePage}
 *   headers={tableHeaders}
 *   headermapping={tableHeaderMapping}
 *   rowcount={props.data.length}
 *   labels={{
 *     labelPaginationOf: t('table.generic.pagination.of_label'),
 *     labelRowsPerPage: t('table.generic.pagination.rows_per_page'),
 *     searchplaceholderlabel: t('table.generic.searchLabel'),
 *     tooltiplabel: t('table.generic.sortTooltipLabel'),
 *   }}
 *   tableqas={{
 *     header: 'table-header',
 *     headerRow: 'table-header-row',
 *     pagination: 'table-pagination',
 *     table: 'table',
 *     toolbar: 'table-toolbar',
 *     headerCell: 'table-header-cell',
 *     tableBody: 'table-body',
 *   }}
 *   extraIcons={[
 *     {
 *       icon: <CloudDownload />,
 *       clickEvent: () => console.log('Clicked button!'),
 *       tooltipText: 'Tooltip on button',
 *     }
 *   ]}
 *   tablebodycontent={(
 *     <Fragment>
 *       {props.data
 *         .slice(props.tablePage * props.tableRowsPerPage, props.tablePage * props.tableRowsPerPage + Number(props.tableRowsPerPage))
 *         .map((item, index) => {
 *           return (
 *             <TableRow hover tabIndex={-1} key={index} data-qa='table-body-row'>
 *               <TableBodyCell content={item.name} />
 *               <TableBodyCell content={item.email} />
 *             </TableRow>
 *           );
 *         })
 *       }
 *     </Fragment>
 *   )}
 * />
 */
export const Table: FC<TableProps> = props => {
  const addCustomClasses = (component: keyof TableCustomClasses, baseClass?: string): string[] => {
    const classes: string[] = [];
    if (baseClass) classes.push(baseClass);
    if (props.tablecss && props.tablecss[component]) classes.push(...props.tablecss[component]);

    return classes;
  };

  const renderTablePagination = (customClasses: string) => {
    return (
      <Pagination
        labelRowsPerPage={props.labels.labelRowsPerPage}
        labelPaginationOf={props.labels.labelPaginationOf}
        rowsPerPageOptions={props.rowsPerPageOptions}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        count={props.rowcount}
        onChangePage={props.onChangePage}
        onChangeRowsPerPage={props.onChangeRowsPerPage}
        customClasses={customClasses}
        data-qa={props.tableqas.pagination}
      />
    );
  };

  return (
    <Fragment>
      <TableToolbar
        searchplaceholderlabel={props.labels.searchplaceholderlabel}
        onsearchinput={props.onsearchinput}
        onsearchclear={props.onsearchclear}
        searchdebounce={props.searchdebounce}
        data-qa={props.tableqas.toolbar}
        customclasses={classnames(addCustomClasses('tableToolbar'))}
        customSearchbarClasses={classnames(addCustomClasses('tableSearchbar'))}
        paperElevation={props.paperElevation}
        extraIcons={props.extraIcons}
      />
      {
        props.showTopPagination ?
          renderTablePagination(classnames(addCustomClasses('tablePagination', css.tableTopPagination))) : <Fragment />
      }
      <MUITable
        stickyHeader={props.stickyHeader}
        className={classnames(addCustomClasses('table', css.table))}
        data-qa={props.tableqas.table}
      >
        <TableHead data-qa={props.tableqas.header} className={classnames(addCustomClasses('tableHeader'))}>
          <TableRow data-qa={props.tableqas.headerRow} className={classnames(addCustomClasses('tableHeaderRow'))}>
            {props.headers.map((header, index) => (
              <TableHeaderCell
                key={index}
                header={header}
                orderby={props.orderby}
                order={props.order || 'asc'}
                tooltiplabel={props.labels.tooltiplabel}
                tooltipplacement={props.tooltipplacement}
                onRequestSort={props.onRequestSort}
                data-qa={props.tableqas.headerCell}
                customclasses={classnames(addCustomClasses('tableHeaderCell'))}
                isActionButtonCell={header.isActionButtonCell}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody data-qa={props.tableqas.tableBody} className={classnames(addCustomClasses('tableBody'))}>
          {props.tablebodycontent}
        </TableBody>
      </MUITable>
      {
        props.showBottomPagination ?
          renderTablePagination(classnames(addCustomClasses('tablePagination'))) : <Fragment />
      }
    </Fragment>
  );
};

export default memo(Table);