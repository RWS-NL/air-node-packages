import { FormControlLabel, Radio } from '@material-ui/core';
import { RadioGroup as MUIRadioGroup, RadioGroupProps as MUIRadopGroupProps, useFieldToRadioGroup } from 'formik-material-ui';
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
}

/**
 * Constructs a radio button group with formik validation
 * @param componentProps Props to pass to the component
 * @example
 * ```jsx
 * <RadioGroup
 *   name='type'
 *   data-qa='sample-radio-group'
 *   required
 *   options={ [{ value: 'JOHN', label: 'John'}, { value: 'CONNOR', label: 'Connor'}] }
 * />
 * ```
 */
export const RadioGroup = <T extends OptionValue>({name, options, ...props}: RadioGroupProps<T>) => {
  const radioFieldProps = useFieldToRadioGroup({name, ...props});

  return (
    <MUIRadioGroup {...props} {...radioFieldProps} name={name} row>
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          label={option.label}
          classes={{ label: css.label }}
          labelPlacement='end'
          control={<Radio required={props.required} color='primary' />}
        />
      ))}
    </MUIRadioGroup>
  );
};

export default RadioGroup;
