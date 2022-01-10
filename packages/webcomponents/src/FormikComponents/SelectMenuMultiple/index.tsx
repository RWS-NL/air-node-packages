import { Checkbox, FormControl, FormHelperText, InputLabel, ListItemText, MenuItem } from '@mui/material';
import ArrowDropIcon from '@mui/icons-material/ArrowDropDown';
import clsx from 'clsx';
import { useField } from 'formik';
import { fieldToSelect, Select } from 'formik-mui';
import React, { Fragment, useRef } from 'react';
import { When } from 'react-if';
import { SelectMenuOptionValues, SelectMenuProps } from '../SelectMenu';
import css from '../SelectMenu/SelectMenu.scss';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

/**
 * Constructs a Select Menu with the formik validation
 * @remark supports selecting multiple entries, active entries will have a checked Checkbox
 * @param props Props to pass to the select menu component
 * @example
 * ```jsx
 * const dropdownOptions = [{ value: 'JOHN', label: 'John'}, { value: 'CONNOR', label: 'Connor'}];
 *
 * <Field
 *   component={SelectMenuMultiple}
 *   name='type'
 *   type='text'
 *   required
 *   placeholder='Example Placeholder'
 *   variant='outlined'
 *   data-qa='sample-select-menu'
 *   label='Example'
 *   options={dropdownOptions}
 *   style={{ marginBottom: theme.spacing(5), height: values.selectMultiple.length ? 'unset' : null }}
 *   renderValue={(selected: unknown) => (
 *       <Box className={classes.chips}>
 *       {(selected as string[]).map((value) => (
 *           <Chip
 *           color='secondary'
 *           key={value}
 *           label={dropdownOptions.find((p) => p.value === value)?.label ?? 'Unknown'}
 *           className={classes.chip}
 *           size='small'
 *           />
 *       ))}
 *       </Box>
 *  />
 * ```
 */
export const SelectMenuMultiple = <T extends SelectMenuOptionValues>({
  label,
  options,
  placeholder,
  className,
  autoFocus,
  required,
  ...props
}: SelectMenuProps<T>) => {
  const [{ onChange, onBlur, value }, { error, touched }] = useField(props.field.name);

  const inputLabel = useRef<HTMLLabelElement>(null);

  const selectFieldHasErrors = Boolean(error) && touched;

  return (
    <Fragment>
      <FormControl variant='standard' fullWidth>
        <InputLabel
          classes={{ root: css.inputLabel, shrink: css.inputLabelShrink }}
          ref={inputLabel}
          id={`validated-select-menu-${label}`}
          required={required}
        >
          {label}
        </InputLabel>
        <Select
          {...props}
          {...fieldToSelect(props)}
          type='text'
          labelId={`validated-select-menu-${label}`}
          className={clsx([css.select, { [css.errorSelect]: selectFieldHasErrors }])}
          IconComponent={() => <ArrowDropIcon color={selectFieldHasErrors ? 'error' : 'primary'} />}
          fullWidth
          displayEmpty
          multiple
          onChange={onChange}
          onBlur={onBlur}
          autoFocus={autoFocus}
          required={required}
          inputProps={{ classes: { root: css.input } }}
          MenuProps={{
            anchorEl: null,
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
              }
            },
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'center'
            },
            elevation: 2,
            classes: {
              list: css.selectEntry
            }
          }}
        >
          {options.map((item, index) => (
            <MenuItem
              classes={{ root: css.menuItem, selected: css.menuItemSelected }}
              key={index + 1}
              value={item.value}
            >
              <Checkbox size='small' color='secondary' checked={(value as string[]).includes(item.value as string)} />
              <ListItemText disableTypography primary={item.label} />
            </MenuItem>
          ))}
        </Select>
        <When condition={selectFieldHasErrors}>
          <FormHelperText component='div' classes={{ root: css.errorLabel }}>
            {error || ''}
          </FormHelperText>
        </When>
      </FormControl>
    </Fragment>
  );
};
