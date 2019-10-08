import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckCircle from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '../Button/Button';
import classnames from 'classnames';
import css from './Modal.scss';
import React, { FC, Fragment, KeyboardEvent, ReactNode, memo, useMemo } from 'react';
import { dataQa } from '../constants';

export interface ModalQAs {
  /** Data-qa applied to the main modal */
  modal: dataQa;
  /** Data-qa applied to the title */
  title: dataQa;
  /** Data-qa applied to the content */
  content: dataQa;
  /** Data-qa applied to the modal actions */
  actions?: dataQa;
  /** Data-qa applied to the action confirm button */
  actionConfirm?: dataQa;
  /** Data-qa applied to the action cancel button */
  actionCancel?: dataQa;
}

export interface ModalProps {
  /** Whether the modal should be opened or not */
  open: boolean;
  /** Object of data-qa tags to pass to the modal */
  modalqas: ModalQAs;
  /** Title for the modal */
  topic: string | ReactNode;
  /** Text to show in the confirm button */
  okButtonText?: string;
  /** Text to show in the cancel button */
  cancelButtonText?: string;
  /** Whether this modal only has text content, an icon next to the title and buttons from the props */
  isSimpleModal?: boolean;
  /** Action performed when the cancel button is clicked */
  closeAction?: () => unknown;
  /** Action performed when the confirm button is clicked */
  confirmAction?: () => unknown;
  /** Content to show in the body of the modal */
  dialogContent: ReactNode;
  /** Whether the icon for this modal should be a Warning triangle or a Check Circle */
  modalType?: 'warning' | 'check';
  /** Whether clicking on the backdrop should close the modal (triggers closeAction)  */
  disableBackdropClick?: boolean;
  /** Whether pressing the escape key should close the modal (triggers closeAction) */
  disableEscapeKeyDown?: boolean;
}

/** Creates a modal using pre-defined Rijkswatestaat styling */
export const Modal: FC<ModalProps> = props => {
  const handleConfirmKeyPress = (event: KeyboardEvent) => {
    return props.confirmAction && event.key.toLowerCase() === 'enter'
      ? props.confirmAction()
      : undefined;
  };

  const handleConfirm = () => {
    if (props.confirmAction) return props.confirmAction();

    return undefined;
  };

  const handleClose = () => {
    if (props.closeAction) return props.closeAction();

    return undefined;
  };

  const renderModalActions = useMemo(
    () => {
      if (props.hasOwnProperty('isSimpleModal') ? props.isSimpleModal : false) {
        return (
          <DialogActions classes={{ root: css.modalActions }} data-qa={props.modalqas.actions}>
            <Button
              data-qa={props.modalqas.actionCancel || 'modal-cancel-button'}
              onClick={handleClose} variant='outlined' color='primary'
              label={props.cancelButtonText ? props.cancelButtonText : 'cancel'}
              customclasses={css.modalButtonCancel}
            />
            <Button
              data-qa={props.modalqas.actionConfirm || 'modal-confirm-button'}
              onClick={handleConfirm} variant='contained' color='primary'
              label={props.okButtonText ? props.okButtonText : 'ok'}
              customclasses={css.modalButtonOk}
            />
          </DialogActions>
        );
      }

      return <Fragment />;
    },
    [
      handleClose, handleConfirm,
      props.cancelButtonText, props.okButtonText
    ]
  );

  const renderModalTitleIcon = useMemo(() => {
    if (props.hasOwnProperty('isSimpleModal') ? props.isSimpleModal : false) {
      return (
        props.modalType === 'warning'
          ? <WarningIcon color='error' className={classnames(css.titleIcon)} />
          : <CheckCircle color='inherit' className={classnames(css.titleIcon, css.titleIconCheckCircle)} />
      );
    }

    return <Fragment />;
  }, [ props.isSimpleModal, props.modalType ]);

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={Boolean(props.open)} onClose={props.closeAction}
      classes={{ root: css.modal }}
      onKeyPress={handleConfirmKeyPress}
      data-qa={props.modalqas.modal || 'modal'}
    >
      <DialogTitle
        data-qa={props.modalqas.title || 'modal-title'}
        className={classnames(
          css.title,
          {
            [css.titleIconOffset]: props.hasOwnProperty('isSimpleModal') ? props.isSimpleModal : false,
            [css.titleIconOffsetHeader]: props.hasOwnProperty('isSimpleModal') ? props.isSimpleModal : false,
          }
        )}
      >
        <Fragment>
          {renderModalTitleIcon}
          {props.topic ? props.topic : ''}
        </Fragment>
      </DialogTitle>
      <DialogContent
        classes={{ root: css.modalBody }}
        className={
          classnames({ [css.modalContentSmall]: props.hasOwnProperty('isSimpleModal') ? props.isSimpleModal : false })
        }
        data-qa={props.modalqas.content || 'modal-content'}
      >
        {props.dialogContent}
      </DialogContent>
      {renderModalActions}
    </Dialog>
  );
};

export default memo(Modal);