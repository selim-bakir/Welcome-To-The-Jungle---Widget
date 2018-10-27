import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './scss/reset.css'; 




class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="App-Wrapper">
            <Header/>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
