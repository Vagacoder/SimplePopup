import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

class Popup extends Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<div className="popup">
					<div className="popup_content">
						<h1>{this.props.infoPassed}</h1>
						<p>click button to close the popup window.</p>
						<button onClick={this.props.closePopup}>Close</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = { showPopup: false };
		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}
	render() {
		return (
			<div className="app">
				<h1>Testing Popup Window</h1>
				<div className="content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Ut lacinia leo sit amet purus consectetur, ac auctor eros condimentum.
						Nunc a tempor augue. Quisque arcu nisl, finibus at mollis vitae,
						efficitur at mi. Nullam at erat commodo neque dictum aliquet.
						Ut eget malesuada leo. Morbi dui velit, interdum eget scelerisque sit amet,
						pellentesque a eros. Cras gravida interdum mattis.
						Duis condimentum gravida orci, nec tempor tellus lobortis vel.
						Fusce enim metus, iaculis non aliquam at, semper at lorem.
						Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
						cubilia Curae; Aenean tempor odio nec scelerisque ultrices.
						Proin et erat orci.
					</p>
				</div>
				<button onClick={this.togglePopup}>Click to Show Popup</button>
				{this.state.showPopup ?
					<Popup
						infoPassed="This is a Popup Window"
						closePopup={this.togglePopup}
					/> : null
				}
			</div>
		);
	}
};

export default App;
