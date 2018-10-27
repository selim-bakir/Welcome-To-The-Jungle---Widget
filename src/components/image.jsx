import React, { Component } from 'react';
import Elements from './elements'
import '../scss/elements.css';

class Image extends Component {
	render() {
		return (
			<div className="elements-image-container">
				<div className="image" style={{ backgroundImage: 'url(' + this.props.url + ')'}}></div>
			</div>
		)
	}
}

export default Image;