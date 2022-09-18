import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import images from '../../assets/images';

const Image = forwardRef(({ src, alt, className, ...restProps }, ref) => {
    return (
        <img
            ref={ref}
            src={src}
            className={className}
            alt={alt}
            {...restProps}
            onError={(e) => (e.target.src = images.errorAvatar)}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
