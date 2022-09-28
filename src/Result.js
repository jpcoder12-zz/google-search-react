import React from 'react'

class Result extends React.Component {
    render() {
			return (
				<section>
					<div>
						<small>{this.props.result.url}</small>
					</div>

		      <a href="/" target="_blank" className="result-title"
		        ><h1>{this.props.result.title}</h1></a
		      >

		      <p>
		        {this.props.result.description}
		      </p>

		      <ul className="links">
						{this.props.result.links.map((link, index) => {
							return (
								<li key={index}>
									<a href="/" target="_blank">{link}</a>
								</li>
							)
						})}
		      </ul>

					<small>developer.mozilla.org</small>

		    </section>
			)
		}
}

export default Result
