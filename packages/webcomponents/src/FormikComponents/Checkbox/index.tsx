import MUICheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineFilledIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { CheckboxProps as MUICheckboxProps, fieldToCheckbox } from 'formik-material-ui';
import React, { ChangeEvent, forwardRef, ForwardRefExoticComponent } from 'react';
import css from './Checkbox.scss';

export interface CheckboxProps extends MUICheckboxProps {
  /** The name for the checkbox field */
  name: string;
  /** A tracker for the current value of the checkbox */
  value: string;
  /** Data-QA to send to the checkbox for testing */
  'data-qa'?: string;
  /**
   * Whether the current checkbox should be in checked state
   * @default false
   */
  checked?: boolean;
  /**
   * The formik onChange event
   * @example `formikProps.handlechange`
   */
  onChange: (e: ChangeEvent<any>) => void;
  /**
   * The formik onBlur event
   * @example `formikProps.handleBlur`
   */
  onBlur: (...args: unknown[]) => void;
}

/**
 * Constructs a Checkbox with formik validation
 * @param props Props to pass to the Checkbox component
 * @example
 * ```jsx
 * <FieldArray
 *     name='fieldArrayNamne'
 *     render={arrayHelpers => (
 *     <Fragment>
 *         {arrayWithObjects.map((item, index) => (
 *         <Grid item xs={4} key={index}>
 *             <Tooltip title={`form.title.${item.name.toLowerCase()}`} placement='top'>
 *             <Field
 *                 key={index}
 *                 component={Checkbox}
 *                 type='checkbox'
 *                 value={item.name}
 *                 data-qa={`checkbox-${item.name.toLowerCase()}`}
 *                 name={`form.title.${item.name.toLowerCase()}`}
 *                 onChange={(e: ChangeEvent<{ checked: boolean }>) => {
 *                 if (e.target.checked) {
 *                     arrayHelpers.push(item.name);
 *                 } else {
 *                     const idx = formikProps.values.fieldName.indexOf(item.name);
 *                     arrayHelpers.remove(idx);
 *                 }
 *                 }}
 *                 onBlur={formikProps.handleBlur}
 *             />
 *             </Tooltip>
 *         </Grid>
 *         ))}
 *     </Fragment>
 *     )}
 * />
 * ```
 */
export const Checkbox: ForwardRefExoticComponent<CheckboxProps> = forwardRef(
  ({ name, value, onChange, onBlur, 'data-qa': dataQa, checked = false, form, type, ...props }, ref) => (
    <FormControlLabel
      ref={ref}
      control={
        <MUICheckbox
          {...props}
          {...fieldToCheckbox({ form, ...props })}
          checked={checked}
          checkedIcon={<CheckBoxOutlineFilledIcon fontSize='small' />}
          color='primary'
          data-qa={dataQa}
          icon={<CheckBoxOutlineBlankIcon className={css.checkBox} fontSize='small' />}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          type='button'
          value={value}
        />
      }
      label={name}
      classes={{ label: css.label }}
    />
  )
);
