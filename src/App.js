import React from 'react';
import axios from 'axios';
import Movie from './Movie'

class App extends React.Component{
  
  state = {
    isLoading : true,
    movies: []
  }

  getmovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    //모든 data가 준비 되었을 경우 state 변경 후 render (삼항연산자로 로딩 구현)
    this.setState({ movies, isLoading: false })
    //state.movies == const movies
  }

  componentDidMount(){
    this.getmovies()
  }

  render(){
    const { isLoading, movies } = this.state

    // npm install axios
    return (
      <div>
          {isLoading ? "Loading..." : movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))}
      </div>
    )
  }
}

export default App;
