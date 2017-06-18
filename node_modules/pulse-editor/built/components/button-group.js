'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonGroup(_ref) {
  var children = _ref.children,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
}

ButtonGroup.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};

ButtonGroup.defaultProps = {
  className: 'PulseEditor-buttonGroup'
};

exports.default = ButtonGroup;