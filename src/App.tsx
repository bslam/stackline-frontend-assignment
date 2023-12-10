import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Graph from './components/graph/Graph';
import Product from './components/product/Product';
import Table from './components/table/Table';
import data from './components/assets/data.json'
import { IConsumerGood } from './components/product/Product';




function App() {
  const data1: IConsumerGood[] = data;
  const consumerItem = data1[0];



  return (
     <div className="app">
      <Header />
      <div className="dashboard">
        <Product
          consumerGood={consumerItem}
        />
        <div>
          <div className='graph-container'>
            <span className='graph-title'>Retail Sales</span>
            <Graph
              inputData={data[0].sales}
            />
          </div>
          
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;
