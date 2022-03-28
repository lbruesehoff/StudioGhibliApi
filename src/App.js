import './App.css';
import React, { Component } from 'react';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart from './components/BarChart';
import TableApi from './components/Table';
import ImgGrid from './components/ImgGrid';
import Banner from './components/Banner';
import Icons from './components/icons';




function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Icons />
      <BarChart />
      <TableApi />
      <ImgGrid />
    </div>
  );
}

export default App;
