import { grey } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { CSSProperties } from '@material-ui/styles';
import classNames from 'classnames';
import React, { ChangeEvent, cloneElement, FC, KeyboardEvent, ReactElement, useState } from 'react';
import css from './SearchBar.scss';
import { dataQa } from 'typings';

export type SearchBarProps = {
  /** Whether to clear search on escape */
  cancelOnEscape?: boolean;
  /** Override or extend the styles applied to the component. */
  classes?: any;
  /** Custom top-level class */
  className?: string;
  /** Override the close icon. */
  closeIcon?: ReactElement;
  /** Override the search icon. */
  searchIcon?: ReactElement;
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
  const [ value, setValue ] = useState('');
  const searchIcon = props.searchIcon || <SearchIcon style={{ color: grey[500] }} />;
  const closeIcon = props.closeIcon || <ClearIcon style={{ color: grey[500] }} />;
  const style = props.style || {};
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
    <Paper
      className={classNames(css.searchBar, props.className)}
      style={style}
      elevation={props.paperElevation}
    >
      <div className={css.searchContainer}>
        <Input
          onBlur={handleBlur}
          value={value}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          fullWidth
          className={css.input}
          disabled={props.disabled}
          placeholder={placeholder}
          data-qa={props['data-qa']}
          disableUnderline
        />
      </div>
      <IconButton
        onClick={handleRequestSearch}
        classes={{
          root: classNames(css.iconButton, css.searchIconButton, {[css.iconButtonHidden]: value !== ''}),
          disabled: css.iconButtonDisabled,
        }}
        disabled={props.disabled}
      >
        {cloneElement(searchIcon, {classes: { root: css.icon }})}
      </IconButton>
      <IconButton
        onClick={handleCancel}
        classes={{
          root: classNames(css.iconButton, {[css.iconButtonHidden]: value === ''}),
          disabled: css.iconButtonDisabled,
        }}
        disabled={props.disabled}
      >
        {cloneElement(closeIcon, {classes: { root: css.icon }})}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;