import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import Loader from "react-loader-spinner";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const fetchData = async (q) => {
    setisLoading(true);
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${q}`);
    if (res.status >= 200 && res.status <= 299) {
      const movies = res.data;
      if (movies.length === 0) {
        setError(true);
      }
      setMovies(movies);
      setQuery("");
      setisLoading(false);
    } else {
      throw new Error(res.statusText);
    }
    console.log(movies.length);
  };

  // useEffect(() => {
  //   fetch(" http://api.tvmaze.com/singlesearch/shows?q=chicken")
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((singleMovie) => {
  //       const { show } = singleMovie;
  //       const singleImage = show.image.original;
  //       console.log(singleImage);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    fetchData(query);
  };

  return (
    <section className="section-center">
      <h3>Search for Movies and Series</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="amount">paragraph:</label> */}
        <input
          type="text"
          name="movie-title"
          id="movie-title"
          value={query}
          required
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          generate
        </button>
        <button
          type="submit"
          className="btn"
          onClick={() => {
            setMovies([]);
          }}
        >
          reset
        </button>
      </form>
      <article className="lorem-text">
        <h1>
          {isLoading && <Loader type="Circles" color="hsl(205, 78%, 60%)" />}
        </h1>
        <h2>{error && "Oops, nothing to display"}</h2>
        <Movies movies={movies} />
      </article>
    </section>
  );
}

export default App;
