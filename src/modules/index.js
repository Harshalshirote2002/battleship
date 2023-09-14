import "../styles.css";
import createHeader from "./header.js";
import updateDisplay from "./UI.js";

export default function updateUI() {
  const body = document.querySelector("body");
  const header = createHeader();
  const main = updateDisplay();
  body.textContent = '';
  body.append(header, main);
}

updateUI();
