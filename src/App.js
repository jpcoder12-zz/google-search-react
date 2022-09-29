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
        let results = await axios.get(process.env.REACT_APP_GOOGLE_SEARCH_API + '/results', {
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
					<>
				 {this.state.submitted == true ?	<Results getResults={this.getResultsFromSearch}  modifySearch={this.modifySearch}/> :



						<Search getResults={this.getResultsFromSearch} modifySearch={this.modifySearch}/>}
					</>
        )
    }
}

export default App
