"use strict";

const properties = {
  btns: document.querySelectorAll(".js-btn"),
  resultBox: document.querySelector(".js-resultBox"),
  classOfBtn: "",
  typeOfBtn: "",
  btnValue: "",
  numberOfSymbols: 0,
  numberOfDecimals: false,
  resultHasBeenRendered: false,
};

const methods = {
  listenToBtns: () => {
    document.addEventListener("keydown", methods.pushKey);
    for (let index = 0; index < properties.btns.length; index++) {
      properties.btns[index].addEventListener("click", methods.getValue);
    }
  },

  pushKey: (event) => {
    if (event.keyCode === 48 || event.keyCode === 96) {
      properties.typeOfBtn = "number";
      properties.btnValue = 0;
    } else if (event.keyCode === 49 || event.keyCode === 97) {
      properties.typeOfBtn = "number";
      properties.btnValue = 1;
    } else if (event.keyCode === 50 || event.keyCode === 98) {
      properties.typeOfBtn = "number";
      properties.btnValue = 2;
    } else if (event.keyCode === 51 || event.keyCode === 99) {
      properties.typeOfBtn = "number";
      properties.btnValue = 3;
    } else if (event.keyCode === 52 || event.keyCode === 100) {
      properties.typeOfBtn = "number";
      properties.btnValue = 4;
    } else if (event.keyCode === 53 || event.keyCode === 101) {
      properties.typeOfBtn = "number";
      properties.btnValue = 5;
    } else if (event.keyCode === 54 || event.keyCode === 102) {
      properties.typeOfBtn = "number";
      properties.btnValue = 6;
    } else if (event.keyCode === 55 || event.keyCode === 103) {
      properties.typeOfBtn = "number";
      properties.btnValue = 7;
    } else if (event.keyCode === 56 || event.keyCode === 104) {
      properties.typeOfBtn = "number";
      properties.btnValue = 8;
    } else if (event.keyCode === 57 || event.keyCode === 105) {
      properties.typeOfBtn = "number";
      properties.btnValue = 9;
    } else if (event.keyCode == 187 || event.keyCode == 107) {
      properties.typeOfBtn = "symbol";
      properties.btnValue = "+";
    } else if (event.keyCode == 189 || event.keyCode == 109) {
      properties.typeOfBtn = "symbol";
      properties.btnValue = "-";
    } else if (event.keyCode == 88 || event.keyCode == 106) {
      properties.typeOfBtn = "symbol";
      properties.btnValue = "*";
    } else if (event.keyCode == 111) {
      properties.typeOfBtn = "symbol";
      properties.btnValue = "/";
    } else if (event.keyCode == 190 || event.keyCode == 110) {
      properties.typeOfBtn = "decimal";
      properties.btnValue = ".";
    } else if (event.keyCode == 13) {
      properties.typeOfBtn = "equals";
    } else if (event.keyCode == 8) {
      properties.typeOfBtn = "AC";
    }
    methods.render(properties.typeOfBtn, properties.btnValue);
  },

  getValue: (event) => {
    properties.classOfBtn = event.target.getAttribute("class");
    if (properties.classOfBtn.includes("js-number")) {
      properties.typeOfBtn = "number";
    } else if (properties.classOfBtn.includes("js-symbol")) {
      properties.typeOfBtn = "symbol";
    } else if (properties.classOfBtn.includes("js-decimal")) {
      properties.typeOfBtn = "decimal";
    } else if (properties.classOfBtn.includes("js-equals")) {
      properties.typeOfBtn = "equals";
    } else if (properties.classOfBtn.includes("js-AC")) {
      properties.typeOfBtn = "AC";
    }
    console.log(properties.typeOfBtn);
    properties.btnValue = event.target.innerHTML;
    methods.render(properties.typeOfBtn, properties.btnValue);
  },

  render: (typeOfBtn, btnValue) => {
    if (typeOfBtn === "number") {
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
    } else if (typeOfBtn === "symbol") {
      properties.numberOfSymbols++;
      properties.numberOfDecimals = false;
      if (properties.resultBox.innerHTML == "0") {
        properties.resultBox.innerHTML = 0;
      } else if (properties.numberOfSymbols === 1) {
        properties.resultBox.innerHTML += btnValue;
      }
    } else if (typeOfBtn === "decimal") {
      if (!properties.numberOfDecimals) {
        properties.resultBox.innerHTML += ".";
        properties.numberOfDecimals = true;
      }
    } else if (typeOfBtn === "equals") {
      properties.resultBox.innerHTML = eval(properties.resultBox.innerHTML);
      properties.resultHasBeenRendered = true;
    } else if (typeOfBtn === "AC") {
      properties.resultBox.innerHTML = 0;
    }
  },
};

methods.listenToBtns();
