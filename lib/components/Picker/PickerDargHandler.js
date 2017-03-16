'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ConstValue = require('../../ConstValue.js');

var _utils = require('../../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  time: _react.PropTypes.number,
  step: _react.PropTypes.number,
  pointerRotate: _react.PropTypes.number,
  minLength: _react.PropTypes.number,
  maxLength: _react.PropTypes.number,
  rotateState: _react.PropTypes.shape({
    top: _react.PropTypes.number,
    height: _react.PropTypes.number,
    pointerRotate: _react.PropTypes.number
  }),
  handleTimePointerClick: _react.PropTypes.func
};

var defaultProps = {
  time: 0,
  step: 0,
  pointerRotate: 0,
  rotateState: {
    top: 0,
    height: 0,
    pointerRotate: 0
  },
  minLength: _ConstValue.MIN_ABSOLUTE_POSITION,
  maxLength: _ConstValue.MAX_ABSOLUTE_POSITION,
  handleTimePointerClick: function handleTimePointerClick() {}
};

var PickerDargHandler = function (_React$Component) {
  _inherits(PickerDargHandler, _React$Component);

  function PickerDargHandler(props) {
    _classCallCheck(this, PickerDargHandler);

    var _this = _possibleConstructorReturn(this, (PickerDargHandler.__proto__ || Object.getPrototypeOf(PickerDargHandler)).call(this, props));

    _this.startX = 0;
    _this.startY = 0;
    _this.originX = null;
    _this.originY = null;
    _this.state = _this.initialRotationAndLength();

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  _createClass(PickerDargHandler, [{
    key: 'initialRotationAndLength',
    value: function initialRotationAndLength() {
      var rotateState = this.props.rotateState;
      var top = rotateState.top,
          height = rotateState.height,
          pointerRotate = rotateState.pointerRotate;


      return {
        top: top,
        height: height,
        pointerRotate: pointerRotate,
        draging: false
      };
    }
  }, {
    key: 'resetState',
    value: function resetState() {
      this.setState(this.initialRotationAndLength());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.originX) {
        var centerPoint = _reactDom2.default.findDOMNode(this.pickerCenter);
        var centerPointPos = centerPoint.getBoundingClientRect();
        this.originX = centerPointPos.left + centerPoint.clientWidth;
        this.originY = centerPointPos.top + centerPoint.clientWidth;
      }
      if (document.addEventListener) {
        document.addEventListener('mousemove', this.handleMouseMove, true);
        document.addEventListener('mouseup', this.handleMouseUp, true);
      } else {
        document.attachEvent('onmousemove', this.handleMouseMove);
        document.attachEvent('onmouseup', this.handleMouseUp);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (document.removeEventListener) {
        document.removeEventListener('mousemove', this.handleMouseMove, true);
        document.removeEventListener('mouseup', this.handleMouseUp, true);
      } else {
        document.detachEvent('onmousemove', this.handleMouseMove);
        document.detachEvent('onmouseup', this.handleMouseUp);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          step = _props.step,
          time = _props.time,
          rotateState = _props.rotateState;

      var prevStep = prevProps.step;
      var prevTime = prevProps.time;
      var PrevRotateState = prevProps.rotateState;
      if (step !== prevStep || time !== prevTime || rotateState.pointerRotate !== PrevRotateState.pointerRotate) {
        this.resetState();
      }
    }
  }, {
    key: 'getRadian',
    value: function getRadian(x, y) {
      var sRad = Math.atan2(y - this.originY, x - this.originX);
      sRad -= Math.atan2(this.startY - this.originY, this.startX - this.originX);
      sRad += (0, _utils.degree2Radian)(this.props.rotateState.pointerRotate);
      return sRad;
    }
  }, {
    key: 'getAbsolutePosition',
    value: function getAbsolutePosition(x, y) {
      return Math.sqrt(Math.pow(x - this.originX, 2) + Math.pow(y - this.originY, 2));
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      var event = e || window.event;
      event.preventDefault();
      event.stopPropagation();
      this.setState({
        draging: true
      });
      var pos = (0, _utils.mousePosition)(event);
      this.startX = pos.x;
      this.startY = pos.y;
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (this.state.draging) {
        var _props2 = this.props,
            minLength = _props2.minLength,
            maxLength = _props2.maxLength;

        var pos = (0, _utils.mousePosition)(e);
        var dragX = pos.x;
        var dragY = pos.y;
        if (this.originX !== dragX && this.originY !== dragY) {
          var sRad = this.getRadian(dragX, dragY);
          var pointerRotate = sRad * (360 / (2 * Math.PI));
          var absolutePosition = this.getAbsolutePosition(dragX, dragY);
          absolutePosition = (0, _utils.getStandardAbsolutePosition)(absolutePosition, minLength / 2, maxLength);
          var height = absolutePosition - _ConstValue.POINTER_RADIUS;
          var top = _ConstValue.PICKER_RADIUS - height;
          this.setState({
            top: top,
            height: height,
            pointerRotate: pointerRotate
          });
        }
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(e) {
      if (this.state.draging) {
        this.setState({
          draging: false
        });

        var _props3 = this.props,
            minLength = _props3.minLength,
            maxLength = _props3.maxLength,
            step = _props3.step,
            handleTimePointerClick = _props3.handleTimePointerClick;


        var pos = (0, _utils.mousePosition)(e);
        var endX = pos.x;
        var endY = pos.y;

        var sRad = this.getRadian(endX, endY);
        var degree = sRad * (360 / (2 * Math.PI));

        if (degree < 0) {
          degree = 360 + degree;
        }
        var roundSeg = Math.round(degree / (360 / 12));
        var pointerRotate = roundSeg * (360 / 12);
        var absolutePosition = this.getAbsolutePosition(endX, endY);

        absolutePosition = (0, _utils.getStandardAbsolutePosition)(absolutePosition, minLength, maxLength);
        if (minLength < absolutePosition && absolutePosition < maxLength) {
          if (absolutePosition - minLength > (maxLength - minLength) / 2) {
            absolutePosition = maxLength;
          } else {
            absolutePosition = minLength;
          }
        }
        if (roundSeg > 12) {
          roundSeg = roundSeg - 12;
        }
        var time = absolutePosition === minLength ? roundSeg : roundSeg + 12;
        time = step === 0 ? time === 24 ? 12 : time : time * 5 === 60 ? 0 : time * 5;
        this.setState({ pointerRotate: pointerRotate });
        handleTimePointerClick && handleTimePointerClick(time, pointerRotate);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var time = this.props.time;
      var _state = this.state,
          draging = _state.draging,
          height = _state.height,
          top = _state.top,
          pointerRotate = _state.pointerRotate;

      var pickerPointerClass = draging ? "picker_pointer" : "picker_pointer animation";

      return _react2.default.createElement(
        'div',
        { className: 'picker_handler' },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(d) {
              return _this2.dragPointer = d;
            },
            className: pickerPointerClass,
            style: (0, _utils.getInitialPointerStyle)(height, top, pointerRotate) },
          _react2.default.createElement(
            'div',
            {
              className: 'pointer_drag',
              style: (0, _utils.getRotateStyle)(-pointerRotate),
              onMouseDown: this.handleMouseDown },
            time
          )
        ),
        _react2.default.createElement('div', {
          className: 'picker_center',
          ref: function ref(p) {
            return _this2.pickerCenter = p;
          } })
      );
    }
  }]);

  return PickerDargHandler;
}(_react2.default.Component);

PickerDargHandler.propTypes = propTypes;
PickerDargHandler.defaultProps = defaultProps;

exports.default = PickerDargHandler;