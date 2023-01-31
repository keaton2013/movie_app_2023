import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

class Home extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=40&sort_by=year');
    //..../list_movies.json?sort_by=rating
    //..../list_movies.json?sort_by=year

    //console.log(movies.data.data.movies);
    //console.log(movies);

    //this.setState({ movies: movies });
    this.setState({ movies, isLoading: false });

  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
    //axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        { isLoading 
          ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) 
          : (
            <div className="movies">
              { movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  poster_large={movie.large_cover_image}
                  genres={movie.genres}
                />
              )) }
            </div>
          )
        }
      </section>
    );
  }
}

export default Home;