import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import clsx from 'clsx';
import React, { memo } from 'react';
import { Else, If, Then } from 'react-if';
import css from './PaginationActions.scss';
import { PaginationButton, PaginationButtonProps } from './PaginationButton';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';

const FIRST_PAGE_INDEX = 0;

export type PaginationActionsProps = TablePaginationActionsProps & {
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
};

type ChangePageEvent = (page: number) => (event: React.MouseEvent<any, any>) => void;

const renderCurrentPage = (pageNumber: number, clickEvent: ChangePageEvent): JSX.Element => (
  <Chip
    key={pageNumber}
    label={pageNumber}
    color='primary'
    variant={undefined}
    onClick={clickEvent(pageNumber - 1)}
    className={clsx(css.activePageChip, css.ie11ChipCorrection)}
  />
);

const renderPage = (pageNumber: number, clickEvent: ChangePageEvent, dots?: boolean): JSX.Element => {
  if (dots) {
    return (
      <Box component='span' key={pageNumber} className={clsx(css.paginationNumbers)}>
        ...
      </Box>
    );
  } else {
    return (
      <Box
        component='span'
        key={pageNumber}
        onClick={clickEvent(pageNumber - 1)}
        className={clsx(css.paginationNumbers)}
      >
        {pageNumber}
      </Box>
    );
  }
};

const renderPages = (totalPages: number, currentPageIndex: number, handlePageClick: ChangePageEvent) => {
  currentPageIndex = ++currentPageIndex;
  const showSDots = currentPageIndex > 4;
  const showEDots = currentPageIndex < totalPages - 3;

  const elements = [];
  if (currentPageIndex === 1) {
    elements.push(renderCurrentPage(currentPageIndex, handlePageClick));
  } else {
    elements.push(renderPage(1, handlePageClick));
  }
  if (showSDots) {
    elements.push(renderPage(5, handlePageClick, true));
  } else {
    for (let i = 2; i < currentPageIndex - 1; i++) {
      elements.push(renderPage(i, handlePageClick));
    }
  }

  if (currentPageIndex > 2) {
    elements.push(renderPage(currentPageIndex - 1, handlePageClick));
  }

  if (currentPageIndex !== 1 && currentPageIndex !== totalPages) {
    elements.push(renderCurrentPage(currentPageIndex, handlePageClick));
  }

  if (currentPageIndex < totalPages - 1) {
    elements.push(renderPage(currentPageIndex + 1, handlePageClick));
  }

  if (showEDots) {
    elements.push(renderPage(totalPages - 4, handlePageClick, true));
  } else {
    for (let i = currentPageIndex + 2; i < totalPages; i++) {
      elements.push(renderPage(i, handlePageClick));
    }
  }

  if (currentPageIndex === totalPages) {
    elements.push(renderCurrentPage(totalPages, handlePageClick));
  } else {
    elements.push(renderPage(totalPages, handlePageClick));
  }

  return elements;
};

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
          <Then>{renderCurrentPage(currentPageIndex + 1, handlePageClick)}</Then>
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
