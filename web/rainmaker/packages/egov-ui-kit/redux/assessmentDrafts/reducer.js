"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require("./actionTypes");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _commons = require("egov-ui-kit/utils/commons");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergeServiceWithActions = function mergeServiceWithActions(payload) {
  return payload.actionHistory.map(function (item, index) {
    return (0, _extends3.default)({}, payload.services[index], {
      actions: payload.actionHistory[index].actions
    });
  });
};

var intialState = {
  loading: false,
  error: false,
  errorMessage: "",
  byId: {},
  categoriesById: {}
};

var complaintsReducer = function complaintsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;
  var action = arguments[1];
  var type = action.type,
      overWrite = action.overWrite;


  switch (type) {
    case actionTypes.ASSESSMENT_FETCH_PENDING:
      return (0, _extends3.default)({}, state, {
        loading: true,
        error: false,
        fetchSuccess: false,
        errorMessage: ""
      });
    case actionTypes.ASSESSMENT_FETCH_COMPLETE:
      var draftsById = action.payload;
      return (0, _extends3.default)({}, state, {
        loading: false,
        fetchSuccess: true,
        byId: overWrite ? (0, _extends3.default)({}, draftsById) : (0, _extends3.default)({}, state.byId, draftsById)
      });
    case actionTypes.ASSESSMENT_FETCH_ERROR:
      return (0, _extends3.default)({}, state, {
        loading: false,
        fetchSuccess: true,
        error: true,
        errorMessage: action.error
      });
    default:
      return state;
  }
};

exports.default = complaintsReducer;