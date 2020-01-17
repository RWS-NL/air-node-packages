import MUITableCell, { TableCellProps as MUITableCellProps } from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import classnames from 'classnames';
import React, { FC, memo, ReactNode } from 'react';
import Tooltip, { TooltipProps } from '../../Tooltip/Tooltip';
import css from './HeaderCell.scss';

export interface HeaderProps {
  /** Label for this table header */
  label: string;
  /** Whether this table header represents a column of numeric values */
  numeric?: boolean;
  /** Whether the additional padding for this table header should be disabled */
  disablePadding?: boolean;
  /** Whether this header is for a cell that contains an action button */
  isActionButtonCell?: boolean;
}

export interface HeaderCellProps extends MUITableCellProps {
  /** The header data */
  header: HeaderProps;
  /** The property to order by */
  orderby: string;
  /** The order direction for the header */
  order: 'desc' | 'asc';
  /** The label for the tooltip */
  tooltiplabel: ReactNode;
  /** The placement of the tooltip */
  tooltipplacement: TooltipProps['placement'];
  /** The function triggered when a sort request is made */
  onRequestSort: <T extends string>(property: T) => void;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
  /** Whether this header is for a cell that contains an action button */
  isActionButtonCell?: boolean;
}

/**
 * Constructs a table header cell using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the TableHeader cell
 */
export const HeaderCell: FC<HeaderCellProps> = props => {
  const renderTableHeaderCell = () => {
    if (props.isActionButtonCell) {
      return (
        <TableSortLabel
          data-qa={`tableSortLabel_${props.header.label}`}
          active={false}
          hideSortIcon
          onClick={() => undefined}
        >
          {props.header.label}
        </TableSortLabel>
      );
    }

    return (
      <Tooltip
        title={props.tooltiplabel}
        placement={props.tooltipplacement || 'top'}
        data-qa={`table-header-${props['data-qa']}`}
      >
        <TableSortLabel
          data-qa={`tableSortLabel_${props.header.label}`}
          classes={{ icon: css.sortIcon }}
          active={props.orderby === props.header.label}
          direction={props.order}
          onClick={() => props.onRequestSort(props.header.label)}
        >
          {props.header.label}
        </TableSortLabel>
      </Tooltip>
    );
  };

  return (
    <MUITableCell
      data-qa={props['data-qa']}
      align={props.header.numeric ? 'right' : 'left'}
      padding={props.header.disablePadding ? 'none' : 'default'}
      sortDirection={props.orderby === props.header.label ? props.order : false}
      className={classnames(css.tableCells, { [css.actionHeaderCell]: props.isActionButtonCell }, props.customclasses)}
    >
      {renderTableHeaderCell()}
    </MUITableCell>
  );
};

export default memo(HeaderCell);
