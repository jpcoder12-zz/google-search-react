import React from 'react'
import Result from './Result'
class Results extends React.Component {
	state = {
		results: [{
			url: 'www.w3school.com',
			title: 'JavaScript Tutorial',
			description: 'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java',
			links: ['JavaScript Introduction', 'JS Functions', 'JavaScript Examples']
		}]
	}
	render() {
		return (
			<>
			<nav className="wrap-results">
      <img  alt='' src="images/google.png" className="logo-results" />
      <form className="header-results">
        <input type="search" />
        <button type="submit">
          Search
        </button>
      </form>
    </nav>
   <div className="results">
    <small>37 Results</small>
    </div>

		<Result />

	</>)
}}
export default Results
