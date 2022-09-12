import React from 'react';
import './index.scss'
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
