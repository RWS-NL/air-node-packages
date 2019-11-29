import Grid from '@material-ui/core/Grid/Grid';
import classnames from 'classnames';
import debouncer from 'lodash.debounce';
import React, { FC, Fragment, memo } from 'react';
import { customCss, dataQa, label } from '../constants';
import SearchBar, { SearchBarProps } from '../SearchBar/SearchBar';
import css from './TableToolbar.scss';
import PaperButton from '../PaperButton/PaperButton';
import { PaperButtonProps } from '../PaperButton';

export interface RenderIconProps {
  /** The Material Icon to display in this paper button */
  icon: JSX.Element;
  /** The function to trigger when clicking this button */
  clickEvent: PaperButtonProps['onClick'];
  /**
   * Whether this button should be disabled or not
   * @default false
   */
  disabled?: PaperButtonProps['disabled'];
  /**
   * The text content to put in the tooltip
   * @default 'Click Me'
   */
  tooltipText?: PaperButtonProps['tooltipText'];
  /**
   * The placement for the tooltip
   * @default top
   */
  tooltipPlacement?: PaperButtonProps['tooltipPlacement'];
  /**
   * Disables the inclusion of a tooltip
   * @default false
   */
  disableTooltip?: PaperButtonProps['disableTooltip'];
}

export interface TableToolbarProps extends Pick<SearchBarProps, 'paperElevation'> {
  /** The debounce timeout to wait until a search action should be performed */
  searchdebounce?: number;
  /** The label to display when no text is in the search input box */
  searchplaceholderlabel: label;
  /** The action to trigger when searching (taking debounce into account) */
  onsearchinput: <T extends string>(searchTerms: T) => unknown;
  /** The action to trigger when clearing the search */
  onsearchclear: () => unknown;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the toolbar */
  customclasses?: customCss;
  /** Custom CSS classes to pass to the inner searchbar */
  customSearchbarClasses?: customCss;
  /** Any additional icons to display before the search bar */
  extraIcons?: RenderIconProps[];
}

/**
 * Renders a set of icons in the toolbar
 * @param iconData The icons to render
 */
export const renderIcons = (iconData: RenderIconProps[]) => {
  return (
    iconData.map((data, index) => (
      <Grid item key={`icon-${index}`}>
        <PaperButton
          icon={data.icon}
          disabled={data.disabled}
          onClick={data.clickEvent}
          tooltipText={data.tooltipText}
          tooltipPlacement={data.tooltipPlacement || 'top'}
          disableTooltip={data.disableTooltip}
        />
      </Grid>
    ))
  );
};

/** Creates a table toolbar using pre-defined Rijkswaterstaat styling */
export const TableToolbar: FC<TableToolbarProps> = props => {
  const debouncedSearch = debouncer((input: string) => props.onsearchinput(input), props.searchdebounce || 400);

  return (
    <div className={classnames(css.toolbar, props.customclasses)} data-qa={props['data-qa']}>
      <Grid container direction='row' justify='flex-end' alignItems='center' spacing={2}>
        {
          props.extraIcons && props.extraIcons.length
            ? renderIcons(props.extraIcons)
            : <Fragment />
        }
        <Grid item key={2}>
          <SearchBar
            data-qa='table-search-bar'
            placeholder={`${props.searchplaceholderlabel}...`}
            onChange={e => debouncedSearch(e.target.value)}
            onCancelSearch={props.onsearchclear}
            className={classnames(css.searchFieldContent, css.ie11SearchBarTextCorrection, props.customSearchbarClasses)}
            paperElevation={props.paperElevation}
          />
        </Grid>
        <Grid item key={1} />
      </Grid>
    </div>
  );
};

export default memo(TableToolbar);