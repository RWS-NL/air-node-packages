import MUITablePagination, { TablePaginationBaseProps, TablePaginationTypeMap } from '@mui/material/TablePagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import React, { ComponentType, memo, ReactNode } from 'react';
import { PaginationActions } from '../PaginationActions';
import css from './Pagination.scss';

export type MutatedMUITablePaginationProps = TablePaginationTypeMap<
  Record<PropertyKey, unknown>,
  ComponentType<TablePaginationBaseProps>
>['props'];

export interface PaginationProps extends MutatedMUITablePaginationProps {
  /** The label in the displayed pages, for example "of" in "page 1 of 10" */
  labelPaginationOf: ReactNode;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customClasses?: string | string[];
}

/**
 * Constructs a Table pagination using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the table pagination
 * @example
 * ```jsx
 * <TablePagination
 *   labelRowsPerPage='rows per page'
 *   labelPaginationOf='of'
 *   rowsPerPageOptions={[1, 5, 10]}
 *   rowsPerPage={10}
 *   page={0}
 *   count={20}
 *   onPageChange={console.log}
 *   onRowsPerPageChange={console.log}
 *   data-qa='table-pagination'
 * />
 * ```
 */
export const Pagination = memo((props: PaginationProps) => {
  const isOnMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <MUITablePagination
      component='span'
      count={props.count}
      page={props.page}
      labelRowsPerPage={props.labelRowsPerPage}
      labelDisplayedRows={({ from, to, count }) =>
        `${from <= 9 ? `0${from}` : from}-${to} ${props.labelPaginationOf} ${count}`
      }
      onPageChange={props.onPageChange}
      onRowsPerPageChange={props.onRowsPerPageChange}
      className={clsx(css.tablePagination, { [css.tablePaginationMobile]: isOnMobile }, props.customClasses)}
      classes={{ root: css.text, selectIcon: css.selectIcon, menuItem: css.text }}
      rowsPerPage={props.rowsPerPage}
      rowsPerPageOptions={props.rowsPerPageOptions}
      ActionsComponent={PaginationActions}
      data-qa={props['data-qa']}
    />
  );
});
