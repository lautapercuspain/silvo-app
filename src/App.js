import React, { Component } from 'react';
import silvo from './img/silvo.jpg';
import './App.css';
import './Animate.css';

class Cat extends React.Component {
	render() {
		const { x, y } = this.props;
		return (
			<img
				className="animated wobble infinite"
				width="100px"
				alt=""
				src={silvo}
				style={{ position: 'absolute', left: x, top: y }}
			/>
		);
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			x: 0,
			y: 0
		};
	}
	handleMouseMove = (event) => {
		console.log('pasa x aqui::');
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	};

	render() {
		return (
			<div className="App" onMouseMove={this.handleMouseMove}>
				<header className="App-header">
					<h1 className="animated slideInDown flipInX  infinite ">Yo soy el Silvo!!</h1>
					<Cat x={this.state.x} y={this.state.y} />
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
				</header>
			</div>
		);
	}
}

export default App;
