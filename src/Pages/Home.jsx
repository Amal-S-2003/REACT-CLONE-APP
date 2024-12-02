import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";
import axios from "axios";

function Home() {
  const [moviesData, setMoviesData] = useState([]);

  const API_KEY = "30c0a3564f27c51154c2bfdb9e77d9c1"; // Replace with your TMDB API key
  const BASE_URL = "https://api.themoviedb.org/3";

  const tmdbApi = axios.create({
    baseURL: BASE_URL,
  });

  const fetchPopularMovies = async () => {
    try {
      const response = await tmdbApi.get("/movie/popular", {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: 1,
        },
      });
      console.log(response.data.results);
      return response.data.results; // Return the list of movies
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      return [];
    }
  };
  useEffect(() => {
    fetchPopularMovies().then((data) => {
      setMoviesData(data.slice(0,10));
    });
  }, []);

  return (
    <>
      <Container>
        <div className="tn d-flex justify-content-between">
          <h2 className="fw-bold text-light">Trending Now</h2>
          <div className="selects">
            <select
              name="lang"
              id=""
              className="langs fw-bold py-1 fs-5  px-3 text-light bg-transparent"
            >
              <i class="fa-solid fa-sort-down"></i>
              <option value="India" className="text-dark">
                <i class="fa-solid fa-earth-americas"></i>India
              </option>
              <option value="Global" className="text-dark">
                Global
              </option>
            </select>
            <select
              name="lang"
              id=""
              className="langs fw-bold py-1 fs-5 ms-3  px-3 text-light bg-transparent"
            >
              <i class="fa-solid fa-sort-down"></i>
              <option value="movies" className="text-dark">
                Movies
              </option>
              <option value="tvShows" className="text-dark">
                Tv shows
              </option>
            </select>
          </div>
        </div>

        <div className="movies">
          {moviesData.map((movie,index) => (
            <MovieCard movie={movie} index={index}/>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
