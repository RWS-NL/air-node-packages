/* eslint-disable no-console */
import Button from '../Button/Button';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockCallback = jest.fn();

describe('Component Tests', () => {
  let button: ShallowWrapper;

  beforeAll(() => {
    button = shallow(<Button variant='contained' color='primary' label='testButton' onClick={mockCallback} />);
  });

  test('button function called onClick', () => {
    button.simulate('click');
    expect(mockCallback).toHaveBeenCalledWith();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('button contains the correct translation', () => {
    expect(button.children().text()).toBe('testButton');
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const button = shallow(<Button variant='contained' color='primary' label='test' onClick={mockCallback} />);
    expect(button).toMatchSnapshot();
  });

  test('Varying Props', () => {
    const button = shallow(
      <Button
        variant='outlined' color='secondary' label={<div>snapshot label</div>}
        onClick={() => console.log('snapshot log')}
      />
    );
    expect(button).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const button = shallow(
      <Button
        variant='outlined' color='secondary' label={<div>snapshot label</div>}
        onClick={() => console.log('snapshot log')}
        data-qa='button-qa'
        customclasses={[ 'sample-class' ]}
        disabled
      />
    );
    expect(button).toMatchSnapshot();
  });
});