'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Get the piece of content selected from a full content stringa and
 * the selections positios
 * @param  {string}                 content   The full content string
 * @param  {SelectionType} selection The selections positions
 * @return {string}                           The sliced string
 */
function getSelected(content, selection) {
  if (typeof content !== 'string') {
    throw new TypeError('The content must be a string.');
  }

  if ((typeof selection === 'undefined' ? 'undefined' : _typeof(selection)) !== 'object') {
    throw new TypeError('The selection must be an object.');
  }

  if (typeof selection.start !== 'number') {
    throw new TypeError('The selection start value must be a number.');
  }

  if (typeof selection.end !== 'number') {
    throw new TypeError('The selection end value must be a number.');
  }

  return content.slice(selection.start, selection.end);
}

exports.default = getSelected;