import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "modules/common/Banner";
import NewAndOldComplaints from "./components/NewAndOldComplaints";
import Notifications from "./components/Notifications";
import { fetchComplaints } from "redux/complaints/actions";
import { setRoute } from "redux/app/actions";
import { getDateFromEpoch, mapCompIDToName, transformById } from "utils/commons";
import "./index.css";

class Home extends Component {
  componentDidMount = () => {
    let { fetchComplaints } = this.props;
    fetchComplaints([]);
  };

  render() {
    const { setRoute, updates } = this.props;
    return (
      <Banner className="homepage-banner">
        <div className="col-lg-offset-2 col-md-offset-2 col-md-8 col-lg-8 home-page-content">
          <div className="row">
            <NewAndOldComplaints setRoute={setRoute} />
            <Notifications updates={updates} setRoute={setRoute} />
          </div>
        </div>
      </Banner>
    );
  }
}

const statusToMessageMapping = {
  new: "Opened",
  rejected: "Rejected",
  closed: "Closed",
  open: "Opened",
  "re-assign": "Re-assigned",
};

const displayDate = (rawData) => {
  let split = rawData.split("/");
  split.splice(split.length - 1, 1);
  return split.join("-");
};

const displayStatus = (status) => {
  return status ? statusToMessageMapping[status.toLowerCase()] : "";
};

const mapStateToProps = (state) => {
  const complaints = state.complaints || {};
  let updates = [];
  Object.keys(complaints.byId).forEach((complaintKey, index) => {
    let complaintObj = {};
    complaintObj.status = displayStatus(complaints.byId[complaintKey].status);
    complaintObj.title = mapCompIDToName(complaints.categoriesById, complaints.byId[complaintKey].serviceCode);
    complaintObj.date = getDateFromEpoch(complaints.byId[complaintKey].auditDetails.createdTime);
    complaintObj.number = complaintKey;
    updates.push(complaintObj);
  });
  return { updates };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComplaints: (criteria) => dispatch(fetchComplaints(criteria)),
    setRoute: (route) => dispatch(setRoute(route)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
