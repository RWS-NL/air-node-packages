import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import classnames from 'classnames';
import React, { FC, memo, MouseEvent as ReactMouseEvent, ReactNode, useRef, useState } from 'react';
import Button from '../Button/Button';
import { customCss, cutText, dataQa } from '../constants';
import css from './Dropdownbutton.scss';

export interface DropdownbuttonProps {
  /** The options to show in the dropdown menu */
  options: string[];
  /** Disable the entire dropdown button */
  disabled?: boolean;
  /** The icon displayed in the button to the right. This button is clicked to trigger {@link onClick()} */
  ButtonIcon: ReactNode;
  /** The maximum length of the text in the button before being cut off with ellipsis @default 30 */
  maxTextLength?: number;
  /** The default option to select, using zero-based index for {@link options} @default 0 */
  defaultOptionId?: number;
  /** Any options to disabled, using zero-based index for {@link options} */
  disabledOptionIds?: number[];
  /** The color type of the buttons @default primary */
  color?: 'primary' | 'secondary' | 'default' | 'inherit';
  /** The variant of the buttons @default contained */
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  /** Data-qa tags to apply to the button group */
  buttonGroupDataQa?: dataQa;
  /** Data-qa tags to apply to the dropdown button */
  dropdownButtonDataQa?: dataQa;
  /** Data-qa tags to apply to the icon button */
  iconButtonDataQa?: dataQa;
  /** Data-qa tags to apply to each menu item */
  menuItemDataQa?: dataQa;
  /** Data-qa tags to apply to the popper */
  popperDataQa?: dataQa;
  /** Custom CSS classes to pass to the dropdown button */
  dropdownButtonCustomClasses?: customCss;
  /** Custom CSS classes to pass to the icon button */
  iconButtonCustomClasses?: customCss;
  /** Custom CSS classes to pass to the buttonGroup */
  buttonGroupCustomClasses?: customCss;
  /** The action to trigger when the button with {@link ButtonIcon} is pressed. Receives the currently selected option as first parameter */
  onClick(selectedOption: string): unknown;
}

/**
 * Creates a button using pre-defined Rijkswaterstaat styling
 *
 * ```jsx
 * import { Dropdownbutton } from '@rws-air/webcomponents'
 * import { CloudDownload } from '@material-ui/icons';
 *
 * <Dropdownbutton ButtonIcon={<CloudDownload/>} onClick={() => undefined} options={[ 'one', 'two' ]} />
 * ```
 */
export const Dropdownbutton: FC<DropdownbuttonProps> = props => {
  const [ open, setOpen ] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [ selectedIndex, setSelectedIndex ] = useState(props.defaultOptionId || 0);

  const handleMenuItemClick = (_event: ReactMouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: ReactMouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid item container direction='column'>
      <Grid item xs={12}>
        <ButtonGroup
          variant={props.variant || 'contained'}
          color={props.color || 'primary'}
          ref={anchorRef}
          aria-label='split button'
          data-qa={props.buttonGroupDataQa}
          className={classnames(css.buttonGroup, props.buttonGroupCustomClasses)}
          classes={{ root: classnames({ [css.buttonGroupDisabled]: props.disabled }) }}
          disabled={props.disabled}
        >
          <Button
            variant={props.variant || 'contained'}
            color={props.color || 'primary'}
            size='small'
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup='true'
            onClick={handleToggle}
            startIcon={<ArrowDropDownIcon />}
            label={cutText(props.options[selectedIndex], props.maxTextLength || 30)}
            className={css.buttonOverwritesLeft}
            customlabelclasses={css.labelOverwrites}
            data-qa={props.dropdownButtonDataQa}
            customclasses={props.dropdownButtonCustomClasses}
          />
          <Button
            variant={props.variant || 'contained'}
            color={props.color || 'primary'}
            onClick={() => props.onClick(props.options[selectedIndex])}
            label={props.ButtonIcon}
            className={css.buttonOverwritesRight}
            data-qa={props.iconButtonDataQa}
            customclasses={props.iconButtonCustomClasses}
          />
        </ButtonGroup>
        <Popper
          open={open}
          data-qa={props.popperDataQa}
          anchorEl={anchorRef.current}
          transition
          placement='bottom-start'
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id='menu-list-grow'>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {props.options.map((option, index) => (
                      <MenuItem
                        data-qa={`${props.menuItemDataQa}-${index}`}
                        key={option}
                        disabled={props.disabledOptionIds ? props.disabledOptionIds.includes(index) : false}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export default memo(Dropdownbutton);