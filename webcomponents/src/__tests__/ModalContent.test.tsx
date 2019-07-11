import { shallow, ShallowWrapper } from 'enzyme';
import ModalContent from '../ModalContent/ModalContent';
import React from 'react';

let modalContent: ShallowWrapper;

describe('With Children', () => {
  beforeAll(() => {
    modalContent = shallow(<ModalContent />);
  });

  test('should match snapshot', () => {
    expect(modalContent).toMatchSnapshot();
  });

  test('should render without crashing', () => {
    expect(modalContent).toBeTruthy();
  });

  test('should render empty div when no children are given', () => {
    expect(modalContent.prop('children')).toBeUndefined();
  });

});

describe('With Children', () => {
  const text = 'The Answer is 42';
  beforeAll(() => {
    modalContent = shallow(
      <ModalContent>
        <p>{text}</p>
      </ModalContent>
    );
  });

  test('should match snapshot', () => {
    expect(modalContent).toMatchSnapshot();
  });

  test('should insert children when getting any', () => {
    expect(modalContent.prop('children')).toBeDefined();
    expect(modalContent.find('p').text()).toBe(text);
  });
});