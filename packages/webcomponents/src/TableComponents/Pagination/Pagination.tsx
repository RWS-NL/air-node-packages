import MUITablePagination, { TablePaginationTypeMap, TablePaginationBaseProps } from '@material-ui/core/TablePagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import classnames from 'classnames';
import React, { FC, memo, ReactNode } from 'react';
import css from './Pagination.scss';
import TablePaginationActions from '../PaginationActions/PaginationActions';

export type MutatedMUITablePaginationProps = TablePaginationTypeMap<object, React.ComponentType<TablePaginationBaseProps>>['props'];

export interface PaginationProps extends MutatedMUITablePaginationProps {
  /** The label in the displayed rows per page, for example "5 rows per page" */
  labelRowsPerPage: ReactNode;
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
 * <TablePagination
 *   labelRowsPerPage='rows per page'
 *   labelPaginationOf='of'
 *   rowsPerPageOptions={[1, 5, 10]}
 *   rowsPerPage={10}
 *   page={0}
 *   count={20}
 *   onChangePage={console.log}
 *   onChangeRowsPerPage={console.log}
 *   data-qa='table-pagination'
 * />
 */
export const Pagination: FC<PaginationProps> = props => {
  const isOnMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <MUITablePagination
      component='span'
      count={props.count} page={props.page}
      labelRowsPerPage={props.labelRowsPerPage}
      labelDisplayedRows={({ from, to, count }) => `${from <= 9 ? `0${from}` : from}-${to} ${props.labelPaginationOf} ${count}`}
      onChangePage={props.onChangePage} onChangeRowsPerPage={props.onChangeRowsPerPage}
      className={classnames(css.tablePagination, { [css.tablePaginationMobile]: isOnMobile }, props.customClasses)}
      classes={{ root: css.text, selectIcon: css.selectIcon, menuItem: css.text }}
      rowsPerPage={props.rowsPerPage} rowsPerPageOptions={props.rowsPerPageOptions}
      ActionsComponent={TablePaginationActions}
      data-qa={props['data-qa']}
    />
  );
};

export default memo(Pagination);