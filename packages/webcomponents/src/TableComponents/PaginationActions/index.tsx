import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import clsx from 'clsx';
import React, { memo } from 'react';
import { Else, If, Then } from 'react-if';
import css from './PaginationActions.scss';
import { PaginationButton, PaginationButtonProps } from './PaginationButton';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';

const FIRST_PAGE_INDEX = 0;

export type PaginationActionsProps = TablePaginationActionsProps & {
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
};

type ChangePageEvent = (page: number) => (event: React.MouseEvent<any, any>) => void;

const renderCurrentPage = (key: number, pageNumber: number, clickEvent: ChangePageEvent): JSX.Element => (
  <Chip
    key={key}
    label={pageNumber}
    color='primary'
    variant='default'
    onClick={clickEvent(pageNumber - 1)}
    className={clsx(css.activePageChip, css.ie11ChipCorrection)}
  />
);

const renderPages = (totalPages: number, currentPageIndex: number, handlePageClick: ChangePageEvent) =>
  [...Array(totalPages).keys()]
    .map((pageNumber) => ++pageNumber)
    .map((pageNumber, pageIndex) => {
      if (currentPageIndex === pageIndex) {
        return renderCurrentPage(pageIndex, pageNumber, handlePageClick);
      }

      return (
        <Box
          component='span'
          key={pageIndex}
          onClick={handlePageClick(pageIndex)}
          className={clsx(css.paginationNumbers)}
        >
          {pageNumber}
        </Box>
      );
    });

/**
 * Constructs a table pagination action navigators using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the table pagination
 */
export const PaginationActions = memo(
  ({ onPageChange, count, rowsPerPage, page: currentPageIndex, 'data-qa': dataQa }: PaginationActionsProps) => {
    const isOnMobile = useMediaQuery('(max-width: 1024px)');
    const totalPages = Math.ceil(count / rowsPerPage);

    const handleFirstPageButtonClick = (event: React.MouseEvent<any, any>): void =>
      onPageChange(event, FIRST_PAGE_INDEX);
    const handleBackButtonClick = (event: React.MouseEvent<any, any>): void =>
      onPageChange(event, currentPageIndex - 1);
    const handleNextButtonClick = (event: React.MouseEvent<any, any>): void =>
      onPageChange(event, currentPageIndex + 1);
    const handleLastPageButtonClick = (event: React.MouseEvent<any, any>): void =>
      onPageChange(event, Math.max(0, totalPages - 1));
    const handlePageClick =
      (page: number) =>
      (event: React.MouseEvent<any, any>): void =>
        onPageChange(event, page);

    const nextButtonShouldBeDisabled = currentPageIndex >= totalPages - 1;
    const previousButtonShouldBeDisabled = currentPageIndex === FIRST_PAGE_INDEX;

    return (
      <Box style={{ display: 'flex', alignItems: 'center' }} data-qa={dataQa}>
        <PaginationButton
          data-qa={`${dataQa ? `${dataQa}-` : ''}first-page-button`}
          onClick={handleFirstPageButtonClick}
          disabled={previousButtonShouldBeDisabled}
          icon={<FirstPageIcon />}
        />
        <PaginationButton
          data-qa={`${dataQa ? `${dataQa}-` : ''}previous-page-button`}
          onClick={handleBackButtonClick}
          disabled={previousButtonShouldBeDisabled}
          icon={<KeyboardArrowLeft />}
        />

        <If condition={isOnMobile}>
          <Then>{renderCurrentPage(1, currentPageIndex + 1, handlePageClick)}</Then>
          <Else>{renderPages(totalPages, currentPageIndex, handlePageClick)}</Else>
        </If>

        <PaginationButton
          data-qa={`${dataQa ? `${dataQa}-` : ''}next-page-button`}
          onClick={handleNextButtonClick}
          disabled={nextButtonShouldBeDisabled}
          icon={<KeyboardArrowRight />}
        />
        <PaginationButton
          data-qa={`${dataQa ? `${dataQa}-` : ''}last-page-button`}
          onClick={handleLastPageButtonClick}
          disabled={nextButtonShouldBeDisabled}
          icon={<LastPageIcon />}
        />
      </Box>
    );
  }
);

export { PaginationButtonProps, PaginationButton };
