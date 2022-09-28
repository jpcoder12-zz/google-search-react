import React from 'react'

class Result extends React.Component {
    render() {
			return (  <section>
				<div>  <small>www.w3school.com</small></div>
		      <a href="/" target="_blank" className="result-title"
		        ><h1>JavaScript Tutorial - W3School</h1></a
		      >
		      <p>
		        Well organized and easy to understand Web building tutorials with lots
		        of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python,
		        Bootstrap, Java
		      </p>
		      <ul className="links">
		        <li><a href="/" target="_blank">JavaScript Introduction</a></li>
		        <li><a href="/" target="_blank">JS Functions</a></li>
		        <li><a href="/" target="_blank">JavaScript Examples</a></li>
		      </ul>
		      <small>developer.mozilla.org</small>
		    </section>)
		}
}

export default Result
