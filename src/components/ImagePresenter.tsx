import React, {useState} from 'react';
import LionMermaid from '../images/lion-mermaid.svg';

type Props = {
    defaultShow: boolean;
}

export function ImagePresenter(props: Props) {
    const { defaultShow } = props;
    const [showImage, setShowImage] = useState(defaultShow);

    return (
        <div>
            <button onClick={() => setShowImage(prevState => !prevState)}>
                {showImage ? 'Hide': 'Show'}
            </button>
            <br />
            {showImage && <img alt={"lion mermaid image"} height={100} width={100} src={LionMermaid} />}
        </div>
    )
}
