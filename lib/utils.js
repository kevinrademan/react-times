'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidateTimeMode = exports.getValidateTimeQuantum = exports.initialTime = exports.degree2Radian = exports.getStandardAbsolutePosition = exports.getValidateTime = exports.getValidateIntTime = exports.getInitialPointerStyle = exports.getInlineRotateStyle = exports.getRotateStyle = exports.disableMouseDown = exports.mousePosition = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mousePosition = exports.mousePosition = function mousePosition(e) {
  var xPos = void 0,
      yPos = void 0;
  e = e || window.event;
  if (e.pageX) {
    xPos = e.pageX;
    yPos = e.pageY;
  } else {
    xPos = e.clientX + document.body.scrollLeft - document.body.clientLeft;
    yPos = e.clientY + document.body.scrollTop - document.body.clientTop;
  }
  return {
    x: xPos,
    y: yPos
  };
};

var disableMouseDown = exports.disableMouseDown = function disableMouseDown(e) {
  var event = e || window.event;
  event.preventDefault();
  event.stopPropagation();
};

var getRotateStyle = exports.getRotateStyle = function getRotateStyle(degree) {
  return {
    'transform': 'rotate(' + degree + 'deg)',
    'OTransform': 'rotate(' + degree + 'deg)',
    'MozTransform': 'rotate(' + degree + 'deg)',
    'Mstransform': 'rotate(' + degree + 'deg)',
    'WebkitTransform': 'rotate(' + degree + 'deg)'
  };
};

var getInlineRotateStyle = exports.getInlineRotateStyle = function getInlineRotateStyle(degree) {
  return {
    'transform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'OTransform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'MozTransform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'Mstransform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'WebkitTransform': 'translateX(-50%) rotate(' + degree + 'deg)'
  };
};

var getInitialPointerStyle = exports.getInitialPointerStyle = function getInitialPointerStyle(height, top, degree) {
  return {
    'height': height + 'px',
    'top': top + 'px',
    'transform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'OTransform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'MozTransform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'Mstransform': 'translateX(-50%) rotate(' + degree + 'deg)',
    'WebkitTransform': 'translateX(-50%) rotate(' + degree + 'deg)'
  };
};

var getValidateIntTime = exports.getValidateIntTime = function getValidateIntTime(time) {
  if (isNaN(parseInt(time))) {
    return 0;
  }
  return parseInt(time);
};

var getValidateTime = exports.getValidateTime = function getValidateTime(time) {
  if (typeof time === 'undefined') {
    time = '00';
  }
  if (isNaN(parseInt(time))) {
    time = '00';
  }
  if (parseInt(time) < 10) {
    time = '0' + parseInt(time);
  }
  return '' + time;
};

var getStandardAbsolutePosition = exports.getStandardAbsolutePosition = function getStandardAbsolutePosition(position, minPosition, maxPosition) {
  if (position < minPosition) {
    position = minPosition;
  }
  if (position > maxPosition) {
    position = maxPosition;
  }
  return position;
};

var degree2Radian = exports.degree2Radian = function degree2Radian(degree) {
  return degree * (2 * Math.PI) / 360;
};

var initialTime = exports.initialTime = function initialTime(defaultTime) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;

  var _timeHelper$current$s = _time2.default.current().split(':'),
      _timeHelper$current$s2 = _slicedToArray(_timeHelper$current$s, 2),
      hour = _timeHelper$current$s2[0],
      minute = _timeHelper$current$s2[1];

  if (defaultTime) {
    var _$split = ('' + defaultTime).split(':');

    var _$split2 = _slicedToArray(_$split, 2);

    hour = _$split2[0];
    minute = _$split2[1];
  }
  hour = getValidateIntTime(hour);
  minute = getValidateIntTime(minute);
  if (hour > 24) {
    hour = 24 - hour;
  }
  if (minute >= 60) {
    minute = 60 - minute;
  }

  var timeInterval = null;
  if (mode === 12) {
    timeInterval = hour > 12 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour;
  }

  hour = getValidateTime(hour);
  minute = getValidateTime(minute);

  return [hour, minute, timeInterval];
};

var getValidateTimeQuantum = exports.getValidateTimeQuantum = function getValidateTimeQuantum(time, timeMode) {
  if (!time) {
    time = _time2.default.current();
  }
  var mode = parseInt(timeMode);

  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hour = _time$split2[0],
      _ = _time$split2[1];

  hour = getValidateIntTime(hour);

  var timeQuantum = null;
  if (mode === 12) {
    timeQuantum = hour > 12 ? "PM" : "AM";
  }
  return timeQuantum;
};

var getValidateTimeMode = exports.getValidateTimeMode = function getValidateTimeMode(timeMode) {
  var mode = parseInt(timeMode);
  if (isNaN(mode)) {
    return 24;
  }
  if (mode !== 24 && mode !== 12) {
    return 24;
  }
  return mode;
};