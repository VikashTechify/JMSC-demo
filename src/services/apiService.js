import axios from "axios";
const BASE_URL =
  "https://api.fiscaldata.treasury.gov/services/api/fiscal_service";

const getRequest = (uri, params, apiUrl = BASE_URL) => {
  let requestParams = {};
  let uriWithParams = uri;
  if (params && Object.keys(params).length > 0) {
    requestParams = { ...params };
    uriWithParams = `${apiUrl}/${uri}?${Object.keys(requestParams)
      .map((key) => `${key}=${requestParams[key]}`)
      .join("&")}`;
  }

  return axios.get(uriWithParams);
};

export default getRequest;
