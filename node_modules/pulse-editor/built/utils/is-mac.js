"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Detect is a computer is a Mac, iPhone, iPod or iPad
 * @return {boolean} If it's or not
 */
function isMac() {
  return !!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i);
}

exports.default = isMac;