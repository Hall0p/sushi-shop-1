import React, {useState} from 'react';
import './index.css'
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import {Outlet} from "react-router-dom";
import {FilterContext} from "../shared/context";

function App() {
  const [filter, setFilter] = useState('')

  return (
    <div className="app">
      <Header filter={filter} setFilter={setFilter}/>
      <FilterContext.Provider value={filter}>
        <Outlet/>
      </FilterContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
