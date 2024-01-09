import React from 'react'
import { Card } from 'antd'
const { Meta } = Card


const CardAntd = (props) => {
    return (
        <Card
            hoverable={props.hoverable}
            style={{
                width: props.width,
            }}
            cover={<img alt="image" src={props.image} />}
        >
            <Meta title={props.title} description={props.description} />
        </Card>
    )
}

export default CardAntd