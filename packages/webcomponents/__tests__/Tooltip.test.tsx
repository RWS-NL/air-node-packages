import { HOUR } from '@rws-air/utils/dist/TimeUtils';
import { Tooltip } from '@src/Tooltip';
import { shallow } from 'enzyme';
import React from 'react';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const tooltip = shallow(
      <Tooltip title='SnapTitle'>
        <span>Snappy Text</span>
      </Tooltip>
    );
    expect(tooltip).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const simpleTooltip = shallow(
      <Tooltip leaveDelay={HOUR} title='SnapTitle' data-qa='snap-qa' style={{ borderLeftColor: 'red' }}>
        <span>Snappy Text</span>
      </Tooltip>
    );
    expect(simpleTooltip).toMatchSnapshot();
  });
});
