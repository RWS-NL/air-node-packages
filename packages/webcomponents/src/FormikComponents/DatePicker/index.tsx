import { KeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { FieldProps } from 'formik';
import React, { FC } from 'react';
import css from './DatePicker.scss';

type DatePickerFormProps = DatePickerProps &
  FieldProps &
  Omit<KeyboardDatePickerProps, 'error' | 'name' | 'onChange' | 'value' | 'variant'>;

export interface DatePickerProps {
  /** The variant of the datepicker */
  variant: 'standard' | 'filled' | 'outlined' | undefined;
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
 * <FastField
 *   name='startDate'
 *   label='Project startdatum'
 *   minDate={new Date('2012-01-01')}
 *   component={DatePicker}
 * />
 * ```
 */
export const DatePicker: FC<DatePickerProps> = componentProps => {
  const { field, form, label, minDate, ...props } = componentProps as DatePickerFormProps;

  const currentError = form.errors[field.name];

  return (
    <KeyboardDatePicker
      {...props}
      variant='inline'
      format='DD/MM/YYYY'
      minDate={minDate}
      name={field.name}
      onBlur={field.onBlur}
      value={field.value}
      helperText={currentError}
      error={Boolean(currentError)}
      onChange={(newDate: MaterialUiPickersDate | null) =>
        form.setFieldValue(field.name, newDate?.toDate() || new Date(), true)
      }
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
        classes: { error: css.errorLabel }
      }}
    />
  );
};

export default DatePicker;
