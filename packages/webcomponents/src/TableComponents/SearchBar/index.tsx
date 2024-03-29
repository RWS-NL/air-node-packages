import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import React, { ChangeEvent, KeyboardEvent, memo, useState, useEffect } from 'react';
import css from './SearchBar.scss';
import { SxProps } from '@mui/material';

export interface SearchBarProps {
  /** Whether to clear search on escape */
  cancelOnEscape?: boolean;
  /** Override or extend the styles applied to the component. */
  classes?: any;
  /** Custom top-level class */
  className?: string;
  /** Disables text field. */
  disabled?: boolean;
  /** Whenever this value is changed a clear of the search value is triggered */
  clearSearch?: boolean;
  /** Fired when the search is cancelled. */
  onCancelSearch?: () => any;
  /** Fired when the text value changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => any;
  /** Fired when the search icon is clicked. */
  onRequestSearch?: (event: any) => any;
  /** Fired when the search bar is focused */
  onFocus?: (event: any) => any;
  /** Fired when the focus on the search bar is lost */
  onBlur?: (event: any) => any;
  /** Fired when a key is released */
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => any;
  /** Sets placeholder text for the embedded text field. */
  placeholder?: string;
  /** Override the inline-styles of the root element. */
  sx?: SxProps;
  /** Override the paper element elevation */
  paperElevation?: number;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: string;
}

/**
 * Constructs a search bar using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the searchbar
 * @example
 * ```jsx
 * <SearchBar
 *   data-qa='table-search-bar'
 *   placeholder='Search...'
 *   onChange={e => debouncedSearch(e.target.value)}
 *   onCancelSearch={console.log}
 *   paperElevation={2}
 * />
 * ```
 */
export const SearchBar = memo(
  ({
    onFocus,
    onBlur,
    onChange,
    onCancelSearch,
    onRequestSearch,
    cancelOnEscape,
    onKeyUp,
    paperElevation,
    disabled,
    clearSearch = false,
    'data-qa': dataQa,
    placeholder,
    ...props
  }: SearchBarProps) => {
    const [value, setValue] = useState('');
    const searchPlaceholder = placeholder || 'Search...';

    const handleFocus = (event: any): void => {
      if (onFocus) onFocus(event);
    };

    const handleBlur = (event: any): void => {
      if (value && value.trim().length === 0) setValue('');
      if (onBlur) onBlur(event);
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
      if (onChange) onChange(event);
    };

    const handleCancel = (): void => {
      setValue('');
      if (onCancelSearch) onCancelSearch();
    };

    const handleRequestSearch = (): void => {
      if (onRequestSearch) onRequestSearch(value);
    };

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.charCode === 13 || event.key === 'Enter') {
        handleRequestSearch();
      } else if (cancelOnEscape && (event.charCode === 27 || event.key === 'Escape')) {
        handleCancel();
      }

      if (onKeyUp) onKeyUp(event);
    };

    useEffect(() => {
      setValue('');
    }, [clearSearch]);

    return (
      <Paper className={css.paper} elevation={paperElevation} square>
        <InputBase
          {...props}
          className={css.input}
          placeholder={searchPlaceholder}
          inputProps={{ 'aria-label': searchPlaceholder }}
          onBlur={handleBlur}
          value={value}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          disabled={disabled}
          data-qa={dataQa}
          fullWidth
        />
        {!value ? (
          <IconButton
            aria-label={searchPlaceholder}
            className={css.inputButton}
            onClick={handleRequestSearch}
            disabled={disabled}
            size='small'
            color='primary'
            data-qa='search-button'
          >
            <SearchIcon className={css.inputSVG} />
          </IconButton>
        ) : (
          <IconButton
            aria-label={searchPlaceholder}
            className={css.inputButton}
            onClick={handleCancel}
            disabled={disabled}
            size='small'
            color='primary'
            data-qa='search-close-button'
          >
            <CloseIcon className={css.inputSVG} />
          </IconButton>
        )}
      </Paper>
    );
  }
);
