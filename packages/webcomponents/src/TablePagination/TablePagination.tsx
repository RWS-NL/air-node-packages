import MUITablePagination, { TablePaginationTypeMap, TablePaginationBaseProps } from '@material-ui/core/TablePagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import classnames from 'classnames';
import React, { FC } from 'react';
import css from './TablePagination.scss';
import TablePaginationActions from '../TablePaginationActions/TablePaginationActions';
import { label, dataQa, customCss } from '../constants';

export type MutatedMUITablePaginationProps = TablePaginationTypeMap<{}, React.ComponentType<TablePaginationBaseProps>>['props'];

export interface TablePaginationProps extends MutatedMUITablePaginationProps {
  /** The label in the displayed rows per page, for example "5 rows per page" */
  labelrowsperpage: label;
  /** The label in the displayed pages, for example "of" in "page 1 of 10" */
  labelpaginationof: label;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
}

const TablePagination: FC<TablePaginationProps> = props => {
  const isOnMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <MUITablePagination
      component='div'
      count={props.count} page={props.page}
      labelRowsPerPage={props.labelRowsPerPage}
      labelDisplayedRows={({ from, to, count }) => `${from <= 9 ? `0${from}` : from}-${to} ${props.labelpaginationof} ${count}`}
      onChangePage={props.onChangePage} onChangeRowsPerPage={props.onChangeRowsPerPage}
      className={classnames(css.tablePagination, { [css.tablePaginationMobile]: isOnMobile }, props.customclasses)}
      classes={{ selectIcon: css.selectIcon, menuItem: css.menuItem }}
      rowsPerPage={props.rowsPerPage} rowsPerPageOptions={props.rowsPerPageOptions}
      ActionsComponent={TablePaginationActions}
      data-qa={props['data-qa']}
    />
  );
};

export default TablePagination;