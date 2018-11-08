import React, { Component } from "react";
import { connect } from "react-redux";
import formHoc from "egov-ui-kit/hocs/form";
import AddComplaintForm from "./components/AddComplaintForm";
import { Screen } from "modules/common";
import { handleFieldChange } from "egov-ui-kit/redux/form/actions";
import "./index.css";

const ComplaintFormHOC = formHoc({ formKey: "complaint" })(AddComplaintForm);

class AddComplaints extends Component {
  // componentWillReceiveProps = (nextProps) => {
  //   const { form, handleFieldChange } = this.props;
  //    if (form) {
  //const tenantId = JSON.parse(localStorage.getItem("user-info")).tenantId;
  //   // if (nextProps.currentLocation && nextProps.currentLocation.address) {
  //   //   const { lat, lng, address } = nextProps.currentLocation;
  //   //   handleFieldChange("complaint", "latitude", lat);
  //   //   handleFieldChange("complaint", "longitude", lng);
  //   //   handleFieldChange("complaint", "address", address);
  //   // }
  //handleFieldChange("complaint", "city", tenantId);
  //}
  //};

  render() {
    const { categories, localizationLabels } = this.props;
    return (
      <Screen>
        <ComplaintFormHOC categories={categories} localizationLabels={localizationLabels} history={this.props.history} />
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { localizationLabels } = state.app;
  const form = state.form["complaint"];
  const categories = state.complaints.categoriesById;
  return { categories, localizationLabels, form };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFieldChange: (formKey, fieldKey, value) => dispatch(handleFieldChange(formKey, fieldKey, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComplaints);
