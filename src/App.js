import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ElementsList from './components/elementsList';
import Elements from './components/elements';
import data from './data.json';
import './scss/reset.css'; 
import './scss/app.css'; 
import './scss/elementsList.css';
import './scss/elements.css'; 




class App extends Component {

  render() {
    return (

      // <Router>
        <div>
          <div className="App">
            {/* <Route path="/col=:column&row=:row" render={props => ( */}
              <div className="App-Wrapper">
              <Header/>
              <ElementsList data={data} />
              <Footer/>
            </div>
            {/* ) }/> */}
          </div>
        </div>
      // </Router>
    );
  }
}

export default App;
