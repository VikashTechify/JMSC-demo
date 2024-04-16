export const FETCH_FISCAL_DATA = "FETCH_FISCAL_DATA";

export const fetchFiscalData = (payload) => {
  return {
    type: FETCH_FISCAL_DATA,
    payload,
  };
};
