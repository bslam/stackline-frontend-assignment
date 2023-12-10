import React from 'react';
import './Graph.css';
import { LineChart, Line, XAxis } from 'recharts';



export interface ISale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface IGraphProps {
  inputData?: ISale[];
}


export const Graph = (chartData: IGraphProps) => {

  const { inputData } = chartData;
  console.log(inputData);

  
  return (


        <LineChart width={1500} height={400} data={inputData} >
          <XAxis dataKey="weekEnding" />
          <Line type="monotone" strokeWidth={2} dataKey="retailSales" stroke="#40a5f6" />
          <Line type="monotone" strokeWidth={2} dataKey="wholesaleSales" stroke="#808080" />
        </LineChart>

  );
};

export default Graph;