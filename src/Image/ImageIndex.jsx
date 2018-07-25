import React from 'react';
import PropTypes from 'prop-types';

const Image = props => (
    <div style={{ border: '1px solid purple' }}>
        <div>
            <div>
                x:
                {props.mouse.x}
            </div>
            <div>
                y:
                {props.mouse.y}
            </div>
        </div>
        <img src={props.src} alt="sample" />
    </div>
);

Image.propTypes = {
    mouse: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
    src: PropTypes.string.isRequired,
};

export default Image;
