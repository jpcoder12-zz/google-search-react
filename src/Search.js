import React from 'react'


class Search extends React.Component {
    render(){
        return(
            <div className="wrap">
                <img alt='Google Logo' src="images/google.png" className="logo" />
                <form onSubmit={e => this.props.getResults(e)}>
                    <input type="search" name="search" onKeyUp={this.props.modifySearch}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Search
