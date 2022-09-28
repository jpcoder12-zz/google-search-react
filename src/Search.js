import React from 'react'

class Search extends React.Component {
    render(){
        return(
            <div className="wrap">
                <img alt='Google Logo' src="images/google.png" className="logo" />
                <form>
                    <input type="search" name="search" />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Search
