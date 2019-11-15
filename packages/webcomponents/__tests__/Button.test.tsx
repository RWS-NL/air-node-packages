import Button from '../src/Button/Button';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockButtonClick = jest.fn();

describe('Component Tests', () => {
  let button: ShallowWrapper;

  beforeAll(() => {
    button = shallow(<Button variant='contained' color='primary' label='testButton' onClick={mockButtonClick} />);
  });

  test('button function called onClick', () => {
    button.simulate('click');
    expect(mockButtonClick).toHaveBeenCalledWith();
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });

  test('button contains the correct translation', () => {
    expect(button.children().text()).toBe('testButton');
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const button = shallow(<Button variant='contained' color='primary' label='test' onClick={mockButtonClick} />);
    expect(button).toMatchSnapshot();
  });

  test('Varying Props', () => {
    const button = shallow(
      <Button
        variant='outlined' color='secondary' label={<div>snapshot label</div>}
        onClick={mockButtonClick}
      />
    );
    expect(button).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const button = shallow(
      <Button
        variant='outlined' color='secondary' label={<div>snapshot label</div>}
        onClick={mockButtonClick}
        data-qa='button-qa'
        customclasses={[ 'sample-class' ]}
        disabled
      />
    );
    expect(button).toMatchSnapshot();
  });
});