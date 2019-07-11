import { shallow, ShallowWrapper } from 'enzyme';
import Logo from '../Logo/Logo';
import React, { SVGProps } from 'react';

let logo: ShallowWrapper<SVGProps<any>>;

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