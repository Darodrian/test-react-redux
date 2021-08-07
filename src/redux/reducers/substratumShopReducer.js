import {
  BUY_SUBSTRATUM,
  RETURN_SUBSTRATUM,
} from "../actions/substratumShopAction";

const default_substratum_shop = {
  substratum: 20,
};

const substratum_shop = (state = default_substratum_shop, action) => {
  switch (action.type) {
    case BUY_SUBSTRATUM: {
      return {
        ...state,
        substratum: state.substratum - action.payload,
      };
    }
    case RETURN_SUBSTRATUM: {
      return {
        ...state,
        substratum: state.substratum + action.payload,
      };
    }
    default:
      return state;
  }
};

export default substratum_shop;
