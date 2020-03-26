import React from 'react';
import Cardlist from '../components/Cardlist';
import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';


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
		const {robots, searchfield} = this.state

		const filterRobots = robots.filter(robots => {

			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})


		return !robots.length ?
		<h1> Loading</h1> :
		(
			<div className='tc'>
			<h1 className='f1'> RoboFriends </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<ErrorBoundry>
				<Cardlist robots={filterRobots}/>
			</ErrorBoundry>
			</Scroll>
			</div>
			);
	}
}

export default App;