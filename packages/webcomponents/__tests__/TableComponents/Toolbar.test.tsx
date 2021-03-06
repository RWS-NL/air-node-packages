import { Toolbar } from '@TableComponents/Toolbar';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

const mockOnSearchInput = jest.fn();
const mockOnSearchClear = jest.fn();

describe('Component Tests', () => {
  let tableToolbar: ShallowWrapper;

  beforeAll(() => {
    tableToolbar = shallow(
      <Toolbar
        searchplaceholderlabel='placeholder'
        onsearchinput={mockOnSearchInput}
        onsearchclear={mockOnSearchClear}
      />
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should trigger change when searching', () => {
    const inputBox = tableToolbar
      .find('[data-qa="table-search-bar"]')
      .shallow()
      .dive()
      .find('[data-qa="table-search-bar"]');

    const expectedCalledWith = { target: { value: 'DarthVader' } };
    const expectedResult = mockOnSearchInput(expectedCalledWith);

    expect(expectedResult).toBeUndefined();

    inputBox.simulate('change', expectedCalledWith);
    expect(mockOnSearchInput).toHaveBeenCalledWith({ target: { value: 'DarthVader' } });
    expect(mockOnSearchInput).toHaveBeenCalledWith(expectedCalledWith);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const tableToolbar = shallow(
      <Toolbar
        searchplaceholderlabel='placeholder'
        onsearchinput={mockOnSearchInput}
        onsearchclear={mockOnSearchClear}
      />
    );
    expect(tableToolbar).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const tableToolbar = shallow(
      <Toolbar
        searchplaceholderlabel='placeholder'
        onsearchinput={mockOnSearchInput}
        onsearchclear={mockOnSearchClear}
        searchdebounce={50}
        data-qa='snapshot-qa'
        customclasses={['snapshot-class']}
        customSearchbarClasses={['snapshot-class']}
      />
    );
    expect(tableToolbar).toMatchSnapshot();
  });
});
