import React, {Component} from 'react';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Cardlist from './components/Cardlist';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			kittens: [],
			searchfield: ''
		}
	}

	onsearchchange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users') //receiving Name, Id and email through an API call
  		.then(response => response.json())
  		.then(users => {this.setState( {kittens:users} ) } )
  		.catch(err => console.log('api call failed') )
	}

	render(){
		const { kittens, searchfield} = this.state; //destructuring
		const searchkitten = kittens.filter( (kitten) => {
			return kitten.name.toLowerCase().includes( searchfield.toLowerCase() );
		})
  		
  		return (
    		<>
    			<h1 className="tc"> Kittens!!!</h1>
    			<SearchBox searchchange={this.onsearchchange} />
    			<Scroll>
    				<Cardlist kittens={searchkitten} />
    			</Scroll>
    		</>
  		);
	}
}

export default App;
