import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {players: [{
			name: "",
			score: 0,
			assist: 0,
			d: 0,
			ta: 0,
			drop: 0
		}]}

		this.addPlayer = this.addPlayer.bind(this);
	}
	addPlayer() {
		let newPlayer = {
			name: "",
			score: 0,
			assist: 0,
			d: 0,
			ta: 0,
			drop: 0
		};

		this.setState(prevState => ({
			players: [...prevState.players, newPlayer]
		}));
	}
  	render() {
    	return (
      		<div className="App">
        		<header className="App-header">
          			<img src={logo} className="App-logo" alt="logo" />
          			<h1 className="App-title">Ultimate Stats</h1>
        		</header>
        		
        		{
        			this.state.players.map((elem, i) => <PlayerRow key={i} />)
        		}

        		<AddPlayerButton 
					addPlayer={this.addPlayer} />
      		</div>
    	);
  	}
}

class PlayerRow extends Component {
	render() {
		return (
			<div>
				<input type="text" />
				<button>S ({})</button>
				<button>A ({})</button>
				<button>D ({})</button>

				<button>T.A ({})</button>
				<button>Drop ({})</button>
			</div>
		)
	}
}


class StatButton extends Component {
	constructor(props) {
		super(props);

		// Receives addStat() (function) as prop from App
		// Receives subtractStat() (function) as prop from App
		// Receives label "string" as prop from App
		// Receives stat int as prop from App
	}

	render() {
		return (
			<button 
				className='add-player'
				onClick={this.props.addStat}
				onDblClick={this.props.subtractStat}
				>{this.props.label} ({this.props.stat})</button>
		)
	}
}

class AddPlayerButton extends Component {
	constructor(props) {
		super(props);

		// Receives addPlayer() (function) as prop from App
	}

	render() {
		return (
			<button 
				className='add-player'
				onClick={this.props.addPlayer}> + </button>
		)
	}
}

export default App;
