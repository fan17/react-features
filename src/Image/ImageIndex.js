import React, { Component } from 'react';

class Image extends Component {
    render() {
      return (
        <div style={{border: "1px solid purple"}}>
            <div>
                x: {this.props.mouse.x}
                y: {this.props.mouse.y}
            </div>
            <img src={this.props.src} alt="sample" />
        </div>
      );
    }
  }

  export default Image;