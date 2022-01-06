import CloudDownload from '@mui/icons-material/CloudDownload';
import { Dropdownbutton, DropdownbuttonProps } from '@src/Dropdownbutton';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockButtonClick = jest.fn();

describe('Component Tests', () => {
  let dropdownButton: ShallowWrapper;

  beforeAll(() => {
    dropdownButton = shallow(
      <Dropdownbutton
        ButtonIcon={<CloudDownload />}
        onClick={mockButtonClick}
        options={['one', 'two']}
        menuItemDataQa='menu-item'
        iconButtonDataQa='icon-button'
        dropdownButtonDataQa='dropdown-button'
      />
    );
  });

  test('button function called onClick', () => {
    const iconButton = dropdownButton.find('[data-qa="icon-button"]');

    iconButton.simulate('click');

    expect(mockButtonClick).toHaveBeenCalledWith('one');
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });
});

describe('Component Test - Disabled Button', () => {
  let dropdownButton: ShallowWrapper<DropdownbuttonProps>;

  beforeAll(() => {
    dropdownButton = shallow<DropdownbuttonProps>(
      <Dropdownbutton
        disabled
        ButtonIcon={<CloudDownload />}
        onClick={mockButtonClick}
        buttonGroupDataQa='button-group'
        options={['one', 'two']}
      />
    );
  });

  test('button should be disabled and no call should be made to the click function', () => {
    const buttonGroup = dropdownButton.find('[data-qa="button-group"]');
    expect(buttonGroup.prop('disabled')).toBe(true);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const dropdownButton = shallow(
      <Dropdownbutton ButtonIcon={<CloudDownload />} onClick={mockButtonClick} options={['one', 'two', 'three']} />
    );
    expect(dropdownButton).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const dropdownButton = shallow(
      <Dropdownbutton
        ButtonIcon={<CloudDownload />}
        onClick={mockButtonClick}
        options={['one', 'two', 'three']}
        disabledOptionIds={[2]}
        color='secondary'
        variant='outlined'
        disabled
      />
    );
    expect(dropdownButton).toMatchSnapshot();
  });
});
