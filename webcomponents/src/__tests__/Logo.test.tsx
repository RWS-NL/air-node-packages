import { shallow, ShallowWrapper } from 'enzyme';
import Logo from '../Logo/Logo';
import React, { SVGProps } from 'react';

let logo: ShallowWrapper<SVGProps<any>>;

beforeAll(() => logo = shallow(<Logo />));

test('should match snapshot', () => {
  expect(logo).toMatchSnapshot();
});