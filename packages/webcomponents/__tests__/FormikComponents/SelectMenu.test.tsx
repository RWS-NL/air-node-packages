import { shallow } from 'enzyme';
import React from 'react';
import SelectMenu from '../../src/FormikComponents/SelectMenu';
import { Formik } from 'formik';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const selectMenu = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <SelectMenu
          name='type'
          label='Sample Label'
          options={[
            { value: 'one', label: 'one' },
            { value: 'two', label: 'two' }
          ]}
          type='text'
        />
      </Formik>
    );
    expect(selectMenu).toMatchSnapshot();
  });
});
