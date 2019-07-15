"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applicantDetails = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _actions = require("egov-ui-framework/ui-redux/screen-configuration/actions");

var _utils2 = require("../../utils");

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showComponent = function showComponent(dispatch, componentJsonPath, display) {
  var displayProps = display ? {} : { display: "none" };
  dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", componentJsonPath, "props.style", displayProps));
};

var commonApplicantInformation = function commonApplicantInformation() {
  return (0, _utils.getCommonGrayCard)({
    header: (0, _utils.getCommonSubHeader)({
      labelName: "Applicant Information",
      labelKey: "NOC_APPLICANT_INFORMATION_SUBHEADER"
    }, {
      style: {
        marginBottom: 18
      }
    }),
    applicantCard: (0, _utils.getCommonContainer)({
      mobileNumber: (0, _utils.getTextField)({
        label: {
          labelName: "Mobile No.",
          labelKey: "NOC_APPLICANT_MOBILE_NO_LABEL"
        },
        placeholder: {
          labelName: "Enter Mobile No.",
          labelKey: "NOC_ENTER_APPLICANT_MOBILE_NO_PLACEHOLDER"
        },
        required: true,
        title: {
          value: "Please search profile linked to the mobile no.",
          key: "NOC_APPLICANT_MOBILE_NO_TOOLTIP_MESSAGE"
        },
        infoIcon: "info_circle",
        pattern: (0, _utils.getPattern)("MobileNo"),
        errorMessage: "Invalid Mobile No.",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].mobileNumber",
        iconObj: {
          iconName: "search",
          position: "end",
          color: "#FE7A51",
          onClickDefination: {
            action: "condition",
            callBack: function callBack(state, dispatch, fieldInfo) {
              (0, _utils2.getDetailsForOwner)(state, dispatch, fieldInfo);
            }
          }
        },
        // props: {
        //   style: {
        //     maxWidth: "450px"
        //   }
        // },
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      dummyDiv: {
        uiFramework: "custom-atoms",
        componentPath: "Div",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        },
        props: {
          disabled: true
        }
      },
      applicantName: (0, _utils.getTextField)({
        label: {
          labelName: "Name",
          labelKey: "NOC_APPLICANT_NAME_LABEL"
        },
        placeholder: {
          labelName: "Enter Name",
          labelKey: "NOC_ENTER_APPLICANT_NAME_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("Name"),
        errorMessage: "Invalid Name",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].name",
        // props: {
        //   style: {
        //     maxWidth: "400px"
        //   }
        // },
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      genderRadioGroup: {
        uiFramework: "custom-containers",
        componentPath: "RadioGroupContainer",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].gender",
        props: {
          label: { name: "Gender", key: "NOC_GENDER_LABEL" },
          buttons: [{
            labelName: "Male",
            labelKey: "NOC_GENDER_MALE_RADIOBUTTON",
            value: "MALE"
          }, {
            labelName: "FEMALE",
            labelKey: "NOC_GENDER_FEMALE_RADIOBUTTON",
            value: "FEMALE"
          }, {
            labelName: "Transgender",
            labelKey: "NOC_GENDER_TRANSGENDER_RADIOBUTTON",
            value: "TRANSGENDER"
          }],
          jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].gender"
          // required: true
        },
        type: "array"
      },
      applicantDob: (0, _utils.getDateField)({
        label: {
          labelName: "Date Of Birth",
          labelKey: "NOC_APPLICANT_DOB_LABEL"
        },
        placeholder: {
          labelName: "DD/MM/YYYY",
          labelKey: "NOC_ENTER_APPLICANT_DOB_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("Date"),
        errorMessage: "Invalid Date",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].dob",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      applicantEmail: (0, _utils.getTextField)({
        label: {
          labelName: "Email",
          labelKey: "NOC_APPLICANT_EMAIL_LABEL"
        },
        placeholder: {
          labelName: "Enter Email",
          labelKey: "NOC_ENTER_APPLICANT_EMAIL_PLACEHOLDER"
        },
        pattern: (0, _utils.getPattern)("Email"),
        errorMessage: "Invalid Email",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].emailId",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      fatherHusbandName: (0, _utils.getTextField)({
        label: {
          labelName: "Father/Husband's Name",
          labelKey: "NOC_APPLICANT_FATHER_HUSBAND_NAME_LABEL"
        },
        placeholder: {
          labelName: "Enter Father/Husband's Name",
          labelKey: "NOC_APPLICANT_FATHER_HUSBAND_NAME_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("Name"),
        errorMessage: "Invalid Name",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].fatherOrHusbandName",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      relationshipRadioGroup: {
        uiFramework: "custom-containers",
        componentPath: "RadioGroupContainer",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].relationship",
        props: {
          label: {
            name: "Relationship",
            key: "NOC_APPLICANT_RELATIONSHIP_LABEL"
          },
          buttons: [{
            labelName: "Father",
            labelKey: "NOC_APPLICANT_RELATIONSHIP_FATHER_RADIOBUTTON",
            value: "FATHER"
          }, {
            label: "Husband",
            labelKey: "NOC_APPLICANT_RELATIONSHIP_HUSBAND_RADIOBUTTON",
            value: "HUSBAND"
          }],
          jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].relationship",
          required: true
        },
        required: true,
        type: "array"
      },
      applicantPan: (0, _utils.getTextField)({
        label: {
          labelName: "PAN No.",
          labelKey: "NOC_APPLICANT_PAN_LABEL"
        },
        placeholder: {
          labelName: "Enter Applicant's PAN No.",
          labelKey: "NOC_ENTER_APPLICANT_PAN_PLACEHOLDER"
        },
        pattern: (0, _utils.getPattern)("PAN"),
        errorMessage: "Invalid PAN",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].pan",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      applicantAddress: (0, _utils.getTextField)({
        label: {
          labelName: "Correspondence Address",
          labelKey: "NOC_APPLICANT_CORRESPONDENCE_ADDRESS_LABEL"
        },
        placeholder: {
          labelName: "Enter Correspondence Address",
          labelKey: "NOC_ENTER_APPLICANT_CORRESPONDENCE_ADDRESS_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("Address"),
        errorMessage: "Invalid Address",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].correspondenceAddress",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      specialApplicantCategory: (0, _utils.getSelectField)({
        label: {
          labelName: "Special Applicant Category",
          labelKey: "NOC_SPECIAL_APPLICANT_CATEGORY_LABEL"
        },
        placeholder: {
          labelName: "Select Special Applicant Category",
          labelKey: "NOC_SPECIAL_APPLICANT_CATEGORY_PLACEHOLDER"
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].ownerType",
        // data: [
        //   {
        //     code: "A"
        //   },
        //   {
        //     code: "B"
        //   }
        // ],
        localePrefix: {
          moduleName: "common-masters",
          masterName: "OwnerType"
        },
        sourceJsonPath: "applyScreenMdmsData.common-masters.OwnerType",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      })
    })
  });
};

var institutionInformation = function institutionInformation() {
  return (0, _utils.getCommonGrayCard)({
    header: (0, _utils.getCommonSubHeader)({
      labelName: "Applicant Information",
      labelKey: "NOC_APPLICANT_INFORMATION_SUBHEADER"
    }, {
      style: {
        marginBottom: 18
      }
    }),
    applicantCard: (0, _utils.getCommonContainer)({
      institutionName: (0, _utils.getTextField)({
        label: {
          labelName: "Name of Institution",
          labelKey: "NOC_INSTITUTION_LABEL"
        },
        placeholder: {
          labelName: "Enter Name of Institution",
          labelKey: "NOC_ENTER_INSTITUTION_PLACEHOLDER"
        },
        pattern: (0, _utils.getPattern)("Name"),
        errorMessage: "Invalid Name",
        required: true,
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.institutionName",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      telephoneNumber: (0, _utils.getTextField)({
        label: {
          labelName: "Official Telephone No.",
          labelKey: "NOC_TELEPHONE_NUMBER_LABEL"
        },
        placeholder: {
          labelName: "Enter Official Telephone No.",
          labelKey: "NOC_ENTER_TELEPHONE_NUMBER_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("MobileNo"),
        errorMessage: "Invalid Number",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.telephoneNumber",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      authorisedPerson: (0, _utils.getTextField)({
        label: {
          labelName: "Name of Authorized Person",
          labelKey: "NOC_AUTHORIZED_PERSON_LABEL"
        },
        placeholder: {
          labelName: "Enter Name of Authorized Person",
          labelKey: "NOC_ENTER_AUTHORIZED_PERSON_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("Name"),
        errorMessage: "Invalid Name",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.authorizedPerson",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      designation: (0, _utils.getTextField)({
        label: {
          labelName: "Designation in Institution",
          labelKey: "NOC_INSTITUTION_DESIGNATION_LABEL"
        },
        placeholder: {
          labelName: "Enter designation of Institution",
          labelKey: "NOC_ENTER_INSTITUTION_DESIGNATION_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("Name"),
        errorMessage: "Invalid Designation Name",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.institutionDesignation",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      authorizedPersonMobile: (0, _utils.getTextField)({
        label: {
          labelName: "Mobile No. of Authorized Person",
          labelKey: "NOC_AUTHORIZED_PERSON_MOBILE_LABEL"
        },
        placeholder: {
          labelName: "Enter Mobile No. of Authorized Person",
          labelKey: "NOC_AUTHORIZED_PERSON_MOBILE_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("MobileNo"),
        errorMessage: "Invalid MobileNo.",

        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.authorizedPersonMobile",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      authorizedPersonEmail: (0, _utils.getTextField)({
        label: {
          labelName: "Email of Authorized Person",
          labelKey: "NOC_AUTHORIZED_PERSON_EMAIL_LABEL"
        },
        placeholder: {
          labelName: "Enter Email of Authorized Person",
          labelKey: "NOC_AUTHORIZED_PERSON_EMAIL_PLACEHOLDER"
        },
        pattern: (0, _utils.getPattern)("Email"),
        errorMessage: "Invalid Email",
        required: true,
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.authorizedPersonEmail",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }),
      officialCorrespondenceAddress: (0, _utils.getTextField)({
        label: {
          labelName: "Official Correspondence Address",
          labelKey: "NOC_OFFICIAL_CORRESPONDENCE_ADDRESS_LABEL"
        },
        placeholder: {
          labelName: "Enter Official Correspondence Address ",
          labelKey: "NOC_ENTER_OFFICIAL_CORRESPONDENCE_ADDRESS_PLACEHOLDER"
        },
        required: true,
        pattern: (0, _utils.getPattern)("Address"),
        errorMessage: "Invalid Address",
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.officialCorrespondenceAddress",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      })
    })
  });
};

var applicantDetails = exports.applicantDetails = (0, _utils.getCommonCard)({
  header: (0, _utils.getCommonTitle)({
    labelName: "Applicant Details",
    labelKey: "NOC_APPLICANT_DETAILS_HEADER"
  }, {
    style: {
      marginBottom: 18
    }
  }),
  break: (0, _utils.getBreak)(),
  applicantTypeContainer: (0, _utils.getCommonContainer)({
    applicantTypeSelection: (0, _utils.getCommonContainer)({
      applicantType: (0, _extends3.default)({}, (0, _utils.getSelectField)({
        label: {
          labelName: "Applicant Type",
          labelKey: "NOC_APPLICANT_TYPE_LABEL"
        },
        placeholder: {
          labelName: "Select Applicant Type",
          labelKey: "NOC_APPLICANT_TYPE_PLACEHOLDER"
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.ownerShipMajorType",
        localePrefix: {
          moduleName: "common-masters",
          masterName: "OwnerShipCategory"
        },
        // data: [
        //   {
        //     code: "Individual"
        //   },
        //   {
        //     code: "Multiple"
        //   },
        //   {
        //     code: "Institutional-Private"
        //   }
        // ],
        required: true,
        sourceJsonPath: "applyScreenMdmsData.DropdownsData.OwnershipCategory",
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }), {
        beforeFieldChange: function beforeFieldChange(action, state, dispatch) {
          var path = action.componentJsonpath.replace(/.applicantType$/, ".applicantSubType");
          var applicantType = (0, _get2.default)(state, "screenConfiguration.preparedFinalObject.applyScreenMdmsData.common-masters.OwnerShipCategory", []);
          var applicantSubType = applicantType.filter(function (item) {
            return item.active && item.code.startsWith(action.value);
          });
          dispatch((0, _actions.handleScreenConfigurationFieldChange)("apply", path, "props.data", applicantSubType));
        }
      }),
      applicantSubType: (0, _extends3.default)({}, (0, _utils.getSelectField)({
        label: {
          labelName: "Type of Applicant - Subtype",
          labelKey: "NOC_APPLICANT_SUBTYPE_LABEL"
        },
        placeholder: {
          labelName: "Select Applicant Subtype",
          labelKey: "NOC_APPLICANT_SUBTYPE_PLACEHOLDER"
        },
        jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.ownerShipType",
        localePrefix: {
          moduleName: "common-masters",
          masterName: "OwnerShipCategory"
        },
        // data: [
        //   {
        //     code: "Private Company"
        //   }
        // ],
        // props: {
        //   style: {
        //     display: "none"
        //   }
        // },
        required: true,
        gridDefination: {
          xs: 12,
          sm: 12,
          md: 6
        }
      }), {
        beforeFieldChange: function beforeFieldChange(action, state, dispatch) {
          var singleApplicantContainerJsonPath = "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.singleApplicantContainer";
          var multipleApplicantContainerJsonPath = "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.multipleApplicantContainer";
          var institutionContainerJsonPath = "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.institutionContainer";
          // let applicantSubtypeJsonPath =
          //   "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.applicantSubType";
          if (action.value.includes("SINGLEOWNER")) {
            showComponent(dispatch, singleApplicantContainerJsonPath, true);
            showComponent(dispatch, multipleApplicantContainerJsonPath, false);
            showComponent(dispatch, institutionContainerJsonPath, false);
            // showComponent(dispatch, applicantSubtypeJsonPath, false);
          } else if (action.value.includes("MULTIPLEOWNERS")) {
            showComponent(dispatch, singleApplicantContainerJsonPath, false);
            showComponent(dispatch, multipleApplicantContainerJsonPath, true);
            showComponent(dispatch, institutionContainerJsonPath, false);
            // showComponent(dispatch, applicantSubtypeJsonPath, false);
          } else if (action.value.includes("INSTITUTIONAL")) {
            showComponent(dispatch, singleApplicantContainerJsonPath, false);
            showComponent(dispatch, multipleApplicantContainerJsonPath, false);
            showComponent(dispatch, institutionContainerJsonPath, true);
            // showComponent(dispatch, applicantSubtypeJsonPath, true);
          }
        }
      })
    }),
    singleApplicantContainer: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children: {
        individualApplicantInfo: commonApplicantInformation()
      }
    },
    multipleApplicantContainer: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        style: {
          display: "none"
        }
      },
      children: {
        multipleApplicantInfo: {
          uiFramework: "custom-containers",
          componentPath: "MultiItem",
          props: {
            scheama: commonApplicantInformation(),
            items: [],
            addItemLabel: {
              labelName: "Add Applicant",
              labelKey: "NOC_ADD_APPLICANT_LABEL"
            },
            sourceJsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners",
            prefixSourceJsonPath: "children.cardContent.children.applicantCard.children"
          },
          type: "array"
        }
      }
    },
    institutionContainer: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        style: {
          display: "none"
        }
      },
      children: {
        institutionInfo: institutionInformation()
      }
    }
  })
});