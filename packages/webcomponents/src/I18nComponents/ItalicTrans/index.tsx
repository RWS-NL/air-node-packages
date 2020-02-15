import React, { Fragment, memo } from 'react';
import { Trans } from 'react-i18next';

export interface ItalicTransProps {
  titleKey: string;
  italicKey: string;
}

/**
 * Creates a Trans body with one part regular and one part *italic*
 * @param param Props to pass to the ItalicTrans component
 * @example
 * ```jsx
 * <ItalicTrans titleKey='sample.key.normal' italicKey='sample.key.italic'/>
 * ```
 */
export const ItalicTrans = memo(({ titleKey, italicKey }: ItalicTransProps) => (
  <Fragment>
    <Trans i18nKey={titleKey} />
    <em>
      <Trans i18nKey={italicKey} />
    </em>
  </Fragment>
));
