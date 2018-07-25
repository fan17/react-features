import React from 'react';
import PropTypes from 'prop-types';

const Image = props => (
    <div style={{ border: '1px solid purple' }}>
        <div>
            <div>
                x:
                <span>
                    {props.mouse.x}
                </span>
                y:
                <span>
                    {props.mouse.y}
                </span>
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
