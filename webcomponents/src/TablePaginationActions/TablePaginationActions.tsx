import React, { FC, SyntheticEvent, Fragment } from "react";
import classnames from 'classnames';
import css from './TableBodyCell.scss';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

export type TablePaginationActionsProps = {
    rowsPerPage: number;
    page: number;
    count: number;
    onChangePage: (event: any, page: number) => void;
}

const TablePaginationActions: FC<TablePaginationActionsProps> = props => {
    const handleFirstPageButtonclick = (event: any) => props.onChangePage(event, 0);
    const handleBackButtonClick = (event: any) => props.onChangePage(event, props.page - 1);
    const handleNextButtonClick = (event: any) => props.onChangePage(event, props.page + 1);
    const handleLastPageButtonClick = (event: any) => props.onChangePage(event, Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1));
    const handlePageClick = (page: number) => (event: SyntheticEvent) => props.onChangePage(event, page);

    const renderPages = () => (
        [...Array(Math.ceil(props.count / props.rowsPerPage)).keys()]
            .map(x => ++x)
            .map((page, key) => {
                if (props.page + 1 === page) {
                    return <Chip key={key} label={page} color='primary' variant='default' onClick={handlePageClick(page - 1)} className={classnames(css.activePageChip, css['ie11-chipCorrection'])} />
                }

                return <span key={key} onClick={handlePageClick(page - 1)} className={classnames(css.paginationNumbers)}>{page}</span>
            })
    )

    return (
        <Fragment>
            <IconButton onClick={handleFirstPageButtonclick} disabled={props.page === 0} color='primary' className={css.noHoverBackground}>
                <FirstPageIcon />
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={props.page === 0} color='primary' className={css.noHoverBackground}>
                <KeyboardArrowLeft />
            </IconButton>
            {renderPages()}
            <IconButton onClick={handleNextButtonClick} disabled={props.page >= Math.ceil(props.count / props.rowsPerPage) - 1} color='primary' className={css.noHoverBackground}>
                <KeyboardArrowRight />
            </IconButton>
            <IconButton onClick={handleLastPageButtonClick} disabled={props.page >= Math.ceil(props.count / props.rowsPerPage) - 1} color='primary' className={css.noHoverBackground}>
                <LastPageIcon />
            </IconButton>
        </Fragment>
    )
}

export default TablePaginationActions;