import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll'


//state is something that can be changed, It ussually lives in the parent component
//smart component
class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
			return response.json();
		})
		.then(users => {
			this.setState({ robots: users})
		});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render (){
			const filterRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filterRobots);
		if (robots.length === 0 ){
			return <h1> Loading</h1>
		} else {
	return (
		<div className='tc'>
		<h1 className='f1'> RoboFriends </h1>
		<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<Cardlist robots={filterRobots}/>
			</Scroll>
		</div>
		);
}
}
}

export default App;