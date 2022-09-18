import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <div className={cx('content')}>
                <h2>Home page</h2>
            </div>
            <Button round className={cx('get-app')}>
                Get app
            </Button>
        </div>
    );
}

export default Home;
