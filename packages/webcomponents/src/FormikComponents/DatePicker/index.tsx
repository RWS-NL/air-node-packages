import { DatePicker as MUIDatePicker } from '@mui/lab';
import { TextField as MUITextField } from '@mui/material';
import { fieldToDatePicker, DatePickerProps as MuiDatePickerProps } from 'formik-mui-lab';
import React, { FC } from 'react';
import css from './DatePicker.scss';

export interface DatePickerProps extends MuiDatePickerProps {
  /** The label shown in the datepicker */
  label: string;
  /** The minimum date to meet */
  minDate: Date;
}

/**
 * Constructs a Date Picker with formik validation
 * @param componentProps Props to pass to the date picker component
 * @example
 * ```jsx
 * <Field component={DatePicker} minDate={new Date('2012-01-01')} name='date' label='Sample Date' />
 * ```
 */
export const DatePicker: FC<DatePickerProps> = ({ minDate, label, ...props }) => {
  return (
    <MUIDatePicker
      {...props}
      {...fieldToDatePicker(props)}
      inputFormat='DD/MM/YYYY'
      InputAdornmentProps={{ position: 'start', className: css.datePickerIcon }}
      minDate={minDate}
      InputProps={{
        classes: {
          root: css.input,
          notchedOutline: css.outline
        }
      }}
      renderInput={(_props) => (
        <MUITextField
          fullWidth
          variant='outlined'
          label={label}
          type='date'
          InputLabelProps={{
            shrink: true,
            classes: { root: css.inputLabel }
          }}
          FormHelperTextProps={{
            // @ts-ignore
            component: 'div',
            classes: { root: css.errorLabel }
          }}
        />
      )}
    />
  );
};
