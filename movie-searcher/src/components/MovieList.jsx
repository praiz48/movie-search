import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ Movies, onMovieSelect }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {Movies.map((movie, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <MovieCard Movie={movie} selectedMovie={onMovieSelect} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
