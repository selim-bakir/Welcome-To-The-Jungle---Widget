import React, { Component } from 'react';
import Image from './image';
import Video from './video';
import Quote from './quote';
import '../scss/elements.css';

class Elements extends Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className={'swiper-slide elements elements-' + this.props.data.type} style={{width: this.props.width + '%', height: this.props.height + '%' }} data-type={this.props.data.type}>
				{
					this.props.data.type === 'image' ? (<Image url={this.props.data.url} />) :
					this.props.data.type === 'video' ? (<Video url={this.props.data.url} title={this.props.data.title} subtitle={this.props.data.subtitle} />) :
					(<Quote text={this.props.data.text} />)
				}
      </div>
    );
  }
}

export default Elements;
