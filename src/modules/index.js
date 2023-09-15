import "../styles.css";
import "./fontawesome.js";
import createFooter from "./commonFooter.js";
import createHeader from "./header.js";
import updateDisplay from "./UI.js";
import shipDialogMaker from "./shipPlacementDialog.js";
import { gameWinStatus } from "./gamePlay";
import { toggleGameWinStatus } from "./gamePlay";
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
  if (gameWinStatus === 1) {
    beginMode = 1;
    toggleGameWinStatus();
  }
  if (beginMode === 1) {
    beginMode = 0;
    const body = document.querySelector("body");
    const header = createHeader();
    // const main = updateDisplay();
    const dialog = shipDialogMaker();
    // const footer = createFooter();
    body.textContent = "";
    body.append(header, dialog);
    if (!dialog.open) {
      dialog.showModal(); // Open the dialog modally
    }
    // dialog.showModal();
    placeDialog(dialog);
  } else {
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
