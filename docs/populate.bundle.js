"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["populate"],{

/***/ "./src/complete-task.js":
/*!******************************!*\
  !*** ./src/complete-task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleCompleted = (task) => {
  task.completed = !task.completed;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleCompleted);

/***/ }),

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

/***/ }),

/***/ "./src/populate.js":
/*!*************************!*\
  !*** ./src/populate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_drag_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/drag_icon.svg */ "./src/images/drag_icon.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _complete_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete-task.js */ "./src/complete-task.js");
/* harmony import */ var _modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/delete-complete-tasks.js */ "./src/modules/delete-complete-tasks.js");





const list = document.getElementById('list');

class TaskList extends Array {
  constructor() {
    super();
    this.loadTasksFromLocalStorage();
  }

  render() {
    list.innerHTML = '';
    this.sort((a, b) => a.index - b.index);
    for (let i = 0; i < this.length; i += 1) {
      // create li element
      const newLi = document.createElement('li');
      // create neccesary items
      // checkbox
      const checkboxDescriptionDiv = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('change');
      if (this[i].completed === true) {
        checkbox.checked = true;
      }
      // task description
      const description = document.createElement('input');
      description.type = 'text';
      description.value = this[i].description;
      description.classList.add('taskDescription');
      // images
      const dragIconImg = new Image();
      dragIconImg.src = _images_drag_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
      const deleteIconImg = new Image();
      deleteIconImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
      deleteIconImg.classList.add('deleteBtnn');
      deleteIconImg.setAttribute('data-id', i);
      // checkboxDescription attach
      checkboxDescriptionDiv.appendChild(checkbox);
      checkboxDescriptionDiv.appendChild(description);
      checkboxDescriptionDiv.classList.add('checkboxDescription');
      // append the items to the li and provide functionality
      newLi.appendChild(checkboxDescriptionDiv);
      newLi.appendChild(deleteIconImg);
      newLi.appendChild(dragIconImg);
      list.appendChild(newLi);

      deleteIconImg.addEventListener('click', () => {
        this.removeTask(i);
      });

      description.addEventListener('change', (event) => {
        const newDescription = event.target.value;
        this[i].description = newDescription;
        this.saveTasksToLocalStorage();
      });

      checkbox.addEventListener('change', () => {
        this.toggleCompleted(i);
        this.saveTasksToLocalStorage();
      });
    }
    this.saveTasksToLocalStorage();
  }

  addTask(task) {
    this.push(task);
    this.render();
  }

  removeTask(position) {
    this.splice(position, 1);
    for (let i = 0; i < this.length; i += 1) {
      this[i].index = i + 1;
    }
    this.render();
  }

  loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach((task) => {
        this.push(task);
      });
      this.render();
    }
  }

  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this));
  }

  toggleCompleted(index) {
    const task = this[index];
    (0,_complete_task_js__WEBPACK_IMPORTED_MODULE_2__["default"])(task);
    this.saveTasksToLocalStorage();
  }

  deleteCompletedTasks() {
    (0,_modules_delete_complete_tasks_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    this.render();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24315ab37634d58b5ce3.svg";

/***/ }),

/***/ "./src/images/drag_icon.svg":
/*!**********************************!*\
  !*** ./src/images/drag_icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26b9018385c98f0f4edb.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/populate.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDSjlCO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hjO0FBQ0Q7QUFDSTtBQUNrQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrREFBUTtBQUNoQztBQUNBLDBCQUEwQiwrQ0FBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2RUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wbGV0ZS10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kZWxldGUtY29tcGxldGUtdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1bGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAodGFzaykgPT4ge1xyXG4gIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlQ29tcGxldGVkOyIsImNvbnN0IGRlbGV0ZUFsbENvbXBsZXRlID0gKHRhc2spID0+IHtcclxuICBjb25zdCBuZXdBcnJheSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKHRhc2tbaV0uY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICBuZXdBcnJheS5wdXNoKHRhc2tbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICB0YXNrLmxlbmd0aCA9IDA7XHJcbiAgdGFzay5wdXNoKC4uLm5ld0FycmF5KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUFsbENvbXBsZXRlOyIsImltcG9ydCBkcmFnSWNvbiBmcm9tICcuL2ltYWdlcy9kcmFnX2ljb24uc3ZnJztcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9pbWFnZXMvZGVsZXRlLnN2Zyc7XHJcbmltcG9ydCB0b2dnbGVDb21wbGV0ZWQgZnJvbSAnLi9jb21wbGV0ZS10YXNrLmpzJztcclxuaW1wb3J0IGRlbGV0ZUFsbENvbXBsZXRlIGZyb20gJy4vbW9kdWxlcy9kZWxldGUtY29tcGxldGUtdGFza3MuanMnO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XHJcblxyXG5jbGFzcyBUYXNrTGlzdCBleHRlbmRzIEFycmF5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmxvYWRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAvLyBjcmVhdGUgbGkgZWxlbWVudFxyXG4gICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIC8vIGNyZWF0ZSBuZWNjZXNhcnkgaXRlbXNcclxuICAgICAgLy8gY2hlY2tib3hcclxuICAgICAgY29uc3QgY2hlY2tib3hEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UnKTtcclxuICAgICAgaWYgKHRoaXNbaV0uY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGFzayBkZXNjcmlwdGlvblxyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIGRlc2NyaXB0aW9uLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGhpc1tpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgIC8vIGltYWdlc1xyXG4gICAgICBjb25zdCBkcmFnSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBkcmFnSWNvbkltZy5zcmMgPSBkcmFnSWNvbjtcclxuICAgICAgY29uc3QgZGVsZXRlSWNvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBkZWxldGVJY29uSW1nLnNyYyA9IGRlbGV0ZUljb247XHJcbiAgICAgIGRlbGV0ZUljb25JbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRubicpO1xyXG4gICAgICBkZWxldGVJY29uSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xyXG4gICAgICAvLyBjaGVja2JveERlc2NyaXB0aW9uIGF0dGFjaFxyXG4gICAgICBjaGVja2JveERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgY2hlY2tib3hEZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgIGNoZWNrYm94RGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tib3hEZXNjcmlwdGlvbicpO1xyXG4gICAgICAvLyBhcHBlbmQgdGhlIGl0ZW1zIHRvIHRoZSBsaSBhbmQgcHJvdmlkZSBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIG5ld0xpLmFwcGVuZENoaWxkKGNoZWNrYm94RGVzY3JpcHRpb25EaXYpO1xyXG4gICAgICBuZXdMaS5hcHBlbmRDaGlsZChkZWxldGVJY29uSW1nKTtcclxuICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQoZHJhZ0ljb25JbWcpO1xyXG4gICAgICBsaXN0LmFwcGVuZENoaWxkKG5ld0xpKTtcclxuXHJcbiAgICAgIGRlbGV0ZUljb25JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVUYXNrKGkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXNbaV0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29tcGxldGVkKGkpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMucHVzaCh0YXNrKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUYXNrKHBvc2l0aW9uKSB7XHJcbiAgICB0aGlzLnNwbGljZShwb3NpdGlvbiwgMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGhpc1tpXS5pbmRleCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGxvYWRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgaWYgKHRhc2tzKSB7XHJcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICB0aGlzLnB1c2godGFzayk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDb21wbGV0ZWQoaW5kZXgpIHtcclxuICAgIGNvbnN0IHRhc2sgPSB0aGlzW2luZGV4XTtcclxuICAgIHRvZ2dsZUNvbXBsZXRlZCh0YXNrKTtcclxuICAgIHRoaXMuc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbXBsZXRlZFRhc2tzKCkge1xyXG4gICAgZGVsZXRlQWxsQ29tcGxldGUodGhpcyk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza0xpc3Q7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9