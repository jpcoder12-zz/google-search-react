import React from 'react'

class App extends React.Component {
    render(){
        return(
            <div class="wrap">
                <img src="images/google.png" className="logo" />
                <form>
                    <input type="search" name="search" />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default App