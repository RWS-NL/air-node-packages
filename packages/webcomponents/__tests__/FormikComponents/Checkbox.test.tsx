import MUICheckbox from '@material-ui/core/Checkbox/Checkbox';
import { shallow, ShallowWrapper } from 'enzyme';
import React, { createRef } from 'react';
import { Checkbox } from '../../src/FormikComponents/Checkbox';

const mockCheckboxOnChange = jest.fn();
const mockCheckboxOnBlur = jest.fn();

describe('Component Tests', () => {
  let checkBox: ShallowWrapper;

  beforeAll(() => {
    checkBox = shallow(
      <Checkbox name='testCheckbox' value='testCheckbox' onBlur={mockCheckboxOnBlur} onChange={mockCheckboxOnChange} />
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('checkbox function called onChange', () => {
    const changeEvent = { event: { target: { value: true } } };
    checkBox
      .dive()
      .dive()
      .find(MUICheckbox)
      .simulate('change', changeEvent);
    expect(mockCheckboxOnChange).toHaveBeenCalledWith(changeEvent);
    expect(mockCheckboxOnChange).toHaveBeenCalledTimes(1);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const checkBox = shallow(
      <Checkbox name='testCheckbox' value='testCheckbox' onBlur={mockCheckboxOnBlur} onChange={mockCheckboxOnChange} />
    );
    expect(checkBox).toMatchSnapshot();
  });

  test('Passing custom checked property', () => {
    const checkBox = shallow(
      <Checkbox
        name='testCheckbox'
        value='testCheckbox'
        onBlur={mockCheckboxOnBlur}
        onChange={mockCheckboxOnChange}
        checked={['one', 'two', 'three'].includes('one')}
      />
    );
    expect(checkBox).toMatchSnapshot();
  });

  test('Passing a bunch of additional props', () => {
    const checkBox = shallow(
      <Checkbox
        autoCapitalize='yes'
        buttonRef={createRef()}
        checked={false}
        color='primary'
        disabled
        disableFocusRipple
        disableRipple
        disableTouchRipple
        name='testCheckbox'
        onAbort={jest.fn()}
        onBlur={mockCheckboxOnBlur}
        onChange={mockCheckboxOnChange}
        value='testCheckbox'
      />
    );
    expect(checkBox).toMatchSnapshot();
  });
});
