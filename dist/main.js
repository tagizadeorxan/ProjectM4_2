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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// var gi = require(`gitignore`);\nvar selection1;\nvar selection2;\n\nwindow.onload = function () {\n  //auto select first one\n  var defaults = document.querySelector('.firstEdit');\n  defaults.addEventListener(\"click\", this.selectionOne);\n  defaults.click(); //auto select second one\n\n  var defaultTwo = document.querySelector(\"#currencies-2> span:nth-child(2)\");\n  defaultTwo.addEventListener(\"click\", this.selectionTwo);\n  defaultTwo.click();\n};\n\nvar currencisesOne = document.querySelectorAll(\"#currencies-1 > .select\");\nvar currencisesTwo = document.querySelectorAll(\"#currencies-2 > .select\");\nvar inputnumberone = document.querySelector(\"#input-number-1\");\nvar inputnumbertwo = document.querySelector(\"#input-number-2\"); //Select menu\n\nvar select1 = document.getElementById(\"select1\");\nvar select2 = document.getElementById(\"select2\");\nselect1.addEventListener(\"change\", runOne);\nselect2.addEventListener(\"change\", runTwo);\n\nfunction runOne() {\n  selection1 = event.target[event.target.selectedIndex];\n  select1.style.backgroundImage = \"initial\";\n  select1.style.backgroundColor = \"#833AE0\";\n  select1.style.color = \"white\";\n\n  for (var i = 1; i <= 4; i++) {\n    currencisesOne[i - 1].style.backgroundColor = \"white\";\n    currencisesOne[i - 1].style.color = \"#C6C6C6\";\n    currencisesOne[i - 1].style.border = \"1px solid #C6C6C6\";\n  }\n\n  altvalueChange(select1.value, 1);\n  var type = 1;\n  converter(type);\n}\n\nfunction runTwo() {\n  selection2 = event.target[event.target.selectedIndex];\n  select2.style.backgroundImage = \"initial\";\n  select2.style.backgroundColor = \"#833AE0\";\n  select2.style.color = \"white\";\n\n  for (var i = 1; i <= 4; i++) {\n    currencisesTwo[i - 1].style.backgroundColor = \"white\";\n    currencisesTwo[i - 1].style.color = \"#C6C6C6\";\n    currencisesTwo[i - 1].style.border = \"1px solid #C6C6C6\";\n  }\n\n  altvalueChange(select2.value, 2);\n  var type = 2;\n  converter(type);\n}\n\nfor (var i = 0; i < currencisesOne.length; i++) {\n  currencisesTwo[i].addEventListener(\"click\", selectionTwo);\n  currencisesOne[i].addEventListener(\"click\", selectionOne);\n}\n\nfunction selectionOne(evt) {\n  evt.preventDefault();\n  selection1 = event.target;\n  event.target.style.backgroundColor = \"#833AE0\";\n  event.target.style.color = \"white\";\n  event.target.style.border = \"1px solid #833AE0\";\n\n  for (var _i = 1; _i <= 4; _i++) {\n    if (Number(event.target.id) != _i) {\n      currencisesOne[_i - 1].style.backgroundColor = \"white\";\n      currencisesOne[_i - 1].style.color = \"#C6C6C6\";\n      currencisesOne[_i - 1].style.border = \"1px solid #C6C6C6\";\n    }\n  }\n\n  select1.style.backgroundImage = \"url(images/arrowIcon.png)\";\n  select1.style.backgroundColor = \"white\";\n  select1.style.color = \"black\";\n  select1.value = \"\";\n  var target = event.target.textContent;\n  var place = 1;\n  altvalueChange(target, place);\n  var type = 1;\n  converter(type);\n}\n\nfunction selectionTwo(evt) {\n  evt.preventDefault();\n  selection2 = event.target;\n  event.target.style.backgroundColor = \"#833AE0\";\n  event.target.style.color = \"white\";\n  event.target.style.border = \"1px solid #833AE0\";\n\n  for (var _i2 = 1; _i2 <= 4; _i2++) {\n    if (Number(event.target.id) != _i2) {\n      currencisesTwo[_i2 - 1].style.backgroundColor = \"white\";\n      currencisesTwo[_i2 - 1].style.color = \"#C6C6C6\";\n      currencisesTwo[_i2 - 1].style.border = \"1px solid #C6C6C6\";\n    }\n  }\n\n  select2.style.backgroundImage = \"url(images/arrowIcon.png)\";\n  select2.style.backgroundColor = \"white\";\n  select2.style.color = \"black\";\n  select2.value = \"\";\n  var target = event.target.textContent;\n  var place = 2;\n  altvalueChange(target, place);\n  var type = 2;\n  converter(type);\n}\n\nfunction altvalueChange(value, place) {\n  if (place == 1) {\n    document.getElementById(\"1th\").textContent = value;\n    document.getElementById(\"4th\").textContent = value;\n  } else if (place == 2) {\n    document.getElementById(\"2th\").textContent = value;\n    document.getElementById(\"3th\").textContent = value;\n  }\n}\n\nvar first = 0;\nvar second = 0;\n\nfunction converter(type) {\n  var firstCurrency = document.getElementById(\"1th\").textContent;\n  var secondCurrency = document.getElementById(\"2th\").textContent;\n\n  if (firstCurrency === \"currency\" || secondCurrency === \"currency\") {\n    alert(\"choose currency\");\n  } else if (secondCurrency === \"currency\") {\n    alert(\"please choose seconds currency\");\n  } else if (firstCurrency === secondCurrency) {\n    document.getElementById(\"calculate1\").textContent = 1;\n    document.getElementById(\"calculate2\").textContent = 1;\n    first = 1;\n    seconds = 1;\n  } else {\n    // inputnumberone.addEventListener(\"input\",calculateCurrencyeventOne);\n    // inputnumbertwo.addEventListener(\"input\",calculateCurrencyeventTwo);\n    inputnumberone.addEventListener(\"input\", calculateCurrencyeventOne);\n    inputnumbertwo.addEventListener(\"input\", calculateCurrencyeventTwo);\n    fetch(\"https://api.ratesapi.io/api/latest?base=\".concat(firstCurrency, \"&symbols=\").concat(secondCurrency), {\n      method: \"GET\"\n    }).then(function (data) {\n      return data.json();\n    }).then(function (data) {\n      first = data.rates[secondCurrency];\n      document.getElementById(\"calculate1\").textContent = data.rates[secondCurrency];\n    });\n    fetch(\"https://api.ratesapi.io/api/latest?base=\".concat(secondCurrency, \"&symbols=\").concat(firstCurrency), {\n      method: \"GET\"\n    }).then(function (data) {\n      return data.json();\n    }).then(function (data) {\n      second = data.rates[firstCurrency];\n      document.getElementById(\"calculate2\").textContent = data.rates[firstCurrency];\n    });\n\n    if (type === 1) {\n      calculateCurrencyeventOne();\n    } else if (type === 2) {\n      calculateCurrencyeventTwo();\n    }\n  }\n}\n\nfunction showPage() {\n  document.getElementById(\"content\").style.filter = \"none\";\n  document.getElementById(\"loading\").classList.remove(\"show\");\n  document.getElementById(\"loading\").classList.add(\"hide\");\n}\n\nfunction showLoad() {\n  document.getElementById(\"content\").style.filter = \"blur(2px)\";\n  document.getElementById(\"content\").addEventListener(\"onload\", console.log(\"obbaaaa\"));\n  document.getElementById(\"loading\").classList.remove(\"hide\");\n  document.getElementById(\"loading\").classList.add(\"show\");\n}\n\nfunction calculateCurrencyeventOne() {\n  showLoad();\n  setTimeout(function () {\n    var value1 = Number(document.getElementById(\"input-number-1\").value);\n    console.log(value1);\n    document.getElementById(\"input-number-2\").value = value1 * first;\n    console.log(first);\n    console.log(second);\n    console.log(\"yoxlama 2nci\", document.getElementById(\"input-number-2\").value);\n  }, 1000);\n  setTimeout(showPage, 1000);\n}\n\nfunction calculateCurrencyeventTwo() {\n  showLoad();\n  setTimeout(function () {\n    var value2 = Number(document.getElementById(\"input-number-2\").value);\n    console.log(value2);\n    document.getElementById(\"input-number-1\").value = value2 * second;\n    console.log(first);\n    console.log(second);\n    console.log(\"yoxlama 1nci\", document.getElementById(\"input-number-1\").value);\n  }, 1000);\n  setTimeout(showPage, 1000);\n}\n\nconverter(1); //swapping\n\nvar button = document.getElementById(\"button\");\nbutton.addEventListener(\"click\", swap);\nvar div_cont = document.getElementById('currency');\nvar div1 = document.querySelector('.container-1');\nvar div2 = document.querySelector('.container-2');\nvar div_array = [];\ndiv_array[0] = div1;\ndiv_array[1] = div2;\n\nfunction swap() {\n  if (div_array[0] === div1) {\n    div_array[0] = div2;\n    div_array[1] = div1;\n    document.querySelector(\".container-2>p\").textContent = \"У меня есть\";\n    document.querySelector(\".container-1>p\").textContent = \"Хочу приобрести\";\n  } else if (div_array[0] === div2) {\n    div_array[0] = div1;\n    div_array[1] = div2;\n    document.querySelector(\".container-2>p\").textContent = \"Хочу приобрести\";\n    document.querySelector(\".container-1>p\").textContent = \"У меня есть\";\n  }\n\n  for (var i = 0; i < div_array.length; i++) {\n    console.log(div_array[i]);\n    div_cont.appendChild(button);\n    div_cont.appendChild(div_array[i]);\n  }\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });