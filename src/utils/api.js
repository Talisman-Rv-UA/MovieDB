import axios from "axios";
import { API_KEY } from "./constans";
import { BASE_URL } from "./constans";
import { Loader } from "../components/Loader/Loader.js";

export const getMovies = async (mode = "") => {
  try {
    Loader(true);
    const response = await axios.get(
      `${BASE_URL}movie/${mode}?api_key=${API_KEY}`
    );
    const movies = await response.data.results;
    Loader(false);
    return movies;
  } catch (error) {
    console.error(" ERROR ->", error);
  }
};
