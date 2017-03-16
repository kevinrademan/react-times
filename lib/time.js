"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fecha = require("fecha");

var _fecha2 = _interopRequireDefault(_fecha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurrentTime = function getCurrentTime() {
  return _fecha2.default.format(new Date(), "HH:mm");
};

exports.default = {
  current: getCurrentTime
};