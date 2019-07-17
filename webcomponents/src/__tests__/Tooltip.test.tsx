import { shallow } from 'enzyme';
import React from 'react';
import Tooltip from '../Tooltip/Tooltip';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const simpleTooltip = shallow(<Tooltip title='SnapTitle'><span>Snappy Text</span></Tooltip>);
    expect(simpleTooltip).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const simpleTooltip = shallow(
      <Tooltip title='SnapTitle' data-qa='snap-qa' style={{ borderLeftColor: 'red' }}>
        <span>Snappy Text</span>
      </Tooltip>
    );
    expect(simpleTooltip).toMatchSnapshot();
  });
});
