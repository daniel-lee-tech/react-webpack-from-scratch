import React, {useState} from 'react';
import LionMermaid from '../images/lion-mermaid.svg';

export function ImagePresenter() {
    const [showImage, setShowImage] = useState(false);

    return (
        <div>
            <button onClick={() => setShowImage(prevState => !prevState)}>
                {showImage ? 'Show': 'Hide'}
            </button>
            <br />
            {showImage && <img alt={"lion mermaid image"} height={100} width={100} src={LionMermaid} />}
        </div>
    )
}
