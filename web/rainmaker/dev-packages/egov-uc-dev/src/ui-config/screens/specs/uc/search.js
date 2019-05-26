import {
  getCommonHeader,
  getLabel,
  getBreak
} from "egov-ui-framework/ui-config/screens/specs/utils";
import { UCSearchCard } from "./universalCollectionResources/ucSearch";
//   import { getQueryArg } from "egov-ui-framework/ui-utils/commons";
import { searchResults } from "./universalCollectionResources/searchResults";
import { prepareFinalObject } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import { httpRequest } from "../../../../ui-utils";
import { getQueryArg } from "egov-ui-framework/ui-utils/commons";

const header = getCommonHeader({
  labelName: "Universal Collection",
  labelKey: "UC_COMMON_HEADER"
});

const hasButton = getQueryArg(window.location.href, "hasButton");
let enableButton = true;
enableButton = hasButton && hasButton === "false" ? false : true;

const getData = async (action, state, dispatch) => {
  await getMDMSData(action, state, dispatch);
};

const getMDMSData = async (action, state, dispatch) => {
  const tenantId = "pb.amritsar";
  let mdmsBody = {
    MdmsCriteria: {
      tenantId: tenantId,
      moduleDetails: [
        {
          moduleName: "BillingService",
          masterDetails: [{ name: "BusinessService" }]
        }
      ]
    }
  };
  try {
    const payload = await httpRequest(
      "post",
      "/egov-mdms-service/v1/_search",
      "_search",
      [],
      mdmsBody
    );
    dispatch(prepareFinalObject("searchScreenMdmsData", payload.MdmsRes));
  } catch (e) {
    console.log(e);
  }
};

const ucSearchAndResult = {
  uiFramework: "material-ui",
  name: "search",
  beforeInitScreen: (action, state, dispatch) => {
    getData(action, state, dispatch);
    return action;
  },
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Form",
      props: {
        className: "common-div-css",
        id: "universalCollection"
      },
      children: {
        headerDiv: {
          uiFramework: "custom-atoms",
          componentPath: "Container",

          children: {
            header: {
              gridDefination: {
                xs: 12,
                sm: 6
              },
              ...header
            },
            newApplicationButton: {
              componentPath: "Button",
              gridDefination: {
                xs: 12,
                sm: 6,
                align: "right"
              },
              visible: enableButton,
              props: {
                variant: "contained",
                color: "primary",
                style: {
                  color: "white",
                  borderRadius: "2px",
                  width: "250px",
                  height: "48px"
                }
              },

              children: {
                plusIconInsideButton: {
                  uiFramework: "custom-atoms",
                  componentPath: "Icon",
                  props: {
                    iconName: "add",
                    style: {
                      fontSize: "24px"
                    }
                  }
                },

                buttonLabel: getLabel({
                  labelName: "NEW COLLECTION",
                  labelKey: "UC_SEARCH_RESULTS_NEW_COLLECTION_BUTTON"
                })
              },
              onClickDefination: {
                action: "page_change",
                path:
                  process.env.REACT_APP_SELF_RUNNING === "true"
                    ? `/egov-ui-framework/uc/newCollection`
                    : `/uc/newCollection`
              },
            }
          }
        },
        UCSearchCard,
        breakAfterSearch: getBreak(),
        searchResults
      }
    }
  }
};

export default ucSearchAndResult;