import React, { useEffect, useState } from "react";
import { getMovies } from "./api";
import uniqBy from "lodash.uniqby";
import ReactDOM from "react-dom";

import "./styles.css";

function InfiniteList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const onScroll = () => {
    if (isBottom()) {
      setPage(page + 1);
    }
  };

  const isBottom = () => {
    return (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    );
  };

  const getFristData = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await getMovies(page);
      setMovies(movies);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getMoreData = async () => {
    try {
      const {
        data: {
          data: { movies: newMovies },
        },
      } = await getMovies(page);
      const uniqueMovies = [...movies, ...newMovies];
      setMovies(uniqBy(uniqueMovies, "id"));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFristData();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    getMoreData();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

  return { loading, page, movies };
}

function App() {
  const { loading, page, movies } = InfiniteList();
  return (
    <div className="App">
      <h1>Infinite Movies / Page {page}</h1>
      {loading && <h3>Loading...</h3>}
      {movies.map((movie) => (
        <h3 key={movie.id}>{movie.title}</h3>
      ))}
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
