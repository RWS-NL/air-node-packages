import MUITableCell, { TableCellProps as MUITableCellProps } from '@material-ui/core/TableCell';
import clsx from 'clsx';
import React, { memo, ReactNode } from 'react';
import css from './BodyCell.scss';

export interface BodyCellProps extends MUITableCellProps {
  /** Content for the cell */
  content: ReactNode;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
}

/**
 * Constructs a table body cell using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the body cell
 * @example
 * ```jsx
 * <BodyCell content='Cool Content' />
 * ```
 */
export const BodyCell = memo(
  ({ customclasses, scope, component, content, 'data-qa': dataQa, ...props }: BodyCellProps) => (
    <MUITableCell
      {...props}
      data-qa={dataQa}
      className={clsx(css.tableCells, customclasses)}
      component={component}
      scope={scope}
    >
      {content}
    </MUITableCell>
  )
);
