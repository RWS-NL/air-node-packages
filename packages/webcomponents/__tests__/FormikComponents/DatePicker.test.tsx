import { DatePicker } from '@FormikComponents/DatePicker';
import { shallow } from 'enzyme';
import { Field, Formik } from 'formik';
import React from 'react';

const minimumDateForPicker = new Date('2012-01-01');

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const datePicker = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <Field
          component={DatePicker}
          name='date'
          variant='inline'
          label='testDatePicker'
          minDate={minimumDateForPicker}
        />
      </Formik>
    );
    expect(datePicker).toMatchSnapshot();
  });
});
