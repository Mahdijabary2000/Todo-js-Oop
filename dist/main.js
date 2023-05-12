/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpres.js":
/*!************************!*\
  !*** ./src/helpres.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskDiv\": () => (/* binding */ createTaskDiv)\n/* harmony export */ });\n\r\nfunction createTaskDiv(text, id, deleteCallback, editCallback) {\r\n    const taskDiv = document.createElement(\"div\");\r\n    taskDiv.setAttribute(\"id\", id);\r\n  //creat text todo\r\n    const taskText = document.createElement(\"span\");\r\n    taskText.classList.add(\"fw-bold\");\r\n    taskText.innerHTML = text;\r\n  \r\n    const options = document.createElement(\"span\");\r\n    options.classList.add(\"options\");\r\n  //add editIcon to div\r\n    const editIcon = document.createElement(\"i\");\r\n    editIcon.classList.add(\"fas\", \"fa-edit\");\r\n    editIcon.setAttribute(\"data-bs-toggle\", \"modal\");\r\n    editIcon.setAttribute(\"data-bs-target\", \"#form\");\r\n    editIcon.addEventListener(\"click\", () => editCallback(id));\r\n  //add deleteIcon to div\r\n    const deleteIcon = document.createElement(\"i\");\r\n    deleteIcon.classList.add(\"fas\", \"fa-trash-alt\");\r\n    deleteIcon.addEventListener(\"click\", () => deleteCallback(id));\r\n  //add options to boxTodo\r\n    options.appendChild(editIcon);\r\n    options.appendChild(deleteIcon);\r\n  \r\n    taskDiv.appendChild(taskText);\r\n    taskDiv.appendChild(options);\r\n  \r\n    return taskDiv;\r\n  }\n\n//# sourceURL=webpack://todo(js)oop/./src/helpres.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n\r\n\r\n//Access\r\nconst todoList = new _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n  document.getElementById(\"form\"),\r\n  document.getElementById(\"textInput\"),\r\n  document.getElementById(\"tasks\"),\r\n  document.getElementById(\"add\")\r\n);\n\n//# sourceURL=webpack://todo(js)oop/./src/index.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpres_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpres.js */ \"./src/helpres.js\");\n\r\n\r\n\r\nclass TodoList {\r\n  constructor(form, textInput, tasks, add) {\r\n    this.form = form;\r\n    this.textInput = textInput;\r\n    this.tasks = tasks;\r\n    this.add = add;\r\n\r\n    this.data = JSON.parse(localStorage.getItem(\"data\")) || [];\r\n//eventListener:\r\n    this.addListeners();\r\n    this.createTasks();\r\n  }\r\n\r\n  addListeners() {\r\n    this.form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      this.formValidation();\r\n    });\r\n      \r\n    this.add.addEventListener(\"click\", () => {\r\n      this.add.setAttribute(\"data-bs-dismiss\", \"\");\r\n    });\r\n  }\r\n//form Validation\r\n  formValidation() {\r\n    if (this.textInput.value === \"\") {\r\n      return;\r\n    }\r\n      \r\n    this.acceptData();\r\n    this.add.setAttribute(\"data-bs-dismiss\", \"modal\");\r\n    this.add.click();\r\n  }\r\n//acceptData\r\n  acceptData() {\r\n    this.data.push({\r\n      text: this.textInput.value,\r\n    });\r\n\r\n    localStorage.setItem(\"data\", JSON.stringify(this.data));\r\n    this.createTasks();\r\n  }\r\n //createTasks\r\n  createTasks() {\r\n    this.tasks.innerHTML = \"\";\r\n//map in datas:\r\n    this.data.forEach((task, index) => {\r\n      const taskDiv = (0,_helpres_js__WEBPACK_IMPORTED_MODULE_0__.createTaskDiv)(task.text, index, this.deleteTask.bind(this), this.editTask.bind(this));\r\n      this.tasks.appendChild(taskDiv);\r\n    });\r\n //reset input and form\r\n    this.resetForm();\r\n  }\r\n//metode reset input and form\r\n  resetForm() {\r\n    this.textInput.value = \"\";\r\n  }\r\n// medote delete task\r\n  deleteTask(index) {\r\n    this.data.splice(index, 1);\r\n    localStorage.setItem(\"data\", JSON.stringify(this.data));\r\n    this.createTasks();\r\n  }\r\n//metode edite task\r\n  editTask(index) {\r\n    const selectedTask = this.tasks.children[index];\r\n    this.textInput.value = selectedTask.children[0].innerHTML;\r\n    this.deleteTask(index);\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n//# sourceURL=webpack://todo(js)oop/./src/todoList.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;