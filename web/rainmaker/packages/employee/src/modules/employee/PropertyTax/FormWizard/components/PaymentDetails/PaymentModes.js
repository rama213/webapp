import React, { Component } from "react";
import Label from "egov-ui-kit/utils/translationNode";
import get from "lodash/get";
import { connect } from "react-redux";
import { Card, Icon } from "components";
import { removeForm } from "egov-ui-kit/redux/form/actions";
import { setFieldProperty, handleFieldChange } from "egov-ui-kit/redux/form/actions";
import { toggleSnackbarAndSetText } from "egov-ui-kit/redux/app/actions";

class PaymentModes extends Component {
  // allFormkeys = ["demandInfo", "chequeInfo", "cardInfo", "cashInfo"];

  FormDetails = ({ item }) => {
    return (
      <div className="payment-filled-details">
        {item.forms.map((form, index) => {
          const { title, comp: TransactionForm, className } = form;
          return (
            <div className={className} key={index}>
              <span className="mode-title">{title}</span>
              <TransactionForm onIconClick={this.onIconClick} />
            </div>
          );
        })}
      </div>
    );
  };

  getListItems = (items) => {
    const { FormDetails } = this;
    items.map((item, index) => {
      const TransactionForm = item.form;
      return {
        primaryText: <Label label={item.primaryText} className="list-header" />,
        secondaryText: <Label label={item.secondaryText} />,
        route: item.route,
        nestedItems: [
          {
            secondaryText: <FormDetails item={item} />,
            disabled: true,
            listContainerStyle: { padding: 0 },
          },
        ],
      };
    });
  };
  onIconClick = () => {
    const { ifscCode, setFieldProperty, formKey, toggleSnackbarAndSetText, handleFieldChange } = this.props;
    if (ifscCode) {
      fetch(`https://ifsc.razorpay.com/${ifscCode}`)
        .then((response) => {
          return response.json();
        })
        .then((payload) => {
          if (payload === "Not Found") {
            handleFieldChange(formKey, "BankName", "");
            handleFieldChange(formKey, "BankBranch", "");
            toggleSnackbarAndSetText(true, `Bankdetails not found for this IFSC`, true);
          } else {
            setFieldProperty(formKey, "BankName", "hideField", false);
            setFieldProperty(formKey, "BankBranch", "hideField", false);
            const bankName = get(payload, "BANK");
            const bankBranch = get(payload, "BRANCH");
            handleFieldChange(formKey, "BankName", bankName);
            handleFieldChange(formKey, "BankBranch", bankBranch);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  getPaymentDetails = () => {
    const { FormDetails } = this;
    const { currentPaymentMode, paymentModeDetails, removeForm, form } = this.props;
    const paymentData = paymentModeDetails.find((paymentMode) => paymentMode.primaryText.toLowerCase() === currentPaymentMode.toLowerCase());
    return FormDetails({ item: paymentData });
  };
  render() {
    const { PaymentModeSelector } = this.props;
    return (
      <Card
        textChildren={
          <div className="payment-modes">
            <div className="payment-mode-header-cont rainmaker-displayInline" style={{ padding: "0 0 0 16px", alignItems: "center" }}>
              <Icon name="credit-card" action="action" />
              <Label label="Choose mode of Payment" fontSize={16} bold={true} dark={true} containerStyle={{ marginLeft: 8 }} />
            </div>
            <PaymentModeSelector />
            {this.getPaymentDetails()}
          </div>
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  const currentPaymentMode = (state && state.form && state.form.paymentModes && state.form.paymentModes.fields.mode.value) || "cash";
  const ifscCode = get(state, `form${currentPaymentMode === "Cheque" ? "[chequeInfo]" : "[demandInfo]"}.fields.ifscCode.value`);
  const formKey = currentPaymentMode === "Cheque" ? "chequeInfo" : "demandInfo";
  return { currentPaymentMode, ifscCode, formKey };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeForm: (formKey) => dispatch(removeForm(formKey)),
    setFieldProperty: (formKey, fieldKey, propertyName, propertyValue) => dispatch(setFieldProperty(formKey, fieldKey, propertyName, propertyValue)),
    toggleSnackbarAndSetText: (open, message, error) => dispatch(toggleSnackbarAndSetText(open, message, error)),
    handleFieldChange: (formKey, fieldKey, value) => dispatch(handleFieldChange(formKey, fieldKey, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentModes);
