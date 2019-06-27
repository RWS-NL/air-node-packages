import Grid from '@material-ui/core/Grid/Grid';
import SearchIcon from '@material-ui/icons/Search';
import classnames from 'classnames';
import debouncer from 'lodash.debounce';
import React, { FC } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import css from './TableToolbar.scss';
import { customCss, DataQa, label } from 'typings';

export type TableToolbarProps = {
  /** The debounce timeout to wait until a search action should be performed */
  searchdebounce?: number;
  /** The label to display when no text is in the search input box */
  searchplaceholderlabel: label;
  /** The action to trigger when searching (taking debounce into account) */
  onsearchinput: (searchTerms: string) => unknown;
  /** The action to trigger when clearing the search */
  onsearchclear: () => unknown;
  /** data-qa tag to apply to the search bar and input element */
  'data-qa'?: DataQa;
  /** Custom CSS classes to pass to the button */
  customclasses?: customCss;
};

const TableToolbar: FC<TableToolbarProps> = props => {
  const debouncedSearch = debouncer((input: string) => props.onsearchinput(input), props.searchdebounce || 400);

  return (
    <div className={classnames(css.toolbar, props.customclasses)} data-qa={props['data-qa']}>
      <Grid container direction='row' justify='space-between' alignItems='center'>
        <Grid item key={1} xs={6} className={css.heightCorrection} />
        <Grid item key={2} xs={6}>
          <SearchBar
            data-qa='table-search-bar'
            placeholder={`${props.searchplaceholderlabel}...`}
            onChange={e => debouncedSearch(e.target.value)}
            onCancelSearch={props.onsearchclear}
            className={classnames(css.searchFieldContent, css['ie11-searchBarTextCorrection'])}
            searchIcon={<SearchIcon className={classnames(css.searchIconButton)} />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TableToolbar;