import { shallow, mount } from 'enzyme';
import React, { FC } from 'react';
import { findByDataQa, findShallowByDataQa, findReactByDataQa } from '../../src/Testing/FindByDataQa';

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

describe('findShallowByDataQa Tests', () => {
  const shallowComponent = shallow(<TestComponent />);

  test('should find upper-div', () => {
    const foundComponent = findShallowByDataQa(shallowComponent, 'upper-div');

    expect(foundComponent.exists()).toBe(true);
  });

  test('should find lower-p', () => {
    const foundComponent = findShallowByDataQa(shallowComponent, 'lower-p');

    expect(foundComponent.exists()).toBe(true);
  });

  test('should not find lowest-span', () => {
    const foundComponent = findShallowByDataQa(shallowComponent, 'lowest-span');

    expect(foundComponent.exists()).toBe(false);
  });
});

describe('findReactByDataQa Tests', () => {
  const reactComponent = mount(<TestComponent />);

  test('should find upper-div', () => {
    const foundComponent = findReactByDataQa(reactComponent, 'upper-div');

    expect(foundComponent.exists()).toBe(true);
  });

  test('should find lower-p', () => {
    const foundComponent = findReactByDataQa(reactComponent, 'lower-p');

    expect(foundComponent.exists()).toBe(true);
  });

  test('should not find lowest-span', () => {
    const foundComponent = findReactByDataQa(reactComponent, 'lowest-span');

    expect(foundComponent.exists()).toBe(false);
  });
});
