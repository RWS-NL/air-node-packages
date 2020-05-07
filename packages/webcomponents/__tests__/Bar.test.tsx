import { Bar } from '@src/Bar';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const children = <p>child</p>;
let bar: ShallowWrapper;

beforeAll(() => {
  bar = shallow(<Bar classes='blue-bar'>{children}</Bar>);
});

test('should render as expected', () => {
  expect(bar).toMatchSnapshot();
});

test('bar has a child component', () => {
  expect(bar.children()).toHaveLength(1);
  expect(bar.childAt(0).text()).toStrictEqual('child');
});

test('bar takes the classes from props', () => {
  expect(bar.hasClass('blue-bar')).toBe(true);
});
