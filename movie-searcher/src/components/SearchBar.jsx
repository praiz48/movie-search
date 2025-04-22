import React, { useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        ref={inputRef}
        style={{
          padding: "8px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={() => {
          const query = inputRef.current.value;
          onSearch(query);
        }}
        style={{
          padding: "8px 16px",
          marginLeft: "8px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
