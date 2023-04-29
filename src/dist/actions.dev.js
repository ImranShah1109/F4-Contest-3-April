"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = exports.fetchDataFailure = exports.fetchDataSuccess = exports.fetchDataRequest = void 0;

var _actionTypes = require("./actionTypes");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchDataRequest = function fetchDataRequest() {
  return {
    type: _actionTypes.FETCH_DATA_REQUEST
  };
};

exports.fetchDataRequest = fetchDataRequest;

var fetchDataSuccess = function fetchDataSuccess(data) {
  return {
    type: _actionTypes.FETCH_DATA_SUCCESS,
    payload: data
  };
};

exports.fetchDataSuccess = fetchDataSuccess;

var fetchDataFailure = function fetchDataFailure(error) {
  return {
    type: _actionTypes.FETCH_DATA_FAILURE,
    payload: error
  };
};

exports.fetchDataFailure = fetchDataFailure;

var fetchData = function fetchData() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(fetchDataRequest);
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get(" https://gauravgitacc.github.io/postAppData/posts.json"));

          case 4:
            response = _context.sent;
            dispatch(fetchDataSuccess(response.data));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch(fetchDataFailure(_context.t0.message));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.fetchData = fetchData;