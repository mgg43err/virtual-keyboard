/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appearance/changeLayout.js":
/*!****************************************!*\
  !*** ./src/appearance/changeLayout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changeLayout(keyboardWrapper) {
  const h1 = `The keyboard was created in the Linux/GNU operating system
    To switch the language combination: left meta + space`;
  const h1div = document.createElement('div');
  h1div.innerText = h1;
  keyboardWrapper.append(h1div);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeLayout);


/***/ }),

/***/ "./src/appearance/keyboardAppearance.js":
/*!**********************************************!*\
  !*** ./src/appearance/keyboardAppearance.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keyboardButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardButtons */ "./src/appearance/keyboardButtons.js");
/* harmony import */ var _changeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeLayout */ "./src/appearance/changeLayout.js");



function keyboardAppearance() {
  // let make keyboardContainer
  const body = document.querySelector('body');
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('container-keyboard');
  body.prepend(keyboardContainer);
  // also we need to create an input field for our virtual keyboard
  const inputF = document.createElement('textarea');
  inputF.classList.add('input');
  keyboardContainer.prepend(inputF);
  // also we need a keyborad wrapper
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard__wrapper');
  keyboardContainer.append(keyboardWrapper);

  (0,_keyboardButtons__WEBPACK_IMPORTED_MODULE_0__["default"])(keyboardWrapper);
  (0,_changeLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(keyboardContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardAppearance);


/***/ }),

/***/ "./src/appearance/keyboardButtons.js":
/*!*******************************************!*\
  !*** ./src/appearance/keyboardButtons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function keyboardButtnos(wr) {
  const keyboardKeys1 = [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'backspace',
  ];
  const keyboardKeys2 = [
    'tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
  ];
  const keyboardKeys3 = [
    'caps lock',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    '\'',
    'enter',
  ];
  const keyboardKeys4 = [
    'shift',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '.',
    '/',
    '︿',
    'shift',
  ];
  const keyboardKeys5 = [
    'ctrl',
    'fn',
    '⌘',
    'alt',
    '',
    'alt',
    '〈',
    '﹀',
    '〉',
    'ctrl',
  ];
  const keyboardKeys1C = document.createElement('div');
  keyboardKeys1.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys1C.append(button);
    return button;
  });
  wr.append(keyboardKeys1C);
  const keyboardKeys2C = document.createElement('div');
  keyboardKeys2.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys2C.append(button);
    return button;
  });
  wr.append(keyboardKeys2C);
  const keyboardKeys3C = document.createElement('div');
  keyboardKeys3.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys3C.append(button);
    return button;
  });
  wr.append(keyboardKeys3C);
  const keyboardKeys4C = document.createElement('div');
  keyboardKeys4.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys4C.append(button);
    return button;
  });
  wr.append(keyboardKeys4C);
  const keyboardKeys5C = document.createElement('div');
  keyboardKeys5.map((x) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = x;
    keyboardKeys5C.append(button);
    return button;
  });
  wr.append(keyboardKeys5C);
  const i = document.querySelector('body > div > div').children;
  for (let x = 0; x < i.length; x += 1) {
    i[x].classList.add('keyRow');
    i[x].classList.add(`keyRow${x}`);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardButtnos);


/***/ }),

/***/ "./src/logic/capsLockLogic.js":
/*!************************************!*\
  !*** ./src/logic/capsLockLogic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function capsLockLogic() {
  let capsState = false;
  const caps = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(1)');
  const l0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)');
  const l1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)');
  const l2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)');
  const l3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)');
  const l4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)');
  const l5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)');
  const l6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)');
  const l7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)');
  const l8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)');
  const l9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)');
  const l10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)');
  const l11 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)');
  const l12 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)');
  const z0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)');
  const z1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)');
  const z2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)');
  const z3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)');
  const z4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)');
  const z5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)');
  const z6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)');
  const z7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)');
  const z8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)');
  const z9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)');
  const z10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)');
  const x0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)');
  const x1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)');
  const x2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)');
  const x3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)');
  const x4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)');
  const x5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)');
  const x6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)');
  const x7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)');
  const x8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)');
  const x9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)');

  caps.addEventListener('click', (e) => {
    if (e.target.innerText === 'caps lock') {
      capsState = !capsState;
    }
    if (capsState === true) {
      e.target.style.backgroundColor = 'red';
      l0.innerText = 'Q';
      l1.innerText = 'W';
      l2.innerText = 'E';
      l3.innerText = 'R';
      l4.innerText = 'T';
      l5.innerText = 'Y';
      l6.innerText = 'U';
      l7.innerText = 'I';
      l8.innerText = 'O';
      l9.innerText = 'P';
      l10.innerText = '{';
      l11.innerText = '}';
      l12.innerText = '|';
      z0.innerText = 'A';
      z1.innerText = 'S';
      z2.innerText = 'D';
      z3.innerText = 'F';
      z4.innerText = 'G';
      z5.innerText = 'H';
      z6.innerText = 'J';
      z7.innerText = 'K';
      z8.innerText = 'L';
      z9.innerText = ':';
      z10.innerText = '"';
      x0.innerText = 'Z';
      x1.innerText = 'X';
      x2.innerText = 'C';
      x3.innerText = 'V';
      x4.innerText = 'B';
      x5.innerText = 'N';
      x6.innerText = 'M';
      x7.innerText = '<';
      x8.innerText = '>';
      x9.innerText = '?';
    } else if (capsState === false) {
      e.target.style.backgroundColor = '#2f2f2fee';
      l0.innerText = 'q';
      l0.innerText = 'q';
      l1.innerText = 'w';
      l2.innerText = 'e';
      l3.innerText = 'r';
      l4.innerText = 't';
      l5.innerText = 'y';
      l6.innerText = 'u';
      l7.innerText = 'i';
      l8.innerText = 'o';
      l9.innerText = 'p';
      l10.innerText = '[';
      l11.innerText = ']';
      l12.innerText = '\\';
      z0.innerText = 'a';
      z1.innerText = 's';
      z2.innerText = 'd';
      z3.innerText = 'f';
      z4.innerText = 'g';
      z5.innerText = 'h';
      z6.innerText = 'j';
      z7.innerText = 'k';
      z8.innerText = 'l';
      z9.innerText = ';';
      z10.innerText = '\'';
      x0.innerText = 'z';
      x1.innerText = 'x';
      x2.innerText = 'c';
      x3.innerText = 'v';
      x4.innerText = 'b';
      x5.innerText = 'n';
      x6.innerText = 'm';
      x7.innerText = ',';
      x8.innerText = '.';
      x9.innerText = '/';
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (capsLockLogic);


/***/ }),

/***/ "./src/logic/keyPressLogic.js":
/*!************************************!*\
  !*** ./src/logic/keyPressLogic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function keyPressLogic() {
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Backquote') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(1)').style.backgroundColor = 'red';
    }
    if (e.code === 'Digit1') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(2)').style.backgroundColor = 'red';
    }
    if (e.code === 'Digit2') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(3)').style.backgroundColor = 'red';
    }
    if (e.code === 'Digit3') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(4)').style.backgroundColor = 'red';
    } if (e.code === 'Digit4') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(5)').style.backgroundColor = 'red';
    } if (e.code === 'Digit5') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(6)').style.backgroundColor = 'red';
    } if (e.code === 'Digit6') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(7)').style.backgroundColor = 'red';
    } if (e.code === 'Digit7') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(8)').style.backgroundColor = 'red';
    } if (e.code === 'Digit8') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(9)').style.backgroundColor = 'red';
    } if (e.code === 'Digit9') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(10)').style.backgroundColor = 'red';
    } if (e.code === 'Digit0') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(11)').style.backgroundColor = 'red';
    }
    if (e.code === 'Minus') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(12)').style.backgroundColor = 'red';
    } if (e.code === 'Equal') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(13)').style.backgroundColor = 'red';
    } if (e.code === 'Backspace') {
      document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(14)").style.backgroundColor = 'red';
    }

    if (e.code === "Tab"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(1)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyQ"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyW"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyE"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyR"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyT"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyY"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyU"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyI"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyO"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyP"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)").style.backgroundColor = 'red';
    }
    if (e.code === "BracketLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)").style.backgroundColor = 'red';
    }if (e.code === "BracketRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)").style.backgroundColor = 'red';
    }if (e.code === "Backslash"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)").style.backgroundColor = 'red';
    }

    if (e.code === "CapsLock"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(1)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyA"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyS"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyD"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyF"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyG"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyH"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyJ"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyK"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyL"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)").style.backgroundColor = 'red';
    }
    if (e.code === "Semicolon"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)").style.backgroundColor = 'red';
    }
    if (e.code === "Quote"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)").style.backgroundColor = 'red';
    }if (e.code === "Enter"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(13)").style.backgroundColor = 'red';
    }

    if (e.code === "ShiftLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(1)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyZ"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyX"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyC"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyV"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyB"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyN"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)").style.backgroundColor = 'red';
    }
    if (e.code === "KeyM"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)").style.backgroundColor = 'red';
    }
    if (e.code === "Comma"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)").style.backgroundColor = 'red';
    }
    if (e.code === "Period"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)").style.backgroundColor = 'red';
    }
    if (e.code === "Slash"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)").style.backgroundColor = 'red';
    }
    if (e.code === "Quote"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(12)").style.backgroundColor = 'red';
    }if (e.code === "ShiftRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(13)").style.backgroundColor = 'red';
    }


    if (e.code === "ControlLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(1)").style.backgroundColor = 'red';
    }
    if (e.code === "MetaLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(3)").style.backgroundColor = 'red';
    }
    if (e.code === "AltLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(4)").style.backgroundColor = 'red';
    }
    if (e.code === "Space"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(5)").style.backgroundColor = 'red';
    }
    if (e.code === "AltRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(6)").style.backgroundColor = 'red';
    }
    if (e.code === "ControlRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(10)").style.backgroundColor = 'red';
    }
    if (e.code === "ArrowLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(7)").style.backgroundColor = 'red';
    }
    if (e.code === "ArrowDown"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(8)").style.backgroundColor = 'red';
    }
    if (e.code === "ArrowRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(9)").style.backgroundColor = 'red';
    }
    if (e.code === "ArrowUp"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(12)").style.backgroundColor = 'red';
    }

    /// document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(12)")
    
  });
  window.addEventListener('keyup', (e) => {
    if (e.code === 'Backquote') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(1)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit1') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(2)').style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === 'Digit2') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(3)').style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === 'Digit3') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(4)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit4') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(5)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit5') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(6)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit6') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(7)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit7') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(8)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit8') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(9)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit9') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(10)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Digit0') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(11)').style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === 'Minus') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(12)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Equal') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(13)').style.backgroundColor = '#2f2f2fee';
    } if (e.code === 'Backspace') {
      document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(14)').style.backgroundColor = '#2f2f2fee';
    }

    if (e.code === "Tab"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(1)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyQ"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyW"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyE"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyR"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyT"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyY"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyU"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyI"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyO"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyP"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "BracketLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)").style.backgroundColor = '#2f2f2fee';
    }if (e.code === "BracketRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)").style.backgroundColor = '#2f2f2fee';
    }if (e.code === "Backslash"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)").style.backgroundColor = '#2f2f2fee';
    }




    if (e.code === "CapsLock"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(1)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyA"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyS"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyD"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyF"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyG"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyH"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyJ"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyK"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyL"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "Semicolon"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "Quote"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)").style.backgroundColor = '#2f2f2fee';
    }if (e.code === "Enter"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(13)").style.backgroundColor = '#2f2f2fee';
    }

    if (e.code === "ShiftLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(1)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyZ"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyX"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyC"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyV"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyB"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyN"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "KeyM"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "Comma"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "Period"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "Slash"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "Quote"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(12)").style.backgroundColor = '#2f2f2fee';
    }if (e.code === "ShiftRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(13)").style.backgroundColor = '#2f2f2fee';
    }




    if (e.code === "ControlLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(1)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "MetaLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(3)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "AltLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(4)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "Space"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(5)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "AltRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(6)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "ControlRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(10)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "ArrowLeft"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(7)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "ArrowDown"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(8)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "ArrowRight"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow4 > button:nth-child(9)").style.backgroundColor = '#2f2f2fee';
    }
    if (e.code === "ArrowUp"){
        document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(12)").style.backgroundColor = '#2f2f2fee';
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyPressLogic);


/***/ }),

/***/ "./src/logic/keyboardLogic.js":
/*!************************************!*\
  !*** ./src/logic/keyboardLogic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shiftLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shiftLogic */ "./src/logic/shiftLogic.js");
/* harmony import */ var _capsLockLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capsLockLogic */ "./src/logic/capsLockLogic.js");
/* harmony import */ var _keyPressLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyPressLogic */ "./src/logic/keyPressLogic.js");




function keyboardLogic() {
  const state = [];
  const keys = document.querySelector('body > div > div');
  const input = document.querySelector('body > div > textarea');

  function calculateInputValue(stateC) {
    return stateC.join('');
  }
  keys.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.innerText === "shift");
    if (e.target.innerText !== 'shift' && e.target.innerText !== 'caps lock') {
      state.push(e.target.innerText);
    }

    input.value = calculateInputValue(state);
  });

  (0,_shiftLogic__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_capsLockLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_keyPressLogic__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardLogic);


/***/ }),

/***/ "./src/logic/shiftLogic.js":
/*!*********************************!*\
  !*** ./src/logic/shiftLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shiftLogic = function () {
  let shiftstate = false;
  const shift = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(1)');
  const rightShift = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(13)');
  const k0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(1)');
  const k1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(2)');
  const k2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(3)');
  const k3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(4)');
  const k4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(5)');
  const k5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(6)');
  const k6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(7)');
  const k7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(8)');
  const k8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(9)');
  const k9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(10)');
  const k10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(11)');
  const k11 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(12)');
  const k12 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(13)');
  const l0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)');
  const l1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)');
  const l2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)');
  const l3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)');
  const l4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)');
  const l5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)');
  const l6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)');
  const l7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)');
  const l8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)');
  const l9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)');
  const l10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)');
  const l11 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)');
  const l12 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)');
  const z0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)');
  const z1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)');
  const z2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)');
  const z3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)');
  const z4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)');
  const z5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)');
  const z6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)');
  const z7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)');
  const z8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)');
  const z9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)');
  const z10 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)');

  const x0 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)');
  const x1 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)');
  const x2 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)');
  const x3 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)');
  const x4 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)');
  const x5 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)');
  const x6 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)');
  const x7 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)');
  const x8 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)');
  const x9 = document.querySelector('body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)');

  shift.addEventListener('click', (e) => {
    if (e.target.innerText === 'shift') {
      shiftstate = !shiftstate;
    }
    if (shiftstate === true) {
      e.target.style.backgroundColor = 'red';
      k0.innerText = '~';
      k1.innerText = '!';
      k2.innerText = '@';
      k3.innerText = '#';
      k4.innerText = '$';
      k5.innerText = '%';
      k6.innerText = '^';
      k7.innerText = '&';
      k8.innerText = '*';
      k9.innerText = '(';
      k10.innerText = ')';
      k11.innerText = '_';
      k12.innerText = '+';
      l0.innerText = 'Q';
      l1.innerText = 'W';
      l2.innerText = 'E';
      l3.innerText = 'R';
      l4.innerText = 'T';
      l5.innerText = 'Y';
      l6.innerText = 'U';
      l7.innerText = 'I';
      l8.innerText = 'O';
      l9.innerText = 'P';
      l10.innerText = '{';
      l11.innerText = '}';
      l12.innerText = '|';
      z0.innerText = 'A';
      z1.innerText = 'S';
      z2.innerText = 'D';
      z3.innerText = 'F';
      z4.innerText = 'G';
      z5.innerText = 'H';
      z6.innerText = 'J';
      z7.innerText = 'K';
      z8.innerText = 'L';
      z9.innerText = ':';
      z10.innerText = '"';
      x0.innerText = 'Z';
      x1.innerText = 'X';
      x2.innerText = 'C';
      x3.innerText = 'V';
      x4.innerText = 'B';
      x5.innerText = 'N';
      x6.innerText = 'M';
      x7.innerText = '<';
      x8.innerText = '>';
      x9.innerText = '?';
    } else if (shiftstate === false) {
      e.target.style.backgroundColor = '#2f2f2fee';
      k0.innerText = '`';
      k1.innerText = '1';
      k2.innerText = '2';
      k3.innerText = '3';
      k4.innerText = '4';
      k5.innerText = '5';
      k6.innerText = '6';
      k7.innerText = '7';
      k8.innerText = '8';
      k9.innerText = '9';
      k10.innerText = '0';
      k11.innerText = '-';
      k12.innerText = '=';
      l0.innerText = 'q';
      l0.innerText = 'q';
      l1.innerText = 'w';
      l2.innerText = 'e';
      l3.innerText = 'r';
      l4.innerText = 't';
      l5.innerText = 'y';
      l6.innerText = 'u';
      l7.innerText = 'i';
      l8.innerText = 'o';
      l9.innerText = 'p';
      l10.innerText = '[';
      l11.innerText = ']';
      l12.innerText = '\\';
      z0.innerText = 'a';
      z1.innerText = 's';
      z2.innerText = 'd';
      z3.innerText = 'f';
      z4.innerText = 'g';
      z5.innerText = 'h';
      z6.innerText = 'j';
      z7.innerText = 'k';
      z8.innerText = 'l';
      z9.innerText = ';';
      z10.innerText = '\'';
      x0.innerText = 'z';
      x1.innerText = 'x';
      x2.innerText = 'c';
      x3.innerText = 'v';
      x4.innerText = 'b';
      x5.innerText = 'n';
      x6.innerText = 'm';
      x7.innerText = ',';
      x8.innerText = '.';
      x9.innerText = '/';
    }
  });
  rightShift.addEventListener('click', (e) => {
    if (e.target.innerText === 'shift') {
      shiftstate = !shiftstate;
    }
    if (shiftstate === true) {
      e.target.style.backgroundColor = 'red';
      k0.innerText = '~';
      k1.innerText = '!';
      k2.innerText = '@';
      k3.innerText = '#';
      k4.innerText = '$';
      k5.innerText = '%';
      k6.innerText = '^';
      k7.innerText = '&';
      k8.innerText = '*';
      k9.innerText = '(';
      k10.innerText = ')';
      k11.innerText = '_';
      k12.innerText = '+';
      l0.innerText = 'Q';
      l1.innerText = 'W';
      l2.innerText = 'E';
      l3.innerText = 'R';
      l4.innerText = 'T';
      l5.innerText = 'Y';
      l6.innerText = 'U';
      l7.innerText = 'I';
      l8.innerText = 'O';
      l9.innerText = 'P';
      l10.innerText = '{';
      l11.innerText = '}';
      l12.innerText = '|';
      z0.innerText = 'A';
      z1.innerText = 'S';
      z2.innerText = 'D';
      z3.innerText = 'F';
      z4.innerText = 'G';
      z5.innerText = 'H';
      z6.innerText = 'J';
      z7.innerText = 'K';
      z8.innerText = 'L';
      z9.innerText = ':';
      z10.innerText = '"';
      x0.innerText = 'Z';
      x1.innerText = 'X';
      x2.innerText = 'C';
      x3.innerText = 'V';
      x4.innerText = 'B';
      x5.innerText = 'N';
      x6.innerText = 'M';
      x7.innerText = '<';
      x8.innerText = '>';
      x9.innerText = '?';
    } else if (shiftstate === false) {
      e.target.style.backgroundColor = '#2f2f2fee';
      k0.innerText = '`';
      k1.innerText = '1';
      k2.innerText = '2';
      k3.innerText = '3';
      k4.innerText = '4';
      k5.innerText = '5';
      k6.innerText = '6';
      k7.innerText = '7';
      k8.innerText = '8';
      k9.innerText = '9';
      k10.innerText = '0';
      k11.innerText = '-';
      k12.innerText = '=';
      l0.innerText = 'q';
      l0.innerText = 'q';
      l1.innerText = 'w';
      l2.innerText = 'e';
      l3.innerText = 'r';
      l4.innerText = 't';
      l5.innerText = 'y';
      l6.innerText = 'u';
      l7.innerText = 'i';
      l8.innerText = 'o';
      l9.innerText = 'p';
      l10.innerText = '[';
      l11.innerText = ']';
      l12.innerText = '\\';
      z0.innerText = 'a';
      z1.innerText = 's';
      z2.innerText = 'd';
      z3.innerText = 'f';
      z4.innerText = 'g';
      z5.innerText = 'h';
      z6.innerText = 'j';
      z7.innerText = 'k';
      z8.innerText = 'l';
      z9.innerText = ';';
      z10.innerText = '\'';
      x0.innerText = 'z';
      x1.innerText = 'x';
      x2.innerText = 'c';
      x3.innerText = 'v';
      x4.innerText = 'b';
      x5.innerText = 'n';
      x6.innerText = 'm';
      x7.innerText = ',';
      x8.innerText = '.';
      x9.innerText = '/';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shiftLogic);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appearance_keyboardAppearance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance/keyboardAppearance */ "./src/appearance/keyboardAppearance.js");
/* harmony import */ var _logic_keyboardLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/keyboardLogic */ "./src/logic/keyboardLogic.js");



(0,_appearance_keyboardAppearance__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_logic_keyboardLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BvQjtBQUNOOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsNERBQWU7QUFDakIsRUFBRSx5REFBWTtBQUNkOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0QmxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQSxnQ0FBZ0MsRUFBRTtBQUNsQztBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0gvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVhTO0FBQ007QUFDQTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLHVEQUFVO0FBQ1osRUFBRSwwREFBYTtBQUNmLEVBQUUsMERBQWE7QUFDZjs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNCN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ3pRMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUU7QUFDZjs7QUFFbEQsMEVBQWtCO0FBQ2xCLGdFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2FwcGVhcmFuY2UvY2hhbmdlTGF5b3V0LmpzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9hcHBlYXJhbmNlL2tleWJvYXJkQXBwZWFyYW5jZS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsa2V5Ym9hcmQvLi9zcmMvYXBwZWFyYW5jZS9rZXlib2FyZEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2xvZ2ljL2NhcHNMb2NrTG9naWMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2xvZ2ljL2tleVByZXNzTG9naWMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2xvZ2ljL2tleWJvYXJkTG9naWMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2xvZ2ljL3NoaWZ0TG9naWMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNoYW5nZUxheW91dChrZXlib2FyZFdyYXBwZXIpIHtcbiAgY29uc3QgaDEgPSBgVGhlIGtleWJvYXJkIHdhcyBjcmVhdGVkIGluIHRoZSBMaW51eC9HTlUgb3BlcmF0aW5nIHN5c3RlbVxuICAgIFRvIHN3aXRjaCB0aGUgbGFuZ3VhZ2UgY29tYmluYXRpb246IGxlZnQgbWV0YSArIHNwYWNlYDtcbiAgY29uc3QgaDFkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaDFkaXYuaW5uZXJUZXh0ID0gaDE7XG4gIGtleWJvYXJkV3JhcHBlci5hcHBlbmQoaDFkaXYpO1xufVxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlTGF5b3V0O1xuIiwiaW1wb3J0IGtleWJvYXJkQnV0dG5vcyBmcm9tICcuL2tleWJvYXJkQnV0dG9ucyc7XG5pbXBvcnQgY2hhbmdlTGF5b3V0IGZyb20gJy4vY2hhbmdlTGF5b3V0JztcblxuZnVuY3Rpb24ga2V5Ym9hcmRBcHBlYXJhbmNlKCkge1xuICAvLyBsZXQgbWFrZSBrZXlib2FyZENvbnRhaW5lclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBrZXlib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXIta2V5Ym9hcmQnKTtcbiAgYm9keS5wcmVwZW5kKGtleWJvYXJkQ29udGFpbmVyKTtcbiAgLy8gYWxzbyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBpbnB1dCBmaWVsZCBmb3Igb3VyIHZpcnR1YWwga2V5Ym9hcmRcbiAgY29uc3QgaW5wdXRGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgaW5wdXRGLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gIGtleWJvYXJkQ29udGFpbmVyLnByZXBlbmQoaW5wdXRGKTtcbiAgLy8gYWxzbyB3ZSBuZWVkIGEga2V5Ym9yYWQgd3JhcHBlclxuICBjb25zdCBrZXlib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX193cmFwcGVyJyk7XG4gIGtleWJvYXJkQ29udGFpbmVyLmFwcGVuZChrZXlib2FyZFdyYXBwZXIpO1xuXG4gIGtleWJvYXJkQnV0dG5vcyhrZXlib2FyZFdyYXBwZXIpO1xuICBjaGFuZ2VMYXlvdXQoa2V5Ym9hcmRDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlib2FyZEFwcGVhcmFuY2U7XG4iLCJmdW5jdGlvbiBrZXlib2FyZEJ1dHRub3Mod3IpIHtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzMSA9IFtcbiAgICAnYCcsXG4gICAgJzEnLFxuICAgICcyJyxcbiAgICAnMycsXG4gICAgJzQnLFxuICAgICc1JyxcbiAgICAnNicsXG4gICAgJzcnLFxuICAgICc4JyxcbiAgICAnOScsXG4gICAgJzAnLFxuICAgICctJyxcbiAgICAnPScsXG4gICAgJ2JhY2tzcGFjZScsXG4gIF07XG4gIGNvbnN0IGtleWJvYXJkS2V5czIgPSBbXG4gICAgJ3RhYicsXG4gICAgJ3EnLFxuICAgICd3JyxcbiAgICAnZScsXG4gICAgJ3InLFxuICAgICd0JyxcbiAgICAneScsXG4gICAgJ3UnLFxuICAgICdpJyxcbiAgICAnbycsXG4gICAgJ3AnLFxuICAgICdbJyxcbiAgICAnXScsXG4gICAgJ1xcXFwnLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXMzID0gW1xuICAgICdjYXBzIGxvY2snLFxuICAgICdhJyxcbiAgICAncycsXG4gICAgJ2QnLFxuICAgICdmJyxcbiAgICAnZycsXG4gICAgJ2gnLFxuICAgICdqJyxcbiAgICAnaycsXG4gICAgJ2wnLFxuICAgICc7JyxcbiAgICAnXFwnJyxcbiAgICAnZW50ZXInLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXM0ID0gW1xuICAgICdzaGlmdCcsXG4gICAgJ3onLFxuICAgICd4JyxcbiAgICAnYycsXG4gICAgJ3YnLFxuICAgICdiJyxcbiAgICAnbicsXG4gICAgJ20nLFxuICAgICcsJyxcbiAgICAnLicsXG4gICAgJy8nLFxuICAgICfvuL8nLFxuICAgICdzaGlmdCcsXG4gIF07XG4gIGNvbnN0IGtleWJvYXJkS2V5czUgPSBbXG4gICAgJ2N0cmwnLFxuICAgICdmbicsXG4gICAgJ+KMmCcsXG4gICAgJ2FsdCcsXG4gICAgJycsXG4gICAgJ2FsdCcsXG4gICAgJ+OAiCcsXG4gICAgJ++5gCcsXG4gICAgJ+OAiScsXG4gICAgJ2N0cmwnLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXMxQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZEtleXMxLm1hcCgoeCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHg7XG4gICAga2V5Ym9hcmRLZXlzMUMuYXBwZW5kKGJ1dHRvbik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSk7XG4gIHdyLmFwcGVuZChrZXlib2FyZEtleXMxQyk7XG4gIGNvbnN0IGtleWJvYXJkS2V5czJDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGtleWJvYXJkS2V5czIubWFwKCh4KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uaW5uZXJUZXh0ID0geDtcbiAgICBrZXlib2FyZEtleXMyQy5hcHBlbmQoYnV0dG9uKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9KTtcbiAgd3IuYXBwZW5kKGtleWJvYXJkS2V5czJDKTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzM0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRLZXlzMy5tYXAoKHgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB4O1xuICAgIGtleWJvYXJkS2V5czNDLmFwcGVuZChidXR0b24pO1xuICAgIHJldHVybiBidXR0b247XG4gIH0pO1xuICB3ci5hcHBlbmQoa2V5Ym9hcmRLZXlzM0MpO1xuICBjb25zdCBrZXlib2FyZEtleXM0QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZEtleXM0Lm1hcCgoeCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHg7XG4gICAga2V5Ym9hcmRLZXlzNEMuYXBwZW5kKGJ1dHRvbik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSk7XG4gIHdyLmFwcGVuZChrZXlib2FyZEtleXM0Qyk7XG4gIGNvbnN0IGtleWJvYXJkS2V5czVDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGtleWJvYXJkS2V5czUubWFwKCh4KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uaW5uZXJUZXh0ID0geDtcbiAgICBrZXlib2FyZEtleXM1Qy5hcHBlbmQoYnV0dG9uKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9KTtcbiAgd3IuYXBwZW5kKGtleWJvYXJkS2V5czVDKTtcbiAgY29uc3QgaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYnKS5jaGlsZHJlbjtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBpLmxlbmd0aDsgeCArPSAxKSB7XG4gICAgaVt4XS5jbGFzc0xpc3QuYWRkKCdrZXlSb3cnKTtcbiAgICBpW3hdLmNsYXNzTGlzdC5hZGQoYGtleVJvdyR7eH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlib2FyZEJ1dHRub3M7XG4iLCJmdW5jdGlvbiBjYXBzTG9ja0xvZ2ljKCkge1xuICBsZXQgY2Fwc1N0YXRlID0gZmFsc2U7XG4gIGNvbnN0IGNhcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICBjb25zdCBsMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gIGNvbnN0IGwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgY29uc3QgbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg0KScpO1xuICBjb25zdCBsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDUpJyk7XG4gIGNvbnN0IGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoNiknKTtcbiAgY29uc3QgbDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg3KScpO1xuICBjb25zdCBsNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDgpJyk7XG4gIGNvbnN0IGw3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoOSknKTtcbiAgY29uc3QgbDggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMCknKTtcbiAgY29uc3QgbDkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMSknKTtcbiAgY29uc3QgbDEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMTIpJyk7XG4gIGNvbnN0IGwxMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDEzKScpO1xuICBjb25zdCBsMTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxNCknKTtcbiAgY29uc3QgejAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuICBjb25zdCB6MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDMpJyk7XG4gIGNvbnN0IHoyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNCknKTtcbiAgY29uc3QgejMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg1KScpO1xuICBjb25zdCB6NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDYpJyk7XG4gIGNvbnN0IHo1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNyknKTtcbiAgY29uc3QgejYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg4KScpO1xuICBjb25zdCB6NyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDkpJyk7XG4gIGNvbnN0IHo4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTApJyk7XG4gIGNvbnN0IHo5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTEpJyk7XG4gIGNvbnN0IHoxMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDEyKScpO1xuICBjb25zdCB4MCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gIGNvbnN0IHgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgY29uc3QgeDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg0KScpO1xuICBjb25zdCB4MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDUpJyk7XG4gIGNvbnN0IHg0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNiknKTtcbiAgY29uc3QgeDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg3KScpO1xuICBjb25zdCB4NiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDgpJyk7XG4gIGNvbnN0IHg3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoOSknKTtcbiAgY29uc3QgeDggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgxMCknKTtcbiAgY29uc3QgeDkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgxMSknKTtcblxuICBjYXBzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnY2FwcyBsb2NrJykge1xuICAgICAgY2Fwc1N0YXRlID0gIWNhcHNTdGF0ZTtcbiAgICB9XG4gICAgaWYgKGNhcHNTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICBsMC5pbm5lclRleHQgPSAnUSc7XG4gICAgICBsMS5pbm5lclRleHQgPSAnVyc7XG4gICAgICBsMi5pbm5lclRleHQgPSAnRSc7XG4gICAgICBsMy5pbm5lclRleHQgPSAnUic7XG4gICAgICBsNC5pbm5lclRleHQgPSAnVCc7XG4gICAgICBsNS5pbm5lclRleHQgPSAnWSc7XG4gICAgICBsNi5pbm5lclRleHQgPSAnVSc7XG4gICAgICBsNy5pbm5lclRleHQgPSAnSSc7XG4gICAgICBsOC5pbm5lclRleHQgPSAnTyc7XG4gICAgICBsOS5pbm5lclRleHQgPSAnUCc7XG4gICAgICBsMTAuaW5uZXJUZXh0ID0gJ3snO1xuICAgICAgbDExLmlubmVyVGV4dCA9ICd9JztcbiAgICAgIGwxMi5pbm5lclRleHQgPSAnfCc7XG4gICAgICB6MC5pbm5lclRleHQgPSAnQSc7XG4gICAgICB6MS5pbm5lclRleHQgPSAnUyc7XG4gICAgICB6Mi5pbm5lclRleHQgPSAnRCc7XG4gICAgICB6My5pbm5lclRleHQgPSAnRic7XG4gICAgICB6NC5pbm5lclRleHQgPSAnRyc7XG4gICAgICB6NS5pbm5lclRleHQgPSAnSCc7XG4gICAgICB6Ni5pbm5lclRleHQgPSAnSic7XG4gICAgICB6Ny5pbm5lclRleHQgPSAnSyc7XG4gICAgICB6OC5pbm5lclRleHQgPSAnTCc7XG4gICAgICB6OS5pbm5lclRleHQgPSAnOic7XG4gICAgICB6MTAuaW5uZXJUZXh0ID0gJ1wiJztcbiAgICAgIHgwLmlubmVyVGV4dCA9ICdaJztcbiAgICAgIHgxLmlubmVyVGV4dCA9ICdYJztcbiAgICAgIHgyLmlubmVyVGV4dCA9ICdDJztcbiAgICAgIHgzLmlubmVyVGV4dCA9ICdWJztcbiAgICAgIHg0LmlubmVyVGV4dCA9ICdCJztcbiAgICAgIHg1LmlubmVyVGV4dCA9ICdOJztcbiAgICAgIHg2LmlubmVyVGV4dCA9ICdNJztcbiAgICAgIHg3LmlubmVyVGV4dCA9ICc8JztcbiAgICAgIHg4LmlubmVyVGV4dCA9ICc+JztcbiAgICAgIHg5LmlubmVyVGV4dCA9ICc/JztcbiAgICB9IGVsc2UgaWYgKGNhcHNTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgICAgbDAuaW5uZXJUZXh0ID0gJ3EnO1xuICAgICAgbDAuaW5uZXJUZXh0ID0gJ3EnO1xuICAgICAgbDEuaW5uZXJUZXh0ID0gJ3cnO1xuICAgICAgbDIuaW5uZXJUZXh0ID0gJ2UnO1xuICAgICAgbDMuaW5uZXJUZXh0ID0gJ3InO1xuICAgICAgbDQuaW5uZXJUZXh0ID0gJ3QnO1xuICAgICAgbDUuaW5uZXJUZXh0ID0gJ3knO1xuICAgICAgbDYuaW5uZXJUZXh0ID0gJ3UnO1xuICAgICAgbDcuaW5uZXJUZXh0ID0gJ2knO1xuICAgICAgbDguaW5uZXJUZXh0ID0gJ28nO1xuICAgICAgbDkuaW5uZXJUZXh0ID0gJ3AnO1xuICAgICAgbDEwLmlubmVyVGV4dCA9ICdbJztcbiAgICAgIGwxMS5pbm5lclRleHQgPSAnXSc7XG4gICAgICBsMTIuaW5uZXJUZXh0ID0gJ1xcXFwnO1xuICAgICAgejAuaW5uZXJUZXh0ID0gJ2EnO1xuICAgICAgejEuaW5uZXJUZXh0ID0gJ3MnO1xuICAgICAgejIuaW5uZXJUZXh0ID0gJ2QnO1xuICAgICAgejMuaW5uZXJUZXh0ID0gJ2YnO1xuICAgICAgejQuaW5uZXJUZXh0ID0gJ2cnO1xuICAgICAgejUuaW5uZXJUZXh0ID0gJ2gnO1xuICAgICAgejYuaW5uZXJUZXh0ID0gJ2onO1xuICAgICAgejcuaW5uZXJUZXh0ID0gJ2snO1xuICAgICAgejguaW5uZXJUZXh0ID0gJ2wnO1xuICAgICAgejkuaW5uZXJUZXh0ID0gJzsnO1xuICAgICAgejEwLmlubmVyVGV4dCA9ICdcXCcnO1xuICAgICAgeDAuaW5uZXJUZXh0ID0gJ3onO1xuICAgICAgeDEuaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgeDIuaW5uZXJUZXh0ID0gJ2MnO1xuICAgICAgeDMuaW5uZXJUZXh0ID0gJ3YnO1xuICAgICAgeDQuaW5uZXJUZXh0ID0gJ2InO1xuICAgICAgeDUuaW5uZXJUZXh0ID0gJ24nO1xuICAgICAgeDYuaW5uZXJUZXh0ID0gJ20nO1xuICAgICAgeDcuaW5uZXJUZXh0ID0gJywnO1xuICAgICAgeDguaW5uZXJUZXh0ID0gJy4nO1xuICAgICAgeDkuaW5uZXJUZXh0ID0gJy8nO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcHNMb2NrTG9naWM7XG4iLCJmdW5jdGlvbiBrZXlQcmVzc0xvZ2ljKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0JhY2txdW90ZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEpJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDEnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgyKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQyJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0MycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDQpJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfSBpZiAoZS5jb2RlID09PSAnRGlnaXQ0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoNSknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9IGlmIChlLmNvZGUgPT09ICdEaWdpdDUnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg2KScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0RpZ2l0NicpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDcpJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfSBpZiAoZS5jb2RlID09PSAnRGlnaXQ3Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoOCknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9IGlmIChlLmNvZGUgPT09ICdEaWdpdDgnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg5KScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0RpZ2l0OScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEwKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0RpZ2l0MCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDExKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSAnTWludXMnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgxMiknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9IGlmIChlLmNvZGUgPT09ICdFcXVhbCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEzKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgxNClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuXG4gICAgaWYgKGUuY29kZSA9PT0gXCJUYWJcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlRXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMilcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5V1wiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDMpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleUVcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg0KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlSXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoNSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5VFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDYpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVlcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg3KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlVXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoOClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5SVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDkpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleU9cIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5UFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJCcmFja2V0TGVmdFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9aWYgKGUuY29kZSA9PT0gXCJCcmFja2V0UmlnaHRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMylcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfWlmIChlLmNvZGUgPT09IFwiQmFja3NsYXNoXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMTQpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cblxuICAgIGlmIChlLmNvZGUgPT09IFwiQ2Fwc0xvY2tcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgxKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlBXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMilcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5U1wiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDMpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleURcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg0KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlGXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5R1wiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDYpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleUhcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg3KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlKXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoOClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5S1wiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDkpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleUxcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgxMClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiU2VtaWNvbG9uXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTEpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIlF1b3RlXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTIpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1pZiAoZS5jb2RlID09PSBcIkVudGVyXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTMpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cblxuICAgIGlmIChlLmNvZGUgPT09IFwiU2hpZnRMZWZ0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5WlwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDIpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVhcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgzKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlDXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5VlwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDUpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleUJcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg2KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlOXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNylcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5TVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDgpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIkNvbW1hXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoOSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiUGVyaW9kXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMTApXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIlNsYXNoXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMTEpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIlF1b3RlXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMTIpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1pZiAoZS5jb2RlID09PSBcIlNoaWZ0UmlnaHRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgxMylcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuXG5cbiAgICBpZiAoZS5jb2RlID09PSBcIkNvbnRyb2xMZWZ0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93NCA+IGJ1dHRvbjpudGgtY2hpbGQoMSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiTWV0YUxlZnRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3c0ID4gYnV0dG9uOm50aC1jaGlsZCgzKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJBbHRMZWZ0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93NCA+IGJ1dHRvbjpudGgtY2hpbGQoNClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiU3BhY2VcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3c0ID4gYnV0dG9uOm50aC1jaGlsZCg1KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJBbHRSaWdodFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzQgPiBidXR0b246bnRoLWNoaWxkKDYpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIkNvbnRyb2xSaWdodFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzQgPiBidXR0b246bnRoLWNoaWxkKDEwKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3c0ID4gYnV0dG9uOm50aC1jaGlsZCg3KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd0Rvd25cIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3c0ID4gYnV0dG9uOm50aC1jaGlsZCg4KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93NCA+IGJ1dHRvbjpudGgtY2hpbGQoOSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiQXJyb3dVcFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9XG5cbiAgICAvLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKVxuICAgIFxuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnQmFja3F1b3RlJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9IGlmIChlLmNvZGUgPT09ICdEaWdpdDEnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgyKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQyJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0MycpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDQpJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfSBpZiAoZS5jb2RlID09PSAnRGlnaXQ0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoNSknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9IGlmIChlLmNvZGUgPT09ICdEaWdpdDUnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg2KScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0RpZ2l0NicpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDcpJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfSBpZiAoZS5jb2RlID09PSAnRGlnaXQ3Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoOCknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9IGlmIChlLmNvZGUgPT09ICdEaWdpdDgnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg5KScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0RpZ2l0OScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEwKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0RpZ2l0MCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDExKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSAnTWludXMnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgxMiknKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9IGlmIChlLmNvZGUgPT09ICdFcXVhbCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEzKScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH0gaWYgKGUuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDE0KScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cblxuICAgIGlmIChlLmNvZGUgPT09IFwiVGFiXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5UVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDIpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVdcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgzKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlFXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoNClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5UlwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDUpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg2KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlZXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoNylcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5VVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDgpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleUlcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg5KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlPXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMTApXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVBcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiQnJhY2tldExlZnRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMilcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfWlmIChlLmNvZGUgPT09IFwiQnJhY2tldFJpZ2h0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMTMpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1pZiAoZS5jb2RlID09PSBcIkJhY2tzbGFzaFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDE0KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG5cblxuXG5cbiAgICBpZiAoZS5jb2RlID09PSBcIkNhcHNMb2NrXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMSlcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5QVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDIpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVNcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgzKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlEXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNClcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5RlwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDUpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleUdcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg2KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlIXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNylcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5SlwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDgpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleUtcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg5KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlMXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTApXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIlNlbWljb2xvblwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJRdW90ZVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9aWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDEzKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG5cbiAgICBpZiAoZS5jb2RlID09PSBcIlNoaWZ0TGVmdFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDEpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVpcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgyKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlYXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMylcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5Q1wiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDQpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleVZcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg1KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJLZXlCXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNilcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiS2V5TlwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDcpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIktleU1cIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg4KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJDb21tYVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDkpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIlBlcmlvZFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDEwKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJTbGFzaFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJRdW90ZVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9aWYgKGUuY29kZSA9PT0gXCJTaGlmdFJpZ2h0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMTMpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cblxuXG5cblxuICAgIGlmIChlLmNvZGUgPT09IFwiQ29udHJvbExlZnRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3c0ID4gYnV0dG9uOm50aC1jaGlsZCgxKVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJNZXRhTGVmdFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzQgPiBidXR0b246bnRoLWNoaWxkKDMpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIkFsdExlZnRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3c0ID4gYnV0dG9uOm50aC1jaGlsZCg0KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJTcGFjZVwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzQgPiBidXR0b246bnRoLWNoaWxkKDUpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIkFsdFJpZ2h0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93NCA+IGJ1dHRvbjpudGgtY2hpbGQoNilcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgfVxuICAgIGlmIChlLmNvZGUgPT09IFwiQ29udHJvbFJpZ2h0XCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93NCA+IGJ1dHRvbjpudGgtY2hpbGQoMTApXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIkFycm93TGVmdFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzQgPiBidXR0b246bnRoLWNoaWxkKDcpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIkFycm93RG93blwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzQgPiBidXR0b246bnRoLWNoaWxkKDgpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgICBpZiAoZS5jb2RlID09PSBcIkFycm93UmlnaHRcIil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3c0ID4gYnV0dG9uOm50aC1jaGlsZCg5KVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzJmMmYyZmVlJztcbiAgICB9XG4gICAgaWYgKGUuY29kZSA9PT0gXCJBcnJvd1VwXCIpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMTIpXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGtleVByZXNzTG9naWM7XG4iLCJpbXBvcnQgc2hpZnRMb2dpYyBmcm9tICcuL3NoaWZ0TG9naWMnO1xuaW1wb3J0IGNhcHNMb2NrTG9naWMgZnJvbSAnLi9jYXBzTG9ja0xvZ2ljJztcbmltcG9ydCBrZXlQcmVzc0xvZ2ljIGZyb20gJy4va2V5UHJlc3NMb2dpYyc7XG5cbmZ1bmN0aW9uIGtleWJvYXJkTG9naWMoKSB7XG4gIGNvbnN0IHN0YXRlID0gW107XG4gIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2Jyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IHRleHRhcmVhJyk7XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlSW5wdXRWYWx1ZShzdGF0ZUMpIHtcbiAgICByZXR1cm4gc3RhdGVDLmpvaW4oJycpO1xuICB9XG4gIGtleXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQgPT09IFwic2hpZnRcIik7XG4gICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCAhPT0gJ3NoaWZ0JyAmJiBlLnRhcmdldC5pbm5lclRleHQgIT09ICdjYXBzIGxvY2snKSB7XG4gICAgICBzdGF0ZS5wdXNoKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgfVxuXG4gICAgaW5wdXQudmFsdWUgPSBjYWxjdWxhdGVJbnB1dFZhbHVlKHN0YXRlKTtcbiAgfSk7XG5cbiAgc2hpZnRMb2dpYygpO1xuICBjYXBzTG9ja0xvZ2ljKCk7XG4gIGtleVByZXNzTG9naWMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5Ym9hcmRMb2dpYztcbiIsImNvbnN0IHNoaWZ0TG9naWMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBzaGlmdHN0YXRlID0gZmFsc2U7XG4gIGNvbnN0IHNoaWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgY29uc3QgcmlnaHRTaGlmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDEzKScpO1xuICBjb25zdCBrMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gIGNvbnN0IGsxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcbiAgY29uc3QgazIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgzKScpO1xuICBjb25zdCBrMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDQpJyk7XG4gIGNvbnN0IGs0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoNSknKTtcbiAgY29uc3QgazUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg2KScpO1xuICBjb25zdCBrNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDcpJyk7XG4gIGNvbnN0IGs3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoOCknKTtcbiAgY29uc3QgazggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg5KScpO1xuICBjb25zdCBrOSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEwKScpO1xuICBjb25zdCBrMTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgxMSknKTtcbiAgY29uc3QgazExID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoMTIpJyk7XG4gIGNvbnN0IGsxMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEzKScpO1xuICBjb25zdCBsMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG4gIGNvbnN0IGwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMyknKTtcbiAgY29uc3QgbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg0KScpO1xuICBjb25zdCBsMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDUpJyk7XG4gIGNvbnN0IGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoNiknKTtcbiAgY29uc3QgbDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg3KScpO1xuICBjb25zdCBsNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDgpJyk7XG4gIGNvbnN0IGw3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoOSknKTtcbiAgY29uc3QgbDggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMCknKTtcbiAgY29uc3QgbDkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMSknKTtcbiAgY29uc3QgbDEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMTIpJyk7XG4gIGNvbnN0IGwxMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDEzKScpO1xuICBjb25zdCBsMTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxNCknKTtcbiAgY29uc3QgejAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuICBjb25zdCB6MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDMpJyk7XG4gIGNvbnN0IHoyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNCknKTtcbiAgY29uc3QgejMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg1KScpO1xuICBjb25zdCB6NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDYpJyk7XG4gIGNvbnN0IHo1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNyknKTtcbiAgY29uc3QgejYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg4KScpO1xuICBjb25zdCB6NyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDkpJyk7XG4gIGNvbnN0IHo4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTApJyk7XG4gIGNvbnN0IHo5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTEpJyk7XG4gIGNvbnN0IHoxMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDEyKScpO1xuXG4gIGNvbnN0IHgwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcbiAgY29uc3QgeDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgzKScpO1xuICBjb25zdCB4MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDQpJyk7XG4gIGNvbnN0IHgzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNSknKTtcbiAgY29uc3QgeDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg2KScpO1xuICBjb25zdCB4NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDcpJyk7XG4gIGNvbnN0IHg2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoOCknKTtcbiAgY29uc3QgeDcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg5KScpO1xuICBjb25zdCB4OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDEwKScpO1xuICBjb25zdCB4OSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDExKScpO1xuXG4gIHNoaWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnc2hpZnQnKSB7XG4gICAgICBzaGlmdHN0YXRlID0gIXNoaWZ0c3RhdGU7XG4gICAgfVxuICAgIGlmIChzaGlmdHN0YXRlID09PSB0cnVlKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgIGswLmlubmVyVGV4dCA9ICd+JztcbiAgICAgIGsxLmlubmVyVGV4dCA9ICchJztcbiAgICAgIGsyLmlubmVyVGV4dCA9ICdAJztcbiAgICAgIGszLmlubmVyVGV4dCA9ICcjJztcbiAgICAgIGs0LmlubmVyVGV4dCA9ICckJztcbiAgICAgIGs1LmlubmVyVGV4dCA9ICclJztcbiAgICAgIGs2LmlubmVyVGV4dCA9ICdeJztcbiAgICAgIGs3LmlubmVyVGV4dCA9ICcmJztcbiAgICAgIGs4LmlubmVyVGV4dCA9ICcqJztcbiAgICAgIGs5LmlubmVyVGV4dCA9ICcoJztcbiAgICAgIGsxMC5pbm5lclRleHQgPSAnKSc7XG4gICAgICBrMTEuaW5uZXJUZXh0ID0gJ18nO1xuICAgICAgazEyLmlubmVyVGV4dCA9ICcrJztcbiAgICAgIGwwLmlubmVyVGV4dCA9ICdRJztcbiAgICAgIGwxLmlubmVyVGV4dCA9ICdXJztcbiAgICAgIGwyLmlubmVyVGV4dCA9ICdFJztcbiAgICAgIGwzLmlubmVyVGV4dCA9ICdSJztcbiAgICAgIGw0LmlubmVyVGV4dCA9ICdUJztcbiAgICAgIGw1LmlubmVyVGV4dCA9ICdZJztcbiAgICAgIGw2LmlubmVyVGV4dCA9ICdVJztcbiAgICAgIGw3LmlubmVyVGV4dCA9ICdJJztcbiAgICAgIGw4LmlubmVyVGV4dCA9ICdPJztcbiAgICAgIGw5LmlubmVyVGV4dCA9ICdQJztcbiAgICAgIGwxMC5pbm5lclRleHQgPSAneyc7XG4gICAgICBsMTEuaW5uZXJUZXh0ID0gJ30nO1xuICAgICAgbDEyLmlubmVyVGV4dCA9ICd8JztcbiAgICAgIHowLmlubmVyVGV4dCA9ICdBJztcbiAgICAgIHoxLmlubmVyVGV4dCA9ICdTJztcbiAgICAgIHoyLmlubmVyVGV4dCA9ICdEJztcbiAgICAgIHozLmlubmVyVGV4dCA9ICdGJztcbiAgICAgIHo0LmlubmVyVGV4dCA9ICdHJztcbiAgICAgIHo1LmlubmVyVGV4dCA9ICdIJztcbiAgICAgIHo2LmlubmVyVGV4dCA9ICdKJztcbiAgICAgIHo3LmlubmVyVGV4dCA9ICdLJztcbiAgICAgIHo4LmlubmVyVGV4dCA9ICdMJztcbiAgICAgIHo5LmlubmVyVGV4dCA9ICc6JztcbiAgICAgIHoxMC5pbm5lclRleHQgPSAnXCInO1xuICAgICAgeDAuaW5uZXJUZXh0ID0gJ1onO1xuICAgICAgeDEuaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgeDIuaW5uZXJUZXh0ID0gJ0MnO1xuICAgICAgeDMuaW5uZXJUZXh0ID0gJ1YnO1xuICAgICAgeDQuaW5uZXJUZXh0ID0gJ0InO1xuICAgICAgeDUuaW5uZXJUZXh0ID0gJ04nO1xuICAgICAgeDYuaW5uZXJUZXh0ID0gJ00nO1xuICAgICAgeDcuaW5uZXJUZXh0ID0gJzwnO1xuICAgICAgeDguaW5uZXJUZXh0ID0gJz4nO1xuICAgICAgeDkuaW5uZXJUZXh0ID0gJz8nO1xuICAgIH0gZWxzZSBpZiAoc2hpZnRzdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMmYyZjJmZWUnO1xuICAgICAgazAuaW5uZXJUZXh0ID0gJ2AnO1xuICAgICAgazEuaW5uZXJUZXh0ID0gJzEnO1xuICAgICAgazIuaW5uZXJUZXh0ID0gJzInO1xuICAgICAgazMuaW5uZXJUZXh0ID0gJzMnO1xuICAgICAgazQuaW5uZXJUZXh0ID0gJzQnO1xuICAgICAgazUuaW5uZXJUZXh0ID0gJzUnO1xuICAgICAgazYuaW5uZXJUZXh0ID0gJzYnO1xuICAgICAgazcuaW5uZXJUZXh0ID0gJzcnO1xuICAgICAgazguaW5uZXJUZXh0ID0gJzgnO1xuICAgICAgazkuaW5uZXJUZXh0ID0gJzknO1xuICAgICAgazEwLmlubmVyVGV4dCA9ICcwJztcbiAgICAgIGsxMS5pbm5lclRleHQgPSAnLSc7XG4gICAgICBrMTIuaW5uZXJUZXh0ID0gJz0nO1xuICAgICAgbDAuaW5uZXJUZXh0ID0gJ3EnO1xuICAgICAgbDAuaW5uZXJUZXh0ID0gJ3EnO1xuICAgICAgbDEuaW5uZXJUZXh0ID0gJ3cnO1xuICAgICAgbDIuaW5uZXJUZXh0ID0gJ2UnO1xuICAgICAgbDMuaW5uZXJUZXh0ID0gJ3InO1xuICAgICAgbDQuaW5uZXJUZXh0ID0gJ3QnO1xuICAgICAgbDUuaW5uZXJUZXh0ID0gJ3knO1xuICAgICAgbDYuaW5uZXJUZXh0ID0gJ3UnO1xuICAgICAgbDcuaW5uZXJUZXh0ID0gJ2knO1xuICAgICAgbDguaW5uZXJUZXh0ID0gJ28nO1xuICAgICAgbDkuaW5uZXJUZXh0ID0gJ3AnO1xuICAgICAgbDEwLmlubmVyVGV4dCA9ICdbJztcbiAgICAgIGwxMS5pbm5lclRleHQgPSAnXSc7XG4gICAgICBsMTIuaW5uZXJUZXh0ID0gJ1xcXFwnO1xuICAgICAgejAuaW5uZXJUZXh0ID0gJ2EnO1xuICAgICAgejEuaW5uZXJUZXh0ID0gJ3MnO1xuICAgICAgejIuaW5uZXJUZXh0ID0gJ2QnO1xuICAgICAgejMuaW5uZXJUZXh0ID0gJ2YnO1xuICAgICAgejQuaW5uZXJUZXh0ID0gJ2cnO1xuICAgICAgejUuaW5uZXJUZXh0ID0gJ2gnO1xuICAgICAgejYuaW5uZXJUZXh0ID0gJ2onO1xuICAgICAgejcuaW5uZXJUZXh0ID0gJ2snO1xuICAgICAgejguaW5uZXJUZXh0ID0gJ2wnO1xuICAgICAgejkuaW5uZXJUZXh0ID0gJzsnO1xuICAgICAgejEwLmlubmVyVGV4dCA9ICdcXCcnO1xuICAgICAgeDAuaW5uZXJUZXh0ID0gJ3onO1xuICAgICAgeDEuaW5uZXJUZXh0ID0gJ3gnO1xuICAgICAgeDIuaW5uZXJUZXh0ID0gJ2MnO1xuICAgICAgeDMuaW5uZXJUZXh0ID0gJ3YnO1xuICAgICAgeDQuaW5uZXJUZXh0ID0gJ2InO1xuICAgICAgeDUuaW5uZXJUZXh0ID0gJ24nO1xuICAgICAgeDYuaW5uZXJUZXh0ID0gJ20nO1xuICAgICAgeDcuaW5uZXJUZXh0ID0gJywnO1xuICAgICAgeDguaW5uZXJUZXh0ID0gJy4nO1xuICAgICAgeDkuaW5uZXJUZXh0ID0gJy8nO1xuICAgIH1cbiAgfSk7XG4gIHJpZ2h0U2hpZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdzaGlmdCcpIHtcbiAgICAgIHNoaWZ0c3RhdGUgPSAhc2hpZnRzdGF0ZTtcbiAgICB9XG4gICAgaWYgKHNoaWZ0c3RhdGUgPT09IHRydWUpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgazAuaW5uZXJUZXh0ID0gJ34nO1xuICAgICAgazEuaW5uZXJUZXh0ID0gJyEnO1xuICAgICAgazIuaW5uZXJUZXh0ID0gJ0AnO1xuICAgICAgazMuaW5uZXJUZXh0ID0gJyMnO1xuICAgICAgazQuaW5uZXJUZXh0ID0gJyQnO1xuICAgICAgazUuaW5uZXJUZXh0ID0gJyUnO1xuICAgICAgazYuaW5uZXJUZXh0ID0gJ14nO1xuICAgICAgazcuaW5uZXJUZXh0ID0gJyYnO1xuICAgICAgazguaW5uZXJUZXh0ID0gJyonO1xuICAgICAgazkuaW5uZXJUZXh0ID0gJygnO1xuICAgICAgazEwLmlubmVyVGV4dCA9ICcpJztcbiAgICAgIGsxMS5pbm5lclRleHQgPSAnXyc7XG4gICAgICBrMTIuaW5uZXJUZXh0ID0gJysnO1xuICAgICAgbDAuaW5uZXJUZXh0ID0gJ1EnO1xuICAgICAgbDEuaW5uZXJUZXh0ID0gJ1cnO1xuICAgICAgbDIuaW5uZXJUZXh0ID0gJ0UnO1xuICAgICAgbDMuaW5uZXJUZXh0ID0gJ1InO1xuICAgICAgbDQuaW5uZXJUZXh0ID0gJ1QnO1xuICAgICAgbDUuaW5uZXJUZXh0ID0gJ1knO1xuICAgICAgbDYuaW5uZXJUZXh0ID0gJ1UnO1xuICAgICAgbDcuaW5uZXJUZXh0ID0gJ0knO1xuICAgICAgbDguaW5uZXJUZXh0ID0gJ08nO1xuICAgICAgbDkuaW5uZXJUZXh0ID0gJ1AnO1xuICAgICAgbDEwLmlubmVyVGV4dCA9ICd7JztcbiAgICAgIGwxMS5pbm5lclRleHQgPSAnfSc7XG4gICAgICBsMTIuaW5uZXJUZXh0ID0gJ3wnO1xuICAgICAgejAuaW5uZXJUZXh0ID0gJ0EnO1xuICAgICAgejEuaW5uZXJUZXh0ID0gJ1MnO1xuICAgICAgejIuaW5uZXJUZXh0ID0gJ0QnO1xuICAgICAgejMuaW5uZXJUZXh0ID0gJ0YnO1xuICAgICAgejQuaW5uZXJUZXh0ID0gJ0cnO1xuICAgICAgejUuaW5uZXJUZXh0ID0gJ0gnO1xuICAgICAgejYuaW5uZXJUZXh0ID0gJ0onO1xuICAgICAgejcuaW5uZXJUZXh0ID0gJ0snO1xuICAgICAgejguaW5uZXJUZXh0ID0gJ0wnO1xuICAgICAgejkuaW5uZXJUZXh0ID0gJzonO1xuICAgICAgejEwLmlubmVyVGV4dCA9ICdcIic7XG4gICAgICB4MC5pbm5lclRleHQgPSAnWic7XG4gICAgICB4MS5pbm5lclRleHQgPSAnWCc7XG4gICAgICB4Mi5pbm5lclRleHQgPSAnQyc7XG4gICAgICB4My5pbm5lclRleHQgPSAnVic7XG4gICAgICB4NC5pbm5lclRleHQgPSAnQic7XG4gICAgICB4NS5pbm5lclRleHQgPSAnTic7XG4gICAgICB4Ni5pbm5lclRleHQgPSAnTSc7XG4gICAgICB4Ny5pbm5lclRleHQgPSAnPCc7XG4gICAgICB4OC5pbm5lclRleHQgPSAnPic7XG4gICAgICB4OS5pbm5lclRleHQgPSAnPyc7XG4gICAgfSBlbHNlIGlmIChzaGlmdHN0YXRlID09PSBmYWxzZSkge1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMyZjJmMmZlZSc7XG4gICAgICBrMC5pbm5lclRleHQgPSAnYCc7XG4gICAgICBrMS5pbm5lclRleHQgPSAnMSc7XG4gICAgICBrMi5pbm5lclRleHQgPSAnMic7XG4gICAgICBrMy5pbm5lclRleHQgPSAnMyc7XG4gICAgICBrNC5pbm5lclRleHQgPSAnNCc7XG4gICAgICBrNS5pbm5lclRleHQgPSAnNSc7XG4gICAgICBrNi5pbm5lclRleHQgPSAnNic7XG4gICAgICBrNy5pbm5lclRleHQgPSAnNyc7XG4gICAgICBrOC5pbm5lclRleHQgPSAnOCc7XG4gICAgICBrOS5pbm5lclRleHQgPSAnOSc7XG4gICAgICBrMTAuaW5uZXJUZXh0ID0gJzAnO1xuICAgICAgazExLmlubmVyVGV4dCA9ICctJztcbiAgICAgIGsxMi5pbm5lclRleHQgPSAnPSc7XG4gICAgICBsMC5pbm5lclRleHQgPSAncSc7XG4gICAgICBsMC5pbm5lclRleHQgPSAncSc7XG4gICAgICBsMS5pbm5lclRleHQgPSAndyc7XG4gICAgICBsMi5pbm5lclRleHQgPSAnZSc7XG4gICAgICBsMy5pbm5lclRleHQgPSAncic7XG4gICAgICBsNC5pbm5lclRleHQgPSAndCc7XG4gICAgICBsNS5pbm5lclRleHQgPSAneSc7XG4gICAgICBsNi5pbm5lclRleHQgPSAndSc7XG4gICAgICBsNy5pbm5lclRleHQgPSAnaSc7XG4gICAgICBsOC5pbm5lclRleHQgPSAnbyc7XG4gICAgICBsOS5pbm5lclRleHQgPSAncCc7XG4gICAgICBsMTAuaW5uZXJUZXh0ID0gJ1snO1xuICAgICAgbDExLmlubmVyVGV4dCA9ICddJztcbiAgICAgIGwxMi5pbm5lclRleHQgPSAnXFxcXCc7XG4gICAgICB6MC5pbm5lclRleHQgPSAnYSc7XG4gICAgICB6MS5pbm5lclRleHQgPSAncyc7XG4gICAgICB6Mi5pbm5lclRleHQgPSAnZCc7XG4gICAgICB6My5pbm5lclRleHQgPSAnZic7XG4gICAgICB6NC5pbm5lclRleHQgPSAnZyc7XG4gICAgICB6NS5pbm5lclRleHQgPSAnaCc7XG4gICAgICB6Ni5pbm5lclRleHQgPSAnaic7XG4gICAgICB6Ny5pbm5lclRleHQgPSAnayc7XG4gICAgICB6OC5pbm5lclRleHQgPSAnbCc7XG4gICAgICB6OS5pbm5lclRleHQgPSAnOyc7XG4gICAgICB6MTAuaW5uZXJUZXh0ID0gJ1xcJyc7XG4gICAgICB4MC5pbm5lclRleHQgPSAneic7XG4gICAgICB4MS5pbm5lclRleHQgPSAneCc7XG4gICAgICB4Mi5pbm5lclRleHQgPSAnYyc7XG4gICAgICB4My5pbm5lclRleHQgPSAndic7XG4gICAgICB4NC5pbm5lclRleHQgPSAnYic7XG4gICAgICB4NS5pbm5lclRleHQgPSAnbic7XG4gICAgICB4Ni5pbm5lclRleHQgPSAnbSc7XG4gICAgICB4Ny5pbm5lclRleHQgPSAnLCc7XG4gICAgICB4OC5pbm5lclRleHQgPSAnLic7XG4gICAgICB4OS5pbm5lclRleHQgPSAnLyc7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaWZ0TG9naWM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBrZXlib2FyZEFwcGVhcmFuY2UgZnJvbSAnLi9hcHBlYXJhbmNlL2tleWJvYXJkQXBwZWFyYW5jZSc7XG5pbXBvcnQga2V5Ym9hcmRMb2dpYyBmcm9tICcuL2xvZ2ljL2tleWJvYXJkTG9naWMnO1xuXG5rZXlib2FyZEFwcGVhcmFuY2UoKTtcbmtleWJvYXJkTG9naWMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==