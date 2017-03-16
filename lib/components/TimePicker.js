'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OutsideClickHandler = require('./OutsideClickHandler');

var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

var _MaterialTheme = require('./MaterialTheme');

var _MaterialTheme2 = _interopRequireDefault(_MaterialTheme);

var _ClassicTheme = require('./ClassicTheme');

var _ClassicTheme2 = _interopRequireDefault(_ClassicTheme);

var _utils = require('../utils.js');

var _time = require('../time.js');

var _time2 = _interopRequireDefault(_time);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _language = require('../language');

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LANGUAGE = _language2.default.get();

var propTypes = {
  time: _react.PropTypes.string,
  timeQuantum: _react.PropTypes.string,
  focused: _react.PropTypes.bool,
  autoMode: _react.PropTypes.bool,
  placeholder: _react.PropTypes.string,
  colorPalette: _react.PropTypes.string,
  theme: _react.PropTypes.string,
  timeMode: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  withoutIcon: _react.PropTypes.bool,
  onFocusChange: _react.PropTypes.func,
  onHourChange: _react.PropTypes.func,
  onMinuteChange: _react.PropTypes.func,
  onTimeChange: _react.PropTypes.func,
  onTimeQuantumChange: _react.PropTypes.func,
  trigger: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.instanceOf(_react2.default.Component)]),
  language: _react.PropTypes.string
};

var defaultProps = {
  time: _time2.default.current(),
  timeQuantum: 'AM',
  focused: false,
  autoMode: true,
  placeholder: '',
  colorPalette: "light",
  timeMode: 24,
  theme: "material",
  withoutIcon: false,
  onFocusChange: function onFocusChange() {},
  onHourChange: function onHourChange() {},
  onMinuteChange: function onMinuteChange() {},
  onTimeChange: function onTimeChange() {},
  onTimeQuantumChange: function onTimeQuantumChange() {},
  trigger: null,
  language: 'en'
};

var TimePicker = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

    var focused = props.focused;

    _this.state = { focused: focused };
    LANGUAGE = _language2.default.get(props.language);

    _this.onFocus = _this.onFocus.bind(_this);
    _this.onClearFocus = _this.onClearFocus.bind(_this);
    _this.handleHourChange = _this.handleHourChange.bind(_this);
    _this.handleMinuteChange = _this.handleMinuteChange.bind(_this);
    _this.handleTimeQuantumChange = _this.handleTimeQuantumChange.bind(_this);
    _this.handleHourAndMinuteChange = _this.handleHourAndMinuteChange.bind(_this);
    return _this;
  }

  _createClass(TimePicker, [{
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ focused: true });
      var onFocusChange = this.props.onFocusChange;

      onFocusChange && onFocusChange(true);
    }
  }, {
    key: 'getHourAndMinute',
    value: function getHourAndMinute() {
      var time = this.props.time;

      if (!time) {
        return _time2.default.current().split(':');
      }
      return time.split(':');
    }
  }, {
    key: 'onClearFocus',
    value: function onClearFocus() {
      this.setState({ focused: false });
      var onFocusChange = this.props.onFocusChange;

      onFocusChange && onFocusChange(false);
    }
  }, {
    key: 'handleHourChange',
    value: function handleHourChange(hour) {
      hour = (0, _utils.getValidateTime)(hour);
      var onHourChange = this.props.onHourChange;

      var _getHourAndMinute = this.getHourAndMinute(),
          _getHourAndMinute2 = _slicedToArray(_getHourAndMinute, 2),
          _ = _getHourAndMinute2[0],
          minute = _getHourAndMinute2[1];

      onHourChange && onHourChange(hour);
      this.handleTimeChange(hour + ':' + minute);
    }
  }, {
    key: 'handleMinuteChange',
    value: function handleMinuteChange(minute) {
      minute = (0, _utils.getValidateTime)(minute);
      var onMinuteChange = this.props.onMinuteChange;

      var _getHourAndMinute3 = this.getHourAndMinute(),
          _getHourAndMinute4 = _slicedToArray(_getHourAndMinute3, 2),
          hour = _getHourAndMinute4[0],
          _ = _getHourAndMinute4[1];

      onMinuteChange && onMinuteChange(minute);
      this.handleTimeChange(hour + ':' + minute);
    }
  }, {
    key: 'handleTimeQuantumChange',
    value: function handleTimeQuantumChange(timeQuantum) {
      var onTimeQuantumChange = this.props.onTimeQuantumChange;

      onTimeQuantumChange && onTimeQuantumChange(timeQuantum);
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(time) {
      var onTimeChange = this.props.onTimeChange;

      onTimeChange && onTimeChange(time);
    }
  }, {
    key: 'handleHourAndMinuteChange',
    value: function handleHourAndMinuteChange(time) {
      var _props = this.props,
          onTimeChange = _props.onTimeChange,
          autoMode = _props.autoMode;

      if (autoMode) {
        this.onClearFocus();
      }
      return onTimeChange && onTimeChange(time);
    }
  }, {
    key: 'renderMaterialTheme',
    value: function renderMaterialTheme() {
      var _props2 = this.props,
          timeMode = _props2.timeMode,
          autoMode = _props2.autoMode;

      var _getHourAndMinute5 = this.getHourAndMinute(),
          _getHourAndMinute6 = _slicedToArray(_getHourAndMinute5, 2),
          hour = _getHourAndMinute6[0],
          minute = _getHourAndMinute6[1];

      return _react2.default.createElement(_MaterialTheme2.default, {
        hour: hour,
        minute: minute,
        autoMode: autoMode,
        language: LANGUAGE,
        timeMode: parseInt(timeMode),
        clearFoucs: this.onClearFocus,
        handleHourChange: this.handleHourChange,
        handleMinuteChange: this.handleMinuteChange,
        handleTimeQuantumChange: this.handleTimeQuantumChange,
        timeQuantum: this.timeQuantum
      });
    }
  }, {
    key: 'renderClassicTheme',
    value: function renderClassicTheme() {
      var _getHourAndMinute7 = this.getHourAndMinute(),
          _getHourAndMinute8 = _slicedToArray(_getHourAndMinute7, 2),
          hour = _getHourAndMinute8[0],
          minute = _getHourAndMinute8[1];

      return _react2.default.createElement(_ClassicTheme2.default, {
        hour: hour,
        minute: minute,
        handleTimeChange: this.handleHourAndMinuteChange
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var focused = nextProps.focused;

      if (focused !== this.state.focused) {
        this.setState({ focused: focused });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          time = _props3.time,
          theme = _props3.theme,
          trigger = _props3.trigger,
          timeMode = _props3.timeMode,
          placeholder = _props3.placeholder,
          withoutIcon = _props3.withoutIcon,
          colorPalette = _props3.colorPalette;
      var focused = this.state.focused;

      var _getHourAndMinute9 = this.getHourAndMinute(),
          _getHourAndMinute10 = _slicedToArray(_getHourAndMinute9, 2),
          hour = _getHourAndMinute10[0],
          minute = _getHourAndMinute10[1];

      var validateTimeMode = (0, _utils.getValidateTimeMode)(timeMode);
      var quantum = LANGUAGE[this.timeQuantum.toLowerCase()] || this.timeQuantum;

      var times = hour + ' : ' + minute;
      if (validateTimeMode === 12) {
        times = times + ' ' + quantum;
      }
      var pickerPreviewClass = focused ? "time_picker_preview active" : "time_picker_preview";
      var containerClass = colorPalette === 'dark' ? "time_picker_container dark" : "time_picker_container";
      var previewContainerClass = withoutIcon ? "preview_container without_icon" : "preview_container";

      return _react2.default.createElement(
        'div',
        { className: containerClass },
        trigger ? trigger : _react2.default.createElement(
          'div',
          {
            onClick: this.onFocus,
            className: pickerPreviewClass },
          _react2.default.createElement(
            'div',
            { className: previewContainerClass },
            withoutIcon ? '' : _icons2.default.time,
            placeholder || times
          )
        ),
        _react2.default.createElement(
          _OutsideClickHandler2.default,
          {
            onOutsideClick: this.onClearFocus,
            focused: focused },
          theme === 'material' ? this.renderMaterialTheme() : this.renderClassicTheme()
        )
      );
    }
  }, {
    key: 'timeQuantum',
    get: function get() {
      var _props4 = this.props,
          timeQuantum = _props4.timeQuantum,
          time = _props4.time,
          timeMode = _props4.timeMode;

      return timeQuantum || (0, _utils.getValidateTimeQuantum)(time, timeMode);
    }
  }]);

  return TimePicker;
}(_react2.default.Component);

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

exports.default = TimePicker;