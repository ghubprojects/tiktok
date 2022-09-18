import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Options.module.scss';
import Header from './Header';
import OptionItem from './OptionItem';
import Popper from '~/components/Popper';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Options({ children, list = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ type: 'option', data: list }]);
    const current = history[history.length - 1];

    const renderOptions = () => {
        return current.data.map((option, index) => {
            return (
                <OptionItem
                    key={index}
                    data={option}
                    onClick={() => {
                        if (option.children) setHistory((prev) => [...prev, option.children]);
                        else onChange(option);
                    }}
                />
            );
        });
    };

    const handleBack = () => setHistory((prev) => prev.slice(0, prev.length - 1));
    const handleResetOptions = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            placement='bottom-end'
            offset={[12, 12]}
            delay={[0, 700]}
            hideOnClick='false'
            render={(attrs) => (
                <Popper className={cx('options-popper')} tabIndex='-1'>
                    {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                    <div className={cx('options-list')}>{renderOptions()}</div>
                </Popper>
            )}
            onHidden={handleResetOptions}
        >
            {children}
        </Tippy>
    );
}

Options.propTypes = {
    children: PropTypes.node.isRequired,
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};

export default Options;
