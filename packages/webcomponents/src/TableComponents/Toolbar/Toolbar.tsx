import Grid from '@material-ui/core/Grid/Grid';
import classnames from 'classnames';
import debouncer from 'lodash.debounce';
import React, { FC, Fragment, memo, ReactNode } from 'react';
import SearchBar, { SearchBarProps } from '../SearchBar/SearchBar';
import css from './Toolbar.scss';
import { ToolbarButton, ToolbarButtonProps } from '../ToolbarButton/ToolbarButton';

export interface RenderIconProps {
  /** The Material Icon to display in this paper button */
  icon: JSX.Element;
  /** The function to trigger when clicking this button */
  clickEvent: ToolbarButtonProps['onClick'];
  /**
   * Whether this button should be disabled or not
   * @default false
   */
  disabled?: ToolbarButtonProps['disabled'];
  /**
   * The text content to put in the tooltip
   * @default 'Click Me'
   */
  tooltipText?: ToolbarButtonProps['tooltipText'];
  /**
   * The placement for the tooltip
   * @default top
   */
  tooltipPlacement?: ToolbarButtonProps['tooltipPlacement'];
  /**
   * Disables the inclusion of a tooltip
   * @default false
   */
  disableTooltip?: ToolbarButtonProps['disableTooltip'];
}

export interface ToolbarProps extends Pick<SearchBarProps, 'paperElevation'> {
  /** The debounce timeout to wait until a search action should be performed */
  searchdebounce?: number;
  /** The label to display when no text is in the search input box */
  searchplaceholderlabel: ReactNode;
  /** The action to trigger when searching (taking debounce into account) */
  onsearchinput: <T extends string>(searchTerms: T) => unknown;
  /** The action to trigger when clearing the search */
  onsearchclear: () => unknown;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
  /** Custom CSS classes to pass to the toolbar */
  customclasses?: string | string[];
  /** Custom CSS classes to pass to the inner searchbar */
  customSearchbarClasses?: string | string[];
  /** Any additional icons to display before the search bar */
  extraIcons?: RenderIconProps[];
}

/**
 * Constructs icons for the table toolbar
 * @param iconData The icons to render
 */
export const renderIcons = (iconData: RenderIconProps[]) => {
  return iconData.map((data, index) => (
    <Grid item key={`icon-${index}`}>
      <ToolbarButton
        icon={data.icon}
        disabled={data.disabled}
        onClick={data.clickEvent}
        tooltipText={data.tooltipText}
        tooltipPlacement={data.tooltipPlacement || 'top'}
        disableTooltip={data.disableTooltip}
      />
    </Grid>
  ));
};

/**
 * Constructs a table toolbar using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the Toolbar
 * @example
 * <Toolbar
 *   searchplaceholderlabel='Search...'
 *   onsearchinput={console.log}
 *   onsearchclear={console.log}
 *   searchdebounce={console.log}
 *   data-qa={{ ...tableQas }}
 *   extraIcons={props.extraIcons}
 * />
 */
export const Toolbar: FC<ToolbarProps> = props => {
  const debouncedSearch = debouncer((input: string) => props.onsearchinput(input), props.searchdebounce || 400);

  return (
    <div className={classnames(css.toolbar, props.customclasses)} data-qa={props['data-qa']}>
      <Grid container direction='row' justify='flex-end' alignItems='center' spacing={2}>
        {props.extraIcons && props.extraIcons.length ? renderIcons(props.extraIcons) : <Fragment />}
        <Grid item key={2}>
          <SearchBar
            data-qa='table-search-bar'
            placeholder={`${props.searchplaceholderlabel}...`}
            onChange={e => debouncedSearch(e.target.value)}
            onCancelSearch={props.onsearchclear}
            className={classnames(
              css.searchFieldContent,
              css.ie11SearchBarTextCorrection,
              props.customSearchbarClasses
            )}
            paperElevation={props.paperElevation}
          />
        </Grid>
        <Grid item key={1} />
      </Grid>
    </div>
  );
};

export default memo(Toolbar);
