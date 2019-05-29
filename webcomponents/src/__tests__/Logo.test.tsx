import Logo from '../Logo/Logo';
import { shallow } from 'enzyme';
import React from 'react';

it('renders without crashing', () => {
  shallow(<Logo/>);
});