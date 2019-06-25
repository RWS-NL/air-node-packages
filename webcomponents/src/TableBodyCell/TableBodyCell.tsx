import MUITableCell from '@material-ui/core/TableCell';
import React, { FC, ReactNode } from "react";
import classnames from 'classnames';
import css from './TableBodyCell.scss';

export type TableBodyCellProps = {
    content: string | ReactNode;
    component?: 'th' | 'td';
    scope?: string;
    customClasses?: string | string[];
}

const splitTableCellText = (text: string) => {
    const splitContent = text.match(/.{1,75}/g);

    if (splitContent) return splitContent.join(' ');
    return text;
}

const TableBodyCell: FC<TableBodyCellProps> = props => (
    <MUITableCell
        className={classnames(css.tableCells, props.customClasses)}
        component={props.component}
        scope={props.scope}
    >
        {typeof props.content === 'string' ? splitTableCellText(props.content) : props.content}
    </MUITableCell>
)

export default TableBodyCell;