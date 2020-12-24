"use strict";

const properties = {
  btns: document.querySelectorAll(".js-btn"),
  resultBox: document.querySelector(".js-resultBox"),
  typeOfBtn: "",
  btnValue: "",
  numberOfSymbols: 0,
  numberOfDecimals: false,
  resultHasBeenRendered: false,
};

const methods = {
  listenToBtns: () => {
    for (let index = 0; index < properties.btns.length; index++) {
      properties.btns[index].addEventListener("click", methods.getValue);
    }
  },
  getValue: (event) => {
    properties.typeOfBtn = event.target.getAttribute("class");
    properties.btnValue = event.target.innerHTML;
    methods.render(properties.typeOfBtn, properties.btnValue);
  },
  render: (typeOfBtn, btnValue) => {
    if (typeOfBtn.includes("js-number")) {
      properties.numberOfSymbols = 0;
      properties.resultHasBeenRendered = false;
      if (
        properties.resultBox.innerHTML == "0" ||
        properties.resultHasBeenRendered == true
      ) {
        properties.resultBox.innerHTML = btnValue;
      } else {
        properties.resultBox.innerHTML += btnValue;
      }
    } else if (typeOfBtn.includes("js-symbol")) {
      properties.numberOfSymbols++;
      properties.numberOfDecimals = false;
      if (properties.resultBox.innerHTML == "0") {
        properties.resultBox.innerHTML = 0;
      } else if (properties.numberOfSymbols === 1) {
        properties.resultBox.innerHTML += btnValue;
      }
    } else if (typeOfBtn.includes("js-decimal")) {
      if (!properties.numberOfDecimals) {
        properties.resultBox.innerHTML += ".";
        properties.numberOfDecimals = true;
      }
    } else if (typeOfBtn.includes("js-equals")) {
      properties.resultBox.innerHTML = eval(properties.resultBox.innerHTML);
      properties.resultHasBeenRendered = true;
    } else if (typeOfBtn.includes("js-AC")) {
      properties.resultBox.innerHTML = 0;
    }
  },
};

methods.listenToBtns();
