import { shallow, ShallowWrapper } from 'enzyme';
import React, { Fragment } from 'react';
import Button from '../src/Button';
import { Modal, ModalProps } from '../src/Modal';
import { IconButton } from '@material-ui/core';

let modal: ShallowWrapper<ModalProps, any>;
const mockCloseAction = jest.fn();

const setup = (isOpen = false, props?: Partial<ModalProps>, DialogContent: () => JSX.Element = () => <Fragment />) =>
  (modal = shallow<ModalProps>(
    <Modal
      topic='Awesome Topic'
      open={isOpen}
      closeAction={mockCloseAction}
      dialogContent={<DialogContent />}
      modalqas={{
        content: 'modal-content',
        modal: 'modal',
        title: 'modal-title'
      }}
      {...props}
    />
  ));

describe('Render Testing', () => {
  test('should include mandatory props', () => {
    setup();
    expect(modal.find(Button)).toHaveLength(0);
    expect(modal.prop('disableBackdropClick')).toBe(true);
    expect(modal.prop('disableEscapeKeyDown')).toBe(true);
  });

  test("should pass all data-qa's", () => {
    setup(true);

    expect(modal.find('[data-qa="modal"]').exists()).toBe(true);
    expect(modal.find('[data-qa="modal-title"]').exists()).toBe(true);
  });
});

describe('Content Testing', () => {
  beforeAll(() => setup(true, {}, () => <div>Content</div>));
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should contain content', () => {
    expect(
      modal
        .find('[data-qa="modal-content"]')
        .children()
        .exists()
    ).toBe(true);
    expect(modal.find('[data-qa="modal-content"]').children()).toMatchSnapshot();
  });

  test('should close when clicking X icon', () => {
    const closeButton = modal.find(IconButton);

    closeButton.simulate('click');

    expect(mockCloseAction).toHaveBeenCalledWith();
    expect(mockCloseAction).toHaveBeenCalledTimes(1);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    setup();
    expect(modal).toMatchSnapshot();
  });
});
