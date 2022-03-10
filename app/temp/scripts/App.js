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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ScrollProgress = __webpack_require__(1);

var _ScrollProgress2 = _interopRequireDefault(_ScrollProgress);

var _MatchHeight = __webpack_require__(2);

var _MatchHeight2 = _interopRequireDefault(_MatchHeight);

var _LoadMore = __webpack_require__(3);

var _LoadMore2 = _interopRequireDefault(_LoadMore);

var _ImageGalleryGrid = __webpack_require__(4);

var _ImageGalleryGrid2 = _interopRequireDefault(_ImageGalleryGrid);

var _HorizontalItemSlider = __webpack_require__(5);

var _HorizontalItemSlider2 = _interopRequireDefault(_HorizontalItemSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// = = = = = = = = = = = = = = = = = = = = = = = = = =
// ScrollProgress
//

$("<div id='Progress' class='progress-bar'></div>").appendTo("body.scrollprogress header");

$(document).on("scroll", function () {
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;

  $("#Progress").css("width", progress + "%");
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// = = = = = = = = = = = = = = = = = = = = = = = = = =
// Match Height
//
(function matchHeight() {
  //Grab divs with the class name 'match-height'
  var getDivs = document.getElementsByClassName("match-height");

  //Find out how my divs there are with the class 'match-height'
  var arrayLength = getDivs.length;
  var heights = [];

  //Create a loop that iterates through the getDivs variable and pushes the heights of the divs into an empty array
  for (var i = 0; i < arrayLength; i++) {
    heights.push(getDivs[i].offsetHeight);
  }

  //Find the largest of the divs
  function getHighest() {
    return Math.max.apply(Math, heights);
  }

  //Set a variable equal to the tallest div
  var tallest = getHighest();

  //Iterate through getDivs and set all their height style equal to the tallest variable
  for (var i = 0; i < getDivs.length; i++) {
    getDivs[i].style.height = tallest + "px";
  }
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// = = = = = = = = = = = = = = = = = = = = = = = = = =
// LoadMore
//

$(document).ready(function () {
  $("#Article-Container .article-group > .article").slice(0, 15).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $("#Article-Container .article-group > .article:hidden").slice(0, 15).slideDown();
    if ($("#Article-Container .article-group > .article:hidden").length == 0) {
      $("#Article-Container .load-more").text("No more article").addClass("no-article");
    }
  });
});

//Related Article
$(document).ready(function () {
  $("#Realted-Article .article-group > .article").slice(0, 4).show();
  $("#Realted-Article #loadMore").on("click", function (e) {
    e.preventDefault();
    $("#Realted-Article .article-group > .article:hidden").slice(0, 4).slideDown();
    if ($("#Realted-Article .article-group > .article:hidden").length == 0) {
      $("#Realted-Article .load-more").text("No more article").addClass("no-article");
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// = = = = = = = = = = = = = = = = = = = = = = = = = =
// ImageGalleryGrid
//

document.querySelectorAll(".gallery-grid > .gallery-item > img").forEach(function (img) {
  // Ideally, we would know the image size or aspect ratio beforehand...
  if (img.naturalHeight) {
    setItemRatio.call(img);
  } else {
    img.addEventListener("load", setItemRatio);
  }
});

function setItemRatio() {
  this.parentNode.style.setProperty("--ratio", this.naturalHeight / this.naturalWidth);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// = = = = = = = = = = = = = = = = = = = = = = = = = =
// Horizonal Item Slider
//
// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName("left-paddle");
var rightPaddle = document.getElementsByClassName("right-paddle");
// get items dimensions
var itemsLength = $(".product-items > .item").length;
var itemSize = $(".product-items > .item").outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 232;

// get wrapper width
var getMenuWrapperSize = function getMenuWrapperSize() {
  return $(".product-wrapper").outerWidth();
};
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on("resize", function () {
  menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function getMenuSize() {
  return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function getMenuPosition() {
  return $(".product-items").scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$(".product-items").on("scroll", function () {
  // get how much of menu is invisible
  menuInvisibleSize = menuSize - menuWrapperSize;
  // get how much have we scrolled so far
  var menuPosition = getMenuPosition();

  var menuEndOffset = menuInvisibleSize - paddleMargin;

  // show & hide the paddles
  // depending on scroll position
  if (menuPosition <= paddleMargin) {
    $(leftPaddle).addClass("hidden");
    $(rightPaddle).removeClass("hidden");
  } else if (menuPosition < menuEndOffset) {
    // show both paddles in the middle
    $(leftPaddle).removeClass("hidden");
    $(rightPaddle).removeClass("hidden");
  } else if (menuPosition >= menuEndOffset) {
    $(leftPaddle).removeClass("hidden");
    $(rightPaddle).addClass("hidden");
  }
});

// scroll to left
$(rightPaddle).on("click", function () {
  $(".product-items").animate({
    scrollLeft: getMenuPosition() + 233
  }, scrollDuration);
});

// scroll to right
$(leftPaddle).on("click", function () {
  $(".product-items").animate({
    scrollLeft: getMenuPosition() - 233
  }, scrollDuration);
});

/***/ })
/******/ ]);