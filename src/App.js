import logo from './logo.svg';
// import './App.css';
// import './car.css';
import React from 'react';
import Try from './Component.js/Try';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component.js/NavBar';
import Tab from './Component.js/Tab';
import { Card } from '@mui/material';
import CardA from './Component.js/CardA';
import {Button, Tabs, Navbar, NavbarBrand, NavbarToggle,Collapse, Nav, } from 'react-bootstrap';
import Layout from './Component.js/Layout';

import CarsouleA from './Component.js/CarsouleA';

import Profile from './Component.js/Profile';
import Search from './Component.js/Search';
import { height } from '@mui/system';

function App() {
  return (
    
    <React.Fragment>
     {/* <img src={require('./Images/php.jpg').default} height={200} width={200} />  */}
{/* 
      <Search></Search> */}
   <NavBar></NavBar>
   <CarsouleA width="100px" height=" 100px"></CarsouleA>
  
   <Tab></Tab>


 </React.Fragment>
  );
}

export default App;
