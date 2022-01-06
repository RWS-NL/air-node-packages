import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircle from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import clsx from 'clsx';
import React, { Fragment, KeyboardEvent, memo, useMemo } from 'react';
import { Button } from '../Button';
import { ModalProps, ModalQAs } from '../Modal';
import css from './ConfirmationModal.scss';

export interface ConfirmationModalQAs extends ModalQAs {
  /** Data-qa applied to the modal actions */
  actions?: string;
  /** Data-qa applied to the action confirm button */
  actionConfirm?: string;
  /** Data-qa applied to the action cancel button */
  actionCancel?: string;
}

export interface ConfirmationModalProps extends ModalProps {
  /** Object of data-qa tags to pass to the modal */
  modalqas?: ConfirmationModalQAs;
  /** Text to show in the confirm button */
  okButtonText: string;
  /** Text to show in the cancel button */
  cancelButtonText: string;
  /** Whether the icon for this modal should be a Warning triangle or a Check Circle */
  modalType: 'warning' | 'check';

  /** Action performed when the cancel button is clicked */
  closeAction(): void;
  /** Action performed when the confirm button is clicked */
  confirmAction(): void;
}

/**
 * Constructs a confirmation modal using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the confirmation modal
 * @example
 * ```jsx
 * <ConfirmationModal
 *   modalType='warning'
 *   open={true}
 *   topic='SAMPLE TOPIC'
 *   cancelButtonText='CANCEL'
 *   okButtonText='OK'
 *   confirmAction={console.log}
 *   closeAction={console.log}
 *   modalqas={{
 *      modal: 'sample',
 *      content: 'sample-content',
 *      title: 'sample-title',
 *      actions: 'sample-actions',
 *      actionCancel: 'sample-action-cancel',
 *      actionConfirm: 'sample-action-confirm',
 *   }}
 *   dialogContent={ <ModalContent><div>SAMPLE</div></ModalContent> }
 * />
 * ```
 */
export const ConfirmationModal = memo((props: ConfirmationModalProps) => {
  const handleConfirmKeyPress = (event: KeyboardEvent) => {
    return event.key.toLowerCase() === 'enter' ? props.confirmAction() : undefined;
  };

  const renderModalActions = useMemo(() => {
    return (
      <DialogActions classes={{ root: css.modalActions }} data-qa={props.modalqas?.actions || 'modal-actions'}>
        <Button
          data-qa={props.modalqas?.actionCancel || 'modal-cancel-button'}
          onClick={props.closeAction}
          variant='outlined'
          color='primary'
          label={props.cancelButtonText ? props.cancelButtonText : 'cancel'}
          customclasses={css.modalButtonCancel}
        />
        <Button
          data-qa={props.modalqas?.actionConfirm || 'modal-confirm-button'}
          onClick={props.confirmAction}
          variant='contained'
          color='primary'
          label={props.okButtonText ? props.okButtonText : 'ok'}
          customclasses={css.modalButtonOk}
        />
      </DialogActions>
    );
  }, [props.modalqas, props.closeAction, props.cancelButtonText, props.confirmAction, props.okButtonText]);

  const renderModalTitleIcon = useMemo(() => {
    if (props.modalType === 'warning') return <WarningIcon color='error' className={clsx(css.titleIcon)} />;

    return <CheckCircle color='inherit' className={clsx(css.titleIcon, css.titleIconCheckCircle)} />;
  }, [props.modalType]);

  return (
    <Dialog
      disableEscapeKeyDown
      open={Boolean(props.open)}
      classes={{ root: css.modal }}
      onKeyPress={handleConfirmKeyPress}
      data-qa={props.modalqas?.modal || 'modal'}
      onClose={(_event, reason) => {
        if (reason !== 'backdropClick') {
          props.closeAction();
        }
      }}
    >
      <DialogTitle data-qa={props.modalqas?.title || 'modal-title'} className={clsx(css.title, css.titleIconOffset)}>
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
        {props.dialogContent}
      </DialogContent>
      {renderModalActions}
    </Dialog>
  );
});
