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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/styles.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar tasks = [{\n  _id: '5d2ca9e2e03d40b326596aa7',\n  completed: true,\n  body: 'Привет проверь как работает это Todo list. Ты можешь добавлять заметки или удалять, как та что ниже меня. также можешь изменить цвета отображения справа ввеху. Хорошего тебе дня... ах забыл сказать все что ты тут изменяешь будет жить в твоем браузере',\n  title: 'Привет я твоя заметка'\n}, {\n  _id: '5d2ca9e29c8a94095c1288e0',\n  completed: false,\n  body: 'Ненужная заметка',\n  title: 'Удали меня если я тебе не нужна'\n}];\n\n\n(function (arrOfTasks) {\n  var themes = {\n    \"default\": {\n      '--base-text-color': '#212529',\n      '--header-bg': '#007bff',\n      '--header-text-color': '#fff',\n      '--default-btn-bg': '#007bff',\n      '--default-btn-text-color': '#fff',\n      '--default-btn-hover-bg': '#0069d9',\n      '--default-btn-border-color': '#0069d9',\n      '--danger-btn-bg': '#dc3545',\n      '--danger-btn-text-color': '#fff',\n      '--danger-btn-hover-bg': '#bd2130',\n      '--danger-btn-border-color': '#dc3545',\n      '--input-border-color': '#ced4da',\n      '--input-bg-color': '#fff',\n      '--input-text-color': '#495057',\n      '--input-focus-bg-color': '#fff',\n      '--input-focus-text-color': '#495057',\n      '--input-focus-border-color': '#80bdff',\n      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'\n    },\n    dark: {\n      '--base-text-color': '#212529',\n      '--header-bg': '#343a40',\n      '--header-text-color': '#fff',\n      '--default-btn-bg': '#58616b',\n      '--default-btn-text-color': '#fff',\n      '--default-btn-hover-bg': '#292d31',\n      '--default-btn-border-color': '#343a40',\n      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',\n      '--danger-btn-bg': '#b52d3a',\n      '--danger-btn-text-color': '#fff',\n      '--danger-btn-hover-bg': '#88222c',\n      '--danger-btn-border-color': '#88222c',\n      '--input-border-color': '#ced4da',\n      '--input-bg-color': '#fff',\n      '--input-text-color': '#495057',\n      '--input-focus-bg-color': '#fff',\n      '--input-focus-text-color': '#495057',\n      '--input-focus-border-color': '#78818a',\n      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)'\n    },\n    light: {\n      '--base-text-color': '#212529',\n      '--header-bg': '#fff',\n      '--header-text-color': '#212529',\n      '--default-btn-bg': '#fff',\n      '--default-btn-text-color': '#212529',\n      '--default-btn-hover-bg': '#e8e7e7',\n      '--default-btn-border-color': '#343a40',\n      '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',\n      '--danger-btn-bg': '#f1b5bb',\n      '--danger-btn-text-color': '#212529',\n      '--danger-btn-hover-bg': '#ef808a',\n      '--danger-btn-border-color': '#e2818a',\n      '--input-border-color': '#ced4da',\n      '--input-bg-color': '#fff',\n      '--input-text-color': '#495057',\n      '--input-focus-bg-color': '#fff',\n      '--input-focus-text-color': '#495057',\n      '--input-focus-border-color': '#78818a',\n      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)'\n    }\n  };\n  var lastSelectedTeheme = localStorage.getItem('theme') || 'default';\n  var LocalStorageListItem;\n  checkLocalStarage(arrOfTasks);\n\n  function checkLocalStarage(storage) {\n    if (!localStorage.getItem('TaskList')) {\n      LocalStorageListItem = arrOfTasks;\n      return LocalStorageListItem;\n    }\n\n    LocalStorageListItem = localStorage.getItem('TaskList');\n    LocalStorageListItem = JSON.parse(LocalStorageListItem);\n    return LocalStorageListItem;\n  }\n\n  function changeLocalStorageTaskList(newTaskList) {\n    localStorage.setItem('TaskList', JSON.stringify(newTaskList));\n  }\n\n  function newTaskList() {\n    var newTaskList = listContailer;\n    var arrOfTasks = [];\n\n    for (var i = 0; i < newTaskList.children.length; i++) {\n      var childTaskList = newTaskList.children[i].children;\n      var Task = {\n        _id: newTaskList.children[0].dataset.taskId,\n        completed: true,\n        body: childTaskList[2].textContent,\n        title: childTaskList[0].textContent\n      };\n      arrOfTasks.push(Task);\n    }\n\n    changeLocalStorageTaskList(arrOfTasks);\n  } // Eements UI\n\n\n  var listContailer = document.querySelector('.tasks-list-section .list-group');\n  var form = document.forms['addTask'];\n  var inputTitle = form.elements['title'];\n  var inputBody = form.elements['body'];\n  var themeSelect = document.querySelector('#themeSelect');\n  renderAllTasks(LocalStorageListItem); //Events\n\n  setTheme(lastSelectedTeheme);\n  form.addEventListener('submit', onFormSubmitHandler);\n  listContailer.addEventListener('click', onDeletehandler);\n  themeSelect.addEventListener('change', onThemeSelectHandle);\n\n  function renderAllTasks(tasksList) {\n    if (!tasksList) {\n      console.error('Нет данных');\n      return;\n    }\n\n    var fragment = document.createDocumentFragment();\n    Object.values(tasksList).forEach(function (task) {\n      var li = listItemTemplate(task);\n      fragment.appendChild(li);\n      listContailer.appendChild(fragment);\n      newTaskList();\n    });\n  }\n\n  function listItemTemplate() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _id = _ref._id,\n        title = _ref.title,\n        body = _ref.body;\n\n    var li = document.createElement('li');\n    li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');\n    li.setAttribute('data-task-id', _id);\n    var span = document.createElement('span');\n    span.textContent = title;\n    var button = document.createElement('button');\n    button.textContent = 'Удалить';\n    button.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');\n    var article = document.createElement('p');\n    article.classList.add('mt-2', 'w-100');\n    article.textContent = body;\n    li.appendChild(span);\n    li.appendChild(button);\n    li.appendChild(article);\n    return li;\n  }\n\n  function onFormSubmitHandler(e) {\n    e.preventDefault();\n    var titleValue = inputTitle.value;\n    var bodyValue = inputBody.value;\n\n    if (!titleValue || !bodyValue) {\n      alert('Введите данные');\n      return;\n    }\n\n    var task = createNewTask(titleValue, bodyValue);\n    var listItem = listItemTemplate(task);\n    listContailer.insertAdjacentElement('afterbegin', listItem);\n    form.reset();\n    newTaskList();\n  }\n\n  function createNewTask(title, body) {\n    var newTask = {\n      title: title,\n      body: body,\n      complited: false,\n      _id: \"task-\".concat(Math.random())\n    };\n    return _objectSpread({}, newTask);\n  }\n\n  function deleteTaskt(id) {\n    var isConfirm = confirm('Точно удалить???');\n    if (!isConfirm) return isConfirm;\n    return isConfirm;\n  }\n\n  function deletaskFromHtml(confirmed, el) {\n    if (!confirmed) return;\n    el.remove();\n    newTaskList();\n  }\n\n  function onDeletehandler(_ref2) {\n    var target = _ref2.target;\n\n    if (target.classList.contains('delete-btn')) {\n      var parent = target.closest('[data-task-id]');\n      var id = parent.dataset.taskId;\n      var confirmed = deleteTaskt(id);\n      deletaskFromHtml(confirmed, parent);\n    }\n  }\n\n  function onThemeSelectHandle(e) {\n    var selectedTheme = themeSelect.value;\n    var isConfirmed = confirm(\"\\u0412\\u044B \\u0434\\u0435\\u0441\\u0442\\u0432\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0443\\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u0442\\u044C \\u0442\\u0435\\u043C\\u0443 \\u043D\\u0430 \".concat(selectedTheme));\n\n    if (!isConfirmed) {\n      themeSelect.value = lastSelectedTeheme;\n      return;\n    }\n\n    setTheme(selectedTheme);\n    lastSelectedTeheme = selectedTheme;\n    localStorage.setItem('theme', lastSelectedTeheme);\n  }\n\n  function setTheme(name) {\n    themeSelect.value = name;\n    var selectedthemOBj = themes[name];\n    Object.entries(selectedthemOBj).forEach(function (_ref3) {\n      var _ref4 = _slicedToArray(_ref3, 2),\n          key = _ref4[0],\n          value = _ref4[1];\n\n      document.documentElement.style.setProperty(key, value);\n    });\n  }\n})(tasks);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });