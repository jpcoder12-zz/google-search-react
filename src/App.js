import React from 'react'
import Search from './Search'
import Results from './Results'
import axios from 'axios'
class App extends React.Component {
    state = {
        submitted: false,
        results: [],
        search: ''
    }
    getResultsFromSearch = async(e) => {
        //str is the search input
        console.log(e)
        e.preventDefault()
        let results = await axios.get('http://localhost:3000/results', {
            params: {
                search: e.target.input.value
            }
        })
    }
    modifySearch = (e) => {
        this.setState({
            search: e.target.value
        })
        console.log(this.state.search)
    }

    render(){
        return (
            <Results getResults={this.getResultsFromSearch} modifySearch={this.modifySearch}/>
            
        )
    }
}

export default App