import MUITableCell, { TableCellProps as MUITableCellProps } from '@material-ui/core/TableCell';
import classnames from 'classnames';
import React, { FC } from 'react';
import css from './TableBodyCell.scss';
import { cellContent, customCss, DataQa } from '../typings';

export type TableBodyCellProps = {
  /** Content for the cell */
  content: cellContent;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
  /** data-qa tag to apply to the search bar and input element */
  'data-qa'?: DataQa;
} & MUITableCellProps;

const splitTableCellText = (text: string) => {
  const splitContent = text.match(/.{1,75}/g);

  if (splitContent) return splitContent.join(' ');
  return text;
};

const TableBodyCell: FC<TableBodyCellProps> = props => (
  <MUITableCell
    data-qa={props['data-qa']}
    className={classnames(css.tableCells, props.customclasses)}
    component={props.component}
    scope={props.scope}
  >
    {typeof props.content === 'string' ? splitTableCellText(props.content) : props.content}
  </MUITableCell>
);

export default TableBodyCell;