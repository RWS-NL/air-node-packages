import { shallow } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import DatePicker from '../../src/FormikComponents/DatePicker';

const minimumDateForPicker = new Date('2012-01-01');

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const datePicker = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <DatePicker name='date' variant='inline' label='testDatePicker' minDate={minimumDateForPicker} />
      </Formik>
    );
    expect(datePicker).toMatchSnapshot();
  });
});
