'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _full = require('markdown-it-emoji/lib/data/full.json');

var _full2 = _interopRequireDefault(_full);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import the list of emojis supported on markdown-it-emoji plugin


var emojiMap = (0, _immutable.Map)(_full2.default);

var EmojiBar = function (_Component) {
  _inherits(EmojiBar, _Component);

  function EmojiBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmojiBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmojiBar.__proto__ || Object.getPrototypeOf(EmojiBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (_ref2) {
      var code = _ref2.currentTarget.dataset.code;

      _this.context.pickEmoji(code);
    }, _this.searchEmojis = function (emoji, code) {
      return code.indexOf(_this.context.emoji.code.toLowerCase()) === 0;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Find emojis that match the code the user wrote
   * @param  {string}  emoji The emoji unicode character
   * @param  {string}  code  The emoji code
   * @return {Boolean}       If it match or not
   */


  _createClass(EmojiBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // if the user wrote only `:` or 1 char after `:` render null
      if (!this.context.emoji.writing || this.context.emoji.code.length < 2) return null;

      return _react2.default.createElement(
        'section',
        { className: this.props.className },
        emojiMap.filter(this.searchEmojis).map(function (emoji, code) {
          return _react2.default.createElement(
            'button',
            {
              key: code,
              type: 'button',
              'data-code': code,
              className: _this2.props.className + '-emojiItem',
              onClick: _this2.handleClick
            },
            emoji,
            ' ',
            _react2.default.createElement(
              'code',
              { className: _this2.props.className + '-emojiCode' },
              ':',
              code,
              ':'
            )
          );
        }).toArray()
      );
    }
  }]);

  return EmojiBar;
}(_react.Component);

EmojiBar.propTypes = {
  className: _propTypes2.default.string
};
EmojiBar.defaultProps = {
  className: 'PulseEditor-emojiBar'
};
EmojiBar.contextTypes = {
  pickEmoji: _propTypes2.default.func.isRequired,
  emoji: _propTypes2.default.shape({
    writing: _propTypes2.default.bool.isRequired,
    code: _propTypes2.default.string.isRequired
  }).isRequired
};
exports.default = EmojiBar;