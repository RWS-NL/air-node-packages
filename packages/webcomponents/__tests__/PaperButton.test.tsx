import PaperButton, { PaperButtonProps } from '../src/PaperButton/PaperButton';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

const mockButtonClick = jest.fn();

describe('Component Tests', () => {
  let paperButton: ShallowWrapper<PaperButtonProps>;

  beforeAll(() => {
    paperButton = shallow(<PaperButton icon={<SearchIcon/>} onClick={mockButtonClick} />);
  });

  test('button functionality called on click', () => {
    const button = paperButton.find(IconButton);
    button.simulate('click');

    expect(mockButtonClick).toHaveBeenCalledWith();
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const paperButton = shallow(<PaperButton icon={<SearchIcon/>} onClick={mockButtonClick} />);
    expect(paperButton).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const paperButton = shallow(
      <PaperButton icon={<SearchIcon/>} onClick={mockButtonClick} tooltipText='tooltip' tooltipPlacement='bottom' paperElevation={5} />
    );
    expect(paperButton).toMatchSnapshot();
  });

  test('Disabled Tooltip', () => {
    const paperButton = shallow(<PaperButton icon={<SearchIcon/>} onClick={mockButtonClick} disableTooltip />);
    expect(paperButton).toMatchSnapshot();
  });
});