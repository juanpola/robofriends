import React from 'react';
import Cardlist from './Cardlist'
import { robots } from './robots'
import SearchBox from './SearchBox'

//state is something that can be changed, It ussually lives in the parent component

class App extends React.Component {


	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render (){
			const filterRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filterRobots);
	return (
		<div className='tc'>
		<h1> RoboFriends </h1>
		<SearchBox searchChange={this.onSearchChange}/>
			<Cardlist robots={filterRobots}/>
		</div>
		);
}
}

export default App;