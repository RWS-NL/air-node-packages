import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import ArrowDropIcon from '@material-ui/icons/ArrowDropDown';
import { objectHasProperty } from '@rws-air/utils';
import classnames from 'classnames';
import { fieldToSelect, SelectProps } from 'formik-material-ui';
import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
import { When } from 'react-if';
import css from './SelectMenu.scss';

export interface SelectMenuProps extends SelectProps {
  /** The label of the select menu */
  label: string;
  /** The selectable options for the select menu */
  options: { value: string | number | string[]; label: string }[];
}

/**
 * Constructs a Select Menu with the formik validation
 * @param props Props to pass to the select menu component
 * @example
 * <FastField
 *   name='type' type='text' label='Example'
 *   options={[ { label: 'john', value='john'}, { label: 'connor', value: 'connor'} ]}
 *   placeholder='Example placeholder' variant='outlined'
 *   data-qa='exampleDataQA' component={SelectMenu} required
 * />
 */
export const SelectMenu: FC<SelectMenuProps> = ({ options, ...props }) => {
  const inputLabel = useRef<HTMLLabelElement>(null);
  const [ labelWidth, setLabelWidth ] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const selectFieldHasErrors = objectHasProperty(props.form.errors, props.field.name) && objectHasProperty(props.form.touched, props.field.name);

  return (
    <Fragment>
      <FormControl variant='outlined' fullWidth>
        <InputLabel
          classes={{ root: css.inputLabel, shrink: css.inputLabelShrink }}
          ref={inputLabel} id={`validated-select-menu-${props.label}`}
          required={objectHasProperty(props, 'required') ? props.required : false}
        >
          {props.label}
        </InputLabel>
        <Select
          {...fieldToSelect(props)}
          type='text'
          labelId={`validated-select-menu-${props.label}`}
          labelWidth={labelWidth}
          className={classnames([ css.select, { [css.errorSelect]: selectFieldHasErrors } ])}
          IconComponent={() => <ArrowDropIcon color={selectFieldHasErrors ? 'error' : 'primary'} />}
          fullWidth
          displayEmpty
          value={props.field.value || ''}
          onChange={props.field.onChange}
          onBlur={props.field.onBlur}
          autoFocus={objectHasProperty(props, 'autoFocus') ? props.autoFocus : false}
          required={objectHasProperty(props, 'required') ? props.required : false}
          inputProps={{ classes: { root: css.input } }}
        >
          {options.map((item, index) => (
            <MenuItem classes={{ root: css.menuItem, selected: css.menuItemSelected }} key={index + 1} value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        <When condition={selectFieldHasErrors}>
          <FormHelperText component='div' classes={{ root: css.errorLabel }}>{props.form.errors[props.field.name]}</FormHelperText>
        </When>
      </FormControl>
    </Fragment>
  );
};

export default SelectMenu;