/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uiLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiLayout */ "./src/uiLayout.js");


function main() {
  _uiLayout__WEBPACK_IMPORTED_MODULE_0__["uiLayout"].initialLayout();
}

main();


/***/ }),

/***/ "./src/params.js":
/*!***********************!*\
  !*** ./src/params.js ***!
  \***********************/
/*! exports provided: params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "params", function() { return params; });
// See wiki for more details: https://github.com/jinjagit/myUI/wiki

const params = (() => {
  let uiParams = new Map();

  const setUiParam = (id, value) => { uiParams.set(id, value); };
  const getUiParam = (id) => { return uiParams.get(id); };
  const getUiParams = () => { return uiParams; };

  return { setUiParam, getUiParam, getUiParams };
})();




/***/ }),

/***/ "./src/uiActions.js":
/*!**************************!*\
  !*** ./src/uiActions.js ***!
  \**************************/
/*! exports provided: uiActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiActions", function() { return uiActions; });
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params */ "./src/params.js");
// See wiki for more details: https://github.com/jinjagit/myUI/wiki



const uiActions = (() => {
  let leftSidebar = document.getElementById("left-sidebar");
  let rightSidebar = document.getElementById("right-sidebar");
  let showUI = document.getElementById("show-UI");

  showUI.onmouseup = function() {
    leftSidebar.style.display = "block";
    rightSidebar.style.display = "block";
    printLastAction("UI"); // Dev use only
  }

  // Function action(id): This is where the UI interfaces with the app
  // For example, if this UI was for an app that draws onto a canvas, we could
  // expect an action button to call a draw() function via this function.
  const action = (id) => {
    printLastAction(id);

    if (id == "get_parameter_values") {
        printParams();
    } else if (id == "Modular_UI") {
        leftSidebar.style.display = "none";
        rightSidebar.style.display = "none";
    } else if (id == "readme") {
        window.location.href = "https://github.com/jinjagit/Modular_UI/blob/master/README.md"
    } else if (id == "wiki") {
        window.location.href = "https://github.com/jinjagit/Modular_UI/wiki"
    }
  };


  // DEV ACTIONS - used to print actions & param values during development

  const printLastAction = (id) => {
    document.getElementById(`actions_${4}`).innerHTML = document.getElementById(`actions_${3}`).innerHTML;
    document.getElementById(`actions_${3}`).innerHTML = document.getElementById(`actions_${2}`).innerHTML;
    document.getElementById(`actions_${2}`).innerHTML = `${id}`;
  };

  const printParams = () => {
    let paramsDiv = document.getElementById('params');

    while (paramsDiv.firstChild) {
        paramsDiv.removeChild(paramsDiv.lastChild);
      }

    let parameters = _params__WEBPACK_IMPORTED_MODULE_0__["params"].getUiParams();

    for (let [key, value] of parameters) {
      let paramText = document.createElement('p');
      paramText.innerHTML = `${key}: ${value}`;
      paramsDiv.appendChild(paramText);
    }
  };

  return { action };
})();



/***/ }),

/***/ "./src/uiElements.js":
/*!***************************!*\
  !*** ./src/uiElements.js ***!
  \***************************/
/*! exports provided: uiElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiElements", function() { return uiElements; });
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params */ "./src/params.js");
/* harmony import */ var _uiActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiActions */ "./src/uiActions.js");
// See wiki for more details: https://github.com/jinjagit/myUI/wiki




const uiElements = (() => {
  let backgroundColor = "hsl(229, 15%, 7%)";
  let foregroundHoverColor = "hsl(229, 25%, 35%)";
  let fontColor = "hsl(46, 40%, 88%)";
  let greyFontColor = "hsl(46, 5%, 48%)";

  const limitValue = (num, min = 0.0, max = 100.0) => {
    return Math.min(Math.max(num, min), max)
  };

  // Create a slider and its behaviour.
  const addSlider = (name, parent, initial_value = 50.0, min = 0.0, max = 100.0, step = 0.01) => {
    // sliderTopDiv
    let sliderDiv = document.createElement('div');
    sliderDiv.classList.add('sliderDiv');

    let sliderTopDiv = document.createElement('div');
    sliderTopDiv.classList.add('sliderTopDiv');
    sliderDiv.appendChild(sliderTopDiv);

    let sliderText = document.createElement('p');
    sliderText.classList.add('sliderText');
    sliderText.innerHTML = `${name.replace(/_/g, " ")}:`;
    sliderTopDiv.appendChild(sliderText);

    let sliderInput = document.createElement('input');
    sliderInput.classList.add('sliderField');
    sliderInput.type = "number";
    sliderInput.min = min;
    sliderInput.max = max;
    sliderInput.step = step;
    sliderTopDiv.appendChild(sliderInput);

    // sliderContainer
    let sliderContainer = document.createElement('div');
    sliderContainer.classList.add('sliderContainer');
    sliderDiv.appendChild(sliderContainer);

    let verticalCenter = document.createElement('div');
    verticalCenter.classList.add('vertical-center');
    sliderContainer.appendChild(verticalCenter);

    let slider = document.createElement('input');
    slider.classList.add('slider');
    slider.id = name;
    slider.type = "range";
    slider.min = min;
    slider.max = max;
    slider.step = step;
    verticalCenter.appendChild(slider);

    // Set slider and slider input to initial value
    slider.value = initial_value;
    sliderInput.value = initial_value;

    // Add current id (k) and slider value (v) to uiParams hashmap
    _params__WEBPACK_IMPORTED_MODULE_0__["params"].setUiParam(slider.id, slider.value);

    // Add behaviour
    
    // Update the slider input box value (each time you drag the slider handle)
    slider.oninput = function() {
      sliderInput.value = this.value;
    }
    
    // Set the slider value on mouseup (and call an action as desired)
    slider.onmouseup = function() {
      sliderInput.value = this.value;
      _params__WEBPACK_IMPORTED_MODULE_0__["params"].setUiParam(slider.id, slider.value);
    }
    
    // Set the slider value when hit return && slider input box in focus (and call an action as desired)
    sliderInput.onkeyup = function(e) {
      let keyUp = `${e.key}`;
  
      if (keyUp == "Enter") {
        sliderInput.value = +limitValue(this.value, min, max).toFixed(2);
        slider.value = this.value;
        _params__WEBPACK_IMPORTED_MODULE_0__["params"].setUiParam(slider.id, slider.value);
      }
    }

    parent.appendChild(sliderDiv);
  };

  // Create a row of buttons, and their behaviours.
  const addButtonRow = (parent, buttons) => {
    let buttonRow = document.createElement('div');
    buttonRow.classList.add('button-row');

    let num = buttons.length;
    let totalGaps = ((num - 1) * 8) + 5; // gaps between buttons + 1st margin-left

    for (let i = 0; i < num; i++) {
      let buttonW = `${(parent.offsetWidth - totalGaps) * buttons[i][2] / 100.0}px`;
      let button = null;
      
      if (buttons[i][1] == "toggle") {
        button = addToggle(buttons[i][0], buttonW, buttons[i][3]);
      } else { // add action button
        button = addAction(buttons[i][0], buttonW);
      }

      buttonRow.appendChild(button);
      if (i > 0) { button.style.marginLeft = "8px"; }
    }

    parent.appendChild(buttonRow);
  };

  const buttonStyling = (name, width) => {
    let button = document.createElement('div');
    button.classList.add('button');
    button.id = name;
    button.style.width = width;

    let buttonText = document.createElement('p');
    buttonText.classList.add('button-text');
    buttonText.innerHTML = `${name.replace(/_/g, " ")}`;
    button.appendChild(buttonText);

    return button;
  };

  const addToggle = (name, width, state) => {
    let button = buttonStyling(name, width);

    if (state == false) { button.style.color = greyFontColor; }

    // Add current id (k) and toggle value (v) to uiParams hashmap
    _params__WEBPACK_IMPORTED_MODULE_0__["params"].setUiParam(button.id, state);

    // Set the toggle value on mouseup
    button.onmouseup = function() {
      if (_params__WEBPACK_IMPORTED_MODULE_0__["params"].getUiParam(this.id) == false) {
        _params__WEBPACK_IMPORTED_MODULE_0__["params"].setUiParam(this.id, true);
        this.style.color = fontColor;
      } else {
        _params__WEBPACK_IMPORTED_MODULE_0__["params"].setUiParam(this.id, false);
        this.style.color = greyFontColor;
      }
    }

    return button;
  };

  const addAction = (name, width) => {
    let button = buttonStyling(name, width);

    // Call an action as desired by passing button id to uiActions.action()
    button.onmouseup = function() {
      _uiActions__WEBPACK_IMPORTED_MODULE_1__["uiActions"].action(this.id);
    }

    return button;
  };

  // Create a title box, and related behaviours (if desired).
  const addTitle = (title, strapline, parent, hasAction = false, fontSize = 35) => {
    let titleBox = document.createElement('div');
    titleBox.id = title;
    titleBox.classList.add('title-box');

    if (hasAction == true) {
      titleBox.onmouseover = function() {
        this.style.backgroundColor = foregroundHoverColor;
      }
      titleBox.onmouseout = function() {
        this.style.backgroundColor = backgroundColor;
      }
      titleBox.onmouseup = function() {
        _uiActions__WEBPACK_IMPORTED_MODULE_1__["uiActions"].action(this.id);
      }
    }

    let titleText = document.createElement('h1');
    titleText.classList.add('title-text');
    titleText.id = `${title}-text`;
    titleText.style.fontSize = `${fontSize}px`;
    titleText.innerHTML = `${title.replace(/_/g, " ")}`;
    titleBox.appendChild(titleText);

    let straplineText = document.createElement('p');
    straplineText.classList.add('strapline-text');
    straplineText.id = strapline;
    straplineText.innerHTML = `${strapline.replace(/_/g, " ")}`;
    titleBox.appendChild(straplineText);

    parent.appendChild(titleBox);
  };

  // Create a text box.
  const addText = (name, parent, paragraphs, centered) => {
    let textBox = document.createElement('div');
    textBox.id = name;
    textBox.classList.add('text-box');

    if (centered == true) {
      textBox.style.textAlign = "center";
    }

    for (let i = 0; i < paragraphs.length; i++) {
      let paragraph = document.createElement('p');
      paragraph.id = `${name}_${i}`;
      paragraph.innerHTML = `${paragraphs[i]}`;
      textBox.appendChild(paragraph);
    }

    parent.appendChild(textBox);
  };

  // Create a scrollable text box.
  const addScrollText = (name, parent, paragraphs = [], lines = 1) => {
    let scrollBox = document.createElement('div');
    scrollBox.classList.add('scroll-box');
    scrollBox.classList.add('scroll');
    scrollBox.id = name;
    scrollBox.style.height = `${((lines - 1) * 24) + 20}px`;

    for (let i = 0; i < paragraphs.length; i++) {
      let paragraph = document.createElement('p');
      paragraph.id = `${name}_${i}`;
      paragraph.innerHTML = `${paragraphs[i]}`;
      scrollBox.appendChild(paragraph);
    }

    parent.appendChild(scrollBox);
  };

  return { addSlider, addButtonRow, addTitle, addText, addScrollText };
})();




/***/ }),

/***/ "./src/uiLayout.js":
/*!*************************!*\
  !*** ./src/uiLayout.js ***!
  \*************************/
/*! exports provided: uiLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiLayout", function() { return uiLayout; });
/* harmony import */ var _uiElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiElements */ "./src/uiElements.js");
// See wiki for more details: https://github.com/jinjagit/myUI/wiki



const uiLayout = (() => {
  const initialLayout = () => {
    // Left sidebar
    let parent = document.getElementById("left-ui-container");

    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addTitle("Modular_UI", "Procedurally_Generated", parent, true);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addButtonRow(parent, [
      ["readme", "action", 50],
      ["wiki", "action", 50]
    ]);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addSlider("parameter_A", parent);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addSlider("parameter_B", parent);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addSlider("parameter_C", parent, 3, 1, 5, 1);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addButtonRow(parent, [
      ["toggle_A", "toggle", 40, true],
      ["toggle_B", "toggle", 60, false]
    ]);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addButtonRow(parent, [
      ["toggle_C", "toggle", 33, true],
      ["toggle_D", "toggle", 34, false],
      ["toggle_E", "toggle", 33, true]
    ]);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addButtonRow(parent, [
      ["action_A", "action", 50],
      ["action_B", "action", 50]
    ]);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addText(
      "actions",
      parent,
      ["Last 3 actions:",
        "<br />",
        "<br />",
        "<br />",
        "<br />"]
    );
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addButtonRow(parent, [
      ["get_parameter_values", "action", 100]
    ]);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addScrollText(
      "params",
      parent,
      ["<br />"],
      6
    );

    // Right sidebar
    parent = document.getElementById("right-ui-container");

    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addTitle("Simon Tharby", "2020", parent);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addText("section_A", parent, ["Section A"], true);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addSlider("parameter_D", parent);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addSlider("parameter_E", parent);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addText(
      "example_text_box",
      parent,
      ["This is a text box.",
        "<br />",
        "It will grow to fit the text provided."]
    );
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addText("section_A", parent, ["Section B"], true);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addButtonRow(parent, [
      ["toggle_F", "toggle", 33, false],
      ["toggle_G", "toggle", 34, false],
      ["toggle_H", "toggle", 33, true]
    ]);
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addScrollText(
      "scroll_A",
      parent,
      ["This is a scrollable text box.",
        "<br />",
        "It has a fixed height and is useful when a variable quantity of text may be output to the text box.",
        "Each paragraph is given an id value and thus can be styled &/or updated individually."],
      4
    );
    _uiElements__WEBPACK_IMPORTED_MODULE_0__["uiElements"].addButtonRow(parent, [
      ["action_C", "action", 50],
      ["action_D", "action", 50]
    ]);

    // Other UI div(s) - they don't have to be sidebars!
  };

  return { initialLayout };
})();




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQXFDOztBQUVyQztBQUNBLEVBQUUsa0RBQVE7QUFDVjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQyx5QkFBeUI7QUFDOUQsOEJBQThCLHlCQUF5QjtBQUN2RCw2QkFBNkIsaUJBQWlCOztBQUU5QyxVQUFVO0FBQ1YsQ0FBQzs7QUFFZ0I7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K0JBQStCLGNBQWM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVvQjs7Ozs7Ozs7Ozs7OztBQzdPckI7QUFBQTtBQUFBO0FBQUE7O0FBRXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRWtCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVpTGF5b3V0IH0gZnJvbSAnLi91aUxheW91dCdcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgdWlMYXlvdXQuaW5pdGlhbExheW91dCgpO1xufVxuXG5tYWluKCk7XG4iLCIvLyBTZWUgd2lraSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vamluamFnaXQvbXlVSS93aWtpXG5cbmNvbnN0IHBhcmFtcyA9ICgoKSA9PiB7XG4gIGxldCB1aVBhcmFtcyA9IG5ldyBNYXAoKTtcblxuICBjb25zdCBzZXRVaVBhcmFtID0gKGlkLCB2YWx1ZSkgPT4geyB1aVBhcmFtcy5zZXQoaWQsIHZhbHVlKTsgfTtcbiAgY29uc3QgZ2V0VWlQYXJhbSA9IChpZCkgPT4geyByZXR1cm4gdWlQYXJhbXMuZ2V0KGlkKTsgfTtcbiAgY29uc3QgZ2V0VWlQYXJhbXMgPSAoKSA9PiB7IHJldHVybiB1aVBhcmFtczsgfTtcblxuICByZXR1cm4geyBzZXRVaVBhcmFtLCBnZXRVaVBhcmFtLCBnZXRVaVBhcmFtcyB9O1xufSkoKTtcblxuZXhwb3J0IHsgcGFyYW1zIH1cbiIsIi8vIFNlZSB3aWtpIGZvciBtb3JlIGRldGFpbHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9qaW5qYWdpdC9teVVJL3dpa2lcblxuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi9wYXJhbXMnXG5cbmNvbnN0IHVpQWN0aW9ucyA9ICgoKSA9PiB7XG4gIGxldCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1zaWRlYmFyXCIpO1xuICBsZXQgcmlnaHRTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodC1zaWRlYmFyXCIpO1xuICBsZXQgc2hvd1VJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LVVJXCIpO1xuXG4gIHNob3dVSS5vbm1vdXNldXAgPSBmdW5jdGlvbigpIHtcbiAgICBsZWZ0U2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHJpZ2h0U2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHByaW50TGFzdEFjdGlvbihcIlVJXCIpOyAvLyBEZXYgdXNlIG9ubHlcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIGFjdGlvbihpZCk6IFRoaXMgaXMgd2hlcmUgdGhlIFVJIGludGVyZmFjZXMgd2l0aCB0aGUgYXBwXG4gIC8vIEZvciBleGFtcGxlLCBpZiB0aGlzIFVJIHdhcyBmb3IgYW4gYXBwIHRoYXQgZHJhd3Mgb250byBhIGNhbnZhcywgd2UgY291bGRcbiAgLy8gZXhwZWN0IGFuIGFjdGlvbiBidXR0b24gdG8gY2FsbCBhIGRyYXcoKSBmdW5jdGlvbiB2aWEgdGhpcyBmdW5jdGlvbi5cbiAgY29uc3QgYWN0aW9uID0gKGlkKSA9PiB7XG4gICAgcHJpbnRMYXN0QWN0aW9uKGlkKTtcblxuICAgIGlmIChpZCA9PSBcImdldF9wYXJhbWV0ZXJfdmFsdWVzXCIpIHtcbiAgICAgICAgcHJpbnRQYXJhbXMoKTtcbiAgICB9IGVsc2UgaWYgKGlkID09IFwiTW9kdWxhcl9VSVwiKSB7XG4gICAgICAgIGxlZnRTaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmlnaHRTaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKGlkID09IFwicmVhZG1lXCIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaW5qYWdpdC9Nb2R1bGFyX1VJL2Jsb2IvbWFzdGVyL1JFQURNRS5tZFwiXG4gICAgfSBlbHNlIGlmIChpZCA9PSBcIndpa2lcIikge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppbmphZ2l0L01vZHVsYXJfVUkvd2lraVwiXG4gICAgfVxuICB9O1xuXG5cbiAgLy8gREVWIEFDVElPTlMgLSB1c2VkIHRvIHByaW50IGFjdGlvbnMgJiBwYXJhbSB2YWx1ZXMgZHVyaW5nIGRldmVsb3BtZW50XG5cbiAgY29uc3QgcHJpbnRMYXN0QWN0aW9uID0gKGlkKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFjdGlvbnNfJHs0fWApLmlubmVySFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhY3Rpb25zXyR7M31gKS5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFjdGlvbnNfJHszfWApLmlubmVySFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhY3Rpb25zXyR7Mn1gKS5pbm5lckhUTUw7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFjdGlvbnNfJHsyfWApLmlubmVySFRNTCA9IGAke2lkfWA7XG4gIH07XG5cbiAgY29uc3QgcHJpbnRQYXJhbXMgPSAoKSA9PiB7XG4gICAgbGV0IHBhcmFtc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbXMnKTtcblxuICAgIHdoaWxlIChwYXJhbXNEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJhbXNEaXYucmVtb3ZlQ2hpbGQocGFyYW1zRGl2Lmxhc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICBsZXQgcGFyYW1ldGVycyA9IHBhcmFtcy5nZXRVaVBhcmFtcygpO1xuXG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHBhcmFtZXRlcnMpIHtcbiAgICAgIGxldCBwYXJhbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhbVRleHQuaW5uZXJIVE1MID0gYCR7a2V5fTogJHt2YWx1ZX1gO1xuICAgICAgcGFyYW1zRGl2LmFwcGVuZENoaWxkKHBhcmFtVGV4dCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGFjdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IHsgdWlBY3Rpb25zIH0iLCIvLyBTZWUgd2lraSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vamluamFnaXQvbXlVSS93aWtpXG5cbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4vcGFyYW1zJ1xuaW1wb3J0IHsgdWlBY3Rpb25zIH0gZnJvbSAnLi91aUFjdGlvbnMnXG5cbmNvbnN0IHVpRWxlbWVudHMgPSAoKCkgPT4ge1xuICBsZXQgYmFja2dyb3VuZENvbG9yID0gXCJoc2woMjI5LCAxNSUsIDclKVwiO1xuICBsZXQgZm9yZWdyb3VuZEhvdmVyQ29sb3IgPSBcImhzbCgyMjksIDI1JSwgMzUlKVwiO1xuICBsZXQgZm9udENvbG9yID0gXCJoc2woNDYsIDQwJSwgODglKVwiO1xuICBsZXQgZ3JleUZvbnRDb2xvciA9IFwiaHNsKDQ2LCA1JSwgNDglKVwiO1xuXG4gIGNvbnN0IGxpbWl0VmFsdWUgPSAobnVtLCBtaW4gPSAwLjAsIG1heCA9IDEwMC4wKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KVxuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHNsaWRlciBhbmQgaXRzIGJlaGF2aW91ci5cbiAgY29uc3QgYWRkU2xpZGVyID0gKG5hbWUsIHBhcmVudCwgaW5pdGlhbF92YWx1ZSA9IDUwLjAsIG1pbiA9IDAuMCwgbWF4ID0gMTAwLjAsIHN0ZXAgPSAwLjAxKSA9PiB7XG4gICAgLy8gc2xpZGVyVG9wRGl2XG4gICAgbGV0IHNsaWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNsaWRlckRpdi5jbGFzc0xpc3QuYWRkKCdzbGlkZXJEaXYnKTtcblxuICAgIGxldCBzbGlkZXJUb3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzbGlkZXJUb3BEaXYuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVG9wRGl2Jyk7XG4gICAgc2xpZGVyRGl2LmFwcGVuZENoaWxkKHNsaWRlclRvcERpdik7XG5cbiAgICBsZXQgc2xpZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzbGlkZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlclRleHQnKTtcbiAgICBzbGlkZXJUZXh0LmlubmVySFRNTCA9IGAke25hbWUucmVwbGFjZSgvXy9nLCBcIiBcIil9OmA7XG4gICAgc2xpZGVyVG9wRGl2LmFwcGVuZENoaWxkKHNsaWRlclRleHQpO1xuXG4gICAgbGV0IHNsaWRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzbGlkZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJGaWVsZCcpO1xuICAgIHNsaWRlcklucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIHNsaWRlcklucHV0Lm1pbiA9IG1pbjtcbiAgICBzbGlkZXJJbnB1dC5tYXggPSBtYXg7XG4gICAgc2xpZGVySW5wdXQuc3RlcCA9IHN0ZXA7XG4gICAgc2xpZGVyVG9wRGl2LmFwcGVuZENoaWxkKHNsaWRlcklucHV0KTtcblxuICAgIC8vIHNsaWRlckNvbnRhaW5lclxuICAgIGxldCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyQ29udGFpbmVyJyk7XG4gICAgc2xpZGVyRGl2LmFwcGVuZENoaWxkKHNsaWRlckNvbnRhaW5lcik7XG5cbiAgICBsZXQgdmVydGljYWxDZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2ZXJ0aWNhbENlbnRlci5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbC1jZW50ZXInKTtcbiAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodmVydGljYWxDZW50ZXIpO1xuXG4gICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuICAgIHNsaWRlci5pZCA9IG5hbWU7XG4gICAgc2xpZGVyLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgc2xpZGVyLm1pbiA9IG1pbjtcbiAgICBzbGlkZXIubWF4ID0gbWF4O1xuICAgIHNsaWRlci5zdGVwID0gc3RlcDtcbiAgICB2ZXJ0aWNhbENlbnRlci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuXG4gICAgLy8gU2V0IHNsaWRlciBhbmQgc2xpZGVyIGlucHV0IHRvIGluaXRpYWwgdmFsdWVcbiAgICBzbGlkZXIudmFsdWUgPSBpbml0aWFsX3ZhbHVlO1xuICAgIHNsaWRlcklucHV0LnZhbHVlID0gaW5pdGlhbF92YWx1ZTtcblxuICAgIC8vIEFkZCBjdXJyZW50IGlkIChrKSBhbmQgc2xpZGVyIHZhbHVlICh2KSB0byB1aVBhcmFtcyBoYXNobWFwXG4gICAgcGFyYW1zLnNldFVpUGFyYW0oc2xpZGVyLmlkLCBzbGlkZXIudmFsdWUpO1xuXG4gICAgLy8gQWRkIGJlaGF2aW91clxuICAgIFxuICAgIC8vIFVwZGF0ZSB0aGUgc2xpZGVyIGlucHV0IGJveCB2YWx1ZSAoZWFjaCB0aW1lIHlvdSBkcmFnIHRoZSBzbGlkZXIgaGFuZGxlKVxuICAgIHNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzbGlkZXJJbnB1dC52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIFxuICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlIG9uIG1vdXNldXAgKGFuZCBjYWxsIGFuIGFjdGlvbiBhcyBkZXNpcmVkKVxuICAgIHNsaWRlci5vbm1vdXNldXAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNsaWRlcklucHV0LnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHBhcmFtcy5zZXRVaVBhcmFtKHNsaWRlci5pZCwgc2xpZGVyLnZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUgd2hlbiBoaXQgcmV0dXJuICYmIHNsaWRlciBpbnB1dCBib3ggaW4gZm9jdXMgKGFuZCBjYWxsIGFuIGFjdGlvbiBhcyBkZXNpcmVkKVxuICAgIHNsaWRlcklucHV0Lm9ua2V5dXAgPSBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQga2V5VXAgPSBgJHtlLmtleX1gO1xuICBcbiAgICAgIGlmIChrZXlVcCA9PSBcIkVudGVyXCIpIHtcbiAgICAgICAgc2xpZGVySW5wdXQudmFsdWUgPSArbGltaXRWYWx1ZSh0aGlzLnZhbHVlLCBtaW4sIG1heCkudG9GaXhlZCgyKTtcbiAgICAgICAgc2xpZGVyLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgcGFyYW1zLnNldFVpUGFyYW0oc2xpZGVyLmlkLCBzbGlkZXIudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzbGlkZXJEaXYpO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHJvdyBvZiBidXR0b25zLCBhbmQgdGhlaXIgYmVoYXZpb3Vycy5cbiAgY29uc3QgYWRkQnV0dG9uUm93ID0gKHBhcmVudCwgYnV0dG9ucykgPT4ge1xuICAgIGxldCBidXR0b25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Sb3cuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXJvdycpO1xuXG4gICAgbGV0IG51bSA9IGJ1dHRvbnMubGVuZ3RoO1xuICAgIGxldCB0b3RhbEdhcHMgPSAoKG51bSAtIDEpICogOCkgKyA1OyAvLyBnYXBzIGJldHdlZW4gYnV0dG9ucyArIDFzdCBtYXJnaW4tbGVmdFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgbGV0IGJ1dHRvblcgPSBgJHsocGFyZW50Lm9mZnNldFdpZHRoIC0gdG90YWxHYXBzKSAqIGJ1dHRvbnNbaV1bMl0gLyAxMDAuMH1weGA7XG4gICAgICBsZXQgYnV0dG9uID0gbnVsbDtcbiAgICAgIFxuICAgICAgaWYgKGJ1dHRvbnNbaV1bMV0gPT0gXCJ0b2dnbGVcIikge1xuICAgICAgICBidXR0b24gPSBhZGRUb2dnbGUoYnV0dG9uc1tpXVswXSwgYnV0dG9uVywgYnV0dG9uc1tpXVszXSk7XG4gICAgICB9IGVsc2UgeyAvLyBhZGQgYWN0aW9uIGJ1dHRvblxuICAgICAgICBidXR0b24gPSBhZGRBY3Rpb24oYnV0dG9uc1tpXVswXSwgYnV0dG9uVyk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvblJvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgaWYgKGkgPiAwKSB7IGJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI4cHhcIjsgfVxuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b25Sb3cpO1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvblN0eWxpbmcgPSAobmFtZSwgd2lkdGgpID0+IHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pZCA9IG5hbWU7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gd2lkdGg7XG5cbiAgICBsZXQgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10ZXh0Jyk7XG4gICAgYnV0dG9uVGV4dC5pbm5lckhUTUwgPSBgJHtuYW1lLnJlcGxhY2UoL18vZywgXCIgXCIpfWA7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBhZGRUb2dnbGUgPSAobmFtZSwgd2lkdGgsIHN0YXRlKSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGJ1dHRvblN0eWxpbmcobmFtZSwgd2lkdGgpO1xuXG4gICAgaWYgKHN0YXRlID09IGZhbHNlKSB7IGJ1dHRvbi5zdHlsZS5jb2xvciA9IGdyZXlGb250Q29sb3I7IH1cblxuICAgIC8vIEFkZCBjdXJyZW50IGlkIChrKSBhbmQgdG9nZ2xlIHZhbHVlICh2KSB0byB1aVBhcmFtcyBoYXNobWFwXG4gICAgcGFyYW1zLnNldFVpUGFyYW0oYnV0dG9uLmlkLCBzdGF0ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHRvZ2dsZSB2YWx1ZSBvbiBtb3VzZXVwXG4gICAgYnV0dG9uLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHBhcmFtcy5nZXRVaVBhcmFtKHRoaXMuaWQpID09IGZhbHNlKSB7XG4gICAgICAgIHBhcmFtcy5zZXRVaVBhcmFtKHRoaXMuaWQsIHRydWUpO1xuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gZm9udENvbG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLnNldFVpUGFyYW0odGhpcy5pZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gZ3JleUZvbnRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZEFjdGlvbiA9IChuYW1lLCB3aWR0aCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBidXR0b25TdHlsaW5nKG5hbWUsIHdpZHRoKTtcblxuICAgIC8vIENhbGwgYW4gYWN0aW9uIGFzIGRlc2lyZWQgYnkgcGFzc2luZyBidXR0b24gaWQgdG8gdWlBY3Rpb25zLmFjdGlvbigpXG4gICAgYnV0dG9uLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdWlBY3Rpb25zLmFjdGlvbih0aGlzLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHRpdGxlIGJveCwgYW5kIHJlbGF0ZWQgYmVoYXZpb3VycyAoaWYgZGVzaXJlZCkuXG4gIGNvbnN0IGFkZFRpdGxlID0gKHRpdGxlLCBzdHJhcGxpbmUsIHBhcmVudCwgaGFzQWN0aW9uID0gZmFsc2UsIGZvbnRTaXplID0gMzUpID0+IHtcbiAgICBsZXQgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJveC5pZCA9IHRpdGxlO1xuICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuXG4gICAgaWYgKGhhc0FjdGlvbiA9PSB0cnVlKSB7XG4gICAgICB0aXRsZUJveC5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZvcmVncm91bmRIb3ZlckNvbG9yO1xuICAgICAgfVxuICAgICAgdGl0bGVCb3gub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHRpdGxlQm94Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB1aUFjdGlvbnMuYWN0aW9uKHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS10ZXh0Jyk7XG4gICAgdGl0bGVUZXh0LmlkID0gYCR7dGl0bGV9LXRleHRgO1xuICAgIHRpdGxlVGV4dC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICB0aXRsZVRleHQuaW5uZXJIVE1MID0gYCR7dGl0bGUucmVwbGFjZSgvXy9nLCBcIiBcIil9YDtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgbGV0IHN0cmFwbGluZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RyYXBsaW5lVGV4dC5jbGFzc0xpc3QuYWRkKCdzdHJhcGxpbmUtdGV4dCcpO1xuICAgIHN0cmFwbGluZVRleHQuaWQgPSBzdHJhcGxpbmU7XG4gICAgc3RyYXBsaW5lVGV4dC5pbm5lckhUTUwgPSBgJHtzdHJhcGxpbmUucmVwbGFjZSgvXy9nLCBcIiBcIil9YDtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChzdHJhcGxpbmVUZXh0KTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgdGV4dCBib3guXG4gIGNvbnN0IGFkZFRleHQgPSAobmFtZSwgcGFyZW50LCBwYXJhZ3JhcGhzLCBjZW50ZXJlZCkgPT4ge1xuICAgIGxldCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEJveC5pZCA9IG5hbWU7XG4gICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWJveCcpO1xuXG4gICAgaWYgKGNlbnRlcmVkID09IHRydWUpIHtcbiAgICAgIHRleHRCb3guc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhZ3JhcGguaWQgPSBgJHtuYW1lfV8ke2l9YDtcbiAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBgJHtwYXJhZ3JhcGhzW2ldfWA7XG4gICAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRleHRCb3gpO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHNjcm9sbGFibGUgdGV4dCBib3guXG4gIGNvbnN0IGFkZFNjcm9sbFRleHQgPSAobmFtZSwgcGFyZW50LCBwYXJhZ3JhcGhzID0gW10sIGxpbmVzID0gMSkgPT4ge1xuICAgIGxldCBzY3JvbGxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxCb3guY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJveCcpO1xuICAgIHNjcm9sbEJveC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwnKTtcbiAgICBzY3JvbGxCb3guaWQgPSBuYW1lO1xuICAgIHNjcm9sbEJveC5zdHlsZS5oZWlnaHQgPSBgJHsoKGxpbmVzIC0gMSkgKiAyNCkgKyAyMH1weGA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhZ3JhcGguaWQgPSBgJHtuYW1lfV8ke2l9YDtcbiAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBgJHtwYXJhZ3JhcGhzW2ldfWA7XG4gICAgICBzY3JvbGxCb3guYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2Nyb2xsQm94KTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRTbGlkZXIsIGFkZEJ1dHRvblJvdywgYWRkVGl0bGUsIGFkZFRleHQsIGFkZFNjcm9sbFRleHQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVpRWxlbWVudHMgfVxuIiwiLy8gU2VlIHdpa2kgZm9yIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2ppbmphZ2l0L215VUkvd2lraVxuXG5pbXBvcnQgeyB1aUVsZW1lbnRzIH0gZnJvbSAnLi91aUVsZW1lbnRzJ1xuXG5jb25zdCB1aUxheW91dCA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxMYXlvdXQgPSAoKSA9PiB7XG4gICAgLy8gTGVmdCBzaWRlYmFyXG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC11aS1jb250YWluZXJcIik7XG5cbiAgICB1aUVsZW1lbnRzLmFkZFRpdGxlKFwiTW9kdWxhcl9VSVwiLCBcIlByb2NlZHVyYWxseV9HZW5lcmF0ZWRcIiwgcGFyZW50LCB0cnVlKTtcbiAgICB1aUVsZW1lbnRzLmFkZEJ1dHRvblJvdyhwYXJlbnQsIFtcbiAgICAgIFtcInJlYWRtZVwiLCBcImFjdGlvblwiLCA1MF0sXG4gICAgICBbXCJ3aWtpXCIsIFwiYWN0aW9uXCIsIDUwXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkU2xpZGVyKFwicGFyYW1ldGVyX0FcIiwgcGFyZW50KTtcbiAgICB1aUVsZW1lbnRzLmFkZFNsaWRlcihcInBhcmFtZXRlcl9CXCIsIHBhcmVudCk7XG4gICAgdWlFbGVtZW50cy5hZGRTbGlkZXIoXCJwYXJhbWV0ZXJfQ1wiLCBwYXJlbnQsIDMsIDEsIDUsIDEpO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1widG9nZ2xlX0FcIiwgXCJ0b2dnbGVcIiwgNDAsIHRydWVdLFxuICAgICAgW1widG9nZ2xlX0JcIiwgXCJ0b2dnbGVcIiwgNjAsIGZhbHNlXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1widG9nZ2xlX0NcIiwgXCJ0b2dnbGVcIiwgMzMsIHRydWVdLFxuICAgICAgW1widG9nZ2xlX0RcIiwgXCJ0b2dnbGVcIiwgMzQsIGZhbHNlXSxcbiAgICAgIFtcInRvZ2dsZV9FXCIsIFwidG9nZ2xlXCIsIDMzLCB0cnVlXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1wiYWN0aW9uX0FcIiwgXCJhY3Rpb25cIiwgNTBdLFxuICAgICAgW1wiYWN0aW9uX0JcIiwgXCJhY3Rpb25cIiwgNTBdXG4gICAgXSk7XG4gICAgdWlFbGVtZW50cy5hZGRUZXh0KFxuICAgICAgXCJhY3Rpb25zXCIsXG4gICAgICBwYXJlbnQsXG4gICAgICBbXCJMYXN0IDMgYWN0aW9uczpcIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCI8YnIgLz5cIl1cbiAgICApO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1wiZ2V0X3BhcmFtZXRlcl92YWx1ZXNcIiwgXCJhY3Rpb25cIiwgMTAwXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkU2Nyb2xsVGV4dChcbiAgICAgIFwicGFyYW1zXCIsXG4gICAgICBwYXJlbnQsXG4gICAgICBbXCI8YnIgLz5cIl0sXG4gICAgICA2XG4gICAgKTtcblxuICAgIC8vIFJpZ2h0IHNpZGViYXJcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXVpLWNvbnRhaW5lclwiKTtcblxuICAgIHVpRWxlbWVudHMuYWRkVGl0bGUoXCJTaW1vbiBUaGFyYnlcIiwgXCIyMDIwXCIsIHBhcmVudCk7XG4gICAgdWlFbGVtZW50cy5hZGRUZXh0KFwic2VjdGlvbl9BXCIsIHBhcmVudCwgW1wiU2VjdGlvbiBBXCJdLCB0cnVlKTtcbiAgICB1aUVsZW1lbnRzLmFkZFNsaWRlcihcInBhcmFtZXRlcl9EXCIsIHBhcmVudCk7XG4gICAgdWlFbGVtZW50cy5hZGRTbGlkZXIoXCJwYXJhbWV0ZXJfRVwiLCBwYXJlbnQpO1xuICAgIHVpRWxlbWVudHMuYWRkVGV4dChcbiAgICAgIFwiZXhhbXBsZV90ZXh0X2JveFwiLFxuICAgICAgcGFyZW50LFxuICAgICAgW1wiVGhpcyBpcyBhIHRleHQgYm94LlwiLFxuICAgICAgICBcIjxiciAvPlwiLFxuICAgICAgICBcIkl0IHdpbGwgZ3JvdyB0byBmaXQgdGhlIHRleHQgcHJvdmlkZWQuXCJdXG4gICAgKTtcbiAgICB1aUVsZW1lbnRzLmFkZFRleHQoXCJzZWN0aW9uX0FcIiwgcGFyZW50LCBbXCJTZWN0aW9uIEJcIl0sIHRydWUpO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1widG9nZ2xlX0ZcIiwgXCJ0b2dnbGVcIiwgMzMsIGZhbHNlXSxcbiAgICAgIFtcInRvZ2dsZV9HXCIsIFwidG9nZ2xlXCIsIDM0LCBmYWxzZV0sXG4gICAgICBbXCJ0b2dnbGVfSFwiLCBcInRvZ2dsZVwiLCAzMywgdHJ1ZV1cbiAgICBdKTtcbiAgICB1aUVsZW1lbnRzLmFkZFNjcm9sbFRleHQoXG4gICAgICBcInNjcm9sbF9BXCIsXG4gICAgICBwYXJlbnQsXG4gICAgICBbXCJUaGlzIGlzIGEgc2Nyb2xsYWJsZSB0ZXh0IGJveC5cIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCJJdCBoYXMgYSBmaXhlZCBoZWlnaHQgYW5kIGlzIHVzZWZ1bCB3aGVuIGEgdmFyaWFibGUgcXVhbnRpdHkgb2YgdGV4dCBtYXkgYmUgb3V0cHV0IHRvIHRoZSB0ZXh0IGJveC5cIixcbiAgICAgICAgXCJFYWNoIHBhcmFncmFwaCBpcyBnaXZlbiBhbiBpZCB2YWx1ZSBhbmQgdGh1cyBjYW4gYmUgc3R5bGVkICYvb3IgdXBkYXRlZCBpbmRpdmlkdWFsbHkuXCJdLFxuICAgICAgNFxuICAgICk7XG4gICAgdWlFbGVtZW50cy5hZGRCdXR0b25Sb3cocGFyZW50LCBbXG4gICAgICBbXCJhY3Rpb25fQ1wiLCBcImFjdGlvblwiLCA1MF0sXG4gICAgICBbXCJhY3Rpb25fRFwiLCBcImFjdGlvblwiLCA1MF1cbiAgICBdKTtcblxuICAgIC8vIE90aGVyIFVJIGRpdihzKSAtIHRoZXkgZG9uJ3QgaGF2ZSB0byBiZSBzaWRlYmFycyFcbiAgfTtcblxuICByZXR1cm4geyBpbml0aWFsTGF5b3V0IH07XG59KSgpO1xuXG5leHBvcnQgeyB1aUxheW91dCB9XG4iXSwic291cmNlUm9vdCI6IiJ9