import React, { Component } from 'react';
import './App.css';

class Popup extends Component {
	render() {
		return (
			<div className='popup'>
				<div className='popup_content'>
					<h1>{this.props.infoPassed}</h1>
					<button onClick={this.props.closePopup}>Close</button>
				</div>
			</div>
		);
	}
}

class App extends React.Component {
	constructor() {
		super();
		this.state = {showPopup: false};
		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}
	render() {
		return (
			<div className='app'>
				<h1>Testing Popup Window</h1>
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
				<button onClick={this.togglePopup}>Click to Show Popup</button>
				{this.state.showPopup ?
					<Popup
						infoPassed='This is a Popup Window'
						closePopup={this.togglePopup}
					/> : null
				}
			</div>
		);
	}
};

export default App;
