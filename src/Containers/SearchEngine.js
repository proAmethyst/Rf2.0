import React, { Component } from 'react';
import SearchBox from '../Components/Search';
import AllRobots from '../Components/AllRobots';
import Scroll from '../Components/Scroll';



class SearchEngine extends Component {
    constructor() {
        super()
        this.state = {
            database: [],
            searchfield: ''
        }
    }
    
    // fetching API - API request
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ database: users}));
    }
    //............................

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    
    render() {
        const { database, searchfield } = this.state;
        const filteredRobots = database.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        // if we have a lot of users and take more time to load.
        return !database.length ?
            <h1 className='tc'>L O A D I N G</h1> :
        (
            <div>
            <SearchBox searchChange={this.onSearchChange}/> 
            <Scroll >
                <AllRobots database={filteredRobots}/>
            </Scroll>
            </div>
            );
        }
}


export default SearchEngine; 
