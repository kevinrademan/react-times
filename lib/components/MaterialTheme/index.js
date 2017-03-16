'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TwelveHoursMode = require('./TwelveHoursMode');

var _TwelveHoursMode2 = _interopRequireDefault(_TwelveHoursMode);

var _TwentyFourHoursMode = require('./TwentyFourHoursMode');

var _TwentyFourHoursMode2 = _interopRequireDefault(_TwentyFourHoursMode);

var _language = require('../../language');

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  hour: _react.PropTypes.string,
  minute: _react.PropTypes.string,
  timeMode: _react.PropTypes.number,
  autoMode: _react.PropTypes.bool,
  language: _react.PropTypes.object,
  timeQuantum: _react.PropTypes.string,
  handleHourChange: _react.PropTypes.func,
  handleMinuteChange: _react.PropTypes.func,
  handleTimeQuantumChange: _react.PropTypes.func
};

var defaultProps = {
  hour: '00',
  minute: '00',
  timeMode: 24,
  autoMode: true,
  timeQuantum: 'AM',
  handleHourChange: function handleHourChange() {},
  handleMinuteChange: function handleMinuteChange() {},
  handleTimeQuantumChange: function handleTimeQuantumChange() {}
};

var MaterialTheme = function (_React$Component) {
  _inherits(MaterialTheme, _React$Component);

  function MaterialTheme() {
    _classCallCheck(this, MaterialTheme);

    return _possibleConstructorReturn(this, (MaterialTheme.__proto__ || Object.getPrototypeOf(MaterialTheme)).apply(this, arguments));
  }

  _createClass(MaterialTheme, [{
    key: 'renderTwentyFourHoursMode',
    value: function renderTwentyFourHoursMode() {
      var _props = this.props,
          hour = _props.hour,
          minute = _props.minute,
          autoMode = _props.autoMode,
          clearFoucs = _props.clearFoucs,
          handleHourChange = _props.handleHourChange,
          handleMinuteChange = _props.handleMinuteChange;

      return _react2.default.createElement(_TwentyFourHoursMode2.default, {
        hour: hour,
        minute: minute,
        autoMode: autoMode,
        handleHourChange: handleHourChange,
        handleMinuteChange: handleMinuteChange,
        clearFoucs: clearFoucs
      });
    }
  }, {
    key: 'renderTwelveHoursMode',
    value: function renderTwelveHoursMode() {
      var _props2 = this.props,
          hour = _props2.hour,
          minute = _props2.minute,
          language = _props2.language,
          clearFoucs = _props2.clearFoucs,
          timeQuantum = _props2.timeQuantum,
          handleHourChange = _props2.handleHourChange,
          handleMinuteChange = _props2.handleMinuteChange,
          handleTimeQuantumChange = _props2.handleTimeQuantumChange;


      return _react2.default.createElement(_TwelveHoursMode2.default, {
        hour: hour,
        minute: minute,
        language: language,
        clearFoucs: clearFoucs,
        timeQuantum: timeQuantum,
        handleHourChange: handleHourChange,
        handleMinuteChange: handleMinuteChange,
        handleTimeQuantumChange: handleTimeQuantumChange
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var timeMode = this.props.timeMode;

      return _react2.default.createElement(
        'div',
        null,
        parseInt(timeMode) === 24 ? this.renderTwentyFourHoursMode() : this.renderTwelveHoursMode()
      );
    }
  }]);

  return MaterialTheme;
}(_react2.default.Component);

MaterialTheme.propTypes = propTypes;
MaterialTheme.defaultProps = defaultProps;

exports.default = MaterialTheme;