import { SelectMenuMultiple } from '@FormikComponents/SelectMenuMultiple';
import { Box, Chip } from '@mui/material';
import { shallow } from 'enzyme';
import { Field, Formik } from 'formik';
import React from 'react';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const dropdownOptions = [
      { value: 'one', label: 'one' },
      { value: 'two', label: 'two' }
    ];

    const selectMenu = shallow(
      <Formik initialValues={{ name: '' }} onSubmit={() => undefined}>
        <Field
          component={SelectMenuMultiple}
          name='type'
          label='Sample Label'
          options={dropdownOptions}
          type='text'
          renderValue={(selected: unknown) => (
            <Box>
              {(selected as string[]).map((value) => (
                <Chip
                  color='secondary'
                  key={value}
                  label={dropdownOptions.find((p) => p.value === value)?.label ?? 'Unknown'}
                  size='small'
                />
              ))}
            </Box>
          )}
        />
      </Formik>
    );
    expect(selectMenu).toMatchSnapshot();
  });
});
