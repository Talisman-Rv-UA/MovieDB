import { Modal } from "../components/Modal/Modal.js";

export const setEventToMovieCard = (e) => {
  const dataSet = e.currentTarget.dataset.movie;
  const movie = JSON.parse(dataSet);

  Modal(movie);

  if (e.target.className === "movie-card__like") {
    e.target.style.backgroundColor = "#BB2649";
    //TODO
  }
};
