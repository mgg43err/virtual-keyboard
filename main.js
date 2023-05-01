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

/***/ "./src/logic/keyboardLogic.js":
/*!************************************!*\
  !*** ./src/logic/keyboardLogic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function keyboardLogic() {
  const state = [];
  const keys = document.querySelector("body > div > div");
  const input = document.querySelector("body > div > textarea");

  function calculateInputValue(stateC) {
    return stateC.join("");
  }
  keys.addEventListener("click", (e) => {
    e.preventDefault();
    state.push(e.target.innerText);
    /* console.log(state); */
    debugger;
    input.value = calculateInputValue(state);
    debugger;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardLogic);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BvQjtBQUNOOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsNERBQWU7QUFDakIsRUFBRSx5REFBWTtBQUNkOztBQUVBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0QmxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQSxnQ0FBZ0MsRUFBRTtBQUNsQztBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0gvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7OztVQ2xCN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUU7QUFDZjs7QUFFbEQsMEVBQWtCO0FBQ2xCLGdFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2FwcGVhcmFuY2UvY2hhbmdlTGF5b3V0LmpzIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC8uL3NyYy9hcHBlYXJhbmNlL2tleWJvYXJkQXBwZWFyYW5jZS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsa2V5Ym9hcmQvLi9zcmMvYXBwZWFyYW5jZS9rZXlib2FyZEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2xvZ2ljL2tleWJvYXJkTG9naWMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZpcnR1YWxrZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlydHVhbGtleWJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNoYW5nZUxheW91dChrZXlib2FyZFdyYXBwZXIpIHtcbiAgY29uc3QgaDEgPSBgVGhlIGtleWJvYXJkIHdhcyBjcmVhdGVkIGluIHRoZSBMaW51eC9HTlUgb3BlcmF0aW5nIHN5c3RlbVxuICAgIFRvIHN3aXRjaCB0aGUgbGFuZ3VhZ2UgY29tYmluYXRpb246IGxlZnQgbWV0YSArIHNwYWNlYDtcbiAgY29uc3QgaDFkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaDFkaXYuaW5uZXJUZXh0ID0gaDE7XG4gIGtleWJvYXJkV3JhcHBlci5hcHBlbmQoaDFkaXYpO1xufVxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlTGF5b3V0O1xuIiwiaW1wb3J0IGtleWJvYXJkQnV0dG5vcyBmcm9tICcuL2tleWJvYXJkQnV0dG9ucyc7XG5pbXBvcnQgY2hhbmdlTGF5b3V0IGZyb20gJy4vY2hhbmdlTGF5b3V0JztcblxuZnVuY3Rpb24ga2V5Ym9hcmRBcHBlYXJhbmNlKCkge1xuICAvLyBsZXQgbWFrZSBrZXlib2FyZENvbnRhaW5lclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBrZXlib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXIta2V5Ym9hcmQnKTtcbiAgYm9keS5wcmVwZW5kKGtleWJvYXJkQ29udGFpbmVyKTtcbiAgLy8gYWxzbyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBpbnB1dCBmaWVsZCBmb3Igb3VyIHZpcnR1YWwga2V5Ym9hcmRcbiAgY29uc3QgaW5wdXRGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgaW5wdXRGLmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gIGtleWJvYXJkQ29udGFpbmVyLnByZXBlbmQoaW5wdXRGKTtcbiAgLy8gYWxzbyB3ZSBuZWVkIGEga2V5Ym9yYWQgd3JhcHBlclxuICBjb25zdCBrZXlib2FyZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX193cmFwcGVyJyk7XG4gIGtleWJvYXJkQ29udGFpbmVyLmFwcGVuZChrZXlib2FyZFdyYXBwZXIpO1xuXG4gIGtleWJvYXJkQnV0dG5vcyhrZXlib2FyZFdyYXBwZXIpO1xuICBjaGFuZ2VMYXlvdXQoa2V5Ym9hcmRDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlib2FyZEFwcGVhcmFuY2U7XG4iLCJmdW5jdGlvbiBrZXlib2FyZEJ1dHRub3Mod3IpIHtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzMSA9IFtcbiAgICAnYCcsXG4gICAgJzEnLFxuICAgICcyJyxcbiAgICAnMycsXG4gICAgJzQnLFxuICAgICc1JyxcbiAgICAnNicsXG4gICAgJzcnLFxuICAgICc4JyxcbiAgICAnOScsXG4gICAgJzAnLFxuICAgICctJyxcbiAgICAnPScsXG4gICAgJ2JhY2tzcGFjZScsXG4gIF07XG4gIGNvbnN0IGtleWJvYXJkS2V5czIgPSBbXG4gICAgJ3RhYicsXG4gICAgJ3EnLFxuICAgICd3JyxcbiAgICAnZScsXG4gICAgJ3InLFxuICAgICd0JyxcbiAgICAneScsXG4gICAgJ3UnLFxuICAgICdpJyxcbiAgICAnbycsXG4gICAgJ3AnLFxuICAgICdbJyxcbiAgICAnXScsXG4gICAgJ1xcXFwnLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXMzID0gW1xuICAgICdjYXBzIGxvY2snLFxuICAgICdhJyxcbiAgICAncycsXG4gICAgJ2QnLFxuICAgICdmJyxcbiAgICAnZycsXG4gICAgJ2gnLFxuICAgICdqJyxcbiAgICAnaycsXG4gICAgJ2wnLFxuICAgICc7JyxcbiAgICAnXFwnJyxcbiAgICAnZW50ZXInLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXM0ID0gW1xuICAgICdzaGlmdCcsXG4gICAgJ3onLFxuICAgICd4JyxcbiAgICAnYycsXG4gICAgJ3YnLFxuICAgICdiJyxcbiAgICAnbicsXG4gICAgJ20nLFxuICAgICcsJyxcbiAgICAnLicsXG4gICAgJy8nLFxuICAgICfvuL8nLFxuICAgICdzaGlmdCcsXG4gIF07XG4gIGNvbnN0IGtleWJvYXJkS2V5czUgPSBbXG4gICAgJ2N0cmwnLFxuICAgICdmbicsXG4gICAgJ+KMmCcsXG4gICAgJ2FsdCcsXG4gICAgJycsXG4gICAgJ2FsdCcsXG4gICAgJ+OAiCcsXG4gICAgJ++5gCcsXG4gICAgJ+OAiScsXG4gICAgJ2N0cmwnLFxuICBdO1xuICBjb25zdCBrZXlib2FyZEtleXMxQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZEtleXMxLm1hcCgoeCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHg7XG4gICAga2V5Ym9hcmRLZXlzMUMuYXBwZW5kKGJ1dHRvbik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSk7XG4gIHdyLmFwcGVuZChrZXlib2FyZEtleXMxQyk7XG4gIGNvbnN0IGtleWJvYXJkS2V5czJDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGtleWJvYXJkS2V5czIubWFwKCh4KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uaW5uZXJUZXh0ID0geDtcbiAgICBrZXlib2FyZEtleXMyQy5hcHBlbmQoYnV0dG9uKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9KTtcbiAgd3IuYXBwZW5kKGtleWJvYXJkS2V5czJDKTtcbiAgY29uc3Qga2V5Ym9hcmRLZXlzM0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5Ym9hcmRLZXlzMy5tYXAoKHgpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB4O1xuICAgIGtleWJvYXJkS2V5czNDLmFwcGVuZChidXR0b24pO1xuICAgIHJldHVybiBidXR0b247XG4gIH0pO1xuICB3ci5hcHBlbmQoa2V5Ym9hcmRLZXlzM0MpO1xuICBjb25zdCBrZXlib2FyZEtleXM0QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXlib2FyZEtleXM0Lm1hcCgoeCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHg7XG4gICAga2V5Ym9hcmRLZXlzNEMuYXBwZW5kKGJ1dHRvbik7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfSk7XG4gIHdyLmFwcGVuZChrZXlib2FyZEtleXM0Qyk7XG4gIGNvbnN0IGtleWJvYXJkS2V5czVDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGtleWJvYXJkS2V5czUubWFwKCh4KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uaW5uZXJUZXh0ID0geDtcbiAgICBrZXlib2FyZEtleXM1Qy5hcHBlbmQoYnV0dG9uKTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9KTtcbiAgd3IuYXBwZW5kKGtleWJvYXJkS2V5czVDKTtcbiAgY29uc3QgaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBkaXYgPiBkaXYnKS5jaGlsZHJlbjtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBpLmxlbmd0aDsgeCArPSAxKSB7XG4gICAgaVt4XS5jbGFzc0xpc3QuYWRkKCdrZXlSb3cnKTtcbiAgICBpW3hdLmNsYXNzTGlzdC5hZGQoYGtleVJvdyR7eH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlib2FyZEJ1dHRub3M7XG4iLCJmdW5jdGlvbiBrZXlib2FyZExvZ2ljKCkge1xuICBjb25zdCBzdGF0ZSA9IFtdO1xuICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiBkaXZcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBkaXYgPiB0ZXh0YXJlYVwiKTtcblxuICBmdW5jdGlvbiBjYWxjdWxhdGVJbnB1dFZhbHVlKHN0YXRlQykge1xuICAgIHJldHVybiBzdGF0ZUMuam9pbihcIlwiKTtcbiAgfVxuICBrZXlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzdGF0ZS5wdXNoKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgLyogY29uc29sZS5sb2coc3RhdGUpOyAqL1xuICAgIGRlYnVnZ2VyO1xuICAgIGlucHV0LnZhbHVlID0gY2FsY3VsYXRlSW5wdXRWYWx1ZShzdGF0ZSk7XG4gICAgZGVidWdnZXI7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlib2FyZExvZ2ljO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQga2V5Ym9hcmRBcHBlYXJhbmNlIGZyb20gJy4vYXBwZWFyYW5jZS9rZXlib2FyZEFwcGVhcmFuY2UnO1xuaW1wb3J0IGtleWJvYXJkTG9naWMgZnJvbSAnLi9sb2dpYy9rZXlib2FyZExvZ2ljJztcblxua2V5Ym9hcmRBcHBlYXJhbmNlKCk7XG5rZXlib2FyZExvZ2ljKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=