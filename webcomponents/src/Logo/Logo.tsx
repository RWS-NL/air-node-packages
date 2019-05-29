import classnames from 'classnames';
import React, { FC, Fragment, SVGProps } from 'react';
import css from './Logo.scss';
import { ReactComponent as LogoSVG } from './logo.svg'

const Logo: FC<SVGProps<any>> = props => {
    return (
        <Fragment>
            <LogoSVG className={classnames(css.logo)} {...props} />
        </Fragment>
    );
};

export default Logo;