import initialState from "../store/initialState";

export const ProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    // case Actions.SIGN_IN:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // case Actions.SIGN_OUT:
    //   return {
    //     ...action.payload,
    //   };
    default:
      return state;
  }
};
