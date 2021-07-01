import { ActionBar } from '@src/ActionBar';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import toJson from "enzyme-to-json";

const mockCallback = jest.fn();

describe('Component Testing', () => {
  let actionBar: ShallowWrapper;

  afterEach(() => {
    actionBar.unmount();
    jest.clearAllMocks();
  });

  test('GIVEN shouldHaveButton=false THEN should not show button', () => {
    actionBar = shallow(<ActionBar title='42' shouldHaveButton={false} shouldDisableButton />);
    const title = actionBar.find('[data-qa="action-bar-title"]');
    const actionButton = actionBar.find('[data-qa="action-bar-button"]');
    actionButton.simulate('click');

    expect(title.text()).toBe('42');
    expect(mockCallback).toHaveBeenCalledTimes(0);
  });

  test('GIVEN button click THEN triggers function', () => {
    actionBar = shallow(<ActionBar title='42' buttonLabel='label' buttonAction={mockCallback} shouldHaveButton />);
    const actionButton = actionBar.find('[data-qa="action-bar-button"]');
    actionButton.simulate('click');
    expect(mockCallback).toHaveBeenCalledWith();
    expect(actionButton.shallow().text()).toBe('label');
  });

  test('GIVEN button click with params THEN passes params', () => {
    const param = 42;

    actionBar = shallow(
      <ActionBar title='42' buttonLabel='label' buttonAction={() => mockCallback(param)} shouldHaveButton />
    );

    const actionButton = actionBar.find('[data-qa="action-bar-button"]');
    actionButton.simulate('click');
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(param);
    expect(actionButton.shallow().text()).toBe('label');
  });

  test('GIVEN title as ReactNode Function THEN shows title', () => {
    actionBar = shallow(<ActionBar title={() => <div data-qa='action-bar-custom-title'>text</div>} />);
    const title = actionBar.find('[data-qa="action-bar-custom-title"]');

    expect(title.text()).toBe('text');
  });

  test('GIVEN title as ReactNode Element THEN shows title', () => {
    actionBar = shallow(<ActionBar title={<div data-qa='action-bar-custom-title'>text</div>} />);
    const title = actionBar.find('[data-qa="action-bar-custom-title"]');

    expect(title.text()).toBe('text');
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const actionBar = shallow(<ActionBar title='42' />);
    expect(toJson(actionBar)).toMatchSnapshot();
  });

  test('With Button', () => {
    const actionBar = shallow(
      <ActionBar
        title={() => <div data-qa='action-bar-custom-title'>text</div>}
        buttonLabel='label'
        buttonAction={mockCallback}
        shouldHaveButton
      />
    );
    expect(toJson(actionBar)).toMatchSnapshot();
  });

  test('AdditionalTest', () => {
    const actionBar = shallow(
      <ActionBar
        title={<div data-qa='action-bar-custom-title'>text</div>}
        buttonLabel='label'
        buttonAction={mockCallback}
        shouldHaveButton
        customclasses={'snapshot-class'}
        data-qa='snapshot-qa'
      />
    );
    expect(toJson(actionBar)).toMatchSnapshot();
  });
});
