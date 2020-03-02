import { shallow } from 'enzyme';
import React, { FC } from 'react';
import { findByDataQa } from '../../src/Testing/FindByDataQa';

export const TestComponent: FC = () => {
  return (
    <div data-qa='upper-div'>
      <p data-qa='lower-p'>Herp Derp</p>
    </div>
  );
};

describe('FindByDataQa Tests', () => {
  const shallowComponent = shallow(<TestComponent />);

  test('should find upper-div', () => {
    const foundComponent = findByDataQa(shallowComponent, 'upper-div');

    expect(foundComponent.exists()).toBe(true);
  });

  test('should find lower-p', () => {
    const foundComponent = findByDataQa(shallowComponent, 'lower-p');

    expect(foundComponent.exists()).toBe(true);
  });

  test('should not find lowest-span', () => {
    const foundComponent = findByDataQa(shallowComponent, 'lowest-span');

    expect(foundComponent.exists()).toBe(false);
  });
});
