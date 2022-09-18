import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    round,
    primary,
    text,
    outline,
    disabled,
    to,
    href,
    className,
    onClick,
    children,
    ...restProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...restProps,
    };

    //Remove event handlers for disabled button
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', { round, primary, text, outline, disabled }, className);
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    round: PropTypes.bool,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;
