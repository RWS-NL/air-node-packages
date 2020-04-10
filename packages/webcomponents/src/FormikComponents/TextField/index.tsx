import { TextField as MUITextField } from '@material-ui/core';
import clsx from 'clsx';
import { useField } from 'formik';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';
import React, { FC } from 'react';
import css from './TextField.scss';

/**
 * Constructs a TextField with the formik validation
 * @param props Props to pass to the Textield component
 * @example
 * ```jsx
 * <Field
 *   component={TextField}
 *   name='name'
 *   type='text'
 *   label='Example'
 *   placeholder='Example placeholder'
 *   variant='outlined'
 *   data-qa='exampleDataQA'
 *   required
 * />
 * ```
 */
export const TextField: FC<TextFieldProps> = (props) => {
  const [{ value, onChange, onBlur }, { error, touched }] = useField(props.field.name);

  const textFieldHasErrors = Boolean(error) && touched;

  return (
    <MUITextField
      {...props}
      {...fieldToTextField(props)}
      value={value}
      label={props.label}
      placeholder={props.placeholder}
      onChange={onChange}
      onBlur={onBlur}
      margin='dense'
      variant='outlined'
      className={props.className}
      fullWidth
      autoFocus={props.autoFocus}
      required={props.required}
      InputProps={{
        classes: {
          root: css.input,
          notchedOutline: css.outline
        }
      }}
      classes={{ root: clsx([{ [css.errorInput]: textFieldHasErrors }]) }}
      InputLabelProps={{
        shrink: true,
        classes: { root: css.inputLabel }
      }}
      FormHelperTextProps={{
        // @ts-ignore
        component: 'div',
        classes: { error: css.errorLabel }
      }}
    />
  );
};
