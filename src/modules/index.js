import "../styles.css";
import './fontawesome.js';
import createFooter from './commonFooter.js';
import createHeader from "./header.js";
import updateDisplay from "./UI.js";

export default function updateUI() {
  const body = document.querySelector("body");
  const header = createHeader();
  const main = updateDisplay();
  const footer = createFooter();
  body.textContent = '';
  body.append(header, main, footer);
}

updateUI();
