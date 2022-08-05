/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case "ADD_WEB3_PROVIDER":
      const { provider, signer, accounts, Contract } = action.payload;
      return {
        ...state,
        provider,
        signer,
        accounts,
        Contract
      };
    case "ADD_ISSUER_DATA":
      const { issuerData } = action.payload;
      return {
        ...state,
        issuerData
      };
    case "ADD_USER_DATA":
      const { userData } = action.payload;
      return {
        ...state,
        userData
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "SET_USER_TYPE":
      const { userType } = action.payload;
      return {
        ...state,
        userType
      };
    default:
      return state;
  }
};
