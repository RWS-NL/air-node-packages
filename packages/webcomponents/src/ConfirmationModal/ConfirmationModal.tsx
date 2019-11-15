import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircle from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import { objectHasProperty } from '@rws-air/utils';
import classnames from 'classnames';
import { ModalProps, ModalQAs } from '../Modal/Modal';
import React, { FC, Fragment, KeyboardEvent, memo, useMemo } from 'react';
import Button from '../Button/Button';
import { dataQa } from '../constants';
import css from './Modal.scss';

export interface ConfirmationModalQAs extends ModalQAs {
  /** Data-qa applied to the modal actions */
  actions?: dataQa;
  /** Data-qa applied to the action confirm button */
  actionConfirm?: dataQa;
  /** Data-qa applied to the action cancel button */
  actionCancel?: dataQa;
}

export interface ConfirmationModalProps extends ModalProps {
  /** Object of data-qa tags to pass to the modal */
  modalqas?: ConfirmationModalQAs;
  /** Text to show in the confirm button */
  okButtonText: string;
  /** Text to show in the cancel button */
  cancelButtonText: string;
  /** Action performed when the cancel button is clicked */
  closeAction: () => unknown;
  /** Action performed when the confirm button is clicked */
  confirmAction: () => unknown;
  /** Whether the icon for this modal should be a Warning triangle or a Check Circle */
  modalType: 'warning' | 'check';
  /** Whether clicking on the backdrop should close the modal (triggers closeAction)  */
  disableBackdropClick?: boolean;
  /** Whether pressing the escape key should close the modal (triggers closeAction) */
  disableEscapeKeyDown?: boolean;
}

/**
 * Creates a modal using pre-defined Rijkswaterstaat styling
 */
export const ConfirmationModal: FC<ConfirmationModalProps> = props => {
  const handleConfirmKeyPress = (event: KeyboardEvent) => {
    return props.confirmAction && event.key.toLowerCase() === 'enter'
      ? props.confirmAction()
      : undefined;
  };

  const handleConfirm = () => props.confirmAction();
  const handleClose = () => props.closeAction();

  const renderModalActions = useMemo(
    () => {
      return (
        <DialogActions classes={{ root: css.modalActions }} data-qa={props.modalqas?.actions || 'modal-actions'}>
          <Button
            data-qa={props.modalqas?.actionCancel || 'modal-cancel-button'}
            onClick={handleClose} variant='outlined' color='primary'
            label={props.cancelButtonText ? props.cancelButtonText : 'cancel'}
            customclasses={css.modalButtonCancel}
          />
          <Button
            data-qa={props.modalqas?.actionConfirm || 'modal-confirm-button'}
            onClick={handleConfirm} variant='contained' color='primary'
            label={props.okButtonText ? props.okButtonText : 'ok'}
            customclasses={css.modalButtonOk}
          />
        </DialogActions>
      );
    },
    [
      handleClose, handleConfirm,
      props.cancelButtonText, props.okButtonText
    ]
  );

  const renderModalTitleIcon = useMemo(() => {
    if (props.modalType === 'warning') return <WarningIcon color='error' className={classnames(css.titleIcon)} />;

    return <CheckCircle color='inherit' className={classnames(css.titleIcon, css.titleIconCheckCircle)} />;
  }, [ props.modalType ]);

  return (
    <Dialog
      disableBackdropClick={objectHasProperty(props, 'disableBackdropClick') ? props.disableBackdropClick : true}
      disableEscapeKeyDown={objectHasProperty(props, 'disableEscapeKeyDown') ? props.disableEscapeKeyDown : true}
      open={Boolean(props.open)}
      classes={{ root: css.modal }}
      onKeyPress={handleConfirmKeyPress}
      data-qa={props.modalqas?.modal || 'modal'}
    >
      <DialogTitle
        data-qa={props.modalqas?.title || 'modal-title'}
        className={classnames(
          css.title,
          css.titleIconOffset,
          css.titleIconOffsetHeader
        )}
      >
        <Fragment>
          {renderModalTitleIcon}
          {props.topic}
        </Fragment>
      </DialogTitle>
      <DialogContent
        classes={{ root: css.modalBody }}
        className={css.modalContentSmall}
        data-qa={props.modalqas?.content || 'modal-content'}
      >
        {props.children}
      </DialogContent>
      {renderModalActions}
    </Dialog>
  );
};

export default memo(ConfirmationModal);