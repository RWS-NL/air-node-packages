import { TextField } from '@material-ui/core';
import { objectHasProperty } from '@rws-air/utils';
import classnames from 'classnames';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';
import React, { FC } from 'react';
import css from './TextField.scss';

/**
 * Constructs a TextField with the formik validation
 * @param componentProps Props to pass to the Textield component
 * @example
 * <FastField
 *  name='userRef' type='text' label='Example'
 *  placeholder='Example placeholder' variant='outlined'
 *  data-qa='exampleDataQA' component={TextField} required
 * />
 */
export const ValidatedFormTextField: FC<TextFieldProps> = componentProps => {
  const {
    field, form, label, ...props
  } = componentProps as TextFieldProps;

  const textFieldHasErrors = objectHasProperty(form.errors, field.name) && objectHasProperty(form.touched, field.name);

  return (
    <TextField
      {...fieldToTextField(componentProps)}
      value={field.value}
      label={label}
      placeholder={props.placeholder}
      onChange={field.onChange}
      onBlur={field.onBlur}
      margin='dense'
      variant='outlined'
      className={props.className}
      fullWidth
      autoFocus={objectHasProperty(props, 'autoFocus') ? props.autoFocus : false}
      required={objectHasProperty(props, 'required') ? props.required : false}
      InputProps={{
        classes: {
          root: css.input,
          notchedOutline: css.outline,
        },
      }}
      classes={{ root: classnames([ { [css.errorInput]: textFieldHasErrors } ]) }}
      InputLabelProps={{
        shrink: true,
        classes: { root: css.inputLabel },
      }}
      FormHelperTextProps={
        {
          component: 'div',
          classes:
            { error: css.errorLabel },
        }
      }
    />
  );
};

export default ValidatedFormTextField;