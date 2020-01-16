import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { objectHasProperty } from '@rws-air/utils';
import React, { FC, memo, ReactNode } from 'react';
import css from './Modal.scss';

export interface ModalQAs {
  /** Data-qa applied to the main modal */
  modal?: string;
  /** Data-qa applied to the title */
  title?: string;
  /** Data-qa applied to the content */
  content?: string;
}

export interface ModalProps {
  /** Whether the modal should be opened or not */
  open: boolean;
  /** The content to show in the modal */
  dialogContent: JSX.Element;
  /** Object of data-qa tags to pass to the modal */
  modalqas?: ModalQAs;
  /** Title for the modal */
  topic: string | ReactNode;
  /** Whether clicking on the backdrop should close the modal (triggers closeAction)  */
  disableBackdropClick?: boolean;
  /** Whether pressing the escape key should close the modal (triggers closeAction) */
  disableEscapeKeyDown?: boolean;
}

/**
 * Constructs a modal using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the modal
 * @example
 * <Modal
 *   topic='topic'
 *   modalqas={{
 *     modal: 'modal',
 *     content: 'content',
 *     title: 'title',
 *   }}
 *   dialogContent={<div>SAMPLE</div>}
 *   open={true}
 * />
 */
export const Modal: FC<ModalProps> = props => {
  return (
    <Dialog
      disableBackdropClick={objectHasProperty(props, 'disableBackdropClick') ? props.disableBackdropClick : true}
      disableEscapeKeyDown={objectHasProperty(props, 'disableEscapeKeyDown') ? props.disableEscapeKeyDown : true}
      open={Boolean(props.open)}
      classes={{ root: css.modal }}
      data-qa={props.modalqas?.modal || 'modal'}
    >
      <DialogTitle className={css.title} data-qa={props.modalqas?.title || 'modal-title'}>
        {props.topic}
      </DialogTitle>
      <DialogContent className={css.content} data-qa={props.modalqas?.content || 'modal-content'} >
        {props.dialogContent}
      </DialogContent>
    </Dialog>
  );
};

export default memo(Modal);