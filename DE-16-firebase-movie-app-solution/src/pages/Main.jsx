import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieCards from "../components/MovieCards";
import { AuthContext } from "../context/AuthContextProvider";
const Main = () => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  const [movies, setMovies] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [searchMovie, setSearchMovie] = useState("");
  const { currentUser } = useContext(AuthContext);
  //Filmler site ilk yüklendiginde gözükmesi icin yani datalarin bir seferlik alinmasi icin useEffect kullaniyorum.
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(setSpinner(false));
    //dönen loading iconu en son kaybolsun diye..
  };

  //Arama butonu ile film arama
  const searchSubmit = (e) => {
    e.preventDefault();
    if (searchMovie && currentUser) {
      getMovies(SEARCH_API + searchMovie);
    } else if (currentUser === false) {
      alert("Please Login");
    } else {
      alert("Please enter the name of movie");
    }
  };
  return (
    <>
      <form className="flex justify-center p-2" onSubmit={searchSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md outline-none border p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button className="text-dark" type="submit">
          Search
        </button>
      </form>
      <div className=" flex justify-center flex-wrap">
        {spinner ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCards key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
