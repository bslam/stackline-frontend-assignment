import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Graph from './components/graph/Graph';
import Product from './components/product/Product';
import Table from './components/table/Table';
import data from './components/assets/data.json'
import { IConsumerGood } from './components/product/Product';
import SortableTable from './components/table/TestTable';
import tableData from './components/table/sampleData.json';




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
        <div className="information-container">
          <div className='graph-container'>
            <span className='graph-title'>Retail Sales</span>
            <Graph
              inputData={data[0].sales}
            />
          </div>
           <div className='table-container'>
            <Table
              data={data[0].sales}
            />
           </div>
          
          
          {/*
          <SortableTable data={tableData}/> 
          */}
        </div>
      </div>
    </div>
  );
}

export default App;
