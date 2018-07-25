import React from 'react';
import Mouse from './Mouse';
import Image from '../Image/ImageIndex';

const RenderPropsIndex = () => (
    <div>
        <header>
            <h1>Reneder props</h1>
        </header>
        <div>
            <h3>Move the mouse around this areas!</h3>
            <Mouse
                render={mouse => <Image mouse={mouse} src="https://picsum.photos/200?random" />}
            />
            <Mouse
                render={mouse => <Image mouse={mouse} src="https://picsum.photos/100?random" />}
            />
        </div>
    </div>
);

export default RenderPropsIndex;
