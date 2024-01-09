import React from 'react'
import { Collapse, Divider } from 'antd'

const CollapseAntd = (props) => {
    return (
        <>
            <Divider orientation={props.orientation}>Default Size</Divider>
            <Collapse
                items={[
                    {
                        key: props.key,
                        label: props.label,
                        children: <p>{props.text}</p>,
                    },
                ]}
            />
        </>
    )
}

export default CollapseAntd