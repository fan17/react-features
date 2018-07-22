import React, { Component } from 'react';
import RawImage from './../Image/ImageIndex';
import { withMouse } from './withMouse';

class Image extends Component {
  render() {
    return (
      <RawImage {...this.props} />
    );
  }
}

export default withMouse(Image);