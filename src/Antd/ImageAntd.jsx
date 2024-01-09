import React from 'react';
import { Image } from 'antd';
const ImageAntd = (props) => (
    <Image.PreviewGroup
        preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
    >
        <Image width={200} src={props.image} />
    </Image.PreviewGroup>
);
export default ImageAntd;