import React from "react";

const MovieCard = ({ Movie, selectedMovie }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={Movie.Poster}
        alt={Movie.Title}
        style={{
          width: "100%",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <h3 style={{ margin: "16px 0 8px" }}>{Movie.Title}</h3>
      <p style={{ color: "#555" }}>
        type: {Movie.Type} <br />
        year: {Movie.Year} <br />
      </p>
      <button
        onClick={() => selectedMovie(Movie.imdbID)}
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Learn More
      </button>
    </div>
  );
};

export default MovieCard;
