import Button from '../Button/Button';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockCallback = jest.fn();
let button: ShallowWrapper;

beforeEach(() => button = shallow(<Button variant='contained' color='primary' label='testButton' onClick={mockCallback}/>));

test('button function called onClick', () => {
  button.simulate('click');
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

test('button contains the correct translation', () => {
  expect(button.children().text()).toBe('testButton');
});