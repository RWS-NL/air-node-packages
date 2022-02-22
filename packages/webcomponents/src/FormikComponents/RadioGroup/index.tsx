import { FormControlLabel, Radio } from '@mui/material';
import { fieldToRadioGroup, RadioGroup as MUIRadioGroup, RadioGroupProps as MUIRadopGroupProps } from 'formik-mui';
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

export interface RadioGroupProps<T extends OptionValue> extends MUIRadopGroupProps {
  /** The options for the radio buttons */
  options: Option<T>[];
  /** Whether this field is required */
  required?: boolean;
  /** Data-qa for the Radio Group */
  'data-qa'?: string;
}

/**
 * Constructs a radio button group with formik validation
 * @param componentProps Props to pass to the component
 * @example
 * ```jsx
 * <Field
 *   component={RadioGroup}
 *   name='type'
 *   data-qa='sample-radio-group'
 *   required
 *   options={ [{ value: 'JOHN', label: 'John'}, { value: 'CONNOR', label: 'Connor'}] }
 * />
 * ```
 */
export const RadioGroup = <T extends OptionValue>({ options, 'data-qa': dataQa, ...props }: RadioGroupProps<T>) => (
  <MUIRadioGroup {...props} {...fieldToRadioGroup(props)} row>
    {options.map((option, index) => (
      <FormControlLabel
        key={index}
        value={option.value}
        label={option.label}
        classes={{ label: css.label }}
        labelPlacement='end'
        control={<Radio data-qa={`${dataQa}-${option.value}`} required={props.required} color='primary' />}
      />
    ))}
  </MUIRadioGroup>
);
