import React, { Component } from 'react';
import './Style/App.css';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Home from '../Components/Home';
import SearchEngine from './SearchEngine';
import About from '../Components/About';
import {database} from '../Components/database';


class App extends Component {
  constructor() {
    super()
    this.state = {
      database: database,
      searchfield: ''
    }
  }

  render () {
    return (
      <div>
        <HelmetProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/searchrobots" element={<SearchEngine />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </HelmetProvider>
      </div>
    );
}
}

export default App;
