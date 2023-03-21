import page from "page";
import { refs } from "./refs";
import { setPageTitle } from "./setPageTitle";
import { APP_NAME } from "./constans";
import { Home } from "../pages/Home/Home.js";

const home = () => {
  refs.app.innerHTML = "HOME";
  setPageTitle(home.name, APP_NAME);
  Home(refs.app);
};

const movies = () => {
  refs.app.innerHTML = movies.name;
  setPageTitle(movies.name, APP_NAME);
};

const movie = () => {
  refs.app.innerHTML = movie.name;
};

const tvshows = () => {
  refs.app.innerHTML = tvshows.name;
  setPageTitle(tvshows.name, APP_NAME);
};
const tvshow = () => {
  refs.app.innerHTML = tvshow.name;
};
const persons = () => {
  refs.app.innerHTML = persons.name;
  setPageTitle(persons.name, APP_NAME);
};
const person = () => {
  refs.app.innerHTML = person.name;
};

page("/", home);
page("/movie", movies);
page("/movie/:id", movie);
page("/tv", tvshows);
page("/tv/:id", tvshow);
page("/persons", persons);
page("/persons/:id", person);
// page("*", notfound);
page();
