import React from 'react'
import {useState} from 'react';
import Aside from './components/Aside';
import Main from './components/Main';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <Aside />
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12">
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App
