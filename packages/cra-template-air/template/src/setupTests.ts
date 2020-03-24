import 'jest-extended';
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import { expectSaga } from 'redux-saga-test-plan';

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  };
});

configure({ adapter: new Adapter() });
expectSaga.DEFAULT_TIMEOUT = 500;

// @ts-ignore => Type definitions are off
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

export default undefined;
