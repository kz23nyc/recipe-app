"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentSchema = new _mongoose["default"].Schema({
  text: {
    type: String,
    required: true
  },
  recipe: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  author: {
    type: String,
    "default": 'Anonymous'
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("Comment", commentSchema);

exports["default"] = _default;