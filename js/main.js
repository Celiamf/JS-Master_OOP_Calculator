"use strict";

const properties = {
  btns: document.querySelectorAll(".js-btn"),
  action: "",
};

const methods = {
  listenToBtns: () => {
    for (let index = 0; index < properties.btns.length; index++) {
      properties.btns[index].addEventListener("click", methods.pushBtn);
    }
  },
  pushBtn: (event) => {
    properties.action = event.target.getAttribute("class");
    methods.calculate(properties.action);
  },
  calculate: (action) => {
    if (action.includes("js-number")) {
      console.log("It's a number");
    } else if (action.includes("js-symbol")) {
      console.log("It's a symbol");
    } else if (action.includes("js-AC")) {
      console.log("It's AC");
    } else if (action.includes("js-equals")) {
      console.log("Equals");
    } else if (action.includes("js-decimal")) {
      console.log("It's decimal symbol");
    }
  },
};

methods.listenToBtns();
