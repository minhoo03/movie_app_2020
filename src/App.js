import React from 'react';
import axios from 'axios';

class App extends React.Component{
  
  state = {
    isLoading : true,
    movies: []
  }

  getmovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log('axios complete')
  }

  componentDidMount(){
    this.getmovies()
  }

  render(){
    const { isLoading } = this.state

    // npm install axios
    return (
      <div>
          {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}

export default App;
