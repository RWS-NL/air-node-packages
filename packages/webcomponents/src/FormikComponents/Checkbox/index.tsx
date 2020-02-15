import { Checkbox as MUICheckbox, FormControlLabel } from '@material-ui/core';
import CheckBoxOutlineFilledIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import React, { ChangeEvent, forwardRef, ForwardRefExoticComponent } from 'react';
import css from './Checkbox.scss';

export interface CheckboxProps {
  /** The name for the checkbox field */
  name: string;
  /** A tracker for the current value of the checkbox */
  value: string;
  /** Data-QA to send to the checkbox for testing */
  'data-qa'?: string;
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
 *     name='fieldArray'
 *     render={arrayHelpers => (
 *     <Fragment>
 *         {arrayWithObjects.map((item, index) => (
 *         <Grid item xs={4} key={index}>
 *             <Tooltip title={`form.title.${item.name.toLowerCase()}`} placement='top'>
 *             <Checkbox
 *                 key={index}
 *                 value={item.name}
 *                 data-qa={`checkbox-${item.name.toLowerCase()}`}
 *                 name={`form.title.${item.name.toLowerCase()}`}
 *                 onChange={(e: React.ChangeEvent<{ checked: boolean }>) => {
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
  ({ name, value, onChange, onBlur, 'data-qa': dataQa, ...props }, ref) => (
    <FormControlLabel
      {...props}
      ref={ref}
      control={
        <MUICheckbox
          icon={<CheckBoxOutlineBlankIcon className={css.checkBox} fontSize='small' />}
          checkedIcon={<CheckBoxOutlineFilledIcon fontSize='small' />}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          color='primary'
          data-qa={dataQa}
        />
      }
      label={name}
      classes={{ label: css.label }}
    />
  )
);
