/**
 * @jest-environment jsdom
 */

import React, { FC } from 'react';
import { useWindowSize } from '../src/UseWindowSize';
import { shallow } from 'enzyme';

interface ComponentProps {
  name: string;
}

export const Component: FC<ComponentProps> = (props) => {
  const [width, height] = useWindowSize();

  return (
    <div>
      {width} {height} {props.name}
    </div>
  );
};

test('should have width and height', () => {
  const component = shallow(<Component name='Robin Hood' />);

  expect(component.text()).toStrictEqual('1024 768 Robin Hood');

  expect(component).toMatchSnapshot();
});
