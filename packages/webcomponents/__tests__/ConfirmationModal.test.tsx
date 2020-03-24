import CheckCircle from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import { shallow, ShallowWrapper } from 'enzyme';
import React, { Fragment } from 'react';
import { Button } from '../src/Button';
import { ConfirmationModal, ConfirmationModalProps } from '../src/ConfirmationModal';

let confirmationModal: ShallowWrapper<ConfirmationModalProps, any>;
const closeAction = jest.fn();
const confirmAction = jest.fn();

const setup = (
  isOpen = false,
  props?: Partial<ConfirmationModalProps>,
  DialogContent: () => JSX.Element = () => <Fragment />
) =>
  (confirmationModal = shallow<ConfirmationModalProps>(
    <ConfirmationModal
      topic='Awesome Topic'
      okButtonText='OK'
      cancelButtonText='CANCEL'
      modalType='warning'
      closeAction={closeAction}
      confirmAction={confirmAction}
      open={isOpen}
      dialogContent={<DialogContent />}
      modalqas={{
        content: 'modal-content',
        modal: 'modal',
        title: 'modal-title',
        actionCancel: 'modal-cancel-button',
        actionConfirm: 'modal-confirm-button',
        actions: 'modal-actions'
      }}
      {...props}
    />
  ));

describe('Render Testing', () => {
  test('should include mandatory props', () => {
    setup();
    expect(confirmationModal.find(Button)).toHaveLength(2);
    expect(confirmationModal.prop('disableBackdropClick')).toBe(true);
    expect(confirmationModal.prop('disableEscapeKeyDown')).toBe(true);
  });

  test("should pass all data-qa's", () => {
    setup(true);

    expect(confirmationModal.find('[data-qa="modal"]').exists()).toBe(true);
    expect(confirmationModal.find('[data-qa="modal-title"]').exists()).toBe(true);
    expect(confirmationModal.find('[data-qa="modal-cancel-button"]').exists()).toBe(true);
    expect(confirmationModal.find('[data-qa="modal-confirm-button"]').exists()).toBe(true);
    expect(confirmationModal.find('[data-qa="modal-actions"]').exists()).toBe(true);
  });

  test('should show CheckCircle when modalType == check', () => {
    setup(true, { modalType: 'check' });

    expect(confirmationModal.exists()).toBe(true);
    expect(confirmationModal.find(CheckCircle).exists()).toBe(true);
  });

  test('should show Warning Triangle when modalType == check', () => {
    setup(true, { modalType: 'warning' });

    expect(confirmationModal.find(WarningIcon).exists()).toBe(true);
  });
});

describe('Action Testing', () => {
  beforeAll(() => setup(true));
  test('Ok button should work', () => {
    const okButton = confirmationModal.find('[data-qa="modal-confirm-button"]');
    okButton.simulate('click');
    expect(confirmAction).toHaveBeenCalledWith();
    expect(confirmAction).toHaveBeenCalledTimes(1);
  });

  test('Cancel button should work', () => {
    const cancelButton = confirmationModal.find('[data-qa="modal-cancel-button"]');
    cancelButton.simulate('click');
    expect(closeAction).toHaveBeenCalledWith();
    expect(closeAction).toHaveBeenCalledTimes(1);
  });
});

describe('Content Testing', () => {
  const Content = () => <div>Content</div>;
  beforeAll(() => setup(true, {}, Content));

  test('should contain content', () => {
    expect(confirmationModal.find('[data-qa="modal-content"]').children().exists()).toBe(true);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    setup();
    expect(confirmationModal).toMatchSnapshot();
  });
});
