import React, { Component } from 'react';
import Elements from './elements';
import '../scss/elementsList.css';
import '../scss/elements.css';

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
    return (
      <div className="elementsList">
				{this.props.data.blocs.map((blocs, i) => {
					 return (<Elements width={this.getElementWidth()} height={this.getElementHeight()} key={i} data={blocs}/>)
				})}
      </div>
    );
  }
}

export default ElementsList;
