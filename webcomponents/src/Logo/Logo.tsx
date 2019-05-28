import classnames from 'classnames';
import React, { FC, Fragment } from 'react';
import css from './Logo.scss';
import { ReactComponent as LogoSVG } from './logo.svg'

const Logo: FC = () => {
    return (
        <Fragment>
            <LogoSVG className={classnames(css.logo)} />
        </Fragment>
    );
};

export default Logo;