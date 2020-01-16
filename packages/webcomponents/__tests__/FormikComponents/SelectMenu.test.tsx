import { shallow } from 'enzyme';
import React from 'react';
import SelectMenu from '../../src/FormikComponents/SelectMenu/SelectMenu';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const fieldMock = { name: '' };
    const mockForm = { errors: [] };

    const selectMenu = shallow(
      // @ts-ignore ts(2739) ts(2322) => Required because TS doesn't know these props can be passed from Formik
      <SelectMenu label='label' options={[ { value: 'one', label: 'one' }, { value: 'two', label: 'two' } ]} type='text' field={fieldMock} form={mockForm} />
    );
    expect(selectMenu).toMatchSnapshot();
  });
});