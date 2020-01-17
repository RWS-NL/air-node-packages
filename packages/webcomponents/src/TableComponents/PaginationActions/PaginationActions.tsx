import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import classnames from 'classnames';
import React, { FC, SyntheticEvent, memo } from 'react';
import css from './PaginationActions.scss';

export interface PaginationActionsProps {
  /** Amount of rows per page */
  rowsPerPage: number;
  /** Current page */
  page: number;
  /** Amount of rows */
  count: number;
  /** Function triggered when changing page */
  onChangePage: (event: any, page: number) => void;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the button */
  customclasses?: string | string[];
}

/**
 * Constructs a table pagination action navigators using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the table pagination
 */
export const PaginationActions: FC<PaginationActionsProps> = props => {
  const handleFirstPageButtonclick = (event: any) => props.onChangePage(event, 0);
  const handleBackButtonClick = (event: any) => props.onChangePage(event, props.page - 1);
  const handleNextButtonClick = (event: any) => props.onChangePage(event, props.page + 1);
  const handleLastPageButtonClick = (event: any) =>
    props.onChangePage(event, Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1));
  const handlePageClick = (page: number) => (event: SyntheticEvent) => props.onChangePage(event, page);
  const isOnMobile = useMediaQuery('(max-width: 1024px)');

  const renderCurrentPage = (
    key: number,
    page: number,
    clickEvent: (page: number) => (event: React.SyntheticEvent<Element, Event>) => void
  ): JSX.Element => {
    return (
      <Chip
        key={key}
        label={page}
        color='primary'
        variant='default'
        onClick={clickEvent(page - 1)}
        className={classnames(css.activePageChip, css.ie11ChipCorrection)}
      />
    );
  };

  const renderPages = () =>
    [...Array(Math.ceil(props.count / props.rowsPerPage)).keys()]
      .map(x => ++x)
      .map((page, key) => {
        if (props.page + 1 === page) {
          return renderCurrentPage(key, page, handlePageClick);
        }

        return (
          <span key={key} onClick={handlePageClick(page - 1)} className={classnames(css.paginationNumbers)}>
            {page}
          </span>
        );
      });

  return (
    <Box style={{ display: 'flex', alignItems: 'center' }} data-qa={props['data-qa']}>
      <IconButton
        onClick={handleFirstPageButtonclick}
        disabled={props.page === 0}
        color='primary'
        className={css.noHoverBackground}
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={props.page === 0}
        color='primary'
        className={css.noHoverBackground}
      >
        <KeyboardArrowLeft />
      </IconButton>
      {!isOnMobile ? renderPages() : renderCurrentPage(1, props.page + 1, handlePageClick)}
      <IconButton
        onClick={handleNextButtonClick}
        disabled={props.page >= Math.ceil(props.count / props.rowsPerPage) - 1}
        color='primary'
        className={css.noHoverBackground}
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={props.page >= Math.ceil(props.count / props.rowsPerPage) - 1}
        color='primary'
        className={css.noHoverBackground}
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};

export default memo(PaginationActions);
