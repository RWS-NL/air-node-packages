import { shallow, ShallowWrapper } from 'enzyme';
import React, { Fragment } from 'react';
import Button from '../src/Button/Button';
import { Modal, ModalProps } from '../src/Modal/Modal';

let modal: ShallowWrapper<ModalProps, any>;

const setup = (isOpen = false, props?: Partial<ModalProps>, DialogContent: () => JSX.Element = () => <Fragment />) => (
  modal = shallow<ModalProps>(
    <Modal
      topic='Awesome Topic'
      open={isOpen}
      dialogContent={<div>Hello Wolrd</div>}
      modalqas={{
        content: 'modal-content',
        modal: 'modal',
        title: 'modal-title',
      }}
      {...props}
    >
      <DialogContent />
    </Modal>
  )
);

describe('Render Testing', () => {
  test('should include mandatory props', () => {
    setup();
    expect(modal.find(Button)).toHaveLength(0);
    expect(modal.prop('disableBackdropClick')).toBe(true);
    expect(modal.prop('disableEscapeKeyDown')).toBe(true);
  });

  test('should pass all data-qa\'s', () => {
    setup(true);

    expect(modal.find('[data-qa="modal"]').exists()).toBe(true);
    expect(modal.find('[data-qa="modal-title"]').exists()).toBe(true);
  });
});

describe('Content Testing', () => {
  beforeAll(() => setup(true, {}, () => <div>Content</div>));

  test('should contain content', () => {
    expect(modal.find('[data-qa="modal-content"]').children().exists()).toBe(true);
    expect(modal.find('[data-qa="modal-content"]').children()).toMatchSnapshot();
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    setup();
    expect(modal).toMatchSnapshot();
  });
});