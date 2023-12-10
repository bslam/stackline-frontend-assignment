import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Page B',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Page C',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'Page D',
    uv: 27,
    pv: 39,
    amt: 20,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
        <LineChart
          width={50}
          height={30}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis dataKey="name" />
          <Tooltip />

          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    );
  }
}
