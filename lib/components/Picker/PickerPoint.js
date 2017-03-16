'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  index: _react.PropTypes.number,
  angle: _react.PropTypes.number,
  pointClass: _react.PropTypes.string,
  handleTimeChange: _react.PropTypes.func
};

var defaultProps = {
  index: 0,
  angle: 0,
  pointClass: "picker_point point_outter",
  handleTimeChange: function handleTimeChange() {}
};

var PickerPoint = function (_React$Component) {
  _inherits(PickerPoint, _React$Component);

  function PickerPoint() {
    _classCallCheck(this, PickerPoint);

    return _possibleConstructorReturn(this, (PickerPoint.__proto__ || Object.getPrototypeOf(PickerPoint)).apply(this, arguments));
  }

  _createClass(PickerPoint, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          index = _props.index,
          handleTimeChange = _props.handleTimeChange,
          pointClass = _props.pointClass,
          angle = _props.angle;

      var inlineStyle = (0, _utils.getInlineRotateStyle)(angle);
      var wrapperStyle = (0, _utils.getRotateStyle)(-angle);

      return _react2.default.createElement(
        'div',
        {
          className: pointClass,
          style: inlineStyle,
          onClick: function onClick() {
            handleTimeChange(index, angle);
          },
          onMouseDown: _utils.disableMouseDown },
        _react2.default.createElement(
          'div',
          { className: 'point_wrapper', style: wrapperStyle },
          index
        )
      );
    }
  }]);

  return PickerPoint;
}(_react2.default.Component);

PickerPoint.propTypes = propTypes;
PickerPoint.defaultProps = defaultProps;

exports.default = PickerPoint;