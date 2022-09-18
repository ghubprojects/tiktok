import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Options.module.scss';
import { BackIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <span className={cx('back-btn')} onClick={onBack}>
                <BackIcon />
            </span>
            <p className={cx('header-title')}>{title}</p>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
