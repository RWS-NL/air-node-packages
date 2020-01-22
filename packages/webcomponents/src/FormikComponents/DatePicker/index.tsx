import { useField } from 'formik';
import { KeyboardDatePicker, KeyboardDatePickerProps, useFieldToKeyboardDatePicker } from 'formik-material-ui-pickers';
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
 * <DatePicker minDate={new Date('2012-01-01')} name='date' type='date' label='Sample Date' />
 * ```
 */
export const DatePicker: FC<DatePickerProps> = ({ minDate, label, name, ...props }) => {
  const formikDatePickerProps = useFieldToKeyboardDatePicker({ name, ...props });
  const [{ onBlur }, { error }] = useField(name);

  return (
    <KeyboardDatePicker
      {...formikDatePickerProps}
      {...props}
      variant='inline'
      format='DD/MM/YYYY'
      minDate={minDate}
      name={name}
      onBlur={onBlur}
      helperText={error}
      KeyboardButtonProps={{ 'aria-label': 'change date' }}
      InputAdornmentProps={{ position: 'start', className: css.datePickerIcon }}
      label={label}
      inputVariant='outlined'
      fullWidth
      autoOk
      animateYearScrolling
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
        component: 'div',
        classes: { root: css.errorLabel }
      }}
    />
  );
};

export default DatePicker;
