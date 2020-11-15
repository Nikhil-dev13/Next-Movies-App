import React, { useState, useEffect } from "react";

import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import { getMovies } from "../actions";

class Home extends React.Component {
  static async getInitialProps() {
    const movies = await getMovies();

    return {
      movies,
    };
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movies: [],
  //     errorMessage: "",
  //   };
  // }
  // componentDidMount() {
  //   getMovies()
  //     .then((movies) => {
  //       this.setState({ movies });
  //     })
  //     .catch((error) => {
  //       this.setState({ errorMessage: error });
  //     });
  // }

  render() {
    const { movies, errorMessage } = this.props;
    return (
      <div>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu />
              </div>

              <div className="col-lg-9">
                <Carousel />

                <div className="row">
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <MovieList movies={movies || []} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
