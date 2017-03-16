'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConstValue = require('../../ConstValue');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  hour: _react.PropTypes.string,
  minute: _react.PropTypes.string,
  handleTimeChange: _react.PropTypes.func
};

var defaultProps = {
  hour: '00',
  minute: '00',
  handleTimeChange: function handleTimeChange() {}
};

var ClassicTheme = function (_React$Component) {
  _inherits(ClassicTheme, _React$Component);

  function ClassicTheme(props) {
    _classCallCheck(this, ClassicTheme);

    var _this = _possibleConstructorReturn(this, (ClassicTheme.__proto__ || Object.getPrototypeOf(ClassicTheme)).call(this, props));

    _this.handleTimeChange = _this.handleTimeChange.bind(_this);
    return _this;
  }

  _createClass(ClassicTheme, [{
    key: 'handleTimeChange',
    value: function handleTimeChange(time) {
      var handleTimeChange = this.props.handleTimeChange;

      handleTimeChange && handleTimeChange(time);
    }
  }, {
    key: 'checkTimeIsActive',
    value: function checkTimeIsActive(time) {
      var _props = this.props,
          hour = _props.hour,
          minute = _props.minute;

      var times = time.split(':');
      var currentHour = (0, _utils.getValidateTime)(times[0]);
      var currentMinute = (0, _utils.getValidateTime)(times[1]);
      if (hour !== currentHour) {
        return false;
      }
      if (Math.abs(minute - currentMinute) < 15) {
        return true;
      }
      return false;
    }
  }, {
    key: 'renderTimes',
    value: function renderTimes() {
      var _this2 = this;

      return _ConstValue.TIMES_24_MODE.map(function (hourValue, index) {
        var timeClass = _this2.checkTimeIsActive(hourValue) ? 'classic_time active' : 'classic_time';
        return _react2.default.createElement(
          'div',
          {
            key: index,
            onClick: function onClick() {
              _this2.handleTimeChange(hourValue);
            },
            className: timeClass },
          hourValue
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'classic_theme_container' },
        this.renderTimes()
      );
    }
  }]);

  return ClassicTheme;
}(_react2.default.Component);

ClassicTheme.propTypes = propTypes;
ClassicTheme.defaultProps = defaultProps;

exports.default = ClassicTheme;