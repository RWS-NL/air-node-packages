import MUICheckbox, { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import CheckBoxOutlineFilledIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Field, FieldProps } from 'formik';
import React, { ChangeEvent, forwardRef } from 'react';
import { Tooltip, TooltipProps } from '../../Tooltip';
import css from './Checkbox.scss';

/**
 * Properties that can be passed to the Checkbox component
 * @extends [Checkbox API](https://material-ui.com/api/checkbox/#checkbox-api)
 */
export interface CheckboxProps extends MUICheckboxProps {
  /**
   * The name for this specific checkbox
   *
   * @remarks
   * It is recommend that this is different from the name given to the encapsulating FieldArray
   */
  name: string;
  /** The label to display next to the checkbox */
  label: string;
  /** A tracker for the current value of the checkbox */
  value: string;
  /** The text to display inside the Tooltip that pops up when hovering over the checkbox or the label */
  tooltipText: string;
  /**
   * Whether the checkbox should be in a checked state
   * @default false
   */
  checked?: boolean;
  /** Data-QA to send to the checkbox for testing */
  'data-qa'?: string;

  /** Props applied to the [Tooltip](https://rws-nl.github.io/air-node-packages/modules/_rws_air_webcomponents.html#tooltip-1) component */
  TooltipProps?: TooltipProps;
  /** Props applied to the [FormControlLabel](https://material-ui.com/api/form-control-label/#formcontrollabel-api) component */
  FormControlLabelProps?: FormControlLabelProps;
}

export type CheckboxChangeEvent = ChangeEvent<{ checked: boolean }>;

/**
 * Constructs a Checkbox with formik validation
 * @param props Props to pass to the Checkbox component
 * @example
 * ```jsx
 *  <FieldArray
 *    name='fieldArrayName'
 *    render={arrayHelpers =>
 *      arrayWithStrings((entry, index) => (
 *        <Grid item xs={4} key={index}>
 *          <Checkbox
 *            name={entry}
 *            value={entry}
 *            label={t(`form.fieldArrayName.labels.${entry}`)}
 *            tooltipText={t(`form.fieldArrayName.tooltips.${entry}`)}
 *            data-qa={`checkbox-${entry.toLowerCase()}`}
 *            checked={values['fieldArrayName'].includes(entry)}
 *            onChange={(e: CheckboxChangeEvent) => {
 *              if (e.target.checked) {
 *                arrayHelpers.push(entry);
 *              } else {
 *                const idx = values['fieldArrayName'].indexOf(entry);
 *                arrayHelpers.remove(idx);
 *              }
 *            }}
 *          />
 *        </Grid>
 *      ))
 *    }
 *  />
 * ```
 */
export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    { label, value, name, onChange, tooltipText, TooltipProps, FormControlLabelProps, checked = false, ...props },
    ref
  ) => (
    <Field type='checkbox'>
      {({ field }: FieldProps<string>) => (
        <Tooltip title={tooltipText} placement='top' {...TooltipProps}>
          <FormControlLabel
            {...field}
            ref={ref}
            label={label}
            classes={{ label: css.label }}
            control={
              <MUICheckbox
                {...props}
                color='primary'
                checkedIcon={<CheckBoxOutlineFilledIcon fontSize='small' />}
                icon={<CheckBoxOutlineBlankIcon className={css.checkBox} fontSize='small' />}
                value={value}
                name={name}
                checked={checked}
                onChange={onChange}
              />
            }
            {...FormControlLabelProps}
          />
        </Tooltip>
      )}
    </Field>
  )
);
