import { shallow } from 'enzyme';
import React from 'react';
import SimpleTooltip from '../SimpleTooltip/SimpleTooltip';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const simpleTooltip = shallow(<SimpleTooltip title='SnapTitle'><span>Snappy Text</span></SimpleTooltip>);
    expect(simpleTooltip).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const simpleTooltip = shallow(
      <SimpleTooltip title='SnapTitle' data-qa='snap-qa' style={{ borderLeftColor: 'red' }}>
        <span>Snappy Text</span>
      </SimpleTooltip>
    );
    expect(simpleTooltip).toMatchSnapshot();
  });
});