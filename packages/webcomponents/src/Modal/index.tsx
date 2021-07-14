import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogContent, { DialogContentProps } from '@material-ui/core/DialogContent';
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React, { memo, ReactNode } from 'react';
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
  /** Title for the modal */
  topic: string | ReactNode;
  /** Any othe props passed to the Dialog */
  DialogProps?: DialogProps;
  /** Any other props passed to the DialogContent */
  DialogContentProps?: DialogContentProps;
  /** Any other props passed to the DialogTitle */
  DialogTitleProps?: DialogTitleProps;
  /** Object of data-qa tags to pass to the modal */
  modalqas?: ModalQAs;

  /** The action to trigger to close this modal */
  closeAction(): void;
}

/**
 * Constructs a modal using pre-defined Rijkswaterstaat styling
 * @param props Props to pass to the modal - {@link ModalProps}
 * @example
 * ```jsx
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
 * ```
 */
export const Modal = memo(({ DialogContentProps, DialogTitleProps, DialogProps, ...props }: ModalProps) => {
  return (
    <Dialog
      {...DialogProps}
      disableBackdropClick
      disableEscapeKeyDown
      open={Boolean(props.open)}
      classes={{ root: css.modal }}
      data-qa={props.modalqas?.modal || 'modal'}
    >
      <DialogTitle {...DialogTitleProps} className={css.title} data-qa={props.modalqas?.title || 'modal-title'}>
        <Grid container alignContent='flex-end' alignItems='flex-end' justifyContent='space-between'>
          <Grid item>{props.topic}</Grid>
          <Grid item classes={{ root: css.closeIcon }}>
            <IconButton
              onClick={props.closeAction}
              size='small'
              edge='end'
              disableFocusRipple
              disableTouchRipple
              disableRipple
              color='primary'
            >
              <CloseIcon classes={{ root: css.closeIconSVG }} />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent
        {...DialogContentProps}
        className={css.content}
        data-qa={props.modalqas?.content || 'modal-content'}
      >
        {props.dialogContent}
      </DialogContent>
    </Dialog>
  );
});
