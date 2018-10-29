import React, { Component } from 'react';
import Elements from './elements'
import '../scss/elements.css';

class Video extends Component {

	render() {
		return (
			<div className="elements-video-container" data-id={this.props.key}>
				<div className="elements-video-bg" style={{ backgroundImage: 'url(' + this.props.url + ')'}}></div>
				<div className="elements-video-caption">
					<div className="play">
						<i className="fa fa-play"/>
					</div>
					<div className="elements-video-headline">
						<span className="headline-title">{this.props.title}<br/>{this.props.subtitle}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Video;
