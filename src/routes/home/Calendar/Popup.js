import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Popup extends Component {
	constructor() {
		super();
		this.state = {
			showPopup: false
		};
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}

	render() {
		<div>
			
		</div>
	}
}