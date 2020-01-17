import { shallow } from 'enzyme';
import LoadingSkeleton from '../src/LoadingSkeleton';
import React from 'react';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const loadingSkeleton = shallow(<LoadingSkeleton />);
    expect(loadingSkeleton).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const loadingSkeleton = shallow(<LoadingSkeleton height={200} width={200} />);
    expect(loadingSkeleton).toMatchSnapshot();
  });

  test('Circular Skeleton', () => {
    const loadingSkeleton = shallow(<LoadingSkeleton height={200} width={200} circle />);
    expect(loadingSkeleton).toMatchSnapshot();
  });
});
