import React, { FC, ChangeEvent, ReactNode } from "react";
import MUITablePagination, { TablePaginationProps as MUITablePaginationProps } from '@material-ui/core/TablePagination';
import classnames from 'classnames';
import css from './TablePagination.scss';
import { TablePaginationActions } from '../TablePaginationActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export type TablePaginationProps = {
    labelRowsPerPage: string | ReactNode;
    labelPaginationOf: string;
    rowsPerPageOptions: number[];
    rowsPerPage: number;
    page: number;
    count: number;
    customClasses?: string | string[];
    onChangePage: (event: any, page: number) => void;
    onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
} & MUITablePaginationProps

const TablePagination: FC<TablePaginationProps> = props => {
    const isOnMobile = useMediaQuery('(max-width: 1024px)');

    return (
        <MUITablePagination
            component='div'
            count={props.count} page={props.page}
            labelRowsPerPage={props.labelRowsPerPage}
            labelDisplayedRows={({ from, to, count }) => `${from <= 9 ? `0${from}` : from}-${to} ${props.labelPaginationOf} ${count}`}
            onChangePage={props.onChangePage} onChangeRowsPerPage={props.onChangeRowsPerPage}
            className={classnames(css.tablePagination, { [css.tablePaginationMobile]: isOnMobile }, props.customClasses)}
            classes={{ selectIcon: css.selectIcon, menuItem: css.menuItem }}
            rowsPerPage={props.rowsPerPage} rowsPerPageOptions={props.rowsPerPageOptions}
            ActionsComponent={TablePaginationActions}
        />
    );
};

export default TablePagination;
