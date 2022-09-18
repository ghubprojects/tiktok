import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('option')}>
                    <h3>Option</h3>
                </div>
                <div className={cx('suggested-account')}>
                    <h3>Suggested Account</h3>
                </div>
                <div className={cx('following-account')}>
                    <h3>Following Account</h3>
                </div>
                <div className={cx('discover')}>
                    <h3>Discover</h3>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
