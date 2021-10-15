import { useState, useEffect } from 'react';
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary'
import SearchBox from '../components/SearchBox';
import Particles from 'react-particles-js';
import './App.css'

const particlesOptions = {
particles: {
	            number: {
	                value: 300,
	                density: {
	                    enable: true,
	                    value_area: 1000
	                }
	            },
	            color: {
	                value: '#fff'
	            },
	            opacity: {
	                value: 0.4,
	                anim: {
	                    enable: true
	                }
	            },
	            size: {
	                value: 5,
	                random: true,
	                anim: {
	                    enable: true,
	                    speed: 2
	                }
	            },
	            line_linked: {
	                enable: false
	            },
	            move: {
	                speed: 0.2
	            }
	         }    
}


function App() {
	
	// This is the place where we create hooks, here we create state hook
	//     stateName      functionTOChangeState    initial value for the state
    const [robots,            setRobots        ] = useState([])
	const [searchfield,       setSearchfield   ] = useState('')

	// In hooks instead of ComponentDidMount we use Effect hook
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {setRobots(users)});
	},[]) // Here we put [] run effect when list is empty i.e. when the componenet mounts(its a shorthand version to use componentDidMount using Hooks)

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	 }

		const filteredRobots = robots.filter(robot =>{
			  return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		    })

		return  !robots.length ?
			 <h1>Loading</h1> :
                (
					<div className='tc'>
					     <Particles className="particles" params={particlesOptions} />
						<h1 className='f1'> Friends for All</h1>
						<SearchBox searchChange={onSearchChange}/>
						<Scroll>
							  <ErrorBoundary>
							     <CardList robots={filteredRobots} />
							  </ErrorBoundary>
						</Scroll>
					</div>
                 );
	}


export default App;