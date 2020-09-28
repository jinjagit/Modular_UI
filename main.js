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
    let totalGaps = ((num - 1) * 8) + 10;

    for (let i = 0; i < num; i++) {
      let buttonW = `${(300 - totalGaps) * buttons[i][2] / 100}px`;
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
      5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQXFDOztBQUVyQztBQUNBLEVBQUUsa0RBQVE7QUFDVjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQyx5QkFBeUI7QUFDOUQsOEJBQThCLHlCQUF5QjtBQUN2RCw2QkFBNkIsaUJBQWlCOztBQUU5QyxVQUFVO0FBQ1YsQ0FBQzs7QUFFZ0I7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QUFjO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7QUM3T3JCO0FBQUE7QUFBQTtBQUFBOztBQUV5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVrQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1aUxheW91dCB9IGZyb20gJy4vdWlMYXlvdXQnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIHVpTGF5b3V0LmluaXRpYWxMYXlvdXQoKTtcbn1cblxubWFpbigpO1xuIiwiLy8gU2VlIHdpa2kgZm9yIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2ppbmphZ2l0L215VUkvd2lraVxuXG5jb25zdCBwYXJhbXMgPSAoKCkgPT4ge1xuICBsZXQgdWlQYXJhbXMgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3Qgc2V0VWlQYXJhbSA9IChpZCwgdmFsdWUpID0+IHsgdWlQYXJhbXMuc2V0KGlkLCB2YWx1ZSk7IH07XG4gIGNvbnN0IGdldFVpUGFyYW0gPSAoaWQpID0+IHsgcmV0dXJuIHVpUGFyYW1zLmdldChpZCk7IH07XG4gIGNvbnN0IGdldFVpUGFyYW1zID0gKCkgPT4geyByZXR1cm4gdWlQYXJhbXM7IH07XG5cbiAgcmV0dXJuIHsgc2V0VWlQYXJhbSwgZ2V0VWlQYXJhbSwgZ2V0VWlQYXJhbXMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBhcmFtcyB9XG4iLCIvLyBTZWUgd2lraSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vamluamFnaXQvbXlVSS93aWtpXG5cbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4vcGFyYW1zJ1xuXG5jb25zdCB1aUFjdGlvbnMgPSAoKCkgPT4ge1xuICBsZXQgbGVmdFNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtc2lkZWJhclwiKTtcbiAgbGV0IHJpZ2h0U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtc2lkZWJhclwiKTtcbiAgbGV0IHNob3dVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1VSVwiKTtcblxuICBzaG93VUkub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XG4gICAgbGVmdFNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICByaWdodFNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwcmludExhc3RBY3Rpb24oXCJVSVwiKTsgLy8gRGV2IHVzZSBvbmx5XG4gIH1cblxuICAvLyBGdW5jdGlvbiBhY3Rpb24oaWQpOiBUaGlzIGlzIHdoZXJlIHRoZSBVSSBpbnRlcmZhY2VzIHdpdGggdGhlIGFwcFxuICAvLyBGb3IgZXhhbXBsZSwgaWYgdGhpcyBVSSB3YXMgZm9yIGFuIGFwcCB0aGF0IGRyYXdzIG9udG8gYSBjYW52YXMsIHdlIGNvdWxkXG4gIC8vIGV4cGVjdCBhbiBhY3Rpb24gYnV0dG9uIHRvIGNhbGwgYSBkcmF3KCkgZnVuY3Rpb24gdmlhIHRoaXMgZnVuY3Rpb24uXG4gIGNvbnN0IGFjdGlvbiA9IChpZCkgPT4ge1xuICAgIHByaW50TGFzdEFjdGlvbihpZCk7XG5cbiAgICBpZiAoaWQgPT0gXCJnZXRfcGFyYW1ldGVyX3ZhbHVlc1wiKSB7XG4gICAgICAgIHByaW50UGFyYW1zKCk7XG4gICAgfSBlbHNlIGlmIChpZCA9PSBcIk1vZHVsYXJfVUlcIikge1xuICAgICAgICBsZWZ0U2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJpZ2h0U2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIGlmIChpZCA9PSBcInJlYWRtZVwiKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vamluamFnaXQvTW9kdWxhcl9VSS9ibG9iL21hc3Rlci9SRUFETUUubWRcIlxuICAgIH0gZWxzZSBpZiAoaWQgPT0gXCJ3aWtpXCIpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9qaW5qYWdpdC9Nb2R1bGFyX1VJL3dpa2lcIlxuICAgIH1cbiAgfTtcblxuXG4gIC8vIERFViBBQ1RJT05TIC0gdXNlZCB0byBwcmludCBhY3Rpb25zICYgcGFyYW0gdmFsdWVzIGR1cmluZyBkZXZlbG9wbWVudFxuXG4gIGNvbnN0IHByaW50TGFzdEFjdGlvbiA9IChpZCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhY3Rpb25zXyR7NH1gKS5pbm5lckhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uc18kezN9YCkuaW5uZXJIVE1MO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhY3Rpb25zXyR7M31gKS5pbm5lckhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uc18kezJ9YCkuaW5uZXJIVE1MO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhY3Rpb25zXyR7Mn1gKS5pbm5lckhUTUwgPSBgJHtpZH1gO1xuICB9O1xuXG4gIGNvbnN0IHByaW50UGFyYW1zID0gKCkgPT4ge1xuICAgIGxldCBwYXJhbXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYW1zJyk7XG5cbiAgICB3aGlsZSAocGFyYW1zRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyYW1zRGl2LnJlbW92ZUNoaWxkKHBhcmFtc0Rpdi5sYXN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgbGV0IHBhcmFtZXRlcnMgPSBwYXJhbXMuZ2V0VWlQYXJhbXMoKTtcblxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBwYXJhbWV0ZXJzKSB7XG4gICAgICBsZXQgcGFyYW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcGFyYW1UZXh0LmlubmVySFRNTCA9IGAke2tleX06ICR7dmFsdWV9YDtcbiAgICAgIHBhcmFtc0Rpdi5hcHBlbmRDaGlsZChwYXJhbVRleHQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBhY3Rpb24gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVpQWN0aW9ucyB9IiwiLy8gU2VlIHdpa2kgZm9yIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2ppbmphZ2l0L215VUkvd2lraVxuXG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuL3BhcmFtcydcbmltcG9ydCB7IHVpQWN0aW9ucyB9IGZyb20gJy4vdWlBY3Rpb25zJ1xuXG5jb25zdCB1aUVsZW1lbnRzID0gKCgpID0+IHtcbiAgbGV0IGJhY2tncm91bmRDb2xvciA9IFwiaHNsKDIyOSwgMTUlLCA3JSlcIjtcbiAgbGV0IGZvcmVncm91bmRIb3ZlckNvbG9yID0gXCJoc2woMjI5LCAyNSUsIDM1JSlcIjtcbiAgbGV0IGZvbnRDb2xvciA9IFwiaHNsKDQ2LCA0MCUsIDg4JSlcIjtcbiAgbGV0IGdyZXlGb250Q29sb3IgPSBcImhzbCg0NiwgNSUsIDQ4JSlcIjtcblxuICBjb25zdCBsaW1pdFZhbHVlID0gKG51bSwgbWluID0gMC4wLCBtYXggPSAxMDAuMCkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heClcbiAgfTtcblxuICAvLyBDcmVhdGUgYSBzbGlkZXIgYW5kIGl0cyBiZWhhdmlvdXIuXG4gIGNvbnN0IGFkZFNsaWRlciA9IChuYW1lLCBwYXJlbnQsIGluaXRpYWxfdmFsdWUgPSA1MC4wLCBtaW4gPSAwLjAsIG1heCA9IDEwMC4wLCBzdGVwID0gMC4wMSkgPT4ge1xuICAgIC8vIHNsaWRlclRvcERpdlxuICAgIGxldCBzbGlkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzbGlkZXJEaXYuY2xhc3NMaXN0LmFkZCgnc2xpZGVyRGl2Jyk7XG5cbiAgICBsZXQgc2xpZGVyVG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2xpZGVyVG9wRGl2LmNsYXNzTGlzdC5hZGQoJ3NsaWRlclRvcERpdicpO1xuICAgIHNsaWRlckRpdi5hcHBlbmRDaGlsZChzbGlkZXJUb3BEaXYpO1xuXG4gICAgbGV0IHNsaWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2xpZGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJUZXh0Jyk7XG4gICAgc2xpZGVyVGV4dC5pbm5lckhUTUwgPSBgJHtuYW1lLnJlcGxhY2UoL18vZywgXCIgXCIpfTpgO1xuICAgIHNsaWRlclRvcERpdi5hcHBlbmRDaGlsZChzbGlkZXJUZXh0KTtcblxuICAgIGxldCBzbGlkZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc2xpZGVySW5wdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyRmllbGQnKTtcbiAgICBzbGlkZXJJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICBzbGlkZXJJbnB1dC5taW4gPSBtaW47XG4gICAgc2xpZGVySW5wdXQubWF4ID0gbWF4O1xuICAgIHNsaWRlcklucHV0LnN0ZXAgPSBzdGVwO1xuICAgIHNsaWRlclRvcERpdi5hcHBlbmRDaGlsZChzbGlkZXJJbnB1dCk7XG5cbiAgICAvLyBzbGlkZXJDb250YWluZXJcbiAgICBsZXQgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlckNvbnRhaW5lcicpO1xuICAgIHNsaWRlckRpdi5hcHBlbmRDaGlsZChzbGlkZXJDb250YWluZXIpO1xuXG4gICAgbGV0IHZlcnRpY2FsQ2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmVydGljYWxDZW50ZXIuY2xhc3NMaXN0LmFkZCgndmVydGljYWwtY2VudGVyJyk7XG4gICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHZlcnRpY2FsQ2VudGVyKTtcblxuICAgIGxldCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXInKTtcbiAgICBzbGlkZXIuaWQgPSBuYW1lO1xuICAgIHNsaWRlci50eXBlID0gXCJyYW5nZVwiO1xuICAgIHNsaWRlci5taW4gPSBtaW47XG4gICAgc2xpZGVyLm1heCA9IG1heDtcbiAgICBzbGlkZXIuc3RlcCA9IHN0ZXA7XG4gICAgdmVydGljYWxDZW50ZXIuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcblxuICAgIC8vIFNldCBzbGlkZXIgYW5kIHNsaWRlciBpbnB1dCB0byBpbml0aWFsIHZhbHVlXG4gICAgc2xpZGVyLnZhbHVlID0gaW5pdGlhbF92YWx1ZTtcbiAgICBzbGlkZXJJbnB1dC52YWx1ZSA9IGluaXRpYWxfdmFsdWU7XG5cbiAgICAvLyBBZGQgY3VycmVudCBpZCAoaykgYW5kIHNsaWRlciB2YWx1ZSAodikgdG8gdWlQYXJhbXMgaGFzaG1hcFxuICAgIHBhcmFtcy5zZXRVaVBhcmFtKHNsaWRlci5pZCwgc2xpZGVyLnZhbHVlKTtcblxuICAgIC8vIEFkZCBiZWhhdmlvdXJcbiAgICBcbiAgICAvLyBVcGRhdGUgdGhlIHNsaWRlciBpbnB1dCBib3ggdmFsdWUgKGVhY2ggdGltZSB5b3UgZHJhZyB0aGUgc2xpZGVyIGhhbmRsZSlcbiAgICBzbGlkZXIub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2xpZGVySW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBcbiAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZSBvbiBtb3VzZXVwIChhbmQgY2FsbCBhbiBhY3Rpb24gYXMgZGVzaXJlZClcbiAgICBzbGlkZXIub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XG4gICAgICBzbGlkZXJJbnB1dC52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICBwYXJhbXMuc2V0VWlQYXJhbShzbGlkZXIuaWQsIHNsaWRlci52YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFNldCB0aGUgc2xpZGVyIHZhbHVlIHdoZW4gaGl0IHJldHVybiAmJiBzbGlkZXIgaW5wdXQgYm94IGluIGZvY3VzIChhbmQgY2FsbCBhbiBhY3Rpb24gYXMgZGVzaXJlZClcbiAgICBzbGlkZXJJbnB1dC5vbmtleXVwID0gZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IGtleVVwID0gYCR7ZS5rZXl9YDtcbiAgXG4gICAgICBpZiAoa2V5VXAgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHNsaWRlcklucHV0LnZhbHVlID0gK2xpbWl0VmFsdWUodGhpcy52YWx1ZSwgbWluLCBtYXgpLnRvRml4ZWQoMik7XG4gICAgICAgIHNsaWRlci52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHBhcmFtcy5zZXRVaVBhcmFtKHNsaWRlci5pZCwgc2xpZGVyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2xpZGVyRGl2KTtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSByb3cgb2YgYnV0dG9ucywgYW5kIHRoZWlyIGJlaGF2aW91cnMuXG4gIGNvbnN0IGFkZEJ1dHRvblJvdyA9IChwYXJlbnQsIGJ1dHRvbnMpID0+IHtcbiAgICBsZXQgYnV0dG9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uUm93LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1yb3cnKTtcblxuICAgIGxldCBudW0gPSBidXR0b25zLmxlbmd0aDtcbiAgICBsZXQgdG90YWxHYXBzID0gKChudW0gLSAxKSAqIDgpICsgMTA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICBsZXQgYnV0dG9uVyA9IGAkeygzMDAgLSB0b3RhbEdhcHMpICogYnV0dG9uc1tpXVsyXSAvIDEwMH1weGA7XG4gICAgICBsZXQgYnV0dG9uID0gbnVsbDtcbiAgICAgIFxuICAgICAgaWYgKGJ1dHRvbnNbaV1bMV0gPT0gXCJ0b2dnbGVcIikge1xuICAgICAgICBidXR0b24gPSBhZGRUb2dnbGUoYnV0dG9uc1tpXVswXSwgYnV0dG9uVywgYnV0dG9uc1tpXVszXSk7XG4gICAgICB9IGVsc2UgeyAvLyBhZGQgYWN0aW9uIGJ1dHRvblxuICAgICAgICBidXR0b24gPSBhZGRBY3Rpb24oYnV0dG9uc1tpXVswXSwgYnV0dG9uVyk7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvblJvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgaWYgKGkgPiAwKSB7IGJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI4cHhcIjsgfVxuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChidXR0b25Sb3cpO1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvblN0eWxpbmcgPSAobmFtZSwgd2lkdGgpID0+IHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pZCA9IG5hbWU7XG4gICAgYnV0dG9uLnN0eWxlLndpZHRoID0gd2lkdGg7XG5cbiAgICBsZXQgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBidXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10ZXh0Jyk7XG4gICAgYnV0dG9uVGV4dC5pbm5lckhUTUwgPSBgJHtuYW1lLnJlcGxhY2UoL18vZywgXCIgXCIpfWA7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvblRleHQpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBhZGRUb2dnbGUgPSAobmFtZSwgd2lkdGgsIHN0YXRlKSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGJ1dHRvblN0eWxpbmcobmFtZSwgd2lkdGgpO1xuXG4gICAgaWYgKHN0YXRlID09IGZhbHNlKSB7IGJ1dHRvbi5zdHlsZS5jb2xvciA9IGdyZXlGb250Q29sb3I7IH1cblxuICAgIC8vIEFkZCBjdXJyZW50IGlkIChrKSBhbmQgdG9nZ2xlIHZhbHVlICh2KSB0byB1aVBhcmFtcyBoYXNobWFwXG4gICAgcGFyYW1zLnNldFVpUGFyYW0oYnV0dG9uLmlkLCBzdGF0ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHRvZ2dsZSB2YWx1ZSBvbiBtb3VzZXVwXG4gICAgYnV0dG9uLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHBhcmFtcy5nZXRVaVBhcmFtKHRoaXMuaWQpID09IGZhbHNlKSB7XG4gICAgICAgIHBhcmFtcy5zZXRVaVBhcmFtKHRoaXMuaWQsIHRydWUpO1xuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gZm9udENvbG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLnNldFVpUGFyYW0odGhpcy5pZCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gZ3JleUZvbnRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZEFjdGlvbiA9IChuYW1lLCB3aWR0aCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBidXR0b25TdHlsaW5nKG5hbWUsIHdpZHRoKTtcblxuICAgIC8vIENhbGwgYW4gYWN0aW9uIGFzIGRlc2lyZWQgYnkgcGFzc2luZyBidXR0b24gaWQgdG8gdWlBY3Rpb25zLmFjdGlvbigpXG4gICAgYnV0dG9uLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdWlBY3Rpb25zLmFjdGlvbih0aGlzLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHRpdGxlIGJveCwgYW5kIHJlbGF0ZWQgYmVoYXZpb3VycyAoaWYgZGVzaXJlZCkuXG4gIGNvbnN0IGFkZFRpdGxlID0gKHRpdGxlLCBzdHJhcGxpbmUsIHBhcmVudCwgaGFzQWN0aW9uID0gZmFsc2UsIGZvbnRTaXplID0gMzUpID0+IHtcbiAgICBsZXQgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJveC5pZCA9IHRpdGxlO1xuICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuXG4gICAgaWYgKGhhc0FjdGlvbiA9PSB0cnVlKSB7XG4gICAgICB0aXRsZUJveC5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZvcmVncm91bmRIb3ZlckNvbG9yO1xuICAgICAgfVxuICAgICAgdGl0bGVCb3gub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHRpdGxlQm94Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB1aUFjdGlvbnMuYWN0aW9uKHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS10ZXh0Jyk7XG4gICAgdGl0bGVUZXh0LmlkID0gYCR7dGl0bGV9LXRleHRgO1xuICAgIHRpdGxlVGV4dC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICB0aXRsZVRleHQuaW5uZXJIVE1MID0gYCR7dGl0bGUucmVwbGFjZSgvXy9nLCBcIiBcIil9YDtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgbGV0IHN0cmFwbGluZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RyYXBsaW5lVGV4dC5jbGFzc0xpc3QuYWRkKCdzdHJhcGxpbmUtdGV4dCcpO1xuICAgIHN0cmFwbGluZVRleHQuaWQgPSBzdHJhcGxpbmU7XG4gICAgc3RyYXBsaW5lVGV4dC5pbm5lckhUTUwgPSBgJHtzdHJhcGxpbmUucmVwbGFjZSgvXy9nLCBcIiBcIil9YDtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChzdHJhcGxpbmVUZXh0KTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgdGV4dCBib3guXG4gIGNvbnN0IGFkZFRleHQgPSAobmFtZSwgcGFyZW50LCBwYXJhZ3JhcGhzLCBjZW50ZXJlZCkgPT4ge1xuICAgIGxldCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEJveC5pZCA9IG5hbWU7XG4gICAgdGV4dEJveC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWJveCcpO1xuXG4gICAgaWYgKGNlbnRlcmVkID09IHRydWUpIHtcbiAgICAgIHRleHRCb3guc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhZ3JhcGguaWQgPSBgJHtuYW1lfV8ke2l9YDtcbiAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBgJHtwYXJhZ3JhcGhzW2ldfWA7XG4gICAgICB0ZXh0Qm94LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRleHRCb3gpO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBhIHNjcm9sbGFibGUgdGV4dCBib3guXG4gIGNvbnN0IGFkZFNjcm9sbFRleHQgPSAobmFtZSwgcGFyZW50LCBwYXJhZ3JhcGhzID0gW10sIGxpbmVzID0gMSkgPT4ge1xuICAgIGxldCBzY3JvbGxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxCb3guY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJveCcpO1xuICAgIHNjcm9sbEJveC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwnKTtcbiAgICBzY3JvbGxCb3guaWQgPSBuYW1lO1xuICAgIHNjcm9sbEJveC5zdHlsZS5oZWlnaHQgPSBgJHsoKGxpbmVzIC0gMSkgKiAyNCkgKyAyMH1weGA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBwYXJhZ3JhcGguaWQgPSBgJHtuYW1lfV8ke2l9YDtcbiAgICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBgJHtwYXJhZ3JhcGhzW2ldfWA7XG4gICAgICBzY3JvbGxCb3guYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoc2Nyb2xsQm94KTtcbiAgfTtcblxuICByZXR1cm4geyBhZGRTbGlkZXIsIGFkZEJ1dHRvblJvdywgYWRkVGl0bGUsIGFkZFRleHQsIGFkZFNjcm9sbFRleHQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVpRWxlbWVudHMgfVxuIiwiLy8gU2VlIHdpa2kgZm9yIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2ppbmphZ2l0L215VUkvd2lraVxuXG5pbXBvcnQgeyB1aUVsZW1lbnRzIH0gZnJvbSAnLi91aUVsZW1lbnRzJ1xuXG5jb25zdCB1aUxheW91dCA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxMYXlvdXQgPSAoKSA9PiB7XG4gICAgLy8gTGVmdCBzaWRlYmFyXG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC11aS1jb250YWluZXJcIik7XG5cbiAgICB1aUVsZW1lbnRzLmFkZFRpdGxlKFwiTW9kdWxhcl9VSVwiLCBcIlByb2NlZHVyYWxseV9HZW5lcmF0ZWRcIiwgcGFyZW50LCB0cnVlKTtcbiAgICB1aUVsZW1lbnRzLmFkZEJ1dHRvblJvdyhwYXJlbnQsIFtcbiAgICAgIFtcInJlYWRtZVwiLCBcImFjdGlvblwiLCA1MF0sXG4gICAgICBbXCJ3aWtpXCIsIFwiYWN0aW9uXCIsIDUwXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkU2xpZGVyKFwicGFyYW1ldGVyX0FcIiwgcGFyZW50KTtcbiAgICB1aUVsZW1lbnRzLmFkZFNsaWRlcihcInBhcmFtZXRlcl9CXCIsIHBhcmVudCk7XG4gICAgdWlFbGVtZW50cy5hZGRTbGlkZXIoXCJwYXJhbWV0ZXJfQ1wiLCBwYXJlbnQsIDMsIDEsIDUsIDEpO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1widG9nZ2xlX0FcIiwgXCJ0b2dnbGVcIiwgNDAsIHRydWVdLFxuICAgICAgW1widG9nZ2xlX0JcIiwgXCJ0b2dnbGVcIiwgNjAsIGZhbHNlXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1widG9nZ2xlX0NcIiwgXCJ0b2dnbGVcIiwgMzMsIHRydWVdLFxuICAgICAgW1widG9nZ2xlX0RcIiwgXCJ0b2dnbGVcIiwgMzQsIGZhbHNlXSxcbiAgICAgIFtcInRvZ2dsZV9FXCIsIFwidG9nZ2xlXCIsIDMzLCB0cnVlXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1wiYWN0aW9uX0FcIiwgXCJhY3Rpb25cIiwgNTBdLFxuICAgICAgW1wiYWN0aW9uX0JcIiwgXCJhY3Rpb25cIiwgNTBdXG4gICAgXSk7XG4gICAgdWlFbGVtZW50cy5hZGRUZXh0KFxuICAgICAgXCJhY3Rpb25zXCIsXG4gICAgICBwYXJlbnQsXG4gICAgICBbXCJMYXN0IDMgYWN0aW9uczpcIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCI8YnIgLz5cIl1cbiAgICApO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1wiZ2V0X3BhcmFtZXRlcl92YWx1ZXNcIiwgXCJhY3Rpb25cIiwgMTAwXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkU2Nyb2xsVGV4dChcbiAgICAgIFwicGFyYW1zXCIsXG4gICAgICBwYXJlbnQsXG4gICAgICBbXCI8YnIgLz5cIl0sXG4gICAgICA1XG4gICAgKTtcblxuICAgIC8vIFJpZ2h0IHNpZGViYXJcbiAgICBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXVpLWNvbnRhaW5lclwiKTtcblxuICAgIHVpRWxlbWVudHMuYWRkVGl0bGUoXCJTaW1vbiBUaGFyYnlcIiwgXCIyMDIwXCIsIHBhcmVudCk7XG4gICAgdWlFbGVtZW50cy5hZGRUZXh0KFwic2VjdGlvbl9BXCIsIHBhcmVudCwgW1wiU2VjdGlvbiBBXCJdLCB0cnVlKTtcbiAgICB1aUVsZW1lbnRzLmFkZFNsaWRlcihcInBhcmFtZXRlcl9EXCIsIHBhcmVudCk7XG4gICAgdWlFbGVtZW50cy5hZGRTbGlkZXIoXCJwYXJhbWV0ZXJfRVwiLCBwYXJlbnQpO1xuICAgIHVpRWxlbWVudHMuYWRkVGV4dChcbiAgICAgIFwiZXhhbXBsZV90ZXh0X2JveFwiLFxuICAgICAgcGFyZW50LFxuICAgICAgW1wiVGhpcyBpcyBhIHRleHQgYm94LlwiLFxuICAgICAgICBcIjxiciAvPlwiLFxuICAgICAgICBcIkl0IHdpbGwgZ3JvdyB0byBmaXQgdGhlIHRleHQgcHJvdmlkZWQuXCJdXG4gICAgKTtcbiAgICB1aUVsZW1lbnRzLmFkZFRleHQoXCJzZWN0aW9uX0FcIiwgcGFyZW50LCBbXCJTZWN0aW9uIEJcIl0sIHRydWUpO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1widG9nZ2xlX0ZcIiwgXCJ0b2dnbGVcIiwgMzMsIGZhbHNlXSxcbiAgICAgIFtcInRvZ2dsZV9HXCIsIFwidG9nZ2xlXCIsIDM0LCBmYWxzZV0sXG4gICAgICBbXCJ0b2dnbGVfSFwiLCBcInRvZ2dsZVwiLCAzMywgdHJ1ZV1cbiAgICBdKTtcbiAgICB1aUVsZW1lbnRzLmFkZFNjcm9sbFRleHQoXG4gICAgICBcInNjcm9sbF9BXCIsXG4gICAgICBwYXJlbnQsXG4gICAgICBbXCJUaGlzIGlzIGEgc2Nyb2xsYWJsZSB0ZXh0IGJveC5cIixcbiAgICAgICAgXCI8YnIgLz5cIixcbiAgICAgICAgXCJJdCBoYXMgYSBmaXhlZCBoZWlnaHQgYW5kIGlzIHVzZWZ1bCB3aGVuIGEgdmFyaWFibGUgcXVhbnRpdHkgb2YgdGV4dCBtYXkgYmUgb3V0cHV0IHRvIHRoZSB0ZXh0IGJveC5cIixcbiAgICAgICAgXCJFYWNoIHBhcmFncmFwaCBpcyBnaXZlbiBhbiBpZCB2YWx1ZSBhbmQgdGh1cyBjYW4gYmUgc3R5bGVkICYvb3IgdXBkYXRlZCBpbmRpdmlkdWFsbHkuXCJdLFxuICAgICAgNFxuICAgICk7XG4gICAgdWlFbGVtZW50cy5hZGRCdXR0b25Sb3cocGFyZW50LCBbXG4gICAgICBbXCJhY3Rpb25fQ1wiLCBcImFjdGlvblwiLCA1MF0sXG4gICAgICBbXCJhY3Rpb25fRFwiLCBcImFjdGlvblwiLCA1MF1cbiAgICBdKTtcblxuICAgIC8vIE90aGVyIFVJIGRpdihzKSAtIHRoZXkgZG9uJ3QgaGF2ZSB0byBiZSBzaWRlYmFycyFcbiAgfTtcblxuICByZXR1cm4geyBpbml0aWFsTGF5b3V0IH07XG59KSgpO1xuXG5leHBvcnQgeyB1aUxheW91dCB9XG4iXSwic291cmNlUm9vdCI6IiJ9