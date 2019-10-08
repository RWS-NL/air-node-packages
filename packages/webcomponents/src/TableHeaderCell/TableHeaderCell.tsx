import MUITableCell, { TableCellProps as MUITableCellProps } from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import classnames from 'classnames';
import React, { FC, memo } from 'react';
import css from './TableHeaderCell.scss';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import { customCss, dataQa, label } from '../constants';

export interface TableHeaderProps {
  /** Label for this table header */
  label: string;
  /** Whether this table header represents a column of numeric values */
  numeric?: boolean;
  /** Whether the additional padding for this table header should be disabled */
  disablePadding?: boolean;
}

export interface TableHeaderCellProps extends MUITableCellProps {
  /** The header data */
  header: TableHeaderProps;
  /** The property to order by */
  orderby: string;
  /** The order direction for the header */
  order: 'desc' | 'asc';
  /** The label for the tooltip */
  tooltiplabel: label;
  /** The placement of the tooltip */
  tooltipplacement: TooltipProps['placement'];
  /** The function triggered when a sort request is made */
  onRequestSort: (property: string) => void;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
}

/** Creates a table header cell using pre-defined Rijkswatestaat styling */
export const TableHeaderCell: FC<TableHeaderCellProps> = props => (
  <MUITableCell
    data-qa={props['data-qa']}
    align={props.header.numeric ? 'right' : 'left'}
    padding={props.header.disablePadding ? 'none' : 'default'}
    sortDirection={props.orderby === props.header.label ? props.order : false}
    className={classnames(css.tableCells, props.customclasses)}>
    <Tooltip title={props.tooltiplabel} placement={props.tooltipplacement || 'top'}
      data-qa={`table-header-${props['data-qa']}`}>
      <TableSortLabel
        data-qa={`tableSortLabel_${props.header.label}`}
        classes={{icon: css.sortIcon}}
        active={props.orderby === props.header.label}
        direction={props.order}
        onClick={() => props.onRequestSort(props.header.label)}
      >
        {props.header.label}
      </TableSortLabel>
    </Tooltip>
  </MUITableCell>
);

export default memo(TableHeaderCell);