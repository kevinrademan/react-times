'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConstValue = require('../../ConstValue.js');

var _language = require('../../language');

var _language2 = _interopRequireDefault(_language);

var _Button = require('../Common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PickerDargHandler = require('../Picker/PickerDargHandler');

var _PickerDargHandler2 = _interopRequireDefault(_PickerDargHandler);

var _PickerPointGenerator = require('../Picker/PickerPointGenerator');

var _PickerPointGenerator2 = _interopRequireDefault(_PickerPointGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  language: _react.PropTypes.object,
  hour: _react.PropTypes.string,
  minute: _react.PropTypes.string,
  handleHourChange: _react.PropTypes.func,
  handleMinuteChange: _react.PropTypes.func
};

var defaultProps = {
  language: _language2.default.get(),
  hour: '00',
  minute: '00',
  handleHourChange: function handleHourChange() {},
  handleMinuteChange: function handleMinuteChange() {}
};

var TwelveHoursMode = function (_React$Component) {
  _inherits(TwelveHoursMode, _React$Component);

  function TwelveHoursMode(props) {
    _classCallCheck(this, TwelveHoursMode);

    var _this = _possibleConstructorReturn(this, (TwelveHoursMode.__proto__ || Object.getPrototypeOf(TwelveHoursMode)).call(this, props));

    var hourPointerRotate = _this.resetHourDegree();
    var minutePointerRotate = _this.resetMinuteDegree();
    _this.state = {
      hourPointerRotate: hourPointerRotate,
      minutePointerRotate: minutePointerRotate
    };
    _this.handleHourChange = _this.handleHourChange.bind(_this);
    _this.handleMinuteChange = _this.handleMinuteChange.bind(_this);
    _this.handleDegreeChange = _this.handleDegreeChange.bind(_this);
    _this.handleHourPointerClick = _this.handleHourPointerClick.bind(_this);
    _this.handleMinutePointerClick = _this.handleMinutePointerClick.bind(_this);
    return _this;
  }

  _createClass(TwelveHoursMode, [{
    key: 'resetHourDegree',
    value: function resetHourDegree() {
      var hour = parseInt(this.props.hour);
      var pointerRotate = 0;
      _ConstValue.TWELVE_HOURS.map(function (h, index) {
        if (hour === index + 1) {
          pointerRotate = 360 * (index + 1) / 12;
        }
      });
      return pointerRotate;
    }
  }, {
    key: 'resetMinuteDegree',
    value: function resetMinuteDegree() {
      var minute = parseInt(this.props.minute);
      var pointerRotate = 0;
      _ConstValue.MINUTES.map(function (m, index) {
        if (minute === index) {
          pointerRotate = 360 * index / 60;
        }
      });
      return pointerRotate;
    }
  }, {
    key: 'getHourTopAndHeight',
    value: function getHourTopAndHeight() {
      var height = _ConstValue.MIN_ABSOLUTE_POSITION - _ConstValue.POINTER_RADIUS;
      var top = _ConstValue.PICKER_RADIUS - _ConstValue.MIN_ABSOLUTE_POSITION + _ConstValue.POINTER_RADIUS;
      return [top, height];
    }
  }, {
    key: 'getMinuteTopAndHeight',
    value: function getMinuteTopAndHeight() {
      var height = _ConstValue.MAX_ABSOLUTE_POSITION - _ConstValue.POINTER_RADIUS;
      var top = _ConstValue.PICKER_RADIUS - _ConstValue.MAX_ABSOLUTE_POSITION + _ConstValue.POINTER_RADIUS;
      return [top, height];
    }
  }, {
    key: 'handleTimeQuantumChange',
    value: function handleTimeQuantumChange(timeQuantum) {
      if (timeQuantum !== this.props.timeQuantum) {
        var handleTimeQuantumChange = this.props.handleTimeQuantumChange;

        handleTimeQuantumChange && handleTimeQuantumChange(timeQuantum);
      }
    }
  }, {
    key: 'handleHourPointerClick',
    value: function handleHourPointerClick(time, hourPointerRotate) {
      this.handleHourChange(time);
      this.handleDegreeChange({ hourPointerRotate: hourPointerRotate });
    }
  }, {
    key: 'handleMinutePointerClick',
    value: function handleMinutePointerClick(time, minutePointerRotate) {
      this.handleMinuteChange(time);
      this.handleDegreeChange({ minutePointerRotate: minutePointerRotate });
    }
  }, {
    key: 'handleDegreeChange',
    value: function handleDegreeChange(pointerRotate) {
      this.setState(pointerRotate);
    }
  }, {
    key: 'handleHourChange',
    value: function handleHourChange(time) {
      var hour = parseInt(time);
      var handleHourChange = this.props.handleHourChange;

      handleHourChange && handleHourChange(hour);
    }
  }, {
    key: 'handleMinuteChange',
    value: function handleMinuteChange(time) {
      var minute = parseInt(time);
      var handleMinuteChange = this.props.handleMinuteChange;

      handleMinuteChange && handleMinuteChange(minute);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hour = _props.hour,
          minute = _props.minute,
          language = _props.language,
          clearFoucs = _props.clearFoucs,
          timeQuantum = _props.timeQuantum;
      var _state = this.state,
          hourPointerRotate = _state.hourPointerRotate,
          minutePointerRotate = _state.minutePointerRotate;


      var activeAMClass = timeQuantum === "AM" ? "time_picker_header active" : "time_picker_header";
      var activePMClass = timeQuantum === "PM" ? "time_picker_header active" : "time_picker_header";

      var _getHourTopAndHeight = this.getHourTopAndHeight(),
          _getHourTopAndHeight2 = _slicedToArray(_getHourTopAndHeight, 2),
          top = _getHourTopAndHeight2[0],
          height = _getHourTopAndHeight2[1];

      var hourRotateState = {
        top: top,
        height: height,
        pointerRotate: hourPointerRotate
      };

      var _getMinuteTopAndHeigh = this.getMinuteTopAndHeight(),
          _getMinuteTopAndHeigh2 = _slicedToArray(_getMinuteTopAndHeigh, 2),
          minuteTop = _getMinuteTopAndHeigh2[0],
          minuteHeight = _getMinuteTopAndHeigh2[1];

      var minuteRotateState = {
        top: minuteTop,
        height: minuteHeight,
        pointerRotate: minutePointerRotate
      };

      var HourPickerPointGenerator = (0, _PickerPointGenerator2.default)('hour', 12);
      var MinutePickerPointGenerator = (0, _PickerPointGenerator2.default)('minute', 12);

      return _react2.default.createElement(
        'div',
        { className: 'time_picker_modal_container' },
        _react2.default.createElement(
          'div',
          { className: 'time_picker_modal_header' },
          _react2.default.createElement(
            'span',
            {
              className: activeAMClass,
              onClick: this.handleTimeQuantumChange.bind(this, "AM") },
            language.am
          ),
          '\xA0|\xA0',
          _react2.default.createElement(
            'span',
            { className: activePMClass,
              onClick: this.handleTimeQuantumChange.bind(this, "PM") },
            language.pm
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'picker_container' },
          _react2.default.createElement(HourPickerPointGenerator, {
            handleTimePointerClick: this.handleHourPointerClick
          }),
          _react2.default.createElement(MinutePickerPointGenerator, {
            handleTimePointerClick: this.handleMinutePointerClick
          }),
          _react2.default.createElement(_PickerDargHandler2.default, {
            step: 0,
            rotateState: hourRotateState,
            time: parseInt(hour),
            maxLength: _ConstValue.MIN_ABSOLUTE_POSITION,
            handleTimePointerClick: this.handleHourPointerClick }),
          _react2.default.createElement(_PickerDargHandler2.default, {
            step: 1,
            rotateState: minuteRotateState,
            time: parseInt(minute),
            minLength: _ConstValue.MAX_ABSOLUTE_POSITION,
            handleTimePointerClick: this.handleMinutePointerClick })
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons_wrapper' },
          _react2.default.createElement(_Button2.default, {
            onClick: clearFoucs,
            text: language.close
          })
        )
      );
    }
  }]);

  return TwelveHoursMode;
}(_react2.default.Component);

TwelveHoursMode.propTypes = propTypes;
TwelveHoursMode.defaultProps = defaultProps;

exports.default = TwelveHoursMode;