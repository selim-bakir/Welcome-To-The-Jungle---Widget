import React, { Component } from 'react';
import Elements from './elements'
import '../scss/elements.css';

class Image extends Component {
	render() {
		return (
			<div className="elements-image-container">
				<div className="image" style={{ backgroundImage: 'url(' + this.props.url + ')'}}></div>
				<div className="zoom">
				<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBkPSJNNTUuMTQ2LDUxLjg4N0w0MS41ODgsMzcuNzg2YzMuNDg2LTQuMTQ0LDUuMzk2LTkuMzU4LDUuMzk2LTE0Ljc4NmMwLTEyLjY4Mi0xMC4zMTgtMjMtMjMtMjNzLTIzLDEwLjMxOC0yMywyMyAgczEwLjMxOCwyMywyMywyM2M0Ljc2MSwwLDkuMjk4LTEuNDM2LDEzLjE3Ny00LjE2MmwxMy42NjEsMTQuMjA4YzAuNTcxLDAuNTkzLDEuMzM5LDAuOTIsMi4xNjIsMC45MiAgYzAuNzc5LDAsMS41MTgtMC4yOTcsMi4wNzktMC44MzdDNTYuMjU1LDU0Ljk4Miw1Ni4yOTMsNTMuMDgsNTUuMTQ2LDUxLjg4N3ogTTIzLjk4NCw2YzkuMzc0LDAsMTcsNy42MjYsMTcsMTdzLTcuNjI2LDE3LTE3LDE3ICBzLTE3LTcuNjI2LTE3LTE3UzE0LjYxLDYsMjMuOTg0LDZ6IiBmaWxsPSIjRkZGRkZGIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
				</div>
			</div>
		)
	}
}

export default Image;