import React from "react";
import "../styles/search.css";

const Search = ({ handleLocationChange, handleSubmit, location }) => {
  return (
    <div className="search">
      <input
        type="text"
        name=""
        id=""
        className="search-input"
        placeholder="Enter location..."
        onChange={handleLocationChange}
        value={location}
      />
      <button type="submit" className="search-btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
    // <div className="search">
    //   <form className="form" onSubmit={handleSubmit}>
    //     <label htmlFor="" className="form-label">
    //       <input
    //         type="text"
    //         placeholder="Enter location..."
    //         className="form-input"
    //         onChange={handleLocationChange}
    //         value={location}
    //       />
    //     </label>
    //     <button type="submit" className="form-btn">
    //       Search
    //     </button>
    //   </form>
    // </div>
  );
};

export default Search;
