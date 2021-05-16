import Movie from "./Movie";

const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie, index) => {
          return <Movie key={movie.imdbId} key={index} {...movie} />;
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
};

export default Movies;
