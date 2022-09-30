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

        e.preventDefault()
				// let str = process.env.REACT_APP_GOOGLE_SEARCH_API + '/results'
				let str = 'http://localhost:3000/results'
				console.log(str);
        let results = await axios.get(str, {
            params: {
                search: this.state.search
            }
        })

				console.log(results)
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
