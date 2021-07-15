import { Fab } from '@material-ui/core';
import AccessAlarm from '@material-ui/icons/AccessAlarm';
import { FloatingActionButton } from '@src/FloatingActionButton';
import { Tooltip } from '@src/Tooltip';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import toJson from "enzyme-to-json";

const mockButtonClick = jest.fn();

describe('Component Tests', () => {
  let floatingActionButton: ShallowWrapper;

  beforeAll(() => {
    floatingActionButton = shallow(
      <FloatingActionButton tooltipContent='Tooltip Sample' onClick={mockButtonClick}>
        <AccessAlarm />
      </FloatingActionButton>
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('GIVEN button click THEN triggers onClick', () => {
    floatingActionButton.find(Fab).simulate('click');
    expect(mockButtonClick).toHaveBeenCalledWith();
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });

  test('GIVEN tooltipContent THEN contains content in Tooltip', () => {
    const tooltip = floatingActionButton.find(Tooltip);

    expect(tooltip.prop('title')).toBe('Tooltip Sample');
  });

  test('GIVEN disableToolthen THEN has no Tooltip', () => {
    floatingActionButton = shallow(
      <FloatingActionButton disableTooltip>
        <AccessAlarm />
      </FloatingActionButton>
    );

    const tooltip = floatingActionButton.find(Tooltip);

    expect(tooltip.exists()).toBe(false);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const floatingActionButton = shallow(
      <FloatingActionButton tooltipContent='Sample' onClick={mockButtonClick}>
        <AccessAlarm />
      </FloatingActionButton>
    );
    expect(toJson(floatingActionButton)).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const floatingActionButton = shallow(
      <FloatingActionButton TooltipProps={{ id: 'tooltip' }} onClick={mockButtonClick}>
        <AccessAlarm />
      </FloatingActionButton>
    );
    expect(toJson(floatingActionButton)).toMatchSnapshot();
  });

  test('Disabling Tooltip', () => {
    const floatingActionButton = shallow(
      <FloatingActionButton disableTooltip>
        <AccessAlarm />
      </FloatingActionButton>
    );

    expect(toJson(floatingActionButton)).toMatchSnapshot();
  });
});
