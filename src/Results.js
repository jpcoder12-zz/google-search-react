import React from 'react'
class Results extends React.Component {
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
      <small>www.w3school.com</small>
    </div>
			<div>
    <section>
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
    </section>
    <section className="search-results">
      <a href="/" target="_blank" className="result-title"
        ><h1>JavaScript | MDN</h1></a
      >

      <p>
        JavaScript (JS) is a lightweight, interpreted, or just-in-time complied
        programming language with first-class functions. While it is most
        well-known as the scrpiting language for Web pages, CouchDB and Adobe
        Acrobat.
      </p>

      <ul className="links" className="search-results">
        <li><a href="/" target="_blank">JavaScript Operator</a></li>
        <li><a href="/" target="_blank">JS Code</a></li>
        <li><a href="/" target="_blank">JavaScript Meaning</a></li>
      </ul>
      <small>en.wikipedia.org</small>
    </section>
    <section className="search-results">
      <a href="/" target="_blank" className="result-title"
        ><h1>JavaScript - Wikipedia</h1></a
      >
      <p>
        JavaScript often abbreviated as JS, is a programming language that
        conforms to ECMAScript specification. JavaScript is high-level, often
        just-in-time.
      </p>
      <ul className="links">
        <li><a href="/" target="_blank">JavaScript Online</a></li>
        <li><a href="/" target="_blank">JavaScript Definition</a></li>
      </ul>
    </section>
	</div>
	</>)
}}
export default Results
