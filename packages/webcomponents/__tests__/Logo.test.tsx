import { shallow } from 'enzyme';
import { Logo } from '../src/Logo';
import React from 'react';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const logo = shallow(<Logo />);
    expect(logo).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const logo = shallow(<Logo height={500} width={500} cursor='pointer' />);
    expect(logo).toMatchSnapshot();
  });
});
