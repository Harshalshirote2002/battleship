import "../styles.css";
import "./fontawesome.js";
import createFooter from "./commonFooter.js";
import createHeader from "./header.js";
import updateDisplay from "./UI.js";
import shipDialogMaker from "./shipPlacementDialog.js";
let beginMode = 1;

function placeDialog(dialog) {
  const dialogWidth = dialog.offsetWidth;
  const dialogHeight = dialog.offsetHeight;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const leftPosition = viewportWidth / 2 - dialogWidth / 2;
  const topPosition = viewportHeight / 2 - dialogHeight / 2;
  dialog.style.left = `${leftPosition}px`;
  dialog.style.top = `${topPosition}px`;
}

export default function updateUI() {
  if (beginMode === 1) {
    const body = document.querySelector("body");
    const header = createHeader();
    // const main = updateDisplay();
    const dialog = shipDialogMaker();
    // const footer = createFooter();
    body.textContent = "";
    body.append(header, dialog);
    dialog.showModal();
    placeDialog(dialog);
    beginMode = 0;
  }else{
    const body = document.querySelector("body");
    const header = createHeader();
    const main = updateDisplay();
    const footer = createFooter();
    body.textContent = "";
    body.append(header, main, footer);
    beginMode = 0;
  }
}

updateUI();
