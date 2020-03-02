import { toBeCalled } from '@rws-air/utils';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { UserInfo } from '../src/UserInfo';

describe('UserInfo tests', () => {
  const mockRelogin = jest.fn();

  describe('Component Testing', () => {
    let userInfo: ShallowWrapper;

    beforeAll(() => {
      userInfo = shallow(<UserInfo email='john.connor@rws.nl' reloginText='relogin' onReloginClick={mockRelogin} />);
    });

    test('should call onReloginClick when clicking button', () => {
      const button = userInfo.find('[data-qa="re-login-link"]');

      button.simulate('click');

      toBeCalled(mockRelogin, 1);
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const userInfo = shallow(
        <UserInfo email='john.connor@rws.nl' reloginText='relogin' onReloginClick={mockRelogin} />
      );
      expect(userInfo).toMatchSnapshot();
    });
  });
});
