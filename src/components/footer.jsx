import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
import '../scss/footer.css';

class Footer extends Component {
  render() {
    return (
			<footer className="footer">
				<img src={logo} />
			</footer>
    );
  }
}

export default Footer;
