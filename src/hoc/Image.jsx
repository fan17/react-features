import React from 'react';
import RawImage from 'Image/ImageIndex';
import withMouse from './withMouse';

const Image = props => <RawImage {...props} />;

export default withMouse(Image);
