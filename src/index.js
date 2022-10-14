import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RollsList from "./pages/RollsList";
import SetsList from "./pages/SetsList";
import Warning from "./pages/Warning";
import {Provider} from "react-redux";
import store from "./shared/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<SetsList/>}/>
          <Route path="sets" element={<SetsList/>}/>
          <Route path="rolls" element={<RollsList/>}/>
          <Route path="*" element={<Warning/>}/>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);