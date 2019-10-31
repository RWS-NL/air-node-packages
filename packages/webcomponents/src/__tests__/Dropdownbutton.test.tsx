import Dropdownbutton from '../Dropdownbutton/Dropdownbutton';
import { shallow, ShallowWrapper } from 'enzyme';
import CloudDownload from '@material-ui/icons/CloudDownload';
import React from 'react';

const mockButtonClick = jest.fn();

describe('Component Tests', () => {
  let dropdownButton: ShallowWrapper;

  beforeAll(() => {
    dropdownButton = shallow(
      <Dropdownbutton
        ButtonIcon={<CloudDownload/>}
        onClick={mockButtonClick}
        options={[ 'one', 'two' ]}
        menuItemDataQa='menu-item'
        iconButtonDataQa='icon-button'
        dropdownButtonDataQa='dropdown-button'
      />
    );
  });

  test('button function called onClick', () => {
    const iconButton = dropdownButton.find('[data-qa="icon-button"]');

    iconButton.simulate('click');

    expect(mockButtonClick).toHaveBeenCalledWith();
    expect(mockButtonClick).toHaveBeenCalledTimes(1);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const dropdownButton = shallow(<Dropdownbutton ButtonIcon={<CloudDownload/>} onClick={mockButtonClick} options={[ 'one', 'two', 'three' ]} />);
    expect(dropdownButton).toMatchSnapshot();
  });

  test('Optional Props', () => {
    const dropdownButton = shallow(
      <Dropdownbutton
        ButtonIcon={<CloudDownload/>}
        onClick={mockButtonClick}
        options={[ 'one', 'two', 'three' ]}
        disabledOptionIds={[ 2 ]}
        color='secondary'
        variant='outlined'
      />
    );
    expect(dropdownButton).toMatchSnapshot();
  });
});