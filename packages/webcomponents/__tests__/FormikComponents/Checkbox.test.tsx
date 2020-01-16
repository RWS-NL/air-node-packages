import { Checkbox } from '../../src/FormikComponents/Checkbox/Checkbox';
import { shallow, ShallowWrapper } from 'enzyme';
import MUICheckbox from '@material-ui/core/Checkbox/Checkbox';
import React from 'react';

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
    checkBox.dive().dive().find(MUICheckbox).simulate('change', changeEvent);
    expect(mockCheckboxOnChange).toHaveBeenCalledWith(changeEvent);
    expect(mockCheckboxOnChange).toHaveBeenCalledTimes(1);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const checkBox = shallow(<Checkbox name='testCheckbox' value='testCheckbox' onBlur={mockCheckboxOnBlur} onChange={mockCheckboxOnChange} />);
    expect(checkBox).toMatchSnapshot();
  });
});