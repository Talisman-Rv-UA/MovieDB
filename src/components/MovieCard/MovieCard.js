import "./MovieCard.scss";
import { IMAGE_500 } from "../../utils/constans";
import { shortenText } from "../../utils/shortenText";

const renderMovieCard = ({
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
}) => {
  return `
  <div class="movie-card__like"></div>
    <img src="${IMAGE_500}${poster_path}" class="movie-card__img" alt="${title}">
    <div class="movie-card__info_text">
        <span class="movie-card__release_date">${release_date}</span>
        <span class="movie-card__title">${shortenText(title, 22)}</span>
        <div class="movie-card__rating">
          <div class="movie-card__imdb_wrap">
            <img src="/assets/images/icons/imdb.svg" class="movie-card__imdb_img" alt="imdb">
            <span class="movie-card__vote_average">${vote_average}</span>
          </div>
          <div class="movie-card__vote_count_wrap">
            <img src="/assets/images/icons/tomate.svg" class="movie-card__tomato" alt="tomato">
            <span class="">${vote_count}</span>
          </div>
        </div>
    </div>
    `;
};

const createMovieCard = (movie) => {
  const movieCard = document.createElement("div");
  movieCard.dataset.movie = JSON.stringify(movie);
  movieCard.classList.add("movie-card");
  movieCard.innerHTML = renderMovieCard(movie);
  return movieCard;
};

export const MovieCardList = (movies) => {
  const movieCards = movies.map(createMovieCard);
  const movieList = document.createElement("div");
  movieList.className = "movies-list";
  movieList.append(...movieCards);

  return movieList;
};
