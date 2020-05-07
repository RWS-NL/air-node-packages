import { routeQueryParser, Router } from '@src/Router';
import { shallow } from 'enzyme';
import React, { FC } from 'react';
import { Route } from 'react-router-dom';

const Contact: FC = () => <div>CONTACT</div>;

describe('Router Component', () => {
  describe('Component Testing', () => {
    test('GIVEN 2 otherComponents THEN renders 4 routes', () => {
      const router = shallow(
        <Router
          defaultComponent={{ path: '/', component: () => <div>TEST</div> }}
          data-qa='TestRouter'
          otherComponents={[
            { path: '/app', component: () => <div>APP</div>, 'data-qa': 'AppRoute' },
            { path: '/contact', component: () => <Contact />, 'data-qa': 'ContactRoute' }
          ]}
        />
      );

      const routeComponents = router.find(Route);

      expect(routeComponents).toHaveLength(4);
      expect(routeComponents.at(0).prop('path')).toBe('/');
      expect(routeComponents.at(1).prop('path')).toBe('/app');
      expect(routeComponents.at(2).prop('path')).toBe('/contact');
      expect(routeComponents.at(3).prop('path')).toBeUndefined();
    });

    test('GIVEN no otherComponents THEN renders 2 routes', () => {
      const router = shallow(
        <Router defaultComponent={{ path: '/', component: () => <div>TEST</div> }} data-qa='TestRouter' />
      );

      const routeComponents = router.find(Route);

      expect(routeComponents).toHaveLength(2);
      expect(routeComponents.at(0).prop('path')).toBe('/');
      expect(routeComponents.at(1).prop('path')).toBeUndefined();
    });

    test('GIVEN 0 otherComponents THEN renders 2 routes', () => {
      const router = shallow(
        <Router
          defaultComponent={{ path: '/', component: () => <div>TEST</div> }}
          otherComponents={[]}
          data-qa='TestRouter'
        />
      );

      const routeComponents = router.find(Route);

      expect(routeComponents).toHaveLength(2);
      expect(routeComponents.at(0).prop('path')).toBe('/');
      expect(routeComponents.at(1).prop('path')).toBeUndefined();
    });
  });

  describe('routeQueryParser Testing', () => {
    test('GIVEN object with keys THEN stringifies', () => {
      const obj = {
        accessToken: '1635-4654-69789a4987-a6sd41656c799a645',
        redirectUri: '/'
      };

      expect(routeQueryParser(obj)).toBe('?accessToken=1635-4654-69789a4987-a6sd41656c799a645&redirectUri=%2F');
    });

    test('GIVEN empty object THEN returns empty string', () => {
      expect(routeQueryParser({})).toStrictEqual('');
    });
  });

  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const router = shallow(<Router defaultComponent={{ path: '/', component: () => <div>TEST</div> }} />);
      expect(router).toMatchSnapshot();
    });

    test('With OtherComponents', () => {
      const router = shallow(
        <Router
          defaultComponent={{ path: '/', component: () => <div>TEST</div> }}
          data-qa='TestRouter'
          otherComponents={[
            { path: '/app', component: () => <div>APP</div>, 'data-qa': 'AppRoute' },
            { path: '/contact', component: () => <Contact />, 'data-qa': 'ContactRoute' }
          ]}
        />
      );
      expect(router).toMatchSnapshot();
    });

    test('With Empty OtherComponents', () => {
      const router = shallow(
        <Router defaultComponent={{ path: '/', component: () => <div>TEST</div> }} otherComponents={[]} />
      );
      expect(router).toMatchSnapshot();
    });
  });
});
