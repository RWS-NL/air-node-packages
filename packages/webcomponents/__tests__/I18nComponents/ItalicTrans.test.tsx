import { ItalicTrans, ItalicTransProps } from '@I18nComponents/ItalicTrans';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Trans } from 'react-i18next';

describe('Component Testing', () => {
  let italicTrans: ShallowWrapper<ItalicTransProps>;

  beforeAll(() => {
    italicTrans = shallow(<ItalicTrans titleKey='test' italicKey='test' />);
  });

  test('GIVEN base configuration THEN should have two <Trans> components', () => {
    expect(italicTrans.find('em')).toHaveLength(1);
    expect(italicTrans.find(Trans)).toHaveLength(2);
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    const italicTrans = shallow(<ItalicTrans titleKey='test' italicKey='test' />);
    expect(italicTrans).toMatchSnapshot();
  });
});
