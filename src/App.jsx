import React from 'react'
import {
  Button, Flex, Checkbox, ColorPicker, Space,
  DatePicker, Radio, Rate, Select, Slider, Switch,
  TimePicker, Upload, Badge, Card, Calendar, Carousel, Popover, Tooltip, Alert, Progress, Result, Skeleton, Watermark
} from 'antd';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
const { RangePicker } = DatePicker
const { Ribbon } = Badge

// separate components
import CardAntd from './Antd/CardAntd';
import CollapseAntd from './Antd/CollapseAntd';
import ImageAntd from './Antd/ImageAntd';
import TourAntd from './Antd/TourAntd';

const content = (
  <div>
    <p>Content 1</p>
    <p>Content 2</p>
  </div>
)

const twoColors = { '0%': '#108ee9', '100%': '#87d068' };

const App = () => {
  return (
    <>

      {/* <Button type='primary'>Ant Design</Button>
      <Button type='dashed' danger>Ant Design</Button> */}

      {/* <Checkbox>Checkbox</Checkbox> */}


      {/* <ColorPicker size="large" showText /> */}

      {/* <DatePicker picker='day' /> */}
      {/* <RangePicker picker='year' /> */}

      {/* <DatePicker picker='time'/> */}

      {/* <Radio>Radio</Radio> */}

      {/* <Rate /> */}

      {/* <Rate allowHalf allowClear /> */}

      {/* <Select placeholder="Select">
        <option value="">15</option>
        <option value="">25</option>
        <option value="">35</option>
      </Select> */}

      {/* <Slider defaultValue={7} />
      <Slider range />
      <Slider range defaultValue={8} />
      <Slider range defaultValue={[2,45]} /> */}

      {/* <Switch />
      <Switch checkedChildren="light" unCheckedChildren="dark" />
      <Switch checkedChildren={<SunFill />} unCheckedChildren={<MoonFill />} /> */}

      {/* <TimePicker/> */}

      {/* <Upload/> // too many code but i like it */}

      {/* <Ribbon text="Badge Ribbon" color='#094293'>
        <Card title="Pushes open the window" size="small">
          and raises the spyglass.
        </Card>
      </Ribbon> */}

      {/* <Calendar fullscreen={false} />  // you have to provide more style but I like it */}

      {/* <CardAntd hoverable title="Card Title" description="Card Description" width={300}
        image="https://plus.unsplash.com/premium_photo-1683120924965-7a38795dd923?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" /> */}

      {/* <Carousel /> // not working now but I like it */}

      {/* <CollapseAntd orientation="horizontal" label="Label1" text="Text" key="1" />
      <CollapseAntd orientation="horizontal" label="Label2" text="Text" key="2" /> */}

      {/* <ImageAntd image="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" /> */}

      {/* <Popover placement='rightBottom' content={content} title="hello">
        <Button>Hi</Button>
      </Popover> */}

      {/* tables, tags, segmented, stats, tabs are same as in chakra-ui */}

      {/* <Tooltip title="title" placement='bottomRight'>
        <Button>toolTip</Button>
      </Tooltip> */}

      {/* <TourAntd/> // it does not take props......it can but it is hard so make it separate for each file */}

      {/* <Alert/> alerts are not good material and chakra alerts are better  */}

      {/* // drawer is better in chakra-ui */}

      {/* // modals are same as chakra-ui */}

      {/* // notifications are good I like them */}

      {/* // pop confirm is normal I haven't tried it */}

      {/* <Progress percent={100} strokeColor={twoColors} status='active' />
      <Progress percent={50} trailColor='#ccc' strokeColor="#353535" status='exception' />
      <Progress percent={50} trailColor='#ccc' strokeColor="#353535" status='normal' />

      <Progress type='circle' percent={20} trailColor='red' strokeColor="green"/> */}

      {/* <Result title="error" status="error" /> */}
      {/* <Result title="success" status="success"
        extra={[
          <h1>Success</h1>
        ]}
      /> */}

      {/* <Result status={500} /> */}

      {/* <Skeleton
        paragraph={{ rows: 4 }}
        avatar
        active
      /> */}

      {/* // spin is not good css loader amd material-ui is better */}

      {/* <Watermark content={['Hello', 'ant-design', "chakra-ui"]}>
        <Button type='primary' danger >I am button</Button><br />
        <Button type='primary' danger >I am button</Button><br />
        <Button type='primary' danger >I am button</Button><br />
        <Button type='primary' danger >I am button</Button><br />
        <Button type='primary' danger >I am button</Button><br />
      </Watermark> */}

    </>
  )
}

export default App