import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import Elements from './elements';
import '../scss/elementsList.css';
import '../scss/elements.css';
import '../scss/swiper.css';

class ElementsList extends Component {
	constructor(props) {
    super(props);
    this.state = {
			col: 3,
			line: 2
		};
  }

	getElementWidth() {
		return 100 / this.state.col
	}

	getElementHeight() {
		return 100 / this.state.line
	}

  render() {
		
		const params = {
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},
			navigation: {
				nextEl: '.button-forward',
				prevEl: '.button-backward',
			},
			slidesPerView : 3,
			slidesPerColumn : 2,
			speed : 1000,
			slidesPerGroup : 3,
		}
		
    return (
			<Swiper {...params}>
				{this.props.data.blocs.map((blocs, i) => {
					 return (<Elements width={this.getElementWidth()} height={this.getElementHeight()} key={i} data={blocs}/>)
				})}
				</Swiper>
    );
  }
}

export default ElementsList;
