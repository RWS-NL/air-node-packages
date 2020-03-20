import { toBeCalled } from '@rws-air/utils';
import { shallow, ShallowWrapper } from 'enzyme';
import { Field, Formik } from 'formik';
import React, { createRef, FC } from 'react';
import { Checkbox } from '../../src/FormikComponents/Checkbox';

const mockCheckboxOnChange = jest.fn();
const mockCheckboxOnBlur = jest.fn();

describe('Component Tests', () => {
  let checkBox: ShallowWrapper;

  beforeAll(() => {
    checkBox = shallow(
      <BaseFormik>
        <Field
          component={Checkbox}
          name='testCheckbox'
          onBlur={mockCheckboxOnBlur}
          onChange={mockCheckboxOnChange}
          value='testCheckbox'
        />
      </BaseFormik>
    ).find(Field);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('checkbox function called onChange', () => {
    const changeEvent = { event: { target: { value: true } } };
    checkBox.simulate('change', changeEvent);

    toBeCalled(mockCheckboxOnChange, 1, changeEvent);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const checkBox = shallow(
      <BaseFormik>
        <Field
          component={Checkbox}
          name='testCheckbox'
          onBlur={mockCheckboxOnBlur}
          onChange={mockCheckboxOnChange}
          value='testCheckbox'
        />
      </BaseFormik>
    );
    expect(checkBox).toMatchSnapshot();
  });

  test('Passing custom checked property', () => {
    const checkBox = shallow(
      <BaseFormik>
        <Field
          checked={['one', 'two', 'three'].includes('one')}
          component={Checkbox}
          name='testCheckbox'
          onBlur={mockCheckboxOnBlur}
          onChange={mockCheckboxOnChange}
          value='testCheckbox'
        />
      </BaseFormik>
    );
    expect(checkBox).toMatchSnapshot();
  });

  test('Passing a bunch of additional props', () => {
    const checkBox = shallow(
      <BaseFormik>
        <Field
          autoCapitalize='yes'
          buttonRef={createRef()}
          checked={false}
          color='primary'
          component={Checkbox}
          disabled
          disableFocusRipple
          disableRipple
          disableTouchRipple
          name='testCheckbox'
          onAbort={jest.fn()}
          onBlur={mockCheckboxOnBlur}
          onChange={mockCheckboxOnChange}
          value='testCheckbox'
        />
      </BaseFormik>
    );
    expect(checkBox).toMatchSnapshot();
  });
});

const BaseFormik: FC = ({ children }) => (
  <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
    {children}
  </Formik>
);
