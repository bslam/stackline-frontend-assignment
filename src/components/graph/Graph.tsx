import React from 'react';
import './Graph.css';
import { LineChart, Line, XAxis } from 'recharts';
import { IWeeklySales } from '../../service/api';




interface IGraphProps {
  inputData?: IWeeklySales[];
}


export const Graph = (chartData: IGraphProps) => {

  const { inputData } = chartData;

  
  return (


        <LineChart width={1500} height={400} data={inputData} >
          <XAxis dataKey="weekEnding" />
          <Line type="monotone" strokeWidth={2} dataKey="retailSales" stroke="#40a5f6" />
          <Line type="monotone" strokeWidth={2} dataKey="wholesaleSales" stroke="#808080" />
        </LineChart>

  );
};

export default Graph;