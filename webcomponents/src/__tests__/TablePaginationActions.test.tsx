import { IconButton } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import TablePaginationActions from '../TablePaginationActions/TablePaginationActions';

let actions: ShallowWrapper;
const onChangePage = jest.fn();

describe('Component Tests', () => {
  beforeAll(() => actions = shallow(
    <TablePaginationActions rowsPerPage={10} page={0} count={42}
      onChangePage={onChangePage} />
  ));

  test('should jump to first page', () => {
    const goToFirstPageButton = actions.find(IconButton).first();

    goToFirstPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalled();
  });

  test('should jump to last page', () => {
    const goToLastPageButton = actions.find(IconButton).last();

    goToLastPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalled();
  });

  test('should jump to next page', () => {
    const goToNextPageButton = actions.find(IconButton).at(2);

    goToNextPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalled();
  });

  test('should jump to previous page', () => {
    const goToPreviousPageButton = actions.find(IconButton).at(1);

    goToPreviousPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalled();
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const tablePaginationActions = shallow(
      <TablePaginationActions
        rowsPerPage={10} page={0} count={42}
        onChangePage={onChangePage}
      />
    );
    expect(tablePaginationActions).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const tablePaginationActions = shallow(
      <TablePaginationActions
        rowsPerPage={10} page={0} count={42}
        onChangePage={onChangePage} customclasses={['snapshot-class']}
      />
    );
    expect(tablePaginationActions).toMatchSnapshot();
  });
});