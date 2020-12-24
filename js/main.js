"use strict";

const properties = {
  btns: document.querySelectorAll(".js-btn"),
  resultBox: document.querySelector(".js-resultBox"),
  typeOfBtn: "",
  btnValue: "",
  numberOfSymbols: 0,
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
      if (properties.resultBox.innerHTML === "Result") {
        properties.resultBox.innerHTML = btnValue;
      } else {
        properties.resultBox.innerHTML += btnValue;
      }
    } else if (typeOfBtn.includes("js-symbol")) {
      properties.numberOfSymbols++;
      if (properties.numberOfSymbols === 1) {
        properties.resultBox.innerHTML += btnValue;
      }
    } else if (typeOfBtn.includes("js-AC")) {
      properties.resultBox.innerHTML = "";
    }
  },
  // } else if (typeOfBtn.includes("js-equals")) {
  //   console.log("Equals");
  // } else if (typeOfBtn.includes("js-decimal")) {
  //   console.log("It's decimal symbol");
  // }
  // },
};

methods.listenToBtns();
