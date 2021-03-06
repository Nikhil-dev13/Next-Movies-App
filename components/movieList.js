import React from "react";
import Link from "next/link";

class MovieList extends React.Component {
  renderMovies(movies) {
    return movies.map((movie) => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img className="card-img-top" src={movie.image} alt="" />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h4>

            <p className="card-text">{movie.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating}</small>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { movies } = this.props;

    return <>{this.renderMovies(movies)}</>;
  }
}

export default MovieList;
