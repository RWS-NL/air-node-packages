import React, { FC, memo, Fragment } from 'react';
import { Trans } from 'react-i18next';

export interface ItalicTransProps {
  titleKey: string;
  italicKey: string;
}

export const ItalicTrans: FC<ItalicTransProps> = ({ titleKey, italicKey }) => (
  <Fragment>
    <Trans i18nKey={titleKey} />
    <em><Trans i18nKey={italicKey} /></em>
  </Fragment>
);

export default memo(ItalicTrans);