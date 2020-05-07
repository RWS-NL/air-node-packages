import { LinkTab } from '@src/LinkTab';
import { shallow } from 'enzyme';
import React from 'react';

describe('LinkTab Tests', function () {
  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const linkTab = shallow(<LinkTab to='/root' label='sample' />);
      expect(linkTab).toMatchSnapshot();
    });

    test('External Tab', () => {
      const linkTab = shallow(<LinkTab to='https://cgi.com' label='sample' external />);
      expect(linkTab).toMatchSnapshot();
    });

    test('External Tab with Open In New Tab', () => {
      const linkTab = shallow(<LinkTab to='https://rijkswaterstaat.nl' label='sample' external openInNewTab />);
      expect(linkTab).toMatchSnapshot();
    });
  });
});
