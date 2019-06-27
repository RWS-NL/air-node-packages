import MUITableCell, { TableCellProps as MUITableCellProps } from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import classnames from 'classnames';
import React, { FC } from 'react';
import css from './TableHeaderCell.scss';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import { customCss, DataQa, label } from '../typings';

export type TableHeaderProps = {
  label: string;
  numeric?: boolean;
  disablePadding?: boolean;
};

export type TableHeaderCellProps = {
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
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
  /** data-qa tag to apply to the search bar and input element */
  'data-qa'?: DataQa;
} & MUITableCellProps;

const TableHeaderCell: FC<TableHeaderCellProps> = props => (
  <MUITableCell
    data-qa={props['data-qa']}
    align={props.header.numeric ? 'right' : 'left'}
    padding={props.header.disablePadding ? 'none' : 'default'}
    sortDirection={props.orderby === props.header.label ? props.order : false}
    className={classnames(css.tableCells, props.customclasses)}>
    <Tooltip title={props.tooltiplabel} placement={props.tooltipplacement || 'bottom-start'}
      data-qa={`table-header-${props['data-qa']}`}>
      <TableSortLabel
        data-qa={`tableSortLabel_${props.header.label}`}
        active={props.orderby === props.header.label}
        direction={props.order}
        onClick={() => props.onRequestSort(props.header.label)}
      >
        {props.header.label}
      </TableSortLabel>
    </Tooltip>
  </MUITableCell>
);

export default TableHeaderCell;
