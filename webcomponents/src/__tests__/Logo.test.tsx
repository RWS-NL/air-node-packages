import { shallow } from 'enzyme';
import Logo from '../Logo/Logo';
import React from 'react';

it('renders without crashing', () => {
  shallow(<Logo />);
});