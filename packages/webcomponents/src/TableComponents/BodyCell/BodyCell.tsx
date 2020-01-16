import MUITableCell, { TableCellProps as MUITableCellProps } from '@material-ui/core/TableCell';
import classnames from 'classnames';
import React, { FC, memo, ReactNode } from 'react';
import css from './BodyCell.scss';

export interface TableBodyCellProps extends MUITableCellProps {
  /** Content for the cell */
  content: ReactNode;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
}

/**
 * Splits the text in table cell over multiple lines when it's longer than 75 characters
 * @param text Text to split
 */
export const splitTableCellText = (text: string) => {
  const splitContent = text.match(/.{1,75}/g);

  if (splitContent) return splitContent.join(' ');

  return text;
};

/**
 * Constructs a table body cell using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the TableBody cell
 * @example
 * <TableBodyCell content='Cool Content' />
 */
export const TableBodyCell: FC<TableBodyCellProps> = props => (
  <MUITableCell
    data-qa={props['data-qa']}
    className={classnames(css.tableCells, props.customclasses)}
    component={props.component}
    scope={props.scope}
  >
    {typeof props.content === 'string' ? splitTableCellText(props.content) : props.content}
  </MUITableCell>
);

export default memo(TableBodyCell);