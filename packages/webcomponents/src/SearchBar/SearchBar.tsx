/* eslint-disable */
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { CSSProperties } from '@material-ui/styles';
import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { dataQa } from '../constants';
import css from './SearchBar.scss';
import InputBase from '@material-ui/core/InputBase';

export interface SearchBarProps {
  /** Whether to clear search on escape */
  cancelOnEscape?: boolean;
  /** Override or extend the styles applied to the component. */
  classes?: any;
  /** Custom top-level class */
  className?: string;
  /** Disables text field. */
  disabled?: boolean;
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
  style?: CSSProperties;
  /** Override the paper element elevation */
  paperElevation?: number;
  /** Data-qa tag to apply to the search bar and input element */
  'data-qa'?: dataQa;
};

const SearchBar: FC<SearchBarProps> = props => {
  const [value, setValue] = useState('');
  const placeholder = props.placeholder || 'Search...';

  const handleFocus = (event: any): void => {
    if (props.onFocus) props.onFocus(event);
  };

  const handleBlur = (event: any): void => {
    if (value && value.trim().length === 0) setValue('');
    if (props.onBlur) props.onBlur(event);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    if (props.onChange) props.onChange(event);
  };

  const handleCancel = (): void => {
    setValue('');
    if (props.onCancelSearch) props.onCancelSearch();
  };

  const handleRequestSearch = (): void => {
    if (props.onRequestSearch) props.onRequestSearch(value);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.charCode === 13 || event.key === 'Enter') {
      handleRequestSearch();
    } else if (props.cancelOnEscape && (event.charCode === 27 || event.key === 'Escape')) {
      handleCancel();
    }

    if (props.onKeyUp) props.onKeyUp(event);
  };

  return (
    <Paper className={css.paper} elevation={props.paperElevation} square>
      <InputBase
        className={css.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder }}
        onBlur={handleBlur}
        value={value}
        onChange={handleInput}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        disabled={props.disabled}
        data-qa={props['data-qa']}
        fullWidth
      />
      {
        !value
          ?
          <IconButton aria-label={placeholder} className={css.inputButton} onClick={handleRequestSearch} disabled={props.disabled} size='small' color='primary'>
            <SearchIcon className={css.inputSVG} />
          </IconButton>
          :
          <IconButton aria-label={placeholder} className={css.inputButton} onClick={handleCancel} disabled={props.disabled} size='small' color='primary'>
            <CloseIcon className={css.inputSVG} />
          </IconButton>
      }

    </Paper>
  );
};

export default SearchBar;