import {
  getCommonGrayCard,
  getCommonSubHeader
} from "egov-ui-framework/ui-config/screens/specs/utils";
import { cash, demandDraft, cheque, card } from "./paymentMethod";

export const capturePayment = getCommonGrayCard({
  header: getCommonSubHeader(
    { labelName: "Capture Payment", labelKey: "ABG_PAYMENT_CAPTURE_PAYMENT" },
    {
      style: {
        marginBottom: "8px"
      }
    }
  ),
  tabSection: {
    uiFramework: "custom-containers",
    moduleName: "egov-abg",
    componentPath: "CustomTabContainer",
    props: {
      tabs: [
        {
          tabButton: { labelName: "CASH", labelKey: "ABG_PAYMENT_CASH" },
          tabIcon: "Dashboard",
          tabContent: { cash }
        },
        {
          tabButton: { labelName: "CHEQUE", labelKey: "ABG_PAYMENT_CHEQUE" },
          tabIcon: "Schedule",
          tabContent: { cheque }
        },
        {
          tabButton: { labelName: "DD", labelKey: "ABG_PAYMENT_DD" },
          tabIcon: "Schedule",
          tabContent: { demandDraft }
        },
        {
          tabButton: {
            labelName: "Credit/Debit Card",
            labelKey: "ABG_PAYMENT_DEBT_CARD"
          },
          tabIcon: "Schedule",
          tabContent: { card }
        }
      ]
    },
    type: "array"
  }
});

export default capturePayment;
