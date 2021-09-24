import { Component } from 'react';
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary'
import SearchBox from '../components/SearchBox';
import './App.css'

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}


	async componentDidMount(){
		try{
		const resp = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await resp.json();
		this.setState({robots: users})
	    } catch(err){
	    	console.log("Sorry for the Error",err)
	    }
		      
	 }

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	 }

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			  return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		    })

		return  !robots.length ?
			 <h1>Loading</h1> :
                (
					<div className='tc'>
						<h1 className='f1'> RoboFriends </h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							  <ErrorBoundary>
							     <CardList robots={filteredRobots} />
							  </ErrorBoundary>
						</Scroll>
					</div>
                 );
	 }
}

export default App;