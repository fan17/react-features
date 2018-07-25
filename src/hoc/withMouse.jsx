import React from 'react';

export default function withMouse(Component) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleMouseMove = this.handleMouseMove.bind(this);
            this.state = { x: 0, y: 0 };
        }

        handleMouseMove(event) {
            this.setState({
                x: event.clientX,
                y: event.clientY,
            });
        }

        render() {
            return (
                <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                    <Component {...this.props} mouse={this.state} />
                </div>
            );
        }
    };
}
