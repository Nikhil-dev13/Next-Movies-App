import React, { useState, useEffect } from "react";

import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import { getMovies } from "../actions";

class Home extends React.Component {
  static async getInitialProps() {
    const movies = await getMovies();
    const images = movies.map((movie) => {
      return {
        id: `image-${movie.id}`,
        url: movie.image,
        name: movie.name,
      };
    });
    return {
      movies,
      images,
    };
  }

  render() {
    const { movies, errorMessage, images } = this.props;
    return (
      <div>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu />
              </div>

              <div className="col-lg-9">
                <Carousel images={images} />

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
