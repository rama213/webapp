import axios from "axios";
import { prepareFormData, hyphenSeperatedDateTime, getRequestUrl, fetchFromLocalStorage, addQueryArg } from "./commons";

const authToken = fetchFromLocalStorage("token");
// const userInfo = JSON.parse(fetchFromLocalStorage("userRequest"));
const tenantId = fetchFromLocalStorage("tenantId");

const instance = axios.create({
  baseURL: window.location.origin,
  headers: {
    "Content-Type": "application/json",
  },
});

const wrapRequestBody = (requestBody, action) => {
  const RequestInfo = {
    apiId: "Rainmaker",
    ver: ".01",
    ts: "2018-03-29 11:12:12",
    // hyphenSeperatedDateTime(new Date()),
    action: action,
    did: "1",
    key: "",
    msgId: "20170310130900|en_IN",
    requesterId: "",
    // userInfo,
    authToken,
  };

  return Object.assign({}, { RequestInfo }, requestBody);
};

export const httpRequest = async (endPoint, action, queryObject = [], requestBody = {}) => {
  let apiError = "Api Error";
  queryObject.push({ key: "tenantId", value: tenantId });
  endPoint = addQueryArg(endPoint, queryObject);
  try {
    const response = await instance.post(endPoint, wrapRequestBody(requestBody, action));
    const responseStatus = parseInt(response.status, 10);
    if (responseStatus === 200 || responseStatus === 201) {
      return response.data;
    } else {
      apiError = response.hasOwnProperty("Errors") && response.Errors.length ? response.Errors[0].message : apiError;
    }
  } catch (error) {
    apiError = error;
  }
  throw new Error(apiError);
};
