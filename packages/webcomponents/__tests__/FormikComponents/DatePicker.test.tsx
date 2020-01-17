import DatePicker from '../../src/FormikComponents/DatePicker';
import { shallow } from 'enzyme';
import React from 'react';

const minimumDateForPicker = new Date('2012-01-01');
const mockOnchange = jest.fn();
const mockOnBlur = jest.fn();
const mockForm = { errors: {}, setFieldValue: mockOnchange };
const mockField = { name: '', onBlur: mockOnBlur };

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const datePicker = shallow(
      <DatePicker
        variant='standard'
        label='testDatePicker'
        minDate={minimumDateForPicker}
        // @ts-ignore:2322 => Required because TS doesn't know these props can be passed from Formik
        form={mockForm}
        field={mockField}
      />
    );
    expect(datePicker).toMatchSnapshot();
  });
});
