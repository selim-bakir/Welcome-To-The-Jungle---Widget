import React, { Component } from 'react';
import Elements from './elements'
import '../scss/elements.css';

class Quote extends Component {
	render() {
		return (
			<div className="elements-quote-caption">
				<i className="fa fa-quote-left fa-3x"/>
				<h2>{this.props.text}</h2>
			</div>
		)
	}
}

export default Quote;
