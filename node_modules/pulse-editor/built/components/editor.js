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

var _immutable = require('immutable');

var _markdown = require('@platzi/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _getSelection2 = require('../utils/get-selection');

var _getSelection3 = _interopRequireDefault(_getSelection2);

var _getSelected = require('../utils/get-selected');

var _getSelected2 = _interopRequireDefault(_getSelected);

var _updateContent = require('../utils/update-content');

var _updateContent2 = _interopRequireDefault(_updateContent);

var _setSelectionRange = require('../utils/set-selection-range');

var _setSelectionRange2 = _interopRequireDefault(_setSelectionRange);

var _createChangeEvent = require('../utils/create-change-event');

var _createChangeEvent2 = _interopRequireDefault(_createChangeEvent);

var _getKeyName = require('../utils/get-key-name');

var _getKeyName2 = _interopRequireDefault(_getKeyName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PulseEditor = function (_Component) {
  _inherits(PulseEditor, _Component);

  function PulseEditor(props, context) {
    _classCallCheck(this, PulseEditor);

    var _this = _possibleConstructorReturn(this, (PulseEditor.__proto__ || Object.getPrototypeOf(PulseEditor)).call(this, props, context));

    _this.state = {
      value: _this.props.defaultValue,
      expanded: false,
      uploading: false,
      view: 'field',
      emoji: {
        writing: false,
        code: ''
      }
    };
    _this.parser = (0, _markdown2.default)(_this.props.parser);
    _this.shortcuts = (0, _immutable.Map)();

    _this.writeValue = function (event) {
      var value = event.target.value;
      _this.setState(function (state) {
        var newState = { value: value, emoji: state.emoji };

        if (value.lastIndexOf(':') === value.length - 1) {
          if (value.length - 2 < 0 || value[value.length - 2] === ' ') {
            newState.emoji.writing = true;
          }
        }

        if (value.lastIndexOf(' ') === value.length - 1 || value.length === 0) {
          newState.emoji = {
            writing: false,
            code: ''
          };
        }

        if (state.emoji.writing) {
          var valueSplitted = value.split(':');
          newState.emoji.code = valueSplitted[valueSplitted.length - 1];
        }

        return newState;
      }, function () {
        // call the handle change method
        _this.handleChange(event);
      });
    };

    _this.updateValue = function (_ref) {
      var updater = _ref.updater,
          handler = _ref.handler,
          event = _objectWithoutProperties(_ref, ['updater', 'handler']);

      // get the field selection
      var selection = (0, _getSelection3.default)(_this.domField);

      // get the selected value
      var selected = (0, _getSelected2.default)(_this.state.value, selection);

      // apply the feature updater to the selection
      var updated = updater(selected, _this.state.value, selection);

      // get the updated full value
      var value = (0, _updateContent2.default)(_this.state.value, selection, updated);

      // update the state
      _this.setState({ value: value }, function () {
        // get the scroll top
        var scrollTop = _this.domField.scrollTop;

        // focus in the field
        _this.domField.focus();

        // set the scroll position
        _this.domField.scrollTop = scrollTop;

        // get the new selection positions
        if (handler) {
          var newSelection = handler(_extends({}, event, {
            value: value,
            field: _this.domField,
            updated: updated,
            selection: selection,
            selected: selected
          }));

          // set the new selection in the field
          (0, _setSelectionRange2.default)(newSelection, _this.domField);
        }

        // call the handle change method
        _this.handleChange(event);
      });
    };

    _this.syncScroll = function (event) {
      if (_this.state.expanded || _this.state.mode === 'wide') {
        var scrollTop = event.target.scrollTop;

        _this.previewNode.scrollTop = scrollTop;
      }
    };

    _this.setShortcut = function (shortcut) {
      _this.shortcuts = _this.shortcuts.set(shortcut.keyName, shortcut);
    };

    _this.removeShortcut = function (shortcut) {
      _this.shortcuts = _this.shortcuts.remove(shortcut.keyName);
    };

    _this.detectShortcut = function (event) {
      var keyCode = event.keyCode || event.which;
      var keyName = (0, _getKeyName2.default)(keyCode);

      if (keyName === 'tab') {
        event.preventDefault();

        var _getSelection = (0, _getSelection3.default)(_this.domField),
            start = _getSelection.start,
            end = _getSelection.end;

        var currentValue = _this.state.value;
        var newValue = currentValue.substring(0, start) + '\t' + currentValue.substring(end);
        return _this.setState({ value: newValue }, function () {
          _this.domField.selectionEnd = start + 1;
          _this.handleChange(event);
        });
      }

      if (_this.shortcuts.has(keyName)) {
        var _this$shortcuts$get = _this.shortcuts.get(keyName),
            _this$shortcuts$get$m = _this$shortcuts$get.metaKey,
            metaKey = _this$shortcuts$get$m === undefined ? false : _this$shortcuts$get$m,
            _this$shortcuts$get$c = _this$shortcuts$get.ctrlKey,
            ctrlKey = _this$shortcuts$get$c === undefined ? false : _this$shortcuts$get$c,
            _this$shortcuts$get$a = _this$shortcuts$get.altKey,
            altKey = _this$shortcuts$get$a === undefined ? false : _this$shortcuts$get$a,
            updater = _this$shortcuts$get.updater,
            handler = _this$shortcuts$get.handler;

        // if the shortcut use meta key and is not pressed


        if (metaKey && !event.metaKey) return event;
        // if the shortcut use ctrl and is not pressed or is pressed altgr
        if (ctrlKey && (!event.ctrlKey || event.ctrlKey && event.altKey)) return event;
        // if the shortcut use alt key and is not pressed
        if (altKey && !event.altKey) return event;

        event.preventDefault();

        _this.updateValue(_extends({ updater: updater, handler: handler }, event));
      }
    };

    _this.pickEmoji = function (code) {
      _this.setState(function (state) {
        // create new value with the picked emoji
        var value = (0, _immutable.List)(state.value.split(':')).pop().push(code).toArray().join(':');
        // update state
        return {
          value: value + ': ',
          emoji: {
            code: '',
            writing: false
          }
        };
      }, function () {
        // get the scroll top
        var scrollTop = _this.domField.scrollTop;
        // focus in the field
        _this.domField.focus();
        // set the scroll position
        _this.domField.scrollTop = scrollTop;
        // update value
        _this.handleChange({ type: 'PICK_EMOJI', target: _this.domField, emojiCode: code });
      });
    };

    if (props.editorRef) {
      // pass editor instance ref to parent component
      props.editorRef(_this);
    }
    return _this;
  }

  /**
   * Map of editor shortcuts
   * @type {Immutable.Map}
   */


  _createClass(PulseEditor, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        name: this.props.name,
        value: this.state.value,
        writeValue: this.writeValue,
        updateValue: this.updateValue,
        syncScroll: this.syncScroll,
        setShortcut: this.setShortcut,
        removeShortcut: this.removeShortcut,
        detectShortcut: this.detectShortcut,
        pickEmoji: this.pickEmoji,
        expanded: this.state.expanded,
        disabled: false,
        emoji: this.state.emoji
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.domField = document.getElementById('pulse-editor-' + this.props.name);
    }

    /**
     * Change the current value with a new one
     * @param  {string} value The new editor content
     */


    /**
     * Update current value applyng the updater function
     * @param  {Function} updater The update to apply to the editor content
     * @param  {Function} handler The function to call after the content was updated
     * @param  {Object}   event   The triggered event (click, keypress)
     */


    /**
     * Syncronize scroll between the textarea and the preview
     */


    /**
     * Set a new shortcut to the shortcup map
     * @param {Object} shortcut Shortcut description and configuration
     */


    /**
     * Remove a shortcut from the shortcup map
     * @param {Object} shortcut Shortcut description and configuration
     */


    /**
     * Check shortcuts when the user trigger a keydown event
     * @param {Object} event The keyDown event
     */


    /**
     * Pick an emoji from the emojibar and apply it to the editor value
     * @param  {string} code The emoji code
     */

  }, {
    key: 'handleChange',


    /**
     * Handle the change event in the form
     */
    value: function handleChange(event) {
      if (!this.props.onChange) return null;

      var selection = (0, _getSelection3.default)(this.domField);
      var selected = (0, _getSelected2.default)(this.state.value, selection);

      return this.props.onChange((0, _createChangeEvent2.default)(selected, selection, this.state.value, event, this.parser(this.state.value, this.props.markdown)));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          parser = _props.parser,
          name = _props.name,
          defaultValue = _props.defaultValue,
          children = _props.children,
          className = _props.className,
          editorRef = _props.editorRef,
          props = _objectWithoutProperties(_props, ['parser', 'name', 'defaultValue', 'children', 'className', 'editorRef']);

      return _react2.default.createElement(
        'div',
        _extends({ className: this.props.className }, props),
        this.props.children
      );
    }
  }]);

  return PulseEditor;
}(_react.Component);

PulseEditor.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  defaultValue: _propTypes2.default.string,
  name: _propTypes2.default.string,
  parser: _propTypes2.default.object,
  editorRef: _propTypes2.default.func
};
PulseEditor.defaultProps = {
  className: 'PulseEditor',
  defaultValue: '',
  name: 'pulse-editor',
  parser: {},
  editorRef: function editorRef() {}
};
PulseEditor.childContextTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  writeValue: _propTypes2.default.func.isRequired,
  updateValue: _propTypes2.default.func.isRequired,
  syncScroll: _propTypes2.default.func.isRequired,
  setShortcut: _propTypes2.default.func.isRequired,
  removeShortcut: _propTypes2.default.func.isRequired,
  detectShortcut: _propTypes2.default.func.isRequired,
  pickEmoji: _propTypes2.default.func.isRequired,
  expanded: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  emoji: _propTypes2.default.shape({
    writing: _propTypes2.default.bool.isRequired,
    code: _propTypes2.default.string.isRequired
  }).isRequired
};
exports.default = PulseEditor;