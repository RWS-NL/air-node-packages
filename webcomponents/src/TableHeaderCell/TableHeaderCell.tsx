import MUITableCell from '@material-ui/core/TableCell';
import React, { FC } from "react";
import classnames from 'classnames';
import css from './TableHeaderCell.scss';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';

export type TableHeaderProps = {
    label: string;
    numeric?: boolean;
    disablePadding?: boolean;
}

export type TableHeaderCellProps = {
    header: TableHeaderProps;
    orderBy: string;
    order: 'desc' | 'asc';
    tooltipLabel: string;
    tooltipPlacement: TooltipProps['placement'];
    onRequestSort: (property: string) => void;
    component?: 'th' | 'td';
    scope?: string;
    customClasses?: string | string[];
}

const TableHeaderCell: FC<TableHeaderCellProps> = props => (
    <MUITableCell
        align={props.header.numeric ? 'right' : 'left'}
        padding={props.header.disablePadding ? 'none' : 'default'}
        sortDirection={props.orderBy === props.header.label ? props.order : false}
        className={classnames(css.tableCells, props.customClasses)}>
        <Tooltip title={props.tooltipLabel} placement={props.tooltipPlacement || 'bottom-start'}>
            <TableSortLabel
                data-qa={`tableSortLabel_${props.header.label}`}
                active={props.orderBy === props.header.label}
                direction={props.order}
                onClick={() => props.onRequestSort(props.header.label)}
            >
                {props.header.label}
            </TableSortLabel>
        </Tooltip>
    </MUITableCell>
);

export default TableHeaderCell;
