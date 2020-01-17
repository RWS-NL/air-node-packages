import { FormControlLabel, Radio } from '@material-ui/core';
import { RadioGroup as MUIRadioGroup, RadioGroupProps as MUIRadioGroupProps } from 'formik-material-ui';
import React from 'react';
import css from './RadioGroup.scss';

/** The possible types for the option value */
export type OptionValue = string | number | boolean;

export interface Option<T extends OptionValue> {
  /** The value for the option */
  value: T;
  /** The label shown next to the radio button */
  label: string;
}

export interface RadioGroupProps<T extends OptionValue> {
  /** The options for the radio buttons */
  options: Option<T>[];
}

/**
 * Constructs a radio button group with formik validation
 * @param componentProps Props to pass to the component
 * @example
 * ```jsx
 *  <FastField
 *    name='type'
 *    type='text'
 *    required
 *    data-qa='sample-radio-group'
 * >
 *     {(fieldProps: FieldProps) => (
 *       <RadioGroup<'JOHN'|'CONNOR'>
 *         {...fieldProps}
 *         options={ [{ value: 'JOHN', label: 'John'}, { value: 'CONNOR', label: 'Connor'}] }
 *       />
 *     )}
 * </FastField>
 * ```
 */
export const RadioGroup = <T extends OptionValue>(componentProps: RadioGroupProps<T>) => {
  const { field, form, meta, options, ...props } = componentProps as RadioGroupProps<T> & MUIRadioGroupProps;

  return (
    <MUIRadioGroup field={field} form={form} meta={meta} row {...props}>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          label={option.label}
          classes={{ label: css.label }}
          labelPlacement='end'
          control={<Radio color='primary' />}
        />
      ))}
    </MUIRadioGroup>
  );
};

export default RadioGroup;
