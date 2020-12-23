"use strict";
debugger;

const properties = {
  btns: document.querySelectorAll(".js-btn"),
  action: "",
  resultBox: document.querySelector(".js-resultBox"),
  btnValue: "",
};
debugger;
const methods = {
  listenToBtns: () => {
    for (let index = 0; index < properties.btns.length; index++) {
      properties.btns[index].addEventListener("click", methods.getValue);
    }
  },
  getValue: (event) => {
    properties.action = event.target.getAttribute("class");
    properties.btnValue += event.target.innerHTML;
    methods.render(properties.action);
  },
  render: (action) => {
    if (action.includes("js-number")) {
      properties.resultBox.innerHTML = properties.btnValue;
    } else if (action.includes("js-symbol")) {
      console.log("It's a symbol");
    } else if (action.includes("js-AC")) {
      properties.btnValue = "";
    } else if (action.includes("js-equals")) {
      console.log("Equals");
    } else if (action.includes("js-decimal")) {
      console.log("It's decimal symbol");
    }
  },
};

methods.listenToBtns();
