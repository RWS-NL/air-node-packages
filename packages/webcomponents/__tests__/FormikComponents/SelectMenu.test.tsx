import { SelectMenu } from '@FormikComponents/SelectMenu';
import { shallow } from 'enzyme';
import { Field, Formik } from 'formik';
import React from 'react';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const selectMenu = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <Field
          component={SelectMenu}
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
