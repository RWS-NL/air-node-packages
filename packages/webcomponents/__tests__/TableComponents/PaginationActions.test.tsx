import { PaginationActions } from '@TableComponents/PaginationActions';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import toJson from "enzyme-to-json";

const onChangePage = jest.fn();

describe('Component Tests', () => {
  let tablePaginationActions: ShallowWrapper;

  beforeAll(() => {
    tablePaginationActions = shallow(
      <PaginationActions rowsPerPage={10} page={0} count={42} onChangePage={onChangePage} />
    );
  });

  test('should jump to first page', () => {
    const goToFirstPageButton = tablePaginationActions.find('[data-qa="first-page-button"]');

    goToFirstPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalledWith(undefined, 0);
  });

  test('should jump to last page', () => {
    const goToLastPageButton = tablePaginationActions.find('[data-qa="last-page-button"]');

    goToLastPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalledWith(undefined, 4);
  });

  test('should jump to next page', () => {
    const goToNextPageButton = tablePaginationActions.find('[data-qa="next-page-button"]');

    goToNextPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalledWith(undefined, 1);
  });

  test('should jump to previous page', () => {
    const goToPreviousPageButton = tablePaginationActions.find('[data-qa="previous-page-button"]');

    goToPreviousPageButton.simulate('click');
    expect(onChangePage).toHaveBeenCalledWith(undefined, -1);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const tablePaginationActions = shallow(
      <PaginationActions rowsPerPage={10} page={0} count={42} onChangePage={onChangePage} />
    );
    expect(toJson(tablePaginationActions)).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const tablePaginationActions = shallow(
      <PaginationActions
        rowsPerPage={10}
        page={0}
        count={42}
        onChangePage={onChangePage}
        customclasses={['snapshot-class']}
      />
    );
    expect(toJson(tablePaginationActions)).toMatchSnapshot();
  });
});
