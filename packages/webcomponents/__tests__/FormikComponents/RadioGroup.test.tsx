import { FormControlLabel } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import RadioGroup from '../../src/FormikComponents/RadioGroup/RadioGroup';

describe('Component Tests', () => {
  let radioGroup: ShallowWrapper;

  beforeAll(() => {
    radioGroup = shallow(
      <RadioGroup<'JOHN' | 'CONNOR'>
        options={[ { value: 'JOHN', label: 'John' }, { value: 'CONNOR', label: 'Connor' } ]}
      />
    );
  });

  test('GIVEN RadioGroup with 2 options THEN has 2 radio buttons', () => {
    expect(radioGroup.find(FormControlLabel)).toHaveLength(2);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const radioGroup = shallow(
      <RadioGroup<'JOHN' | 'CONNOR'>
        options={[ { value: 'JOHN', label: 'John' }, { value: 'CONNOR', label: 'Connor' } ]}
      />);
    expect(radioGroup).toMatchSnapshot();
  });
});