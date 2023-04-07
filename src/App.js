import logo from './logo.svg';
import './App.css';
import  React from "react";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap5/src/css/bootstrap.min.css"
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contect from "./Contect";
import {Route, Switch,Redirect} from "react-router-dom";
import Navbar from "./NavBar";
import Footer from './Footer';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
       
      <Navbar/>  

      <Switch>
        <Route  exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contect} />
         <Redirect to ="/"/>
      </Switch>
      <Footer/>
    </>
  );
};



export default App;
 
