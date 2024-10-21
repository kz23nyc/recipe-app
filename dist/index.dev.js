"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _recipeRoutes = _interopRequireDefault(require("./routes/recipeRoutes.js"));

var _categoryRoutes = _interopRequireDefault(require("./routes/categoryRoutes.js"));

var _commentRoutes = _interopRequireDefault(require("./routes/commentRoutes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use(_express["default"].json()); // Middleware for parsing JSON bodies

_mongoose["default"].connect(process.env.MONGODB_URI).then(function () {
  return console.log("MongoDB connected");
})["catch"](function (err) {
  return console.log("MongoDB connection error:", err);
});

app.use('/api/recipes', _recipeRoutes["default"]);
app.use('/api/categories', _categoryRoutes["default"]);
app.use('/api/comments', _commentRoutes["default"]);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT));
});