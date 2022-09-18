import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '../Image';
import { VerifyBadgeIcon } from '../Icons';

const cx = classNames.bind(styles);

function AccountItem({ data, className }) {
    const classes = cx('wrapper', className);
    return (
        <Link to={`/@${data.nickname}`} className={classes}>
            <Image src={data.avatar} className={cx('avatar')} alt='avatar' />
            <div className={cx('info')}>
                <h4 className={cx('user-name')}>
                    {data.nickname}
                    {data.tick && (
                        <span className={cx('verify-badge')}>
                            <VerifyBadgeIcon />
                        </span>
                    )}
                </h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default AccountItem;
