import { SearchBar } from '@TableComponents/SearchBar';
import { shallow } from 'enzyme';
import React from 'react';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const searchBar = shallow(
      <SearchBar
        cancelOnEscape
        disabled
        paperElevation={3}
        placeholder='Snaptest'
        data-qa='snap-qa'
        onCancelSearch={jest.fn()}
        onChange={jest.fn()}
        onBlur={jest.fn()}
        onFocus={jest.fn()}
        onKeyUp={jest.fn()}
        onRequestSearch={jest.fn()}
      />
    );
    expect(searchBar).toMatchSnapshot();
  });
});
