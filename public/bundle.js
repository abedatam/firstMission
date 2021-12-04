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

/***/ "./src/AddWindow.ts":
/*!**************************!*\
  !*** ./src/AddWindow.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass AddWindow {\n    constructor() {\n        this.title = \"\";\n        this.content = \"\";\n        this.formPointer = document.getElementById(\"addForm\");\n        this.blockerPointer = document.getElementById(\"blocker\");\n        this.bodyPointer = document.getElementsByTagName(\"body\")[0];\n    }\n    toggleWindow() {\n        this.formPointer.toggleAttribute(\"opened\");\n        this.blockerPointer.toggleAttribute(\"opened\");\n        this.bodyPointer.toggleAttribute(\"locked\");\n    }\n    pushData(prog) {\n        let title_inp = document.getElementById(\"title_inp\");\n        let content_inp = document.getElementById(\"content_inp\");\n        if (title_inp !== null && content_inp !== null) {\n            this.title = title_inp.value;\n            this.content = content_inp.value;\n            let id = Date.now().toString();\n            prog.addTicket(id, this.title, this.content);\n        }\n    }\n}\nexports[\"default\"] = AddWindow;\n\n\n//# sourceURL=webpack://firstmission/./src/AddWindow.ts?");

/***/ }),

/***/ "./src/Renderer.ts":
/*!*************************!*\
  !*** ./src/Renderer.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Ticket_1 = __importDefault(__webpack_require__(/*! ./Ticket */ \"./src/Ticket.ts\"));\nclass Renderer {\n    constructor(arr) {\n        this.Tickets = arr;\n    }\n    importTickets() {\n        let storage = localStorage.getItem(\"Tickets\");\n        if (storage)\n            this.Tickets = JSON.parse(storage);\n        if (this.Tickets)\n            this.render();\n    }\n    exportTickets() {\n        console.log(JSON.stringify(this.Tickets));\n        localStorage.setItem(\"Tickets\", JSON.stringify(this.Tickets));\n    }\n    removeTicket(id) {\n        console.log(0);\n        if (!this.Tickets)\n            return;\n        let _Tickets = this.Tickets;\n        _Tickets.forEach((element, index) => {\n            if (element.id === id) {\n                _Tickets.splice(index, 1);\n            }\n        });\n        console.log(this.Tickets);\n        this.exportTickets();\n        this.render();\n    }\n    addTicket(id, title, content) {\n        if (!this.Tickets)\n            this.Tickets = new Array();\n        this.Tickets.push({\n            \"id\": id,\n            \"title\": title,\n            \"content\": content\n        });\n        this.exportTickets();\n        this.render();\n    }\n    render() {\n        let DOMpointer = document.getElementById(\"main\"); //get the pointer to the main id which we want to put the tickets there.\n        if (DOMpointer) {\n            DOMpointer.innerHTML = \"\"; // initialize the content of the \"main\" element.\n            if (!this.Tickets)\n                return;\n            let _Tickets = this.Tickets;\n            _Tickets.forEach((element) => {\n                DOMpointer.innerHTML += new Ticket_1.default({ \"id\": element.id, \"title\": element.title, \"content\": element.content }).getDOM();\n            });\n        }\n    }\n}\nexports[\"default\"] = Renderer;\n\n\n//# sourceURL=webpack://firstmission/./src/Renderer.ts?");

/***/ }),

/***/ "./src/Ticket.ts":
/*!***********************!*\
  !*** ./src/Ticket.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Ticket {\n    constructor(ticket) {\n        this.ticket = ticket;\n    }\n    getDOM() {\n        let ticket = this.ticket;\n        let _out = \"<div class=\\\"_ticket box\\\">\";\n        _out += \"<div class=\\\"_header\\\">\";\n        _out += \"<div class=\\\"_title\\\">\" + ticket.title + \"</div>\";\n        _out += \"<div class=\\\"_remove\\\"><button class=\\\"removeBTN\\\" id=\\\"\" + ticket.id + \"\\\" type=\\\"button\\\"> X </button></div>\";\n        _out += \"</div>\";\n        _out += \"<div class=\\\"_content\\\">\" + ticket.content + \"</div>\";\n        _out += \"</div>\";\n        return _out;\n    }\n}\nexports[\"default\"] = Ticket;\n\n\n//# sourceURL=webpack://firstmission/./src/Ticket.ts?");

/***/ }),

/***/ "./src/tickets.ts":
/*!************************!*\
  !*** ./src/tickets.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst AddWindow_1 = __importDefault(__webpack_require__(/*! ./AddWindow */ \"./src/AddWindow.ts\"));\nconst Renderer_1 = __importDefault(__webpack_require__(/*! ./Renderer */ \"./src/Renderer.ts\"));\nlet Tform;\nlet prog;\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    Tform = new AddWindow_1.default();\n    prog = new Renderer_1.default(null);\n    prog.importTickets();\n    let addBTN = document.getElementById(\"addBTN\");\n    if (addBTN) {\n        addBTN.addEventListener('click', (event) => {\n            Tform.toggleWindow();\n        });\n    }\n    let closeBTN = document.getElementById(\"closeBTN\");\n    if (closeBTN) {\n        closeBTN.addEventListener('click', (event) => {\n            Tform.toggleWindow();\n        });\n    }\n    let _Form = document.getElementById(\"_Form\");\n    if (_Form) {\n        _Form.addEventListener('submit', (event) => {\n            event.preventDefault();\n            Tform.pushData(prog);\n        });\n    }\n    let _Remove = document.getElementsByClassName(\"removeBTN\");\n    if (_Remove) {\n        for (let i = 0; i < _Remove.length; i++) {\n            _Remove[i].addEventListener('click', (event) => {\n                let id = event.target.attributes.id.nodeValue;\n                RemoveMe(id);\n            }, false);\n        }\n    }\n});\nlet RemoveMe = (id) => {\n    if (confirm(\"are you sure?\"))\n        prog.removeTicket(id);\n};\n\n\n//# sourceURL=webpack://firstmission/./src/tickets.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tickets.ts");
/******/ 	
/******/ })()
;