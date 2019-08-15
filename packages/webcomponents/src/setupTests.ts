import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

configure({adapter: new Adapter()});

// @ts-ignore
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

export default undefined;