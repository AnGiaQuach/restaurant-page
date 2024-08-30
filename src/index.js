import "./style.css";
import { menuDiv } from "./menu.js";
import { homeDiv } from "./home.js";
import { aboutDiv } from "./about.js";

const contentDiv = document.querySelector(".content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
// contentDiv.appendChild(homeDiv);

homeBtn.addEventListener("click", () => {
  contentDiv.innerHTML = ``;
  contentDiv.appendChild(homeDiv);
});

menuBtn.addEventListener("click", () => {
  contentDiv.innerHTML = ``;
  contentDiv.appendChild(menuDiv);
});

aboutBtn.addEventListener("click", (e) => {
  contentDiv.innerHTML = ``;
  contentDiv.innerHTML = aboutDiv.innerHTML;
});
