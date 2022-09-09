import React from 'react';
import RollsList from "../pages/RollsList";
import './index.scss'
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

function App() {


  return (
    <div
      className="app"
    >
      <Header/>
      <RollsList/>
      <Footer/>
    </div>
  );
}

export default App;
