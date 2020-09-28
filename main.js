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
    console.log(parent.offsetWidth);
    let buttonRow = document.createElement('div');
    buttonRow.classList.add('button-row');

    let num = buttons.length;
    let totalGaps = ((num - 1) * 8) + 5;

    for (let i = 0; i < num; i++) {
      let buttonW = `${(parent.offsetWidth - totalGaps) * buttons[i][2] / 100}px`;
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
    titleBox.style.width = `${parent.offsetWidth - 10}px`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWlFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQXFDOztBQUVyQztBQUNBLEVBQUUsa0RBQVE7QUFDVjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQyx5QkFBeUI7QUFDOUQsOEJBQThCLHlCQUF5QjtBQUN2RCw2QkFBNkIsaUJBQWlCOztBQUU5QyxVQUFVO0FBQ1YsQ0FBQzs7QUFFZ0I7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LEdBQUcsRUFBRTtBQUNsQywrQkFBK0IsY0FBYztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRW9COzs7Ozs7Ozs7Ozs7O0FDL09yQjtBQUFBO0FBQUE7QUFBQTs7QUFFeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2QsSUFBSSxzREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFa0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdWlMYXlvdXQgfSBmcm9tICcuL3VpTGF5b3V0J1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICB1aUxheW91dC5pbml0aWFsTGF5b3V0KCk7XG59XG5cbm1haW4oKTtcbiIsIi8vIFNlZSB3aWtpIGZvciBtb3JlIGRldGFpbHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9qaW5qYWdpdC9teVVJL3dpa2lcblxuY29uc3QgcGFyYW1zID0gKCgpID0+IHtcbiAgbGV0IHVpUGFyYW1zID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0IHNldFVpUGFyYW0gPSAoaWQsIHZhbHVlKSA9PiB7IHVpUGFyYW1zLnNldChpZCwgdmFsdWUpOyB9O1xuICBjb25zdCBnZXRVaVBhcmFtID0gKGlkKSA9PiB7IHJldHVybiB1aVBhcmFtcy5nZXQoaWQpOyB9O1xuICBjb25zdCBnZXRVaVBhcmFtcyA9ICgpID0+IHsgcmV0dXJuIHVpUGFyYW1zOyB9O1xuXG4gIHJldHVybiB7IHNldFVpUGFyYW0sIGdldFVpUGFyYW0sIGdldFVpUGFyYW1zIH07XG59KSgpO1xuXG5leHBvcnQgeyBwYXJhbXMgfVxuIiwiLy8gU2VlIHdpa2kgZm9yIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL2ppbmphZ2l0L215VUkvd2lraVxuXG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuL3BhcmFtcydcblxuY29uc3QgdWlBY3Rpb25zID0gKCgpID0+IHtcbiAgbGV0IGxlZnRTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LXNpZGViYXJcIik7XG4gIGxldCByaWdodFNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXNpZGViYXJcIik7XG4gIGxldCBzaG93VUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctVUlcIik7XG5cbiAgc2hvd1VJLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgIGxlZnRTaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcmlnaHRTaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcHJpbnRMYXN0QWN0aW9uKFwiVUlcIik7IC8vIERldiB1c2Ugb25seVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gYWN0aW9uKGlkKTogVGhpcyBpcyB3aGVyZSB0aGUgVUkgaW50ZXJmYWNlcyB3aXRoIHRoZSBhcHBcbiAgLy8gRm9yIGV4YW1wbGUsIGlmIHRoaXMgVUkgd2FzIGZvciBhbiBhcHAgdGhhdCBkcmF3cyBvbnRvIGEgY2FudmFzLCB3ZSBjb3VsZFxuICAvLyBleHBlY3QgYW4gYWN0aW9uIGJ1dHRvbiB0byBjYWxsIGEgZHJhdygpIGZ1bmN0aW9uIHZpYSB0aGlzIGZ1bmN0aW9uLlxuICBjb25zdCBhY3Rpb24gPSAoaWQpID0+IHtcbiAgICBwcmludExhc3RBY3Rpb24oaWQpO1xuXG4gICAgaWYgKGlkID09IFwiZ2V0X3BhcmFtZXRlcl92YWx1ZXNcIikge1xuICAgICAgICBwcmludFBhcmFtcygpO1xuICAgIH0gZWxzZSBpZiAoaWQgPT0gXCJNb2R1bGFyX1VJXCIpIHtcbiAgICAgICAgbGVmdFNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByaWdodFNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSBpZiAoaWQgPT0gXCJyZWFkbWVcIikge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2ppbmphZ2l0L01vZHVsYXJfVUkvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kXCJcbiAgICB9IGVsc2UgaWYgKGlkID09IFwid2lraVwiKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vamluamFnaXQvTW9kdWxhcl9VSS93aWtpXCJcbiAgICB9XG4gIH07XG5cblxuICAvLyBERVYgQUNUSU9OUyAtIHVzZWQgdG8gcHJpbnQgYWN0aW9ucyAmIHBhcmFtIHZhbHVlcyBkdXJpbmcgZGV2ZWxvcG1lbnRcblxuICBjb25zdCBwcmludExhc3RBY3Rpb24gPSAoaWQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uc18kezR9YCkuaW5uZXJIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFjdGlvbnNfJHszfWApLmlubmVySFRNTDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uc18kezN9YCkuaW5uZXJIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGFjdGlvbnNfJHsyfWApLmlubmVySFRNTDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYWN0aW9uc18kezJ9YCkuaW5uZXJIVE1MID0gYCR7aWR9YDtcbiAgfTtcblxuICBjb25zdCBwcmludFBhcmFtcyA9ICgpID0+IHtcbiAgICBsZXQgcGFyYW1zRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFtcycpO1xuXG4gICAgd2hpbGUgKHBhcmFtc0Rpdi5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmFtc0Rpdi5yZW1vdmVDaGlsZChwYXJhbXNEaXYubGFzdENoaWxkKTtcbiAgICAgIH1cblxuICAgIGxldCBwYXJhbWV0ZXJzID0gcGFyYW1zLmdldFVpUGFyYW1zKCk7XG5cbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgcGFyYW1ldGVycykge1xuICAgICAgbGV0IHBhcmFtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmFtVGV4dC5pbm5lckhUTUwgPSBgJHtrZXl9OiAke3ZhbHVlfWA7XG4gICAgICBwYXJhbXNEaXYuYXBwZW5kQ2hpbGQocGFyYW1UZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgYWN0aW9uIH07XG59KSgpO1xuXG5leHBvcnQgeyB1aUFjdGlvbnMgfSIsIi8vIFNlZSB3aWtpIGZvciBtb3JlIGRldGFpbHM6IGh0dHBzOi8vZ2l0aHViLmNvbS9qaW5qYWdpdC9teVVJL3dpa2lcblxuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi9wYXJhbXMnXG5pbXBvcnQgeyB1aUFjdGlvbnMgfSBmcm9tICcuL3VpQWN0aW9ucydcblxuY29uc3QgdWlFbGVtZW50cyA9ICgoKSA9PiB7XG4gIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCgyMjksIDE1JSwgNyUpXCI7XG4gIGxldCBmb3JlZ3JvdW5kSG92ZXJDb2xvciA9IFwiaHNsKDIyOSwgMjUlLCAzNSUpXCI7XG4gIGxldCBmb250Q29sb3IgPSBcImhzbCg0NiwgNDAlLCA4OCUpXCI7XG4gIGxldCBncmV5Rm9udENvbG9yID0gXCJoc2woNDYsIDUlLCA0OCUpXCI7XG5cbiAgY29uc3QgbGltaXRWYWx1ZSA9IChudW0sIG1pbiA9IDAuMCwgbWF4ID0gMTAwLjApID0+IHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpXG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgc2xpZGVyIGFuZCBpdHMgYmVoYXZpb3VyLlxuICBjb25zdCBhZGRTbGlkZXIgPSAobmFtZSwgcGFyZW50LCBpbml0aWFsX3ZhbHVlID0gNTAuMCwgbWluID0gMC4wLCBtYXggPSAxMDAuMCwgc3RlcCA9IDAuMDEpID0+IHtcbiAgICAvLyBzbGlkZXJUb3BEaXZcbiAgICBsZXQgc2xpZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2xpZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3NsaWRlckRpdicpO1xuXG4gICAgbGV0IHNsaWRlclRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNsaWRlclRvcERpdi5jbGFzc0xpc3QuYWRkKCdzbGlkZXJUb3BEaXYnKTtcbiAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQoc2xpZGVyVG9wRGl2KTtcblxuICAgIGxldCBzbGlkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNsaWRlclRleHQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVGV4dCcpO1xuICAgIHNsaWRlclRleHQuaW5uZXJIVE1MID0gYCR7bmFtZS5yZXBsYWNlKC9fL2csIFwiIFwiKX06YDtcbiAgICBzbGlkZXJUb3BEaXYuYXBwZW5kQ2hpbGQoc2xpZGVyVGV4dCk7XG5cbiAgICBsZXQgc2xpZGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNsaWRlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlckZpZWxkJyk7XG4gICAgc2xpZGVySW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgc2xpZGVySW5wdXQubWluID0gbWluO1xuICAgIHNsaWRlcklucHV0Lm1heCA9IG1heDtcbiAgICBzbGlkZXJJbnB1dC5zdGVwID0gc3RlcDtcbiAgICBzbGlkZXJUb3BEaXYuYXBwZW5kQ2hpbGQoc2xpZGVySW5wdXQpO1xuXG4gICAgLy8gc2xpZGVyQ29udGFpbmVyXG4gICAgbGV0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJDb250YWluZXInKTtcbiAgICBzbGlkZXJEaXYuYXBwZW5kQ2hpbGQoc2xpZGVyQ29udGFpbmVyKTtcblxuICAgIGxldCB2ZXJ0aWNhbENlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZlcnRpY2FsQ2VudGVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsLWNlbnRlcicpO1xuICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJ0aWNhbENlbnRlcik7XG5cbiAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG4gICAgc2xpZGVyLmlkID0gbmFtZTtcbiAgICBzbGlkZXIudHlwZSA9IFwicmFuZ2VcIjtcbiAgICBzbGlkZXIubWluID0gbWluO1xuICAgIHNsaWRlci5tYXggPSBtYXg7XG4gICAgc2xpZGVyLnN0ZXAgPSBzdGVwO1xuICAgIHZlcnRpY2FsQ2VudGVyLmFwcGVuZENoaWxkKHNsaWRlcik7XG5cbiAgICAvLyBTZXQgc2xpZGVyIGFuZCBzbGlkZXIgaW5wdXQgdG8gaW5pdGlhbCB2YWx1ZVxuICAgIHNsaWRlci52YWx1ZSA9IGluaXRpYWxfdmFsdWU7XG4gICAgc2xpZGVySW5wdXQudmFsdWUgPSBpbml0aWFsX3ZhbHVlO1xuXG4gICAgLy8gQWRkIGN1cnJlbnQgaWQgKGspIGFuZCBzbGlkZXIgdmFsdWUgKHYpIHRvIHVpUGFyYW1zIGhhc2htYXBcbiAgICBwYXJhbXMuc2V0VWlQYXJhbShzbGlkZXIuaWQsIHNsaWRlci52YWx1ZSk7XG5cbiAgICAvLyBBZGQgYmVoYXZpb3VyXG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSBzbGlkZXIgaW5wdXQgYm94IHZhbHVlIChlYWNoIHRpbWUgeW91IGRyYWcgdGhlIHNsaWRlciBoYW5kbGUpXG4gICAgc2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNsaWRlcklucHV0LnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgLy8gU2V0IHRoZSBzbGlkZXIgdmFsdWUgb24gbW91c2V1cCAoYW5kIGNhbGwgYW4gYWN0aW9uIGFzIGRlc2lyZWQpXG4gICAgc2xpZGVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2xpZGVySW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgcGFyYW1zLnNldFVpUGFyYW0oc2xpZGVyLmlkLCBzbGlkZXIudmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBTZXQgdGhlIHNsaWRlciB2YWx1ZSB3aGVuIGhpdCByZXR1cm4gJiYgc2xpZGVyIGlucHV0IGJveCBpbiBmb2N1cyAoYW5kIGNhbGwgYW4gYWN0aW9uIGFzIGRlc2lyZWQpXG4gICAgc2xpZGVySW5wdXQub25rZXl1cCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBrZXlVcCA9IGAke2Uua2V5fWA7XG4gIFxuICAgICAgaWYgKGtleVVwID09IFwiRW50ZXJcIikge1xuICAgICAgICBzbGlkZXJJbnB1dC52YWx1ZSA9ICtsaW1pdFZhbHVlKHRoaXMudmFsdWUsIG1pbiwgbWF4KS50b0ZpeGVkKDIpO1xuICAgICAgICBzbGlkZXIudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBwYXJhbXMuc2V0VWlQYXJhbShzbGlkZXIuaWQsIHNsaWRlci52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHNsaWRlckRpdik7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgcm93IG9mIGJ1dHRvbnMsIGFuZCB0aGVpciBiZWhhdmlvdXJzLlxuICBjb25zdCBhZGRCdXR0b25Sb3cgPSAocGFyZW50LCBidXR0b25zKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFyZW50Lm9mZnNldFdpZHRoKTtcbiAgICBsZXQgYnV0dG9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uUm93LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1yb3cnKTtcblxuICAgIGxldCBudW0gPSBidXR0b25zLmxlbmd0aDtcbiAgICBsZXQgdG90YWxHYXBzID0gKChudW0gLSAxKSAqIDgpICsgNTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIGxldCBidXR0b25XID0gYCR7KHBhcmVudC5vZmZzZXRXaWR0aCAtIHRvdGFsR2FwcykgKiBidXR0b25zW2ldWzJdIC8gMTAwfXB4YDtcbiAgICAgIGxldCBidXR0b24gPSBudWxsO1xuICAgICAgXG4gICAgICBpZiAoYnV0dG9uc1tpXVsxXSA9PSBcInRvZ2dsZVwiKSB7XG4gICAgICAgIGJ1dHRvbiA9IGFkZFRvZ2dsZShidXR0b25zW2ldWzBdLCBidXR0b25XLCBidXR0b25zW2ldWzNdKTtcbiAgICAgIH0gZWxzZSB7IC8vIGFkZCBhY3Rpb24gYnV0dG9uXG4gICAgICAgIGJ1dHRvbiA9IGFkZEFjdGlvbihidXR0b25zW2ldWzBdLCBidXR0b25XKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICBpZiAoaSA+IDApIHsgYnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjhweFwiOyB9XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ1dHRvblJvdyk7XG4gIH07XG5cbiAgY29uc3QgYnV0dG9uU3R5bGluZyA9IChuYW1lLCB3aWR0aCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlkID0gbmFtZTtcbiAgICBidXR0b24uc3R5bGUud2lkdGggPSB3aWR0aDtcblxuICAgIGxldCBidXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJ1dHRvblRleHQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXRleHQnKTtcbiAgICBidXR0b25UZXh0LmlubmVySFRNTCA9IGAke25hbWUucmVwbGFjZSgvXy9nLCBcIiBcIil9YDtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uVGV4dCk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZ2dsZSA9IChuYW1lLCB3aWR0aCwgc3RhdGUpID0+IHtcbiAgICBsZXQgYnV0dG9uID0gYnV0dG9uU3R5bGluZyhuYW1lLCB3aWR0aCk7XG5cbiAgICBpZiAoc3RhdGUgPT0gZmFsc2UpIHsgYnV0dG9uLnN0eWxlLmNvbG9yID0gZ3JleUZvbnRDb2xvcjsgfVxuXG4gICAgLy8gQWRkIGN1cnJlbnQgaWQgKGspIGFuZCB0b2dnbGUgdmFsdWUgKHYpIHRvIHVpUGFyYW1zIGhhc2htYXBcbiAgICBwYXJhbXMuc2V0VWlQYXJhbShidXR0b24uaWQsIHN0YXRlKTtcblxuICAgIC8vIFNldCB0aGUgdG9nZ2xlIHZhbHVlIG9uIG1vdXNldXBcbiAgICBidXR0b24ub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocGFyYW1zLmdldFVpUGFyYW0odGhpcy5pZCkgPT0gZmFsc2UpIHtcbiAgICAgICAgcGFyYW1zLnNldFVpUGFyYW0odGhpcy5pZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBmb250Q29sb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMuc2V0VWlQYXJhbSh0aGlzLmlkLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBncmV5Rm9udENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY29uc3QgYWRkQWN0aW9uID0gKG5hbWUsIHdpZHRoKSA9PiB7XG4gICAgbGV0IGJ1dHRvbiA9IGJ1dHRvblN0eWxpbmcobmFtZSwgd2lkdGgpO1xuXG4gICAgLy8gQ2FsbCBhbiBhY3Rpb24gYXMgZGVzaXJlZCBieSBwYXNzaW5nIGJ1dHRvbiBpZCB0byB1aUFjdGlvbnMuYWN0aW9uKClcbiAgICBidXR0b24ub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XG4gICAgICB1aUFjdGlvbnMuYWN0aW9uKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgdGl0bGUgYm94LCBhbmQgcmVsYXRlZCBiZWhhdmlvdXJzIChpZiBkZXNpcmVkKS5cbiAgY29uc3QgYWRkVGl0bGUgPSAodGl0bGUsIHN0cmFwbGluZSwgcGFyZW50LCBoYXNBY3Rpb24gPSBmYWxzZSwgZm9udFNpemUgPSAzNSkgPT4ge1xuICAgIGxldCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQm94LmlkID0gdGl0bGU7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94Jyk7XG4gICAgdGl0bGVCb3guc3R5bGUud2lkdGggPSBgJHtwYXJlbnQub2Zmc2V0V2lkdGggLSAxMH1weGA7XG5cbiAgICBpZiAoaGFzQWN0aW9uID09IHRydWUpIHtcbiAgICAgIHRpdGxlQm94Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZm9yZWdyb3VuZEhvdmVyQ29sb3I7XG4gICAgICB9XG4gICAgICB0aXRsZUJveC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgICAgfVxuICAgICAgdGl0bGVCb3gub25tb3VzZXVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHVpQWN0aW9ucy5hY3Rpb24odGhpcy5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXRleHQnKTtcbiAgICB0aXRsZVRleHQuaWQgPSBgJHt0aXRsZX0tdGV4dGA7XG4gICAgdGl0bGVUZXh0LnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemV9cHhgO1xuICAgIHRpdGxlVGV4dC5pbm5lckhUTUwgPSBgJHt0aXRsZS5yZXBsYWNlKC9fL2csIFwiIFwiKX1gO1xuICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cbiAgICBsZXQgc3RyYXBsaW5lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdHJhcGxpbmVUZXh0LmNsYXNzTGlzdC5hZGQoJ3N0cmFwbGluZS10ZXh0Jyk7XG4gICAgc3RyYXBsaW5lVGV4dC5pZCA9IHN0cmFwbGluZTtcbiAgICBzdHJhcGxpbmVUZXh0LmlubmVySFRNTCA9IGAke3N0cmFwbGluZS5yZXBsYWNlKC9fL2csIFwiIFwiKX1gO1xuICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKHN0cmFwbGluZVRleHQpO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgfTtcblxuICAvLyBDcmVhdGUgYSB0ZXh0IGJveC5cbiAgY29uc3QgYWRkVGV4dCA9IChuYW1lLCBwYXJlbnQsIHBhcmFncmFwaHMsIGNlbnRlcmVkKSA9PiB7XG4gICAgbGV0IHRleHRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Qm94LmlkID0gbmFtZTtcbiAgICB0ZXh0Qm94LmNsYXNzTGlzdC5hZGQoJ3RleHQtYm94Jyk7XG5cbiAgICBpZiAoY2VudGVyZWQgPT0gdHJ1ZSkge1xuICAgICAgdGV4dEJveC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYWdyYXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmFncmFwaC5pZCA9IGAke25hbWV9XyR7aX1gO1xuICAgICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGAke3BhcmFncmFwaHNbaV19YDtcbiAgICAgIHRleHRCb3guYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGV4dEJveCk7XG4gIH07XG5cbiAgLy8gQ3JlYXRlIGEgc2Nyb2xsYWJsZSB0ZXh0IGJveC5cbiAgY29uc3QgYWRkU2Nyb2xsVGV4dCA9IChuYW1lLCBwYXJlbnQsIHBhcmFncmFwaHMgPSBbXSwgbGluZXMgPSAxKSA9PiB7XG4gICAgbGV0IHNjcm9sbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcm9sbEJveC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYm94Jyk7XG4gICAgc2Nyb2xsQm94LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbCcpO1xuICAgIHNjcm9sbEJveC5pZCA9IG5hbWU7XG4gICAgc2Nyb2xsQm94LnN0eWxlLmhlaWdodCA9IGAkeygobGluZXMgLSAxKSAqIDI0KSArIDIwfXB4YDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYWdyYXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHBhcmFncmFwaC5pZCA9IGAke25hbWV9XyR7aX1gO1xuICAgICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGAke3BhcmFncmFwaHNbaV19YDtcbiAgICAgIHNjcm9sbEJveC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzY3JvbGxCb3gpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZFNsaWRlciwgYWRkQnV0dG9uUm93LCBhZGRUaXRsZSwgYWRkVGV4dCwgYWRkU2Nyb2xsVGV4dCB9O1xufSkoKTtcblxuZXhwb3J0IHsgdWlFbGVtZW50cyB9XG4iLCIvLyBTZWUgd2lraSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vamluamFnaXQvbXlVSS93aWtpXG5cbmltcG9ydCB7IHVpRWxlbWVudHMgfSBmcm9tICcuL3VpRWxlbWVudHMnXG5cbmNvbnN0IHVpTGF5b3V0ID0gKCgpID0+IHtcbiAgY29uc3QgaW5pdGlhbExheW91dCA9ICgpID0+IHtcbiAgICAvLyBMZWZ0IHNpZGViYXJcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LXVpLWNvbnRhaW5lclwiKTtcblxuICAgIHVpRWxlbWVudHMuYWRkVGl0bGUoXCJNb2R1bGFyX1VJXCIsIFwiUHJvY2VkdXJhbGx5X0dlbmVyYXRlZFwiLCBwYXJlbnQsIHRydWUpO1xuICAgIHVpRWxlbWVudHMuYWRkQnV0dG9uUm93KHBhcmVudCwgW1xuICAgICAgW1wicmVhZG1lXCIsIFwiYWN0aW9uXCIsIDUwXSxcbiAgICAgIFtcIndpa2lcIiwgXCJhY3Rpb25cIiwgNTBdXG4gICAgXSk7XG4gICAgdWlFbGVtZW50cy5hZGRTbGlkZXIoXCJwYXJhbWV0ZXJfQVwiLCBwYXJlbnQpO1xuICAgIHVpRWxlbWVudHMuYWRkU2xpZGVyKFwicGFyYW1ldGVyX0JcIiwgcGFyZW50KTtcbiAgICB1aUVsZW1lbnRzLmFkZFNsaWRlcihcInBhcmFtZXRlcl9DXCIsIHBhcmVudCwgMywgMSwgNSwgMSk7XG4gICAgdWlFbGVtZW50cy5hZGRCdXR0b25Sb3cocGFyZW50LCBbXG4gICAgICBbXCJ0b2dnbGVfQVwiLCBcInRvZ2dsZVwiLCA0MCwgdHJ1ZV0sXG4gICAgICBbXCJ0b2dnbGVfQlwiLCBcInRvZ2dsZVwiLCA2MCwgZmFsc2VdXG4gICAgXSk7XG4gICAgdWlFbGVtZW50cy5hZGRCdXR0b25Sb3cocGFyZW50LCBbXG4gICAgICBbXCJ0b2dnbGVfQ1wiLCBcInRvZ2dsZVwiLCAzMywgdHJ1ZV0sXG4gICAgICBbXCJ0b2dnbGVfRFwiLCBcInRvZ2dsZVwiLCAzNCwgZmFsc2VdLFxuICAgICAgW1widG9nZ2xlX0VcIiwgXCJ0b2dnbGVcIiwgMzMsIHRydWVdXG4gICAgXSk7XG4gICAgdWlFbGVtZW50cy5hZGRCdXR0b25Sb3cocGFyZW50LCBbXG4gICAgICBbXCJhY3Rpb25fQVwiLCBcImFjdGlvblwiLCA1MF0sXG4gICAgICBbXCJhY3Rpb25fQlwiLCBcImFjdGlvblwiLCA1MF1cbiAgICBdKTtcbiAgICB1aUVsZW1lbnRzLmFkZFRleHQoXG4gICAgICBcImFjdGlvbnNcIixcbiAgICAgIHBhcmVudCxcbiAgICAgIFtcIkxhc3QgMyBhY3Rpb25zOlwiLFxuICAgICAgICBcIjxiciAvPlwiLFxuICAgICAgICBcIjxiciAvPlwiLFxuICAgICAgICBcIjxiciAvPlwiLFxuICAgICAgICBcIjxiciAvPlwiXVxuICAgICk7XG4gICAgdWlFbGVtZW50cy5hZGRCdXR0b25Sb3cocGFyZW50LCBbXG4gICAgICBbXCJnZXRfcGFyYW1ldGVyX3ZhbHVlc1wiLCBcImFjdGlvblwiLCAxMDBdXG4gICAgXSk7XG4gICAgdWlFbGVtZW50cy5hZGRTY3JvbGxUZXh0KFxuICAgICAgXCJwYXJhbXNcIixcbiAgICAgIHBhcmVudCxcbiAgICAgIFtcIjxiciAvPlwiXSxcbiAgICAgIDZcbiAgICApO1xuXG4gICAgLy8gUmlnaHQgc2lkZWJhclxuICAgIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtdWktY29udGFpbmVyXCIpO1xuXG4gICAgdWlFbGVtZW50cy5hZGRUaXRsZShcIlNpbW9uIFRoYXJieVwiLCBcIjIwMjBcIiwgcGFyZW50KTtcbiAgICB1aUVsZW1lbnRzLmFkZFRleHQoXCJzZWN0aW9uX0FcIiwgcGFyZW50LCBbXCJTZWN0aW9uIEFcIl0sIHRydWUpO1xuICAgIHVpRWxlbWVudHMuYWRkU2xpZGVyKFwicGFyYW1ldGVyX0RcIiwgcGFyZW50KTtcbiAgICB1aUVsZW1lbnRzLmFkZFNsaWRlcihcInBhcmFtZXRlcl9FXCIsIHBhcmVudCk7XG4gICAgdWlFbGVtZW50cy5hZGRUZXh0KFxuICAgICAgXCJleGFtcGxlX3RleHRfYm94XCIsXG4gICAgICBwYXJlbnQsXG4gICAgICBbXCJUaGlzIGlzIGEgdGV4dCBib3guXCIsXG4gICAgICAgIFwiPGJyIC8+XCIsXG4gICAgICAgIFwiSXQgd2lsbCBncm93IHRvIGZpdCB0aGUgdGV4dCBwcm92aWRlZC5cIl1cbiAgICApO1xuICAgIHVpRWxlbWVudHMuYWRkVGV4dChcInNlY3Rpb25fQVwiLCBwYXJlbnQsIFtcIlNlY3Rpb24gQlwiXSwgdHJ1ZSk7XG4gICAgdWlFbGVtZW50cy5hZGRCdXR0b25Sb3cocGFyZW50LCBbXG4gICAgICBbXCJ0b2dnbGVfRlwiLCBcInRvZ2dsZVwiLCAzMywgZmFsc2VdLFxuICAgICAgW1widG9nZ2xlX0dcIiwgXCJ0b2dnbGVcIiwgMzQsIGZhbHNlXSxcbiAgICAgIFtcInRvZ2dsZV9IXCIsIFwidG9nZ2xlXCIsIDMzLCB0cnVlXVxuICAgIF0pO1xuICAgIHVpRWxlbWVudHMuYWRkU2Nyb2xsVGV4dChcbiAgICAgIFwic2Nyb2xsX0FcIixcbiAgICAgIHBhcmVudCxcbiAgICAgIFtcIlRoaXMgaXMgYSBzY3JvbGxhYmxlIHRleHQgYm94LlwiLFxuICAgICAgICBcIjxiciAvPlwiLFxuICAgICAgICBcIkl0IGhhcyBhIGZpeGVkIGhlaWdodCBhbmQgaXMgdXNlZnVsIHdoZW4gYSB2YXJpYWJsZSBxdWFudGl0eSBvZiB0ZXh0IG1heSBiZSBvdXRwdXQgdG8gdGhlIHRleHQgYm94LlwiLFxuICAgICAgICBcIkVhY2ggcGFyYWdyYXBoIGlzIGdpdmVuIGFuIGlkIHZhbHVlIGFuZCB0aHVzIGNhbiBiZSBzdHlsZWQgJi9vciB1cGRhdGVkIGluZGl2aWR1YWxseS5cIl0sXG4gICAgICA0XG4gICAgKTtcbiAgICB1aUVsZW1lbnRzLmFkZEJ1dHRvblJvdyhwYXJlbnQsIFtcbiAgICAgIFtcImFjdGlvbl9DXCIsIFwiYWN0aW9uXCIsIDUwXSxcbiAgICAgIFtcImFjdGlvbl9EXCIsIFwiYWN0aW9uXCIsIDUwXVxuICAgIF0pO1xuXG4gICAgLy8gT3RoZXIgVUkgZGl2KHMpIC0gdGhleSBkb24ndCBoYXZlIHRvIGJlIHNpZGViYXJzIVxuICB9O1xuXG4gIHJldHVybiB7IGluaXRpYWxMYXlvdXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVpTGF5b3V0IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=