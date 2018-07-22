import React, { Component } from 'react';
import Image from './Image';

class HocIndex extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hoc</h1>
        </header>
        <div>
          <h3>Move the mouse around this areas!</h3>
            <div>
              <Image src="https://picsum.photos/200?random" />
              <Image src="https://picsum.photos/100?random" />
            </div>
        </div>
      </div>
    );
  }
}

export default HocIndex;
