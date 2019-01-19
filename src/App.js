import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import AxiosMockAdapter from './Utils/AxiosMockAdapter/AxiosMockAdapter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
          <Footer/>
      </div>
    );
  }
}

export default App;
