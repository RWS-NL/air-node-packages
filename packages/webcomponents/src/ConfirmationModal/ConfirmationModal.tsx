import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircle from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import classnames from 'classnames';
import React, { FC, Fragment, KeyboardEvent, memo, useMemo } from 'react';
import Button from '../Button/Button';
import { ModalProps, ModalQAs } from '../Modal/Modal';
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
 */
export const ConfirmationModal: FC<ConfirmationModalProps> = props => {
  const handleConfirmKeyPress = (event: KeyboardEvent) => {
    return props.confirmAction && event.key.toLowerCase() === 'enter' ? props.confirmAction() : undefined;
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
    if (props.modalType === 'warning') return <WarningIcon color='error' className={classnames(css.titleIcon)} />;

    return <CheckCircle color='inherit' className={classnames(css.titleIcon, css.titleIconCheckCircle)} />;
  }, [props.modalType]);

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={Boolean(props.open)}
      classes={{ root: css.modal }}
      onKeyPress={handleConfirmKeyPress}
      data-qa={props.modalqas?.modal || 'modal'}
    >
      <DialogTitle
        data-qa={props.modalqas?.title || 'modal-title'}
        className={classnames(css.title, css.titleIconOffset)}
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
        {props.dialogContent}
      </DialogContent>
      {renderModalActions}
    </Dialog>
  );
};

export default memo(ConfirmationModal);
