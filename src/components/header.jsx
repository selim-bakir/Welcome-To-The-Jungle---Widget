import React, { Component } from 'react';
import logo from '../imgs/logo-filled.png';
import '../scss/header.css';

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
			col: 2,
			line: 2,
		};
		
  }

  render() {
    return (
			<header className="header">
				<div className="logo-container">
					<img src={logo} className="logo" alt="logo" />
					<h1 className="title">Welcome to the Jungle</h1>
				</div>
			</header>
    );
  }
}

export default Header;
