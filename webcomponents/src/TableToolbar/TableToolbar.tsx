import React, { FC } from "react";
import classnames from 'classnames';
import css from './TableToolbar.scss';
import Grid from '@material-ui/core/Grid/Grid';
import SearchIcon from '@material-ui/icons/Search';
import debouncer from 'lodash.debounce';
import SearchBar from '../SearchBar/SearchBar';

export type TableToolbarProps = {
    customClasses?: string | string[];
    searchDebounce?: number;
    searchPlaceholderLabel: string;
    onSearchInput: (searchTerms: string) => unknown;
    onSearchClear: () => unknown;
}

const TableToolbar: FC<TableToolbarProps> = props => {
    const debouncedSearch = debouncer((input: string) => props.onSearchInput(input), props.searchDebounce || 400);

    return (
        <div className={classnames(css.toolbar, props.customClasses)}>
            <Grid container direction='row' justify='space-between' alignItems='center'>
                <Grid item key={1} xs={6} className={css.heightCorrection} />
                <Grid item key={2} xs={6}>
                    <SearchBar
                        data-qa='table-search-bar'
                        placeholder={`${props.searchPlaceholderLabel}...`}
                        onChange={e => debouncedSearch(e.target.value)}
                        onCancelSearch={props.onSearchClear}
                        className={classnames(css.searchFieldContent, css['ie11-searchBarTextCorrection'])}
                        searchIcon={<SearchIcon className={classnames(css.searchIconButton)} />}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default TableToolbar;