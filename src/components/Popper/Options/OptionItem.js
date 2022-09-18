import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Options.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function OptionItem({ data, onClick }) {
    const classes = cx('option-item', { 'log-out': data.logout });
    return (
        <Button to={data.to} className={classes} onClick={onClick}>
            <span className={cx('option-icon')}>{data.icon}</span>
            {data.title}
        </Button>
    );
}

OptionItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default OptionItem;
