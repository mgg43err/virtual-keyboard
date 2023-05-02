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
function capsLockLogic(){
        let capsState = false; 
        let caps = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(1)")
        let l0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)");
        let l1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)");
        let l2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)");
        let l3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)");
        let l4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)");
        let l5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)");
        let l6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)");
        let l7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)");
        let l8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)");
        let l9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)");
        let l10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)");
        let l11 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)");
        let l12 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)");
        let z0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)");
        let z1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)");
        let z2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)");
        let z3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)");
        let z4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)");
        let z5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)");
        let z6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)");
        let z7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)");
        let z8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)");
        let z9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)");
        let z10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)")
        let x0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)");
        let x1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)");
        let x2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)");
        let x3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)");
        let x4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)");
        let x5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)");
        let x6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)");
        let x7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)");
        let x8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)");
        let x9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)");
    
        caps.addEventListener('click', e=>{
          if (e.target.innerText === "caps lock"){
            capsState = !capsState;
          }
          if(capsState === true){
            e.target.style.backgroundColor = "red";
            l0.innerText = `Q`;
            l1.innerText = `W`;  
            l2.innerText = `E`;  
            l3.innerText = `R`;  
            l4.innerText = `T`;  
            l5.innerText = `Y`;  
            l6.innerText = `U`;  
            l7.innerText = `I`;  
            l8.innerText = `O`;  
            l9.innerText = `P`;  
            l10.innerText = `{`;  
            l11.innerText = `}`;
            l12.innerText = `|`;  
            z0.innerText = `A`
            z1.innerText = `S`
            z2.innerText = `D`
            z3.innerText = `F`
            z4.innerText = `G`
            z5.innerText = `H`
            z6.innerText = `J`
            z7.innerText = `K`
            z8.innerText = `L`
            z9.innerText = `:`
            z10.innerText = `"`
            x0.innerText = `Z`
            x1.innerText = `X`
            x2.innerText = `C`
            x3.innerText = `V`
            x4.innerText = `B`
            x5.innerText = `N`
            x6.innerText = `M`
            x7.innerText = `<`
            x8.innerText = `>`
            x9.innerText = `?`
          }else if (capsState === false) {
            e.target.style.backgroundColor = "#2f2f2fee";
            l0.innerText = `q`   
            l0.innerText = `q`;
            l1.innerText = `w`;  
            l2.innerText = `e`;  
            l3.innerText = `r`;  
            l4.innerText = `t`;  
            l5.innerText = `y`;  
            l6.innerText = `u`;  
            l7.innerText = `i`;  
            l8.innerText = `o`;  
            l9.innerText = `p`;  
            l10.innerText = `[`;  
            l11.innerText = `]`;
            l12.innerText = `\\`;  
            z0.innerText = `a`
            z1.innerText = `s`
            z2.innerText = `d`
            z3.innerText = `f`
            z4.innerText = `g`
            z5.innerText = `h`
            z6.innerText = `j`
            z7.innerText = `k`
            z8.innerText = `l`
            z9.innerText = `;`
            z10.innerText = `'`
            x0.innerText = `z`
            x1.innerText = `x`
            x2.innerText = `c`
            x3.innerText = `v`
            x4.innerText = `b`
            x5.innerText = `n`
            x6.innerText = `m`
            x7.innerText = `,`
            x8.innerText = `.`
            x9.innerText = `/`
          }
        }
    )
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
function keyPressLogic(){

    window.addEventListener("keypress", e =>{
        console.log(e);
    })

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
  const keys = document.querySelector("body > div > div");
  const input = document.querySelector("body > div > textarea");

  function calculateInputValue(stateC) {
    return stateC.join("");
  }
  keys.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(e.target.innerText === "shift");
    if  (e.target.innerText !== "shift" && e.target.innerText !== "caps lock" ){
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
let shiftLogic = function(){
    let shiftstate = false; 
    let shift = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(1)");
    let rightShift = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(13)");
    let k0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(1)");
    let k1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(2)");
    let k2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(3)");
    let k3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(4)");
    let k4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(5)");
    let k5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(6)");
    let k6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(7)");
    let k7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(8)");
    let k8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(9)");
    let k9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(10)");
    let k10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(11)");
    let k11 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(12)");
    let k12 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow0 > button:nth-child(13)");
    let l0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(2)");
    let l1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(3)");
    let l2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(4)");
    let l3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(5)");
    let l4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(6)");
    let l5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(7)");
    let l6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(8)");
    let l7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(9)");
    let l8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(10)");
    let l9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(11)");
    let l10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(12)");
    let l11 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(13)");
    let l12 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow1 > button:nth-child(14)");
    let z0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(2)");
    let z1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(3)");
    let z2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(4)");
    let z3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(5)");
    let z4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(6)");
    let z5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(7)");
    let z6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(8)");
    let z7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(9)");
    let z8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(10)");
    let z9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(11)");
    let z10 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow2 > button:nth-child(12)");
    
    let x0 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(2)");
    let x1 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(3)");
    let x2 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(4)");
    let x3 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(5)");
    let x4 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(6)");
    let x5 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(7)");
    let x6 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(8)");
    let x7 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(9)");
    let x8 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(10)");
    let x9 = document.querySelector("body > div > div.keyboard__wrapper > div.keyRow.keyRow3 > button:nth-child(11)");

    shift.addEventListener('click', e=>{
      if (e.target.innerText === "shift"){
        shiftstate = !shiftstate;
      }
      if(shiftstate === true){
        e.target.style.backgroundColor = "red";
        k0.innerText = `~`; 
        k1.innerText = `!`; 
        k2.innerText = `@`; 
        k3.innerText = `#`; 
        k4.innerText = `$`; 
        k5.innerText = `%`; 
        k6.innerText = `^`;
        k7.innerText = `&`; 
        k8.innerText = `*`; 
        k9.innerText = `(`; 
        k10.innerText = `)`;
        k11.innerText = `_`
        k12.innerText = `+`
        l0.innerText = `Q`;
        l1.innerText = `W`;  
        l2.innerText = `E`;  
        l3.innerText = `R`;  
        l4.innerText = `T`;  
        l5.innerText = `Y`;  
        l6.innerText = `U`;  
        l7.innerText = `I`;  
        l8.innerText = `O`;  
        l9.innerText = `P`;  
        l10.innerText = `{`;  
        l11.innerText = `}`;
        l12.innerText = `|`;  
        z0.innerText = `A`
        z1.innerText = `S`
        z2.innerText = `D`
        z3.innerText = `F`
        z4.innerText = `G`
        z5.innerText = `H`
        z6.innerText = `J`
        z7.innerText = `K`
        z8.innerText = `L`
        z9.innerText = `:`
        z10.innerText = `"`
        x0.innerText = `Z`
        x1.innerText = `X`
        x2.innerText = `C`
        x3.innerText = `V`
        x4.innerText = `B`
        x5.innerText = `N`
        x6.innerText = `M`
        x7.innerText = `<`
        x8.innerText = `>`
        x9.innerText = `?`
      }else if (shiftstate === false) {
        e.target.style.backgroundColor = "#2f2f2fee";
        k0.innerText = '`';
        k1.innerText = `1`; 
        k2.innerText = `2`; 
        k3.innerText = `3`; 
        k4.innerText = `4`; 
        k5.innerText = `5`; 
        k6.innerText = `6`;
        k7.innerText = `7`; 
        k8.innerText = `8`; 
        k9.innerText = `9`; 
        k10.innerText = `0`; 
        k11.innerText = `-`; 
        k12.innerText = `=`;
        l0.innerText = `q`   
        l0.innerText = `q`;
        l1.innerText = `w`;  
        l2.innerText = `e`;  
        l3.innerText = `r`;  
        l4.innerText = `t`;  
        l5.innerText = `y`;  
        l6.innerText = `u`;  
        l7.innerText = `i`;  
        l8.innerText = `o`;  
        l9.innerText = `p`;  
        l10.innerText = `[`;  
        l11.innerText = `]`;
        l12.innerText = `\\`;  
        z0.innerText = `a`
        z1.innerText = `s`
        z2.innerText = `d`
        z3.innerText = `f`
        z4.innerText = `g`
        z5.innerText = `h`
        z6.innerText = `j`
        z7.innerText = `k`
        z8.innerText = `l`
        z9.innerText = `;`
        z10.innerText = `'`
        x0.innerText = `z`
        x1.innerText = `x`
        x2.innerText = `c`
        x3.innerText = `v`
        x4.innerText = `b`
        x5.innerText = `n`
        x6.innerText = `m`
        x7.innerText = `,`
        x8.innerText = `.`
        x9.innerText = `/`
      }
    } )
    rightShift.addEventListener('click', e=>{
      if (e.target.innerText === "shift"){
        shiftstate = !shiftstate;
      }
      if(shiftstate === true){
        e.target.style.backgroundColor = "red";
        k0.innerText = `~`; 
        k1.innerText = `!`; 
        k2.innerText = `@`; 
        k3.innerText = `#`; 
        k4.innerText = `$`; 
        k5.innerText = `%`; 
        k6.innerText = `^`;
        k7.innerText = `&`; 
        k8.innerText = `*`; 
        k9.innerText = `(`; 
        k10.innerText = `)`;
        k11.innerText = `_`
        k12.innerText = `+`
        l0.innerText = `Q`;
        l1.innerText = `W`;  
        l2.innerText = `E`;  
        l3.innerText = `R`;  
        l4.innerText = `T`;  
        l5.innerText = `Y`;  
        l6.innerText = `U`;  
        l7.innerText = `I`;  
        l8.innerText = `O`;  
        l9.innerText = `P`;  
        l10.innerText = `{`;  
        l11.innerText = `}`;
        l12.innerText = `|`;  
        z0.innerText = `A`
        z1.innerText = `S`
        z2.innerText = `D`
        z3.innerText = `F`
        z4.innerText = `G`
        z5.innerText = `H`
        z6.innerText = `J`
        z7.innerText = `K`
        z8.innerText = `L`
        z9.innerText = `:`
        z10.innerText = `"`
        x0.innerText = `Z`
        x1.innerText = `X`
        x2.innerText = `C`
        x3.innerText = `V`
        x4.innerText = `B`
        x5.innerText = `N`
        x6.innerText = `M`
        x7.innerText = `<`
        x8.innerText = `>`
        x9.innerText = `?`
      }else if (shiftstate === false) {
        e.target.style.backgroundColor = "#2f2f2fee";
        k0.innerText = '`';
        k1.innerText = `1`; 
        k2.innerText = `2`; 
        k3.innerText = `3`; 
        k4.innerText = `4`; 
        k5.innerText = `5`; 
        k6.innerText = `6`;
        k7.innerText = `7`; 
        k8.innerText = `8`; 
        k9.innerText = `9`; 
        k10.innerText = `0`; 
        k11.innerText = `-`; 
        k12.innerText = `=`;
        l0.innerText = `q`   
        l0.innerText = `q`;
        l1.innerText = `w`;  
        l2.innerText = `e`;  
        l3.innerText = `r`;  
        l4.innerText = `t`;  
        l5.innerText = `y`;  
        l6.innerText = `u`;  
        l7.innerText = `i`;  
        l8.innerText = `o`;  
        l9.innerText = `p`;  
        l10.innerText = `[`;  
        l11.innerText = `]`;
        l12.innerText = `\\`;  
        z0.innerText = `a`
        z1.innerText = `s`
        z2.innerText = `d`
        z3.innerText = `f`
        z4.innerText = `g`
        z5.innerText = `h`
        z6.innerText = `j`
        z7.innerText = `k`
        z8.innerText = `l`
        z9.innerText = `;`
        z10.innerText = `'`
        x0.innerText = `z`
        x1.innerText = `x`
        x2.innerText = `c`
        x3.innerText = `v`
        x4.innerText = `b`
        x5.innerText = `n`
        x6.innerText = `m`
        x7.innerText = `,`
        x8.innerText = `.`
        x9.innerText = `/`
      }
    } )
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TmlFO0FBQ2Y7O0FBRWxELDBFQUFrQjtBQUNsQixnRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9hcHBlYXJhbmNlL2NoYW5nZUxheW91dC5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsa2V5Ym9hcmQvLi9zcmMvYXBwZWFyYW5jZS9rZXlib2FyZEFwcGVhcmFuY2UuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2FwcGVhcmFuY2Uva2V5Ym9hcmRCdXR0b25zLmpzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9sb2dpYy9jYXBzTG9ja0xvZ2ljLmpzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9sb2dpYy9rZXlQcmVzc0xvZ2ljLmpzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9sb2dpYy9rZXlib2FyZExvZ2ljLmpzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9sb2dpYy9zaGlmdExvZ2ljLmpzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aXJ0dWFsa2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjaGFuZ2VMYXlvdXQoa2V5Ym9hcmRXcmFwcGVyKSB7XG4gIGNvbnN0IGgxID0gYFRoZSBrZXlib2FyZCB3YXMgY3JlYXRlZCBpbiB0aGUgTGludXgvR05VIG9wZXJhdGluZyBzeXN0ZW1cbiAgICBUbyBzd2l0Y2ggdGhlIGxhbmd1YWdlIGNvbWJpbmF0aW9uOiBsZWZ0IG1ldGEgKyBzcGFjZWA7XG4gIGNvbnN0IGgxZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGgxZGl2LmlubmVyVGV4dCA9IGgxO1xuICBrZXlib2FyZFdyYXBwZXIuYXBwZW5kKGgxZGl2KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZUxheW91dDtcbiIsImltcG9ydCBrZXlib2FyZEJ1dHRub3MgZnJvbSAnLi9rZXlib2FyZEJ1dHRvbnMnO1xuaW1wb3J0IGNoYW5nZUxheW91dCBmcm9tICcuL2NoYW5nZUxheW91dCc7XG5cbmZ1bmN0aW9uIGtleWJvYXJkQXBwZWFyYW5jZSgpIHtcbiAgLy8gbGV0IG1ha2Uga2V5Ym9hcmRDb250YWluZXJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3Qga2V5Ym9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWtleWJvYXJkJyk7XG4gIGJvZHkucHJlcGVuZChrZXlib2FyZENvbnRhaW5lcik7XG4gIC8vIGFsc28gd2UgbmVlZCB0byBjcmVhdGUgYW4gaW5wdXQgZmllbGQgZm9yIG91ciB2aXJ0dWFsIGtleWJvYXJkXG4gIGNvbnN0IGlucHV0RiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGlucHV0Ri5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xuICBrZXlib2FyZENvbnRhaW5lci5wcmVwZW5kKGlucHV0Rik7XG4gIC8vIGFsc28gd2UgbmVlZCBhIGtleWJvcmFkIHdyYXBwZXJcbiAgY29uc3Qga2V5Ym9hcmRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGtleWJvYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fd3JhcHBlcicpO1xuICBrZXlib2FyZENvbnRhaW5lci5hcHBlbmQoa2V5Ym9hcmRXcmFwcGVyKTtcblxuICBrZXlib2FyZEJ1dHRub3Moa2V5Ym9hcmRXcmFwcGVyKTtcbiAgY2hhbmdlTGF5b3V0KGtleWJvYXJkQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5Ym9hcmRBcHBlYXJhbmNlO1xuIiwiZnVuY3Rpb24ga2V5Ym9hcmRCdXR0bm9zKHdyKSB7XG4gIGNvbnN0IGtleWJvYXJkS2V5czEgPSBbXG4gICAgJ2AnLFxuICAgICcxJyxcbiAgICAnMicsXG4gICAgJzMnLFxuICAgICc0JyxcbiAgICAnNScsXG4gICAgJzYnLFxuICAgICc3JyxcbiAgICAnOCcsXG4gICAgJzknLFxuICAgICcwJyxcbiAgICAnLScsXG4gICAgJz0nLFxuICAgICdiYWNrc3BhY2UnLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXMyID0gW1xuICAgICd0YWInLFxuICAgICdxJyxcbiAgICAndycsXG4gICAgJ2UnLFxuICAgICdyJyxcbiAgICAndCcsXG4gICAgJ3knLFxuICAgICd1JyxcbiAgICAnaScsXG4gICAgJ28nLFxuICAgICdwJyxcbiAgICAnWycsXG4gICAgJ10nLFxuICAgICdcXFxcJyxcbiAgXTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzMyA9IFtcbiAgICAnY2FwcyBsb2NrJyxcbiAgICAnYScsXG4gICAgJ3MnLFxuICAgICdkJyxcbiAgICAnZicsXG4gICAgJ2cnLFxuICAgICdoJyxcbiAgICAnaicsXG4gICAgJ2snLFxuICAgICdsJyxcbiAgICAnOycsXG4gICAgJ1xcJycsXG4gICAgJ2VudGVyJyxcbiAgXTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzNCA9IFtcbiAgICAnc2hpZnQnLFxuICAgICd6JyxcbiAgICAneCcsXG4gICAgJ2MnLFxuICAgICd2JyxcbiAgICAnYicsXG4gICAgJ24nLFxuICAgICdtJyxcbiAgICAnLCcsXG4gICAgJy4nLFxuICAgICcvJyxcbiAgICAn77i/JyxcbiAgICAnc2hpZnQnLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXM1ID0gW1xuICAgICdjdHJsJyxcbiAgICAnZm4nLFxuICAgICfijJgnLFxuICAgICdhbHQnLFxuICAgICcnLFxuICAgICdhbHQnLFxuICAgICfjgIgnLFxuICAgICfvuYAnLFxuICAgICfjgIknLFxuICAgICdjdHJsJyxcbiAgXTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzMUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRLZXlzMS5tYXAoKHgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB4O1xuICAgIGtleWJvYXJkS2V5czFDLmFwcGVuZChidXR0b24pO1xuICAgIHJldHVybiBidXR0b247XG4gIH0pO1xuICB3ci5hcHBlbmQoa2V5Ym9hcmRLZXlzMUMpO1xuICBjb25zdCBrZXlib2FyZEtleXMyQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZEtleXMyLm1hcCgoeCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHg7XG4gICAga2V5Ym9hcmRLZXlzMkMuYXBwZW5kKGJ1dHRvbik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSk7XG4gIHdyLmFwcGVuZChrZXlib2FyZEtleXMyQyk7XG4gIGNvbnN0IGtleWJvYXJkS2V5czNDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGtleWJvYXJkS2V5czMubWFwKCh4KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uaW5uZXJUZXh0ID0geDtcbiAgICBrZXlib2FyZEtleXMzQy5hcHBlbmQoYnV0dG9uKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9KTtcbiAgd3IuYXBwZW5kKGtleWJvYXJkS2V5czNDKTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzNEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRLZXlzNC5tYXAoKHgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB4O1xuICAgIGtleWJvYXJkS2V5czRDLmFwcGVuZChidXR0b24pO1xuICAgIHJldHVybiBidXR0b247XG4gIH0pO1xuICB3ci5hcHBlbmQoa2V5Ym9hcmRLZXlzNEMpO1xuICBjb25zdCBrZXlib2FyZEtleXM1QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZEtleXM1Lm1hcCgoeCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHg7XG4gICAga2V5Ym9hcmRLZXlzNUMuYXBwZW5kKGJ1dHRvbik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSk7XG4gIHdyLmFwcGVuZChrZXlib2FyZEtleXM1Qyk7XG4gIGNvbnN0IGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gZGl2JykuY2hpbGRyZW47XG4gIGZvciAobGV0IHggPSAwOyB4IDwgaS5sZW5ndGg7IHggKz0gMSkge1xuICAgIGlbeF0uY2xhc3NMaXN0LmFkZCgna2V5Um93Jyk7XG4gICAgaVt4XS5jbGFzc0xpc3QuYWRkKGBrZXlSb3cke3h9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5Ym9hcmRCdXR0bm9zO1xuIiwiZnVuY3Rpb24gY2Fwc0xvY2tMb2dpYygpe1xuICAgICAgICBsZXQgY2Fwc1N0YXRlID0gZmFsc2U7IFxuICAgICAgICBsZXQgY2FwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgxKVwiKVxuICAgICAgICBsZXQgbDAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMilcIik7XG4gICAgICAgIGxldCBsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgzKVwiKTtcbiAgICAgICAgbGV0IGwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDQpXCIpO1xuICAgICAgICBsZXQgbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoNSlcIik7XG4gICAgICAgIGxldCBsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg2KVwiKTtcbiAgICAgICAgbGV0IGw1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDcpXCIpO1xuICAgICAgICBsZXQgbDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoOClcIik7XG4gICAgICAgIGxldCBsNyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg5KVwiKTtcbiAgICAgICAgbGV0IGw4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDEwKVwiKTtcbiAgICAgICAgbGV0IGw5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKTtcbiAgICAgICAgbGV0IGwxMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMilcIik7XG4gICAgICAgIGxldCBsMTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMTMpXCIpO1xuICAgICAgICBsZXQgbDEyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDE0KVwiKTtcbiAgICAgICAgbGV0IHowID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDIpXCIpO1xuICAgICAgICBsZXQgejEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMylcIik7XG4gICAgICAgIGxldCB6MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg0KVwiKTtcbiAgICAgICAgbGV0IHozID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDUpXCIpO1xuICAgICAgICBsZXQgejQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNilcIik7XG4gICAgICAgIGxldCB6NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg3KVwiKTtcbiAgICAgICAgbGV0IHo2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDgpXCIpO1xuICAgICAgICBsZXQgejcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoOSlcIik7XG4gICAgICAgIGxldCB6OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgxMClcIik7XG4gICAgICAgIGxldCB6OSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgxMSlcIik7XG4gICAgICAgIGxldCB6MTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMTIpXCIpXG4gICAgICAgIGxldCB4MCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgyKVwiKTtcbiAgICAgICAgbGV0IHgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDMpXCIpO1xuICAgICAgICBsZXQgeDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNClcIik7XG4gICAgICAgIGxldCB4MyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg1KVwiKTtcbiAgICAgICAgbGV0IHg0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDYpXCIpO1xuICAgICAgICBsZXQgeDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNylcIik7XG4gICAgICAgIGxldCB4NiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg4KVwiKTtcbiAgICAgICAgbGV0IHg3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDkpXCIpO1xuICAgICAgICBsZXQgeDggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMTApXCIpO1xuICAgICAgICBsZXQgeDkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMTEpXCIpO1xuICAgIFxuICAgICAgICBjYXBzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgICAgICAgIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09IFwiY2FwcyBsb2NrXCIpe1xuICAgICAgICAgICAgY2Fwc1N0YXRlID0gIWNhcHNTdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoY2Fwc1N0YXRlID09PSB0cnVlKXtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICBsMC5pbm5lclRleHQgPSBgUWA7XG4gICAgICAgICAgICBsMS5pbm5lclRleHQgPSBgV2A7ICBcbiAgICAgICAgICAgIGwyLmlubmVyVGV4dCA9IGBFYDsgIFxuICAgICAgICAgICAgbDMuaW5uZXJUZXh0ID0gYFJgOyAgXG4gICAgICAgICAgICBsNC5pbm5lclRleHQgPSBgVGA7ICBcbiAgICAgICAgICAgIGw1LmlubmVyVGV4dCA9IGBZYDsgIFxuICAgICAgICAgICAgbDYuaW5uZXJUZXh0ID0gYFVgOyAgXG4gICAgICAgICAgICBsNy5pbm5lclRleHQgPSBgSWA7ICBcbiAgICAgICAgICAgIGw4LmlubmVyVGV4dCA9IGBPYDsgIFxuICAgICAgICAgICAgbDkuaW5uZXJUZXh0ID0gYFBgOyAgXG4gICAgICAgICAgICBsMTAuaW5uZXJUZXh0ID0gYHtgOyAgXG4gICAgICAgICAgICBsMTEuaW5uZXJUZXh0ID0gYH1gO1xuICAgICAgICAgICAgbDEyLmlubmVyVGV4dCA9IGB8YDsgIFxuICAgICAgICAgICAgejAuaW5uZXJUZXh0ID0gYEFgXG4gICAgICAgICAgICB6MS5pbm5lclRleHQgPSBgU2BcbiAgICAgICAgICAgIHoyLmlubmVyVGV4dCA9IGBEYFxuICAgICAgICAgICAgejMuaW5uZXJUZXh0ID0gYEZgXG4gICAgICAgICAgICB6NC5pbm5lclRleHQgPSBgR2BcbiAgICAgICAgICAgIHo1LmlubmVyVGV4dCA9IGBIYFxuICAgICAgICAgICAgejYuaW5uZXJUZXh0ID0gYEpgXG4gICAgICAgICAgICB6Ny5pbm5lclRleHQgPSBgS2BcbiAgICAgICAgICAgIHo4LmlubmVyVGV4dCA9IGBMYFxuICAgICAgICAgICAgejkuaW5uZXJUZXh0ID0gYDpgXG4gICAgICAgICAgICB6MTAuaW5uZXJUZXh0ID0gYFwiYFxuICAgICAgICAgICAgeDAuaW5uZXJUZXh0ID0gYFpgXG4gICAgICAgICAgICB4MS5pbm5lclRleHQgPSBgWGBcbiAgICAgICAgICAgIHgyLmlubmVyVGV4dCA9IGBDYFxuICAgICAgICAgICAgeDMuaW5uZXJUZXh0ID0gYFZgXG4gICAgICAgICAgICB4NC5pbm5lclRleHQgPSBgQmBcbiAgICAgICAgICAgIHg1LmlubmVyVGV4dCA9IGBOYFxuICAgICAgICAgICAgeDYuaW5uZXJUZXh0ID0gYE1gXG4gICAgICAgICAgICB4Ny5pbm5lclRleHQgPSBgPGBcbiAgICAgICAgICAgIHg4LmlubmVyVGV4dCA9IGA+YFxuICAgICAgICAgICAgeDkuaW5uZXJUZXh0ID0gYD9gXG4gICAgICAgICAgfWVsc2UgaWYgKGNhcHNTdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzJmMmYyZmVlXCI7XG4gICAgICAgICAgICBsMC5pbm5lclRleHQgPSBgcWAgICBcbiAgICAgICAgICAgIGwwLmlubmVyVGV4dCA9IGBxYDtcbiAgICAgICAgICAgIGwxLmlubmVyVGV4dCA9IGB3YDsgIFxuICAgICAgICAgICAgbDIuaW5uZXJUZXh0ID0gYGVgOyAgXG4gICAgICAgICAgICBsMy5pbm5lclRleHQgPSBgcmA7ICBcbiAgICAgICAgICAgIGw0LmlubmVyVGV4dCA9IGB0YDsgIFxuICAgICAgICAgICAgbDUuaW5uZXJUZXh0ID0gYHlgOyAgXG4gICAgICAgICAgICBsNi5pbm5lclRleHQgPSBgdWA7ICBcbiAgICAgICAgICAgIGw3LmlubmVyVGV4dCA9IGBpYDsgIFxuICAgICAgICAgICAgbDguaW5uZXJUZXh0ID0gYG9gOyAgXG4gICAgICAgICAgICBsOS5pbm5lclRleHQgPSBgcGA7ICBcbiAgICAgICAgICAgIGwxMC5pbm5lclRleHQgPSBgW2A7ICBcbiAgICAgICAgICAgIGwxMS5pbm5lclRleHQgPSBgXWA7XG4gICAgICAgICAgICBsMTIuaW5uZXJUZXh0ID0gYFxcXFxgOyAgXG4gICAgICAgICAgICB6MC5pbm5lclRleHQgPSBgYWBcbiAgICAgICAgICAgIHoxLmlubmVyVGV4dCA9IGBzYFxuICAgICAgICAgICAgejIuaW5uZXJUZXh0ID0gYGRgXG4gICAgICAgICAgICB6My5pbm5lclRleHQgPSBgZmBcbiAgICAgICAgICAgIHo0LmlubmVyVGV4dCA9IGBnYFxuICAgICAgICAgICAgejUuaW5uZXJUZXh0ID0gYGhgXG4gICAgICAgICAgICB6Ni5pbm5lclRleHQgPSBgamBcbiAgICAgICAgICAgIHo3LmlubmVyVGV4dCA9IGBrYFxuICAgICAgICAgICAgejguaW5uZXJUZXh0ID0gYGxgXG4gICAgICAgICAgICB6OS5pbm5lclRleHQgPSBgO2BcbiAgICAgICAgICAgIHoxMC5pbm5lclRleHQgPSBgJ2BcbiAgICAgICAgICAgIHgwLmlubmVyVGV4dCA9IGB6YFxuICAgICAgICAgICAgeDEuaW5uZXJUZXh0ID0gYHhgXG4gICAgICAgICAgICB4Mi5pbm5lclRleHQgPSBgY2BcbiAgICAgICAgICAgIHgzLmlubmVyVGV4dCA9IGB2YFxuICAgICAgICAgICAgeDQuaW5uZXJUZXh0ID0gYGJgXG4gICAgICAgICAgICB4NS5pbm5lclRleHQgPSBgbmBcbiAgICAgICAgICAgIHg2LmlubmVyVGV4dCA9IGBtYFxuICAgICAgICAgICAgeDcuaW5uZXJUZXh0ID0gYCxgXG4gICAgICAgICAgICB4OC5pbm5lclRleHQgPSBgLmBcbiAgICAgICAgICAgIHg5LmlubmVyVGV4dCA9IGAvYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2Fwc0xvY2tMb2dpYzsiLCJmdW5jdGlvbiBrZXlQcmVzc0xvZ2ljKCl7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGUgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5UHJlc3NMb2dpYzsiLCJpbXBvcnQgc2hpZnRMb2dpYyBmcm9tIFwiLi9zaGlmdExvZ2ljXCI7XG5pbXBvcnQgY2Fwc0xvY2tMb2dpYyBmcm9tIFwiLi9jYXBzTG9ja0xvZ2ljXCI7XG5pbXBvcnQga2V5UHJlc3NMb2dpYyBmcm9tIFwiLi9rZXlQcmVzc0xvZ2ljXCI7XG5mdW5jdGlvbiBrZXlib2FyZExvZ2ljKCkge1xuICBjb25zdCBzdGF0ZSA9IFtdO1xuICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXZcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiB0ZXh0YXJlYVwiKTtcblxuICBmdW5jdGlvbiBjYWxjdWxhdGVJbnB1dFZhbHVlKHN0YXRlQykge1xuICAgIHJldHVybiBzdGF0ZUMuam9pbihcIlwiKTtcbiAgfVxuICBrZXlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2NvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJzaGlmdFwiKTtcbiAgICBpZiAgKGUudGFyZ2V0LmlubmVyVGV4dCAhPT0gXCJzaGlmdFwiICYmIGUudGFyZ2V0LmlubmVyVGV4dCAhPT0gXCJjYXBzIGxvY2tcIiApe1xuICAgICAgc3RhdGUucHVzaChlLnRhcmdldC5pbm5lclRleHQpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBpbnB1dC52YWx1ZSA9IGNhbGN1bGF0ZUlucHV0VmFsdWUoc3RhdGUpO1xuICB9KTtcblxuICBzaGlmdExvZ2ljKCk7XG4gIGNhcHNMb2NrTG9naWMoKTtcbiAga2V5UHJlc3NMb2dpYygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlib2FyZExvZ2ljO1xuIiwibGV0IHNoaWZ0TG9naWMgPSBmdW5jdGlvbigpe1xuICAgIGxldCBzaGlmdHN0YXRlID0gZmFsc2U7IFxuICAgIGxldCBzaGlmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgxKVwiKTtcbiAgICBsZXQgcmlnaHRTaGlmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgxMylcIik7XG4gICAgbGV0IGswID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEpXCIpO1xuICAgIGxldCBrMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCgyKVwiKTtcbiAgICBsZXQgazIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoMylcIik7XG4gICAgbGV0IGszID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDQpXCIpO1xuICAgIGxldCBrNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg1KVwiKTtcbiAgICBsZXQgazUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoNilcIik7XG4gICAgbGV0IGs2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDcpXCIpO1xuICAgIGxldCBrNyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cwID4gYnV0dG9uOm50aC1jaGlsZCg4KVwiKTtcbiAgICBsZXQgazggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MCA+IGJ1dHRvbjpudGgtY2hpbGQoOSlcIik7XG4gICAgbGV0IGs5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEwKVwiKTtcbiAgICBsZXQgazEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKTtcbiAgICBsZXQgazExID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKTtcbiAgICBsZXQgazEyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzAgPiBidXR0b246bnRoLWNoaWxkKDEzKVwiKTtcbiAgICBsZXQgbDAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoMilcIik7XG4gICAgbGV0IGwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDMpXCIpO1xuICAgIGxldCBsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg0KVwiKTtcbiAgICBsZXQgbDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoNSlcIik7XG4gICAgbGV0IGw0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDYpXCIpO1xuICAgIGxldCBsNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCg3KVwiKTtcbiAgICBsZXQgbDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MSA+IGJ1dHRvbjpudGgtY2hpbGQoOClcIik7XG4gICAgbGV0IGw3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDkpXCIpO1xuICAgIGxldCBsOCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cxID4gYnV0dG9uOm50aC1jaGlsZCgxMClcIik7XG4gICAgbGV0IGw5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKTtcbiAgICBsZXQgbDEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKTtcbiAgICBsZXQgbDExID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDEzKVwiKTtcbiAgICBsZXQgbDEyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzEgPiBidXR0b246bnRoLWNoaWxkKDE0KVwiKTtcbiAgICBsZXQgejAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoMilcIik7XG4gICAgbGV0IHoxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDMpXCIpO1xuICAgIGxldCB6MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg0KVwiKTtcbiAgICBsZXQgejMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoNSlcIik7XG4gICAgbGV0IHo0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDYpXCIpO1xuICAgIGxldCB6NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCg3KVwiKTtcbiAgICBsZXQgejYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MiA+IGJ1dHRvbjpudGgtY2hpbGQoOClcIik7XG4gICAgbGV0IHo3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDkpXCIpO1xuICAgIGxldCB6OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3cyID4gYnV0dG9uOm50aC1jaGlsZCgxMClcIik7XG4gICAgbGV0IHo5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKTtcbiAgICBsZXQgejEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzIgPiBidXR0b246bnRoLWNoaWxkKDEyKVwiKTtcbiAgICBcbiAgICBsZXQgeDAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoMilcIik7XG4gICAgbGV0IHgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDMpXCIpO1xuICAgIGxldCB4MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg0KVwiKTtcbiAgICBsZXQgeDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoNSlcIik7XG4gICAgbGV0IHg0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDYpXCIpO1xuICAgIGxldCB4NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCg3KVwiKTtcbiAgICBsZXQgeDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IGRpdiA+IGRpdi5rZXlib2FyZF9fd3JhcHBlciA+IGRpdi5rZXlSb3cua2V5Um93MyA+IGJ1dHRvbjpudGgtY2hpbGQoOClcIik7XG4gICAgbGV0IHg3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDkpXCIpO1xuICAgIGxldCB4OCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gZGl2ID4gZGl2LmtleWJvYXJkX193cmFwcGVyID4gZGl2LmtleVJvdy5rZXlSb3czID4gYnV0dG9uOm50aC1jaGlsZCgxMClcIik7XG4gICAgbGV0IHg5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXYua2V5Ym9hcmRfX3dyYXBwZXIgPiBkaXYua2V5Um93LmtleVJvdzMgPiBidXR0b246bnRoLWNoaWxkKDExKVwiKTtcblxuICAgIHNoaWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJzaGlmdFwiKXtcbiAgICAgICAgc2hpZnRzdGF0ZSA9ICFzaGlmdHN0YXRlO1xuICAgICAgfVxuICAgICAgaWYoc2hpZnRzdGF0ZSA9PT0gdHJ1ZSl7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIGswLmlubmVyVGV4dCA9IGB+YDsgXG4gICAgICAgIGsxLmlubmVyVGV4dCA9IGAhYDsgXG4gICAgICAgIGsyLmlubmVyVGV4dCA9IGBAYDsgXG4gICAgICAgIGszLmlubmVyVGV4dCA9IGAjYDsgXG4gICAgICAgIGs0LmlubmVyVGV4dCA9IGAkYDsgXG4gICAgICAgIGs1LmlubmVyVGV4dCA9IGAlYDsgXG4gICAgICAgIGs2LmlubmVyVGV4dCA9IGBeYDtcbiAgICAgICAgazcuaW5uZXJUZXh0ID0gYCZgOyBcbiAgICAgICAgazguaW5uZXJUZXh0ID0gYCpgOyBcbiAgICAgICAgazkuaW5uZXJUZXh0ID0gYChgOyBcbiAgICAgICAgazEwLmlubmVyVGV4dCA9IGApYDtcbiAgICAgICAgazExLmlubmVyVGV4dCA9IGBfYFxuICAgICAgICBrMTIuaW5uZXJUZXh0ID0gYCtgXG4gICAgICAgIGwwLmlubmVyVGV4dCA9IGBRYDtcbiAgICAgICAgbDEuaW5uZXJUZXh0ID0gYFdgOyAgXG4gICAgICAgIGwyLmlubmVyVGV4dCA9IGBFYDsgIFxuICAgICAgICBsMy5pbm5lclRleHQgPSBgUmA7ICBcbiAgICAgICAgbDQuaW5uZXJUZXh0ID0gYFRgOyAgXG4gICAgICAgIGw1LmlubmVyVGV4dCA9IGBZYDsgIFxuICAgICAgICBsNi5pbm5lclRleHQgPSBgVWA7ICBcbiAgICAgICAgbDcuaW5uZXJUZXh0ID0gYElgOyAgXG4gICAgICAgIGw4LmlubmVyVGV4dCA9IGBPYDsgIFxuICAgICAgICBsOS5pbm5lclRleHQgPSBgUGA7ICBcbiAgICAgICAgbDEwLmlubmVyVGV4dCA9IGB7YDsgIFxuICAgICAgICBsMTEuaW5uZXJUZXh0ID0gYH1gO1xuICAgICAgICBsMTIuaW5uZXJUZXh0ID0gYHxgOyAgXG4gICAgICAgIHowLmlubmVyVGV4dCA9IGBBYFxuICAgICAgICB6MS5pbm5lclRleHQgPSBgU2BcbiAgICAgICAgejIuaW5uZXJUZXh0ID0gYERgXG4gICAgICAgIHozLmlubmVyVGV4dCA9IGBGYFxuICAgICAgICB6NC5pbm5lclRleHQgPSBgR2BcbiAgICAgICAgejUuaW5uZXJUZXh0ID0gYEhgXG4gICAgICAgIHo2LmlubmVyVGV4dCA9IGBKYFxuICAgICAgICB6Ny5pbm5lclRleHQgPSBgS2BcbiAgICAgICAgejguaW5uZXJUZXh0ID0gYExgXG4gICAgICAgIHo5LmlubmVyVGV4dCA9IGA6YFxuICAgICAgICB6MTAuaW5uZXJUZXh0ID0gYFwiYFxuICAgICAgICB4MC5pbm5lclRleHQgPSBgWmBcbiAgICAgICAgeDEuaW5uZXJUZXh0ID0gYFhgXG4gICAgICAgIHgyLmlubmVyVGV4dCA9IGBDYFxuICAgICAgICB4My5pbm5lclRleHQgPSBgVmBcbiAgICAgICAgeDQuaW5uZXJUZXh0ID0gYEJgXG4gICAgICAgIHg1LmlubmVyVGV4dCA9IGBOYFxuICAgICAgICB4Ni5pbm5lclRleHQgPSBgTWBcbiAgICAgICAgeDcuaW5uZXJUZXh0ID0gYDxgXG4gICAgICAgIHg4LmlubmVyVGV4dCA9IGA+YFxuICAgICAgICB4OS5pbm5lclRleHQgPSBgP2BcbiAgICAgIH1lbHNlIGlmIChzaGlmdHN0YXRlID09PSBmYWxzZSkge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyZjJmMmZlZVwiO1xuICAgICAgICBrMC5pbm5lclRleHQgPSAnYCc7XG4gICAgICAgIGsxLmlubmVyVGV4dCA9IGAxYDsgXG4gICAgICAgIGsyLmlubmVyVGV4dCA9IGAyYDsgXG4gICAgICAgIGszLmlubmVyVGV4dCA9IGAzYDsgXG4gICAgICAgIGs0LmlubmVyVGV4dCA9IGA0YDsgXG4gICAgICAgIGs1LmlubmVyVGV4dCA9IGA1YDsgXG4gICAgICAgIGs2LmlubmVyVGV4dCA9IGA2YDtcbiAgICAgICAgazcuaW5uZXJUZXh0ID0gYDdgOyBcbiAgICAgICAgazguaW5uZXJUZXh0ID0gYDhgOyBcbiAgICAgICAgazkuaW5uZXJUZXh0ID0gYDlgOyBcbiAgICAgICAgazEwLmlubmVyVGV4dCA9IGAwYDsgXG4gICAgICAgIGsxMS5pbm5lclRleHQgPSBgLWA7IFxuICAgICAgICBrMTIuaW5uZXJUZXh0ID0gYD1gO1xuICAgICAgICBsMC5pbm5lclRleHQgPSBgcWAgICBcbiAgICAgICAgbDAuaW5uZXJUZXh0ID0gYHFgO1xuICAgICAgICBsMS5pbm5lclRleHQgPSBgd2A7ICBcbiAgICAgICAgbDIuaW5uZXJUZXh0ID0gYGVgOyAgXG4gICAgICAgIGwzLmlubmVyVGV4dCA9IGByYDsgIFxuICAgICAgICBsNC5pbm5lclRleHQgPSBgdGA7ICBcbiAgICAgICAgbDUuaW5uZXJUZXh0ID0gYHlgOyAgXG4gICAgICAgIGw2LmlubmVyVGV4dCA9IGB1YDsgIFxuICAgICAgICBsNy5pbm5lclRleHQgPSBgaWA7ICBcbiAgICAgICAgbDguaW5uZXJUZXh0ID0gYG9gOyAgXG4gICAgICAgIGw5LmlubmVyVGV4dCA9IGBwYDsgIFxuICAgICAgICBsMTAuaW5uZXJUZXh0ID0gYFtgOyAgXG4gICAgICAgIGwxMS5pbm5lclRleHQgPSBgXWA7XG4gICAgICAgIGwxMi5pbm5lclRleHQgPSBgXFxcXGA7ICBcbiAgICAgICAgejAuaW5uZXJUZXh0ID0gYGFgXG4gICAgICAgIHoxLmlubmVyVGV4dCA9IGBzYFxuICAgICAgICB6Mi5pbm5lclRleHQgPSBgZGBcbiAgICAgICAgejMuaW5uZXJUZXh0ID0gYGZgXG4gICAgICAgIHo0LmlubmVyVGV4dCA9IGBnYFxuICAgICAgICB6NS5pbm5lclRleHQgPSBgaGBcbiAgICAgICAgejYuaW5uZXJUZXh0ID0gYGpgXG4gICAgICAgIHo3LmlubmVyVGV4dCA9IGBrYFxuICAgICAgICB6OC5pbm5lclRleHQgPSBgbGBcbiAgICAgICAgejkuaW5uZXJUZXh0ID0gYDtgXG4gICAgICAgIHoxMC5pbm5lclRleHQgPSBgJ2BcbiAgICAgICAgeDAuaW5uZXJUZXh0ID0gYHpgXG4gICAgICAgIHgxLmlubmVyVGV4dCA9IGB4YFxuICAgICAgICB4Mi5pbm5lclRleHQgPSBgY2BcbiAgICAgICAgeDMuaW5uZXJUZXh0ID0gYHZgXG4gICAgICAgIHg0LmlubmVyVGV4dCA9IGBiYFxuICAgICAgICB4NS5pbm5lclRleHQgPSBgbmBcbiAgICAgICAgeDYuaW5uZXJUZXh0ID0gYG1gXG4gICAgICAgIHg3LmlubmVyVGV4dCA9IGAsYFxuICAgICAgICB4OC5pbm5lclRleHQgPSBgLmBcbiAgICAgICAgeDkuaW5uZXJUZXh0ID0gYC9gXG4gICAgICB9XG4gICAgfSApXG4gICAgcmlnaHRTaGlmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcbiAgICAgIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09IFwic2hpZnRcIil7XG4gICAgICAgIHNoaWZ0c3RhdGUgPSAhc2hpZnRzdGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmKHNoaWZ0c3RhdGUgPT09IHRydWUpe1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICBrMC5pbm5lclRleHQgPSBgfmA7IFxuICAgICAgICBrMS5pbm5lclRleHQgPSBgIWA7IFxuICAgICAgICBrMi5pbm5lclRleHQgPSBgQGA7IFxuICAgICAgICBrMy5pbm5lclRleHQgPSBgI2A7IFxuICAgICAgICBrNC5pbm5lclRleHQgPSBgJGA7IFxuICAgICAgICBrNS5pbm5lclRleHQgPSBgJWA7IFxuICAgICAgICBrNi5pbm5lclRleHQgPSBgXmA7XG4gICAgICAgIGs3LmlubmVyVGV4dCA9IGAmYDsgXG4gICAgICAgIGs4LmlubmVyVGV4dCA9IGAqYDsgXG4gICAgICAgIGs5LmlubmVyVGV4dCA9IGAoYDsgXG4gICAgICAgIGsxMC5pbm5lclRleHQgPSBgKWA7XG4gICAgICAgIGsxMS5pbm5lclRleHQgPSBgX2BcbiAgICAgICAgazEyLmlubmVyVGV4dCA9IGArYFxuICAgICAgICBsMC5pbm5lclRleHQgPSBgUWA7XG4gICAgICAgIGwxLmlubmVyVGV4dCA9IGBXYDsgIFxuICAgICAgICBsMi5pbm5lclRleHQgPSBgRWA7ICBcbiAgICAgICAgbDMuaW5uZXJUZXh0ID0gYFJgOyAgXG4gICAgICAgIGw0LmlubmVyVGV4dCA9IGBUYDsgIFxuICAgICAgICBsNS5pbm5lclRleHQgPSBgWWA7ICBcbiAgICAgICAgbDYuaW5uZXJUZXh0ID0gYFVgOyAgXG4gICAgICAgIGw3LmlubmVyVGV4dCA9IGBJYDsgIFxuICAgICAgICBsOC5pbm5lclRleHQgPSBgT2A7ICBcbiAgICAgICAgbDkuaW5uZXJUZXh0ID0gYFBgOyAgXG4gICAgICAgIGwxMC5pbm5lclRleHQgPSBge2A7ICBcbiAgICAgICAgbDExLmlubmVyVGV4dCA9IGB9YDtcbiAgICAgICAgbDEyLmlubmVyVGV4dCA9IGB8YDsgIFxuICAgICAgICB6MC5pbm5lclRleHQgPSBgQWBcbiAgICAgICAgejEuaW5uZXJUZXh0ID0gYFNgXG4gICAgICAgIHoyLmlubmVyVGV4dCA9IGBEYFxuICAgICAgICB6My5pbm5lclRleHQgPSBgRmBcbiAgICAgICAgejQuaW5uZXJUZXh0ID0gYEdgXG4gICAgICAgIHo1LmlubmVyVGV4dCA9IGBIYFxuICAgICAgICB6Ni5pbm5lclRleHQgPSBgSmBcbiAgICAgICAgejcuaW5uZXJUZXh0ID0gYEtgXG4gICAgICAgIHo4LmlubmVyVGV4dCA9IGBMYFxuICAgICAgICB6OS5pbm5lclRleHQgPSBgOmBcbiAgICAgICAgejEwLmlubmVyVGV4dCA9IGBcImBcbiAgICAgICAgeDAuaW5uZXJUZXh0ID0gYFpgXG4gICAgICAgIHgxLmlubmVyVGV4dCA9IGBYYFxuICAgICAgICB4Mi5pbm5lclRleHQgPSBgQ2BcbiAgICAgICAgeDMuaW5uZXJUZXh0ID0gYFZgXG4gICAgICAgIHg0LmlubmVyVGV4dCA9IGBCYFxuICAgICAgICB4NS5pbm5lclRleHQgPSBgTmBcbiAgICAgICAgeDYuaW5uZXJUZXh0ID0gYE1gXG4gICAgICAgIHg3LmlubmVyVGV4dCA9IGA8YFxuICAgICAgICB4OC5pbm5lclRleHQgPSBgPmBcbiAgICAgICAgeDkuaW5uZXJUZXh0ID0gYD9gXG4gICAgICB9ZWxzZSBpZiAoc2hpZnRzdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMmYyZjJmZWVcIjtcbiAgICAgICAgazAuaW5uZXJUZXh0ID0gJ2AnO1xuICAgICAgICBrMS5pbm5lclRleHQgPSBgMWA7IFxuICAgICAgICBrMi5pbm5lclRleHQgPSBgMmA7IFxuICAgICAgICBrMy5pbm5lclRleHQgPSBgM2A7IFxuICAgICAgICBrNC5pbm5lclRleHQgPSBgNGA7IFxuICAgICAgICBrNS5pbm5lclRleHQgPSBgNWA7IFxuICAgICAgICBrNi5pbm5lclRleHQgPSBgNmA7XG4gICAgICAgIGs3LmlubmVyVGV4dCA9IGA3YDsgXG4gICAgICAgIGs4LmlubmVyVGV4dCA9IGA4YDsgXG4gICAgICAgIGs5LmlubmVyVGV4dCA9IGA5YDsgXG4gICAgICAgIGsxMC5pbm5lclRleHQgPSBgMGA7IFxuICAgICAgICBrMTEuaW5uZXJUZXh0ID0gYC1gOyBcbiAgICAgICAgazEyLmlubmVyVGV4dCA9IGA9YDtcbiAgICAgICAgbDAuaW5uZXJUZXh0ID0gYHFgICAgXG4gICAgICAgIGwwLmlubmVyVGV4dCA9IGBxYDtcbiAgICAgICAgbDEuaW5uZXJUZXh0ID0gYHdgOyAgXG4gICAgICAgIGwyLmlubmVyVGV4dCA9IGBlYDsgIFxuICAgICAgICBsMy5pbm5lclRleHQgPSBgcmA7ICBcbiAgICAgICAgbDQuaW5uZXJUZXh0ID0gYHRgOyAgXG4gICAgICAgIGw1LmlubmVyVGV4dCA9IGB5YDsgIFxuICAgICAgICBsNi5pbm5lclRleHQgPSBgdWA7ICBcbiAgICAgICAgbDcuaW5uZXJUZXh0ID0gYGlgOyAgXG4gICAgICAgIGw4LmlubmVyVGV4dCA9IGBvYDsgIFxuICAgICAgICBsOS5pbm5lclRleHQgPSBgcGA7ICBcbiAgICAgICAgbDEwLmlubmVyVGV4dCA9IGBbYDsgIFxuICAgICAgICBsMTEuaW5uZXJUZXh0ID0gYF1gO1xuICAgICAgICBsMTIuaW5uZXJUZXh0ID0gYFxcXFxgOyAgXG4gICAgICAgIHowLmlubmVyVGV4dCA9IGBhYFxuICAgICAgICB6MS5pbm5lclRleHQgPSBgc2BcbiAgICAgICAgejIuaW5uZXJUZXh0ID0gYGRgXG4gICAgICAgIHozLmlubmVyVGV4dCA9IGBmYFxuICAgICAgICB6NC5pbm5lclRleHQgPSBgZ2BcbiAgICAgICAgejUuaW5uZXJUZXh0ID0gYGhgXG4gICAgICAgIHo2LmlubmVyVGV4dCA9IGBqYFxuICAgICAgICB6Ny5pbm5lclRleHQgPSBga2BcbiAgICAgICAgejguaW5uZXJUZXh0ID0gYGxgXG4gICAgICAgIHo5LmlubmVyVGV4dCA9IGA7YFxuICAgICAgICB6MTAuaW5uZXJUZXh0ID0gYCdgXG4gICAgICAgIHgwLmlubmVyVGV4dCA9IGB6YFxuICAgICAgICB4MS5pbm5lclRleHQgPSBgeGBcbiAgICAgICAgeDIuaW5uZXJUZXh0ID0gYGNgXG4gICAgICAgIHgzLmlubmVyVGV4dCA9IGB2YFxuICAgICAgICB4NC5pbm5lclRleHQgPSBgYmBcbiAgICAgICAgeDUuaW5uZXJUZXh0ID0gYG5gXG4gICAgICAgIHg2LmlubmVyVGV4dCA9IGBtYFxuICAgICAgICB4Ny5pbm5lclRleHQgPSBgLGBcbiAgICAgICAgeDguaW5uZXJUZXh0ID0gYC5gXG4gICAgICAgIHg5LmlubmVyVGV4dCA9IGAvYFxuICAgICAgfVxuICAgIH0gKVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgc2hpZnRMb2dpYzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBrZXlib2FyZEFwcGVhcmFuY2UgZnJvbSAnLi9hcHBlYXJhbmNlL2tleWJvYXJkQXBwZWFyYW5jZSc7XG5pbXBvcnQga2V5Ym9hcmRMb2dpYyBmcm9tICcuL2xvZ2ljL2tleWJvYXJkTG9naWMnO1xuXG5rZXlib2FyZEFwcGVhcmFuY2UoKTtcbmtleWJvYXJkTG9naWMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==