'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyFunc = function emptyFunc() {};

/**
 * The basic button without any functionality
 * @param {Object} props The base button props
 */
function BaseButton(props) {
  return _react2.default.createElement('button', _extends({}, props, {
    className: props.className,
    onClick: props.onClick,
    name: props.name,
    disabled: props.disabled,
    type: 'button',
    children: props.children
  }));
}

BaseButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

BaseButton.defaultProps = {
  className: 'PulseEditor-button',
  disabled: false,
  onClick: emptyFunc
};

exports.default = BaseButton;