import React from 'react';
import RollList from "../pages/RollList";
import './index.scss'
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

function App() {


  return (
    <div
      className="app"
    >
      <Header/>
      <RollList/>
      <Footer/>
    </div>
  );
}

export default App;
