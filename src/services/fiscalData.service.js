import getRequest from "./apiService";

export const fetchFiscalDataAsync = (
  params = { "page[number]": 1, "page[size]": 10 }
) => {
  return getRequest(`/v1/debt/top/top_state`, params);
};
