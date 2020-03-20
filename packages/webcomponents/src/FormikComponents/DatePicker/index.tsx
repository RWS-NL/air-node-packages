import { KeyboardDatePicker } from '@material-ui/pickers';
import { fieldToKeyboardDatePicker, KeyboardDatePickerProps } from 'formik-material-ui-pickers';
import React, { FC } from 'react';
import css from './DatePicker.scss';

export interface DatePickerProps extends KeyboardDatePickerProps {
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
    <KeyboardDatePicker
      {...props}
      {...fieldToKeyboardDatePicker(props)}
      animateYearScrolling
      autoOk
      format='DD/MM/YYYY'
      fullWidth
      InputAdornmentProps={{ position: 'start', className: css.datePickerIcon }}
      inputVariant='outlined'
      KeyboardButtonProps={{ 'aria-label': 'change date' }}
      label={label}
      minDate={minDate}
      type='date'
      variant='inline'
      InputProps={{
        classes: {
          root: css.input,
          notchedOutline: css.outline
        }
      }}
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
  );
};
