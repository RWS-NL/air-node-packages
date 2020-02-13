import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import classnames from 'classnames';
import React, { memo, SyntheticEvent } from 'react';
import { Else, If, Then } from 'react-if';
import css from './PaginationActions.scss';
import PaginationButton, { PaginationButtonProps } from './PaginationButton';

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
export const PaginationActions = memo(
  ({ onChangePage, count, rowsPerPage, page, 'data-qa': dataQa }: PaginationActionsProps) => {
    const handleFirstPageButtonclick = <T extends unknown>(event: T): void => onChangePage(event, 0);
    const handleBackButtonClick = <T extends unknown>(event: T): void => onChangePage(event, page - 1);
    const handleNextButtonClick = <T extends unknown>(event: T): void => onChangePage(event, page + 1);
    const handleLastPageButtonClick = <T extends unknown>(event: T): void =>
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    const handlePageClick = (page: number) => (event: SyntheticEvent): void => onChangePage(event, page);

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
      [...Array(Math.ceil(count / rowsPerPage)).keys()]
        .map(x => ++x)
        .map((page, key) => {
          if (page + 1 === page) {
            return renderCurrentPage(key, page, handlePageClick);
          }

          return (
            <Box
              component='span'
              key={key}
              onClick={handlePageClick(page - 1)}
              className={classnames(css.paginationNumbers)}
            >
              {page}
            </Box>
          );
        });

    const isOnMobile = useMediaQuery('(max-width: 1024px)');
    const nextButtonShouldBeDisabled = page >= Math.ceil(count / rowsPerPage) - 1;
    const previousButtonShouldBeDisabled = page === 0;

    return (
      <Box style={{ display: 'flex', alignItems: 'center' }} data-qa={dataQa}>
        <PaginationButton
          data-qa={`${dataQa ? `${dataQa}-` : ''}first-page-button`}
          onClick={handleFirstPageButtonclick}
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
          <Then>{renderCurrentPage(1, page + 1, handlePageClick)}</Then>
          <Else>{renderPages()}</Else>
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
export default PaginationActions;
