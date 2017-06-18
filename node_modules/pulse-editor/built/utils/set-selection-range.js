'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Set the content selection range in the given field input
 * @param {Boolean} [selection=false] The selections positions
 * @param {Element} field             The DOMNode field
 */
function setSelectionRange() {
  var selection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var field = arguments[1];

  if (!selection) return null;

  if ((typeof selection === 'undefined' ? 'undefined' : _typeof(selection)) !== 'object') {
    throw new TypeError('The selection must be an object.');
  }

  if (typeof selection.start !== 'number') {
    throw new TypeError('The selection start value must be a number.');
  }

  if (typeof selection.end !== 'number') {
    throw new TypeError('The selection end value must be a number.');
  }

  if ((typeof field === 'undefined' ? 'undefined' : _typeof(field)) !== 'object') {
    throw new TypeError('The field must be an object.');
  }

  if (field.setSelectionRange) {
    field.setSelectionRange(selection.start, selection.end);
    return null;
  }

  if (!field.createTextRange) return null;

  var range = field.createTextRange();

  range.collapse(true);
  range.moveStart('character', selection.end);
  range.moveEnd('character', selection.end);
  range.select();

  return null;
}

exports.default = setSelectionRange;