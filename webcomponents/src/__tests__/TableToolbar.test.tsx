import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import TableToolbar from '../TableToolbar/TableToolbar';

let tableToolbar: ShallowWrapper;
const mockOnSearchInput = jest.fn();
const mockOnSearchClear = jest.fn();

beforeAll(() => tableToolbar = shallow(
  <TableToolbar
    searchplaceholderlabel='placeholder'
    onsearchinput={mockOnSearchInput} onsearchclear={mockOnSearchClear}
  />
));

test('should render without crashing', () => {
  expect(tableToolbar).toBeTruthy();
});

test('should trigger change when searching', () => {
  const inputBox = tableToolbar
    .find('[data-qa="table-search-bar"]')
    .dive().dive()
    .find('[data-qa="table-search-bar"]');

  const expectedCalledWith = { target: { value: 'DarthVader' } };
  const expectedResult = mockOnSearchInput(expectedCalledWith);

  expect(expectedResult).toBeUndefined();

  inputBox.simulate('change', expectedCalledWith);
  expect(mockOnSearchInput).toHaveBeenCalled();
  expect(mockOnSearchInput).toHaveBeenCalledWith(expectedCalledWith);
});

test('should trigger cancel when clicking X', () => {
  const cancelButton = tableToolbar
    .find('[data-qa="table-search-bar"]')
    .dive().dive()
    .find('WithStyles(ForwardRef(IconButton))')
    .last();

  cancelButton.simulate('click');
  expect(mockOnSearchClear).toHaveBeenCalled();
});

