import React from 'react'
import Result from './Result'
class Results extends React.Component {
	render() {
		return (
			<>
			<nav className="wrap-results">
      <img  alt='' src="images/google.png" className="logo-results" />
      <form className="header-results" onSubmit={e => this.props.getResults(e)}>
        <input type="search" onKeyUp={this.props.modifySearch}/>
        <button  type="submit">
          Search
        </button>
      </form>
    </nav>
   <div className="results">
    <small>37 Results</small>
    </div>
    {this.state.results.map((result, i) => { return <Result key={i} result={result}/>})}
	</>)
}}
export default Results
