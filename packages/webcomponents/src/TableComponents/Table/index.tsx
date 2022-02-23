import MUITable, { TableProps as MUITableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { TablePaginationProps as MUITablePaginationProps } from '@mui/material/TablePagination';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import TableRow from '@mui/material/TableRow';
import clsx from 'clsx';
import React, { Fragment, memo, ReactNode } from 'react';
import { When } from 'react-if';
import { HeaderCell, HeaderCellProps, HeaderProps } from '../HeaderCell';
import { Pagination, PaginationProps } from '../Pagination';
import { Toolbar, ToolbarProps } from '../Toolbar';
import css from './Table.scss';

export type TableLabels = Pick<ToolbarProps, 'searchplaceholderlabel'> &
  Pick<PaginationProps, 'labelRowsPerPage' | 'labelPaginationOf'> &
  Pick<HeaderCellProps, 'tooltiplabel'>;

export interface TableQAs {
  /** Data-qa applied to the root table */
  table: string;
  /** Data-qa applied to the pagination components */
  pagination: string;
  /**
   * Data-qa applied to the toolbar
   * @deprecated A toolbar in a table is more than a table should do.
   */
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
  /**
   * Custom class(es) for table toolbar
   * @deprecated A toolbar in a table is more than a table component should do. See Toolbar component.
   */
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
  /**
   * Custom class(es) for table toolbar searchbar
   * @deprecated A toolbar in a table is more than a table component should do. See Toolbar component.
   */
  tableSearchbar?: string[];
}

export interface TableProps
  extends Pick<
      ToolbarProps,
      'onsearchclear' | 'onsearchinput' | 'paperElevation' | 'extraIcons' | 'searchdebounce' | 'clearSearch'
    >,
    Pick<HeaderCellProps, 'onRequestSort' | 'orderby' | 'order' | 'tooltipplacement'>,
    Pick<MUITablePaginationProps, 'onPageChange' | 'onRowsPerPageChange'>,
    Pick<
      MUITablePaginationProps,
      'rowsPerPage' | 'rowsPerPageOptions' | 'page' | 'onPageChange' | 'onRowsPerPageChange'
    >,
    MUITableProps {
  /** Headers for the table */
  headers: HeaderProps[];
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
  /**
   * Control whether the top bar pagination should be shown
   * @default false
   */
  showTopPagination?: boolean;
  /**
   * Control whether the bottom bar pagination should be shown
   * @default false
   */
  showBottomPagination?: boolean;
  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   * @default TablePaginationActions
   */
  customPagination?: React.ElementType<TablePaginationActionsProps>;
  /**
   * Disables the table toolbar
   * @default false
   * @deprecated A toolbar in a table is more than a table component should do. See Toolbar component.
   */
  disableToolbar?: boolean;
  /** Additional props to pass to the Material UI Table component */
  TableProps?: MUITableProps;
  /** Additional props to pass to each of the Header cell components */
  HeaderCellProps?: HeaderCellProps;
  /**
   * Additional props to pass to the toolbar component
   * @deprecated A toolbar in a table is more than a table component should do. See Toolbar component.
   */
  ToolbarProps?: ToolbarProps;
  /** Additional props to pass the the pagination component */
  PaginationProps?: MUITablePaginationProps;
}

const renderTablePagination = (props: TableProps, customClasses: string) => {
  return (
    <Pagination
      {...props.PaginationProps}
      labelRowsPerPage={props.labels.labelRowsPerPage}
      labelPaginationOf={props.labels.labelPaginationOf}
      rowsPerPageOptions={props.rowsPerPageOptions}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      count={props.rowcount}
      onPageChange={props.onPageChange as any}
      onRowsPerPageChange={props.onRowsPerPageChange}
      customClasses={customClasses}
      data-qa={props.tableqas.pagination}
      customPagination={props.customPagination}
    />
  );
};

const renderTableHead = (
  props: TableProps,
  addCustomClasses: (component: keyof TableCustomClasses, baseClass?: string) => string[]
) => (
  <TableHead data-qa={props.tableqas.header} className={clsx(addCustomClasses('tableHeader'))}>
    <TableRow data-qa={props.tableqas.headerRow} className={clsx(addCustomClasses('tableHeaderRow'))}>
      {props.headers.map((header, index) => (
        <HeaderCell
          {...props.HeaderCellProps}
          key={index}
          header={header}
          orderby={props.orderby}
          order={props.order || 'asc'}
          tooltiplabel={props.labels.tooltiplabel}
          tooltipplacement={props.tooltipplacement}
          onRequestSort={props.onRequestSort}
          data-qa={props.tableqas.headerCell}
          customclasses={clsx(addCustomClasses('tableHeaderCell'))}
          isActionButtonCell={header.isActionButtonCell}
        />
      ))}
    </TableRow>
  </TableHead>
);

/**
 * Constructs a table using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the table
 * @example
 * ```jsx
 * <Table
 *   showBottomPagination
 *   showTopPagination
 *   paperElevation={1}
 *   onsearchclear={props.handleSearchClear}
 *   onsearchinput={props.handleSearchInput}
 *   onRequestSort={props.handleRequestSort}
 *   onPageChange={props.handleChangePage}
 *   onRowsPerPageChange={props.handleChangeRowsPerPage}
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
 * ```
 */
export const Table = memo(
  ({ showTopPagination = false, showBottomPagination = false, disableToolbar = false, ...props }: TableProps) => {
    const addCustomClasses = (component: keyof TableCustomClasses, baseClass?: string): string[] => {
      const classes: string[] = [];
      if (baseClass) classes.push(baseClass);
      if (props.tablecss && props.tablecss[component]) classes.push(...props.tablecss[component]!); // eslint-disable-line @typescript-eslint/no-non-null-assertion

      return classes;
    };

    // TODO -as- 20210421 a toolbar in a table component is too much for one component. Deprecated the toolbar props.
    //  use the separate Toolbar component.
    return (
      <Fragment>
        <When condition={disableToolbar === false}>
          <Toolbar
            {...props.ToolbarProps}
            clearSearch={props.clearSearch}
            searchplaceholderlabel={props.labels.searchplaceholderlabel}
            onsearchinput={props.onsearchinput}
            onsearchclear={props.onsearchclear}
            searchdebounce={props.searchdebounce}
            data-qa={props.tableqas.toolbar}
            customclasses={clsx(addCustomClasses('tableToolbar'))}
            customSearchbarClasses={clsx(addCustomClasses('tableSearchbar'))}
            paperElevation={props.paperElevation}
            extraIcons={props.extraIcons}
          />
        </When>

        <When condition={showTopPagination}>
          {renderTablePagination(props, clsx(addCustomClasses('tablePagination', css.tableTopPagination)))}
        </When>

        <MUITable
          {...props.TableProps}
          stickyHeader={props.stickyHeader}
          className={clsx(addCustomClasses('table', css.table))}
          data-qa={props.tableqas.table}
        >
          {renderTableHead(props, addCustomClasses)}
          <TableBody data-qa={props.tableqas.tableBody} className={clsx(addCustomClasses('tableBody'))}>
            {props.tablebodycontent}
          </TableBody>
        </MUITable>

        <When condition={showBottomPagination}>
          {renderTablePagination(props, clsx(addCustomClasses('tablePagination')))}
        </When>
      </Fragment>
    );
  }
);
