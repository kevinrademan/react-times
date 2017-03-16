'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConstValue = require('../../ConstValue.js');

var _PickerDargHandler = require('../Picker/PickerDargHandler');

var _PickerDargHandler2 = _interopRequireDefault(_PickerDargHandler);

var _PickerPointGenerator = require('../Picker/PickerPointGenerator');

var _PickerPointGenerator2 = _interopRequireDefault(_PickerPointGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  step: _react.PropTypes.number,
  hour: _react.PropTypes.string,
  autoMode: _react.PropTypes.bool,
  minute: _react.PropTypes.string,
  handleHourChange: _react.PropTypes.func,
  handleMinuteChange: _react.PropTypes.func,
  clearFoucs: _react.PropTypes.func
};

var defaultProps = {
  step: 0,
  hour: '00',
  minute: '00',
  autoMode: true,
  handleHourChange: function handleHourChange() {},
  handleMinuteChange: function handleMinuteChange() {},
  clearFoucs: function clearFoucs() {}
};

var TwentyFourHoursMode = function (_React$Component) {
  _inherits(TwentyFourHoursMode, _React$Component);

  function TwentyFourHoursMode(props) {
    _classCallCheck(this, TwentyFourHoursMode);

    var _this = _possibleConstructorReturn(this, (TwentyFourHoursMode.__proto__ || Object.getPrototypeOf(TwentyFourHoursMode)).call(this, props));

    var pointerRotate = _this.resetHourDegree();
    var step = props.step;

    _this.state = {
      step: step,
      pointerRotate: pointerRotate
    };
    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    _this.handleTimePointerClick = _this.handleTimePointerClick.bind(_this);
    return _this;
  }

  _createClass(TwentyFourHoursMode, [{
    key: 'handleStepChange',
    value: function handleStepChange(step) {
      var _this2 = this;

      var stateStep = this.state.step;
      if (stateStep !== step) {
        this.pickerPointerContainer && this.pickerPointerContainer.addAnimation();
        setTimeout(function () {
          _this2.pickerPointerContainer && _this2.pickerPointerContainer.removeAnimation();
          _this2.setStep(step);
        }, 300);
      }
    }
  }, {
    key: 'setStep',
    value: function setStep(step) {
      var pointerRotate = step === 0 ? this.resetHourDegree() : this.resetMinuteDegree();
      this.setState({
        step: step,
        pointerRotate: pointerRotate
      });
    }
  }, {
    key: 'handleTimePointerClick',
    value: function handleTimePointerClick(time, pointerRotate) {
      this.setState({ pointerRotate: pointerRotate });
      this.handleTimeChange(time);
    }
  }, {
    key: 'handleTimeChange',
    value: function handleTimeChange(time) {
      time = parseInt(time);
      var step = this.state.step;
      var _props = this.props,
          handleHourChange = _props.handleHourChange,
          handleMinuteChange = _props.handleMinuteChange,
          autoMode = _props.autoMode,
          clearFoucs = _props.clearFoucs;

      if (step === 0) {
        handleHourChange && handleHourChange(time);
      } else {
        handleMinuteChange && handleMinuteChange(time);
      }
      if (!autoMode) {
        return;
      }
      if (step === 0) {
        this.handleStepChange(1);
      } else {
        clearFoucs();
        this.setStep(0);
      }
    }
  }, {
    key: 'resetHourDegree',
    value: function resetHourDegree() {
      var hour = parseInt(this.props.hour);
      var pointerRotate = 0;
      _ConstValue.HOURS.forEach(function (h, index) {
        if (hour === index + 1) {
          pointerRotate = index < 12 ? 360 * (index + 1) / 12 : 360 * (index + 1 - 12) / 12;
        }
      });
      return pointerRotate;
    }
  }, {
    key: 'resetMinuteDegree',
    value: function resetMinuteDegree() {
      var minute = parseInt(this.props.minute);
      var pointerRotate = 0;
      _ConstValue.MINUTES.forEach(function (m, index) {
        if (minute === index) {
          pointerRotate = 360 * index / 60;
        }
      });
      return pointerRotate;
    }
  }, {
    key: 'getTopAndHeight',
    value: function getTopAndHeight() {
      var step = this.state.step;
      var _props2 = this.props,
          hour = _props2.hour,
          minute = _props2.minute;

      var time = step === 0 ? hour : minute;
      var splitNum = step === 0 ? 12 : 60;
      var minLength = step === 0 ? _ConstValue.MIN_ABSOLUTE_POSITION : _ConstValue.MAX_ABSOLUTE_POSITION;
      var height = time < splitNum ? minLength - _ConstValue.POINTER_RADIUS : _ConstValue.MAX_ABSOLUTE_POSITION - _ConstValue.POINTER_RADIUS;
      var top = time < splitNum ? _ConstValue.PICKER_RADIUS - minLength + _ConstValue.POINTER_RADIUS : _ConstValue.PICKER_RADIUS - _ConstValue.MAX_ABSOLUTE_POSITION + _ConstValue.POINTER_RADIUS;
      return [top, height];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          hour = _props3.hour,
          minute = _props3.minute;
      var _state = this.state,
          step = _state.step,
          pointerRotate = _state.pointerRotate;


      var activeHourClass = step === 0 ? "time_picker_header active" : "time_picker_header";
      var activeMinuteClass = step === 1 ? "time_picker_header active" : "time_picker_header";

      var _getTopAndHeight = this.getTopAndHeight(),
          _getTopAndHeight2 = _slicedToArray(_getTopAndHeight, 2),
          top = _getTopAndHeight2[0],
          height = _getTopAndHeight2[1];

      var rotateState = {
        top: top,
        height: height,
        pointerRotate: pointerRotate
      };
      var type = step === 0 ? 'hour' : 'minute';
      var PickerPointGenerator = (0, _PickerPointGenerator2.default)(type);

      return _react2.default.createElement(
        'div',
        { className: 'time_picker_modal_container' },
        _react2.default.createElement(
          'div',
          { className: 'time_picker_modal_header' },
          _react2.default.createElement(
            'span',
            {
              className: activeHourClass,
              onClick: this.handleStepChange.bind(this, 0) },
            hour
          ),
          '\xA0:\xA0',
          _react2.default.createElement(
            'span',
            { className: activeMinuteClass,
              onClick: this.handleStepChange.bind(this, 1) },
            minute
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'picker_container' },
          _react2.default.createElement(PickerPointGenerator, {
            ref: function ref(_ref) {
              return _this3.pickerPointerContainer = _ref;
            },
            handleTimePointerClick: this.handleTimePointerClick
          }),
          _react2.default.createElement(_PickerDargHandler2.default, {
            step: step,
            rotateState: rotateState,
            time: step === 0 ? parseInt(hour) : parseInt(minute),
            minLength: step === 0 ? _ConstValue.MIN_ABSOLUTE_POSITION : _ConstValue.MAX_ABSOLUTE_POSITION,
            handleTimePointerClick: this.handleTimePointerClick })
        )
      );
    }
  }]);

  return TwentyFourHoursMode;
}(_react2.default.Component);

TwentyFourHoursMode.propTypes = propTypes;
TwentyFourHoursMode.defaultProps = defaultProps;

exports.default = TwentyFourHoursMode;