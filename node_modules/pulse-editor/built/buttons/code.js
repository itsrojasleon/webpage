'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function updater(selected) {
  if (selected.length === 0) {
    return '\n\n```\n<code>\n```\n';
  }
  return '`' + selected + '`';
}

function handler(event) {
  if (event.selected.length === 0) {
    return {
      start: 5 + event.selection.start + 1,
      end: 5 + event.selection.end + 7
    };
  }
  return {
    start: event.selection.start + 1,
    end: event.selection.end + 1
  };
}

var ButtonCode = function (_Component) {
  _inherits(ButtonCode, _Component);

  function ButtonCode() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ButtonCode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonCode.__proto__ || Object.getPrototypeOf(ButtonCode)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      event.preventDefault();
      _this.context.updateValue(_extends({}, event, { updater: updater, handler: handler }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ButtonCode, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _base2.default,
        {
          className: this.props.className,
          onClick: this.handleClick,
          disabled: this.props.disabled,
          name: 'code'
        },
        this.props.children
      );
    }
  }]);

  return ButtonCode;
}(_react.Component);

ButtonCode.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};
ButtonCode.defaultProps = {
  className: 'PulseEditor-button'
};
ButtonCode.contextTypes = {
  updateValue: _propTypes2.default.func.isRequired
};
exports.default = ButtonCode;