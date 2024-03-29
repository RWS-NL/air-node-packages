import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ToolbarButton, ToolbarButtonProps } from '@TableComponents/ToolbarButton';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockButtonClick = jest.fn();

describe('Component Tests', () => {
  let tableToolbarButton: ShallowWrapper<ToolbarButtonProps>;

  beforeAll(() => {
    tableToolbarButton = shallow(<ToolbarButton icon={<SearchIcon />} onClick={mockButtonClick} />);
  });

  test('button functionality called on click', () => {
    const button = tableToolbarButton.find(IconButton);
    button.simulate('click');

    expect(mockButtonClick).toHaveBeenCalledWith();
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const toolbarButton = shallow(<ToolbarButton icon={<SearchIcon />} onClick={mockButtonClick} />);
    expect(toolbarButton).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const toolbarButton = shallow(
      <ToolbarButton
        icon={<SearchIcon />}
        onClick={mockButtonClick}
        tooltipText='tooltip'
        tooltipPlacement='bottom'
        paperElevation={5}
      />
    );
    expect(toolbarButton).toMatchSnapshot();
  });

  test('Disabled Tooltip', () => {
    const toolbarButton = shallow(<ToolbarButton icon={<SearchIcon />} onClick={mockButtonClick} disableTooltip />);
    expect(toolbarButton).toMatchSnapshot();
  });
});
