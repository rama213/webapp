import { updateComplaintStatus } from "./common.js";

const viewModelToBusinessModelTransformer = (form, state) => {
  const serviceRequestId = decodeURIComponent(window.location.pathname.split("/").pop());
  const rating = form.fields.rating.value;
  const complaint = state.complaints.byId[serviceRequestId];
  const finalForm = updateComplaintStatus(form, complaint);
  return finalForm;
  }
};

export default {
  viewModelToBusinessModelTransformer,
};
