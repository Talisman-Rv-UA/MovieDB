import "./Home.scss";
import { getMovies } from "../../utils/api";
import { MovieCardList } from "../../components/MovieCard/MovieCard";
import { refs } from "../../utils/refs";
import { createUser } from "../../utils/firebase/createUser.js";
import { setEventToMovieCard } from "../../utils/setEventToMovieCard.js";

export const Home = async (renderElements) => {
  const popularMovieItems = await getMovies("popular");
  const container = document.createElement("div");

  container.classList.add("container");
  container.appendChild(MovieCardList(popularMovieItems));

  refs.app.innerHTML = container.outerHTML;

  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((movieCard) => {
    movieCard.addEventListener("click", setEventToMovieCard);
  });
};
