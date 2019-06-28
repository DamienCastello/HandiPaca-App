import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.scss';
import Routeur from './components/Routeur';
import MenuLeft from './components/contents/Menu';

function App() {
  return (

    <div className="layout-wrapper">
    <div className="layout-topbar">
    </div>
    <div className="layout-sidebar">
      <MenuLeft />
    </div>
    <div className="layout-content">
    <Routeur />

     </div>
  </div>





  );
}

export default App;
