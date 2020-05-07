import { Option, RadioGroup } from '@FormikComponents/RadioGroup';
import { shallow, ShallowWrapper } from 'enzyme';
import { Field, Formik } from 'formik';
import React from 'react';

describe('Component Tests', () => {
  let radioGroup: ShallowWrapper;
  const options: Option<'JOHN' | 'CONNOR'>[] = [
    { value: 'JOHN', label: 'John' },
    { value: 'CONNOR', label: 'Connor' }
  ];

  beforeAll(() => {
    radioGroup = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <Field component={RadioGroup} data-qa='formFieldName' name='name' options={options} />
      </Formik>
    ).find(Field);
  });

  test('GIVEN RadioGroup with 2 options THEN has 2 radio group with options of length 2', () => {
    expect(radioGroup.prop('options')).toStrictEqual(options);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const radioGroup = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <Field
          component={RadioGroup}
          name='name'
          options={[
            { value: 'JOHN', label: 'John' },
            { value: 'CONNOR', label: 'Connor' }
          ]}
        />
      </Formik>
    );
    expect(radioGroup).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const radioGroup = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <Field
          component={RadioGroup}
          data-qa='formFieldName'
          required
          name='name'
          options={[
            { value: 'JOHN', label: 'John' },
            { value: 'CONNOR', label: 'Connor' }
          ]}
        />
      </Formik>
    );
    expect(radioGroup).toMatchSnapshot();
  });
});
