import AcUnitIcon from '@material-ui/icons/AcUnit';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const searchBar = shallow(
      <SearchBar
        cancelOnEscape closeIcon={<AcUnitIcon />} searchIcon={<AddAPhotoIcon />}
        paperElevation={3} disabled placeholder='Snaptest' data-qa='snap-qa'
      />
    );
    expect(searchBar).toMatchSnapshot();
  });
});