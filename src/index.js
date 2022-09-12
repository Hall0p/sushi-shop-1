import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RollsList from "./pages/RollsList";
import SetsList from "./pages/SetsList";
import Warning from "./pages/Warning";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<SetsList/>}/>
        <Route path="rolls" element={<RollsList/>}/>
        <Route path="*" element={<Warning/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);