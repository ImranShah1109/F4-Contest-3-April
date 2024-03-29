"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("./actionTypes");

var _redux = require("redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  loading: true,
  data: [],
  error: ""
};

var dataReducer = function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.FETCH_DATA_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actionTypes.FETCH_DATA_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        data: action.payload
      });

    case _actionTypes.FETCH_DATA_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
};

var rootReducers = (0, _redux.combineReducers)({
  data: dataReducer
});
var _default = rootReducers;
exports["default"] = _default;