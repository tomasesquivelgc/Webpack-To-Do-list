"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["clearAll"],{

/***/ "./src/modules/delete-complete-tasks.js":
/*!**********************************************!*\
  !*** ./src/modules/delete-complete-tasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deleteAllComplete = (task) => {
  const newArray = [];
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].completed === false) {
      newArray.push(task[i]);
    }
  }
  task.length = 0;
  task.push(...newArray);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteAllComplete);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/delete-complete-tasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXJBbGwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RlbGV0ZS1jb21wbGV0ZS10YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxldGVBbGxDb21wbGV0ZSA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2subGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmICh0YXNrW2ldLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgbmV3QXJyYXkucHVzaCh0YXNrW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgdGFzay5sZW5ndGggPSAwO1xyXG4gIHRhc2sucHVzaCguLi5uZXdBcnJheSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVBbGxDb21wbGV0ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=