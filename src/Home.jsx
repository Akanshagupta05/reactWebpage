import React from "react";
import Commom from "./Common";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
 
const Home = () => {
    return (
      <>
        <Commom
        name="Grow your Knowledge with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      </>
    );
  };
  
  export default Home;