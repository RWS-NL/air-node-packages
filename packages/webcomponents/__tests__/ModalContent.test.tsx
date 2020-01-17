import { shallow } from 'enzyme';
import ModalContent from '../src/ModalContent';
import React from 'react';

describe('Component Testing', () => {
  test('should insert children when getting any', () => {
    const text = 'The Answer is 42';

    const modalContent = shallow(
      <ModalContent>
        <p>{text}</p>
      </ModalContent>
    );

    expect(modalContent.prop('children')).toBeDefined();
    expect(modalContent.find('p').text()).toBe(text);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const modalContent = shallow(<ModalContent />);
    expect(modalContent).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const text = 'The Answer is 42';
    const modalContent = shallow(
      <ModalContent>
        <p>{text}</p>
      </ModalContent>
    );
    expect(modalContent).toMatchSnapshot();
  });
});
