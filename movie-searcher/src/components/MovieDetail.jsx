import { React, useEffect, useState } from "react";

const MovieDetail = ({ movie_id }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${movie_id}&apikey=ab2c820e`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    if (movie_id && movie_id !== "") {
      fetchMovieDetails();
    } else {
      setMovieDetails(null);
    }
  }, [movie_id]);

  return (
    <div
      className="movie-detail"
      style={{
        display: movieDetails ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        overflowY: "auto",
        maxHeight: "80vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "80%",
        maxWidth: "500px",
        zIndex: 1000,
        fontFamily: "'Arial', sans-serif",
        color: "#333",
      }}
    >
      <button
        onClick={() => setMovieDetails(null)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        &times;
      </button>
      {loading && (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>
      )}
      {error && (
        <p style={{ textAlign: "center", color: "red", fontSize: "16px" }}>
          Error: {error}
        </p>
      )}
      {movieDetails && (
        <div>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            {movieDetails.Title}
          </h2>
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            style={{
              display: "block",
              margin: "0 auto",
              width: "70%",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
            <p>
              <strong>Year:</strong> {movieDetails.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movieDetails.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movieDetails.Director}
            </p>
            <p>
              <strong>Plot:</strong> {movieDetails.Plot}
            </p>
            <p>
              <strong>Rating:</strong> {movieDetails.imdbRating}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
