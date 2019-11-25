import ActionBar from '../src/ActionBar/ActionBar';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockCallback = jest.fn();

describe('Component Testing', () => {
  let actionBar: ShallowWrapper;

  describe('ActionBar with button', () => {
    test('confirm the button click is registered', () => {
      actionBar = shallow(<ActionBar title='42' buttonLabel='label' buttonAction={mockCallback} shouldHaveButton />);
      const actionButton = actionBar.find('[data-qa="action-bar-button"]');
      actionButton.simulate('click');
      expect(mockCallback).toHaveBeenCalledWith();
      expect(actionButton.shallow().text()).toBe('label');
    });

    test('confirm the button click passes arguments', () => {
      const param = 42;

      actionBar = shallow(
        <ActionBar title='42' buttonLabel='label'
          buttonAction={() => mockCallback(param)}
          shouldHaveButton
        />
      );

      const actionButton = actionBar.find('[data-qa="action-bar-button"]');
      actionButton.simulate('click');
      expect(mockCallback).toHaveBeenCalledWith();
      expect(mockCallback).toHaveBeenCalledWith(param);
      expect(actionButton.shallow().text()).toBe('label');
    });
  });

  describe('ActionBar without button', () => {
    beforeEach(() => {
      actionBar = shallow(<ActionBar title='42' />);
    });

    test('should show title', () => {
      const title = actionBar.find('[data-qa="action-bar-title"]');
      const actionButton = actionBar.find('[data-qa="action-bar-button"]');
      expect(title.text()).toBe('42');
      expect(actionButton).toHaveLength(0);
    });
  });

  describe('ActionBar with ReactNode function based title', () => {
    beforeEach(() => {
      actionBar = shallow(<ActionBar title={() => <div data-qa='action-bar-custom-title'>text</div>} />);
    });

    test('should show title node', () => {
      const title = actionBar.find('[data-qa="action-bar-custom-title"]');

      expect(title.text()).toBe('text');
    });
  });

  describe('ActionBar with ReactNode element based title', () => {
    beforeEach(() => {
      actionBar = shallow(<ActionBar title={<div data-qa='action-bar-custom-title'>text</div>} />);
    });

    test('should show title node', () => {
      const title = actionBar.find('[data-qa="action-bar-custom-title"]');

      expect(title.text()).toBe('text');
    });
  });
});


describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const actionBar = shallow(<ActionBar title='42' />);
    expect(actionBar).toMatchSnapshot();
  });

  test('With Button', () => {
    const actionBar = shallow(
      <ActionBar
        title={() => <div data-qa='action-bar-custom-title'>text</div>} buttonLabel='label'
        buttonAction={mockCallback} shouldHaveButton
      />
    );
    expect(actionBar).toMatchSnapshot();
  });

  test('AdditionalTest', () => {
    const actionBar = shallow(
      <ActionBar
        title={<div data-qa='action-bar-custom-title'>text</div>} buttonLabel='label'
        buttonAction={mockCallback} shouldHaveButton
        customclasses={'snapshot-class'} data-qa='snapshot-qa'
      />
    );
    expect(actionBar).toMatchSnapshot();
  });
});