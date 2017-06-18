'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Get the element selection start and end values
 * @param  {Element}       field The DOM node element
 * @return {SelectionType}       The selection start and end
 */
function getSelection(field) {
  if ((typeof field === 'undefined' ? 'undefined' : _typeof(field)) !== 'object') {
    throw new TypeError('The field must be an object.');
  }

  return {
    start: field.selectionStart,
    end: field.selectionEnd
  };
}

exports.default = getSelection;