(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactZoomImage"] = factory(require("react"));
	else
		root["ReactZoomImage"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NoOverFlow = function NoOverFlow(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { style: { overflow: 'hidden' } },
	    children
	  );
	};
	
	var ImageParallax = function (_Component) {
	  _inherits(ImageParallax, _Component);
	
	  function ImageParallax(props) {
	    _classCallCheck(this, ImageParallax);
	
	    var _this = _possibleConstructorReturn(this, (ImageParallax.__proto__ || Object.getPrototypeOf(ImageParallax)).call(this, props));
	
	    _this.onImageLoad = function (_ref2) {
	      var clientHeight = _ref2.target.clientHeight;
	
	      _this.setState({
	        imageHeight: clientHeight
	      });
	      setTimeout(function () {
	        _this.onScroll();
	      });
	    };
	
	    _this.onScroll = function () {
	      var imageHeight = _this.state.imageHeight;
	      var scale = _this.props.scale;
	
	      var screenHeight = window.innerHeight;
	      var offsetTop = _this.fold.getBoundingClientRect().top;
	      var ratio = Math.min(1, Math.max(0, (offsetTop + imageHeight) / (screenHeight + imageHeight)));
	      var moveDown = (ratio - 1 / 2) * (1 - 1 / scale) * imageHeight;
	      _this.setState({
	        moveDown: moveDown
	      });
	    };
	
	    _this.state = {
	      imageHeight: 0,
	      moveDown: 0
	    };
	    return _this;
	  }
	
	  _createClass(ImageParallax, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('scroll', this.onScroll);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.onScroll);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var children = this.props.children;
	      var moveDown = this.state.moveDown;
	
	      return _react2.default.createElement(
	        NoOverFlow,
	        null,
	        _react2.default.createElement('span', { ref: function ref(elem) {
	            return _this2.fold = elem;
	          } }),
	        children({ y: moveDown }, this.onImageLoad)
	      );
	    }
	  }]);
	
	  return ImageParallax;
	}(_react.Component);
	
	ImageParallax.propTypes = {
	  children: _react.PropTypes.func.isRequired,
	  scale: _react.PropTypes.number.isRequired
	};
	exports.default = ImageParallax;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-image-parallax.map