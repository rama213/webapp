"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cash = exports.card = exports.cardDetails = exports.demandDraft = exports.demandDraftDetails = exports.cheque = exports.chequeDetails = exports.payeeDetails = undefined;

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _actions = require("egov-ui-framework/ui-redux/screen-configuration/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onIconClick = function onIconClick(state, dispatch, index) {
  var ifscCode = (0, _get2.default)(state.screenConfiguration.preparedFinalObject, "ReceiptTemp[0].instrument.ifscCode");
  if (ifscCode) {
    dispatch((0, _actions.toggleSpinner)());
    fetch("https://ifsc.razorpay.com/" + ifscCode).then(function (response) {
      return response.json();
    }).then(function (payload) {
      if (payload === "Not Found") {
        dispatch((0, _actions.prepareFinalObject)("ReceiptTemp[0].instrument.bank.name", ""));
        dispatch((0, _actions.prepareFinalObject)("ReceiptTemp[0].instrument.branchName", ""));
        dispatch((0, _actions.toggleSnackbar)(true, {
          labelName: "Bankdetails not found for this IFSC",
          labelKey: "ERR_BANK_DETAILS_NOT_FOUND_FOR_IFSC"
        }, "error"));
        dispatch((0, _actions.toggleSpinner)());
      } else {
        var bankName = (0, _get2.default)(payload, "BANK");
        var bankBranch = (0, _get2.default)(payload, "BRANCH");
        dispatch((0, _actions.prepareFinalObject)("ReceiptTemp[0].instrument.bank.name", bankName));
        dispatch((0, _actions.prepareFinalObject)("ReceiptTemp[0].instrument.branchName", bankBranch));
        dispatch((0, _actions.toggleSpinner)());
      }
    }).catch(function (error) {
      console.log(error);
      dispatch((0, _actions.toggleSpinner)());
    });
  }
};

var payeeDetails = exports.payeeDetails = (0, _utils.getCommonContainer)({
  paidBy: (0, _utils.getSelectField)({
    label: {
      labelName: "Paid By",
      labelKey: "NOC_PAYMENT_PAID_BY_LABEL"
    },
    placeholder: {
      labelName: "Paid By",
      labelKey: "NOC_PAYMENT_PAID_BY_PLACEHOLDER"
    },
    data: [{
      code: "Owner"
    }, {
      code: "Others"
    }],
    jsonPath: "ReceiptTemp[0].Bill[0].payer",
    required: true
  }),
  payerName: (0, _utils.getTextField)({
    label: {
      labelName: "Payer Name",
      labelKey: "NOC_PAYMENT_PAYER_NAME_LABEL"
    },
    placeholder: {
      labelName: "Enter Payer Name",
      labelKey: "NOC_PAYMENT_PAYER_NAME_PLACEHOLDER"
    },
    jsonPath: "ReceiptTemp[0].Bill[0].paidBy",
    required: true
  }),
  payerMobileNo: (0, _utils.getTextField)({
    label: {
      labelName: "Payer Mobile No.",
      labelKey: "NOC_PAYMENT_PAYER_MOB_LABEL"
    },
    placeholder: {
      labelName: "Enter Payer Mobile No.",
      labelKey: "NOC_PAYMENT_PAYER_MOB_PLACEHOLDER"
    },
    jsonPath: "ReceiptTemp[0].Bill[0].payerMobileNumber",
    pattern: (0, _utils.getPattern)("MobileNo"),
    errorMessage: "Invalid Mobile No.",
    iconObj: {
      position: "start",
      label: "+91 |"
    },
    required: true
  })
});

var chequeDetails = exports.chequeDetails = (0, _utils.getCommonContainer)({
  chequeNo: (0, _utils.getTextField)({
    label: {
      labelName: "Cheque No",
      labelKey: "NOC_PAYMENT_CHQ_NO_LABEL"
    },
    placeholder: {
      labelName: "Enter Cheque  no.",
      labelKey: "NOC_PAYMENT_CHQ_NO_PLACEHOLDER"
    },
    //Pattern validation for Cheque number
    jsonPath: "ReceiptTemp[0].instrument.transactionNumber",
    required: true
  }),
  chequeDate: (0, _utils.getDateField)({
    label: {
      labelName: "Cheque Date",
      labelKey: "NOC_PAYMENT_CHEQUE_DATE_LABEL"
    },
    placeholder: {
      labelName: "dd/mm/yy",
      labelKey: "NOC_PAYMENT_CHEQUE_DATE_PLACEHOLDER"
    },
    required: true,
    jsonPath: "ReceiptTemp[0].instrument.transactionDateInput"
  }),
  chequeIFSC: (0, _utils.getTextField)({
    label: {
      labelName: "IFSC",
      labelKey: "NOC_PAYMENT_IFSC_CODE_LABEL"
    },
    placeholder: {
      labelName: "Enter bank IFSC",
      labelKey: "NOC_PAYMENT_IFSC_CODE_PLACEHOLDER"
    },
    required: true,
    jsonPath: "ReceiptTemp[0].instrument.ifscCode",
    iconObj: {
      iconName: "search",
      position: "end",
      color: "#FE7A51",
      onClickDefination: {
        action: "condition",
        callBack: function callBack(state, dispatch) {
          onIconClick(state, dispatch, 1);
        }
      }
    }
  }),
  chequeBank: (0, _utils.getTextField)({
    label: {
      labelName: "Bank Name",
      labelKey: "NOC_PAYMENT_BANK_NAME_LABEL"
    },
    placeholder: {
      labelName: "Enter bank name",
      labelKey: "NOC_PAYMENT_BANK_NAME_PLACEHOLDER"
    },
    required: true,
    props: {
      disabled: true
    },
    jsonPath: "ReceiptTemp[0].instrument.bank.name"
  }),
  chequeBranch: (0, _utils.getTextField)({
    label: {
      labelName: "Bank Branch",
      labelKey: "NOC_PAYMENT_BANK_BRANCH_LABEL"
    },
    placeholder: {
      labelName: "Enter bank branch",
      labelKey: "NOC_PAYMENT_BANK_BRANCH_PLACEHOLDER"
    },
    required: true,
    props: {
      disabled: true
    },
    jsonPath: "ReceiptTemp[0].instrument.branchName"
  })
});

var cheque = exports.cheque = (0, _utils.getCommonContainer)({
  payeeDetails: payeeDetails,
  chequeDetails: chequeDetails
});

var demandDraftDetails = exports.demandDraftDetails = (0, _utils.getCommonContainer)({
  ddNo: (0, _utils.getTextField)({
    label: {
      labelName: "DD No",
      labelKey: "NOC_PAYMENT_DD_NO_LABEL"
    },
    placeholder: {
      labelName: "Enter DD  no.",
      labelKey: "NOC_PAYMENT_DD_NO_PLACEHOLDER"
    },
    required: true,
    //Pattern validation for DD no.
    jsonPath: "ReceiptTemp[0].instrument.transactionNumber"
  }),
  ddDate: (0, _utils.getDateField)({
    label: { labelName: "DD Date", labelKey: "NOC_PAYMENT_DD_DATE_LABEL" },
    placeholder: {
      labelName: "dd/mm/yy",
      labelKey: "NOC_PAYMENT_DD_DATE_PLACEHOLDER"
    },
    required: true,
    jsonPath: "ReceiptTemp[0].instrument.transactionDateInput"
  }),
  ddIFSC: (0, _utils.getTextField)({
    label: {
      labelName: "IFSC",
      labelKey: "NOC_PAYMENT_IFSC_CODE_LABEL"
    },
    placeholder: {
      labelName: "Enter bank IFSC",
      labelKey: "NOC_PAYMENT_IFSC_CODE_PLACEHOLDER"
    },
    required: true,
    jsonPath: "ReceiptTemp[0].instrument.ifscCode",
    iconObj: {
      iconName: "search",
      position: "end",
      color: "#FE7A51",
      onClickDefination: {
        action: "condition",
        callBack: function callBack(state, dispatch) {
          onIconClick(state, dispatch, 2);
        }
      }
    }
  }),
  ddBank: (0, _utils.getTextField)({
    label: {
      labelName: "Bank Name",
      labelKey: "NOC_PAYMENT_BANK_NAME_LABEL"
    },
    placeholder: {
      labelName: "Enter bank name",
      labelKey: "NOC_PAYMENT_BANK_NAME_PLACEHOLDER"
    },
    required: true,
    props: {
      disabled: true
    },
    jsonPath: "ReceiptTemp[0].instrument.bank.name"
  }),
  ddBranch: (0, _utils.getTextField)({
    label: {
      labelName: "Bank Branch",
      labelKey: "NOC_PAYMENT_BANK_BRANCH_LABEL"
    },
    placeholder: {
      labelName: "Enter bank branch",
      labelKey: "NOC_PAYMENT_BANK_BRANCH_PLACEHOLDER"
    },
    required: true,
    props: {
      disabled: true
    },
    jsonPath: "ReceiptTemp[0].instrument.branchName"
  })
});

var demandDraft = exports.demandDraft = (0, _utils.getCommonContainer)({
  payeeDetails: payeeDetails,
  demandDraftDetails: demandDraftDetails
});

var cardDetails = exports.cardDetails = (0, _utils.getCommonContainer)({
  last4Digits: (0, _utils.getTextField)({
    label: {
      labelName: "Last 4 digits",
      labelKey: "NOC_PAYMENT_CARD_LAST_DIGITS_LABEL"
    },
    placeholder: {
      labelName: "Enter Last 4 digits of the card",
      labelKey: "NOC_PAYMENT_CARD_LAST_DIGITS_LABEL_PLACEHOLDER"
    },
    required: true,
    jsonPath: "ReceiptTemp[0].instrument.instrumentNumber",
    pattern: "^([0-9]){4}$",
    errorMessage: "Invalid"
  }),
  TrxNo: (0, _utils.getTextField)({
    label: {
      labelName: "Transaction No.",
      labelKey: "NOC_PAYMENT_TRANS_NO_LABEL"
    },
    placeholder: {
      labelName: "Enter transaction no.",
      labelKey: "NOC_PAYMENT_TRANS_NO_PLACEHOLDER"
    },
    // Pattern validation for Transaction number
    required: true,
    jsonPath: "ReceiptTemp[0].instrument.transactionNumber"
  }),
  repeatTrxNo: (0, _utils.getTextField)({
    label: {
      labelName: "Re-Enter Transaction No.",
      labelKey: "NOC_PAYMENT_RENTR_TRANS_LABEL"
    },
    placeholder: {
      labelName: "Enter transaction no.",
      labelKey: "NOC_PAYMENT_TRANS_NO_PLACEHOLDER"
    },
    // Pattern validation for Transaction number
    required: true,
    jsonPath: "ReceiptTemp[0].instrument.transactionNumberConfirm"
  })
});

var card = exports.card = (0, _utils.getCommonContainer)({
  payeeDetails: payeeDetails,
  cardDetails: cardDetails
});

var cash = exports.cash = (0, _utils.getCommonContainer)({
  payeeDetails: payeeDetails
});