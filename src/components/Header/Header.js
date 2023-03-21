import "./Header.scss";
import { refs } from "../../utils/refs.js";

const Header = () => {
  const links = {
    movie: "/movie",
    tv: "/tv",
    person: "/persons",
  };

  const linksItem = Object.entries(links).map((link) => {
    console.log(link);
    const textLink = link[0].toUpperCase();
    const href = link[1];
    return `<li><a href="${href}" class="header_link" data-link="${href}">${textLink}</a></li>`;
  });

  return `
    <nav class="header_nav">
        <div class="logo">
            <a href="/"><img src="/logo.svg" alt="logo"></a>
        </div>
        <div class="menu">
               <ul>
                    ${linksItem.join("")}
                </ul>
        </div>
        
        <div class="burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="backdrop"></div>
    </nav>
  `;
};
refs.header.innerHTML = Header();

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const backdrop = document.querySelector(".backdrop");
const menuLinks = menu.querySelectorAll(".header_link");
const logo = document.querySelector(".logo");

const closeMenu = () => {
  const body = document.querySelector("body");
  body.classList.remove("lock");
  burger.classList.remove("active");
  menu.classList.remove("active");
  backdrop.classList.remove("active");
};

burger.addEventListener("click", (event) => {
  event.preventDefault();
  // menuLinks.forEach((link) => {
  //   link.addEventListener("click", closeMenu);
  // });

  const body = document.querySelector("body");
  const isLocked = body.classList.toggle("lock");
  body.classList.toggle("lock", !isLocked);
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  backdrop.classList.toggle("active");
});

logo.addEventListener("click", closeMenu);

const EVENTS_WINDOW = ["resize", "popstate", "beforeunload"];
EVENTS_WINDOW.map((event) => window.addEventListener(event, closeMenu));

backdrop.addEventListener("click", closeMenu);
