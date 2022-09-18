import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import config from '~/config/';
import * as searchService from '~/services/searchService';
import { useDebounce } from '~/hooks';
import Popper from '~/components/Popper';
import AccountItem from '~/components/AccountItem/';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResults(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };

    return (
        <div>
            <HeadlessTippy
                visible={showResults && searchResults.length > 0}
                interactive
                placement='bottom'
                offset={[0, 8]}
                render={(attrs) => (
                    <Popper className={cx('sug-popper')} tabIndex='-1'>
                        <div className={cx('content-sug-item')}>Ket qua 1</div>
                        <div className={cx('content-sug-item')}>Ket qua 2</div>
                        <div className={cx('content-sug-item')}>Ket qua 3</div>
                        <div className={cx('sug-account-title')}>Accounts</div>
                        {searchResults.map((account) => (
                            <AccountItem
                                key={account.id}
                                data={account}
                                className={cx('user-sug-item')}
                            />
                        ))}
                        <Link to={config.routes.search} className={cx('more-results')}>
                            View all results for "{searchValue}"
                        </Link>
                    </Popper>
                )}
                onClickOutside={() => setShowResults(false)}
            >
                <div className={cx('search-bar')}>
                    <input
                        ref={inputRef}
                        className={searchValue ? undefined : cx('no-input')}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        onChange={handleChange}
                        onFocus={() => setShowResults(true)}
                    />

                    {searchValue && !loading && (
                        <span className={cx('clear-input')} onClick={handleClear}>
                            <ClearIcon />
                        </span>
                    )}

                    {loading && (
                        <span className={cx('loading')}>
                            <LoadingIcon />
                        </span>
                    )}

                    <span className={cx('splitter')}></span>
                    <span className={cx('search-btn')}>
                        <SearchIcon />
                    </span>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
