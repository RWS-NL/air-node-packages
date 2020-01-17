import { shallow } from 'enzyme';
import React from 'react';
import TextField from '../../src/FormikComponents/TextField';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const mockForm = { errors: [] };
    const mockField = { name: 'name' };
    // @ts-ignore:2322 => Required because TS doesn't know these props can be passed from Formik
    const textField = shallow(<TextField type='text' form={mockForm} field={mockField} />);
    expect(textField).toMatchSnapshot();
  });
});
