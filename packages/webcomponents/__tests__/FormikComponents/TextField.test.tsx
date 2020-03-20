import { shallow } from 'enzyme';
import { Field, Formik } from 'formik';
import React from 'react';
import { TextField } from '../../src/FormikComponents/TextField';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const textField = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <Field component={TextField} type='text' name='field' />
      </Formik>
    );
    expect(textField).toMatchSnapshot();
  });
});
