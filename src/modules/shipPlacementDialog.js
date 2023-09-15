import updateUI from "./index.js";
import { placePlayerShips } from "./gamePlay.js";

function generateElement(type, classes = [], options) {
  const element = document.createElement(type);
  for (const someClass of classes) {
    element.classList.add(someClass);
  }
  for (const key in options) {
    if (key === "textContent" || key === "type" || key === "value") {
      element[key] = options[key];
    } else {
      element.setAttribute(key, options[key]);
    }
  }
  return element;
}

const dialog = document.createElement("dialog");
const form = document.createElement("form");
const title = generateElement("div", ["dialog-title"], {
  textContent: "Enter the Ship Start-point Coordinates, choose alignment",
});
const placeShips = generateElement("button", ["place-ships-button"], {
  textContent: "Place Ships",
});
const ship1 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship1",
});
const ship2 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship2",
});
const ship3 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship3",
});
const ship4 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship4",
});
const ship5 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship5",
});
const ship1Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship1",
  textContent: "ship1 of length 5:",
});
const ship2Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship2",
  textContent: "ship2 of length 4:",
});
const ship3Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship3",
  textContent: "ship3 of length 3:",
});
const ship4Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship4",
  textContent: "ship4 of length 3:",
});
const ship5Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship5",
  textContent: "ship5 of length 2:",
});
const ship1Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship1_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship1_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship2Alignment = generateElement("select", ["ship-alignment"], {
  id: "list2",
});
const ship2_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship2_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship3Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship3_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship3_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship4Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship4_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship4_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship5Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship5_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship5_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
ship1.required = true;
ship2.required = true;
ship3.required = true;
ship4.required = true;
ship5.required = true;
ship1Alignment.append(ship1_option_x, ship1_option_y);
ship2Alignment.append(ship2_option_x, ship2_option_y);
ship3Alignment.append(ship3_option_x, ship3_option_y);
ship4Alignment.append(ship4_option_x, ship4_option_y);
ship5Alignment.append(ship5_option_x, ship5_option_y);
const ship1Div = generateElement("div", ["ship1-div"]);
const ship2Div = generateElement("div", ["ship2-div"]);
const ship3Div = generateElement("div", ["ship3-div"]);
const ship4Div = generateElement("div", ["ship4-div"]);
const ship5Div = generateElement("div", ["ship5-div"]);
ship1Div.append(ship1Label, ship1, ship1Alignment);
ship2Div.append(ship2Label, ship2, ship2Alignment);
ship3Div.append(ship3Label, ship3, ship3Alignment);
ship4Div.append(ship4Label, ship4, ship4Alignment);
ship5Div.append(ship5Label, ship5, ship5Alignment);
placeShips.addEventListener("click", formSubmitEvent);
form.append(
  title,
  ship1Div,
  ship2Div,
  ship3Div,
  ship4Div,
  ship5Div,
  placeShips
);
dialog.append(form);

function checkValidity(finalPositions) {
  let result = true;
  for (const pos of finalPositions) {
    if (
      pos.start[0] <= 10 &&
      pos.start[0] >= 1 &&
      pos.end[0] <= 10 &&
      pos.end[0] >= 1 &&
      pos.start[1] <= 10 &&
      pos.start[1] >= 1 &&
      pos.end[1] <= 10 &&
      pos.end[1] >= 1
    ) {
    } else {
        result = false;
        return false;
    }
  }
  return true;
}

function formSubmitEvent(e) {
  e.preventDefault();
  const lengths = [4, 3, 2, 2, 1];
  let positions = [
    ship1.value,
    ship2.value,
    ship3.value,
    ship4.value,
    ship5.value,
  ];
  let alignments = [
    ship1Alignment.value,
    ship2Alignment.value,
    ship3Alignment.value,
    ship4Alignment.value,
    ship5Alignment.value,
  ];
  for (let i = 0; i < 5; i++) {
    positions[i] = positions[i].split(",");
    positions[i][0] = parseInt(positions[i][0]);
    positions[i][1] = parseInt(positions[i][1]);
  }
  let finalPositions = [];
  for (let i = 0; i < 5; i++) {
    if (alignments[i] === "x") {
      finalPositions.push({
        start: positions[i],
        end: [positions[i][0] + lengths[i], positions[i][1]],
      });
    } else {
      finalPositions.push({
        start: positions[i],
        end: [positions[i][0], positions[i][1] + lengths[i]],
      });
    }
  }
  if(checkValidity(finalPositions)){
    placePlayerShips(finalPositions);
    updateUI();
  }else{
    alert("invalid coordinates!");
  }
}

export default function shipDialogMaker() {
  return dialog;
}
