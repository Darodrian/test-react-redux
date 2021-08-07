export const BUY_SUBSTRATUM = "BUY_SUBSTRATUM";
export const RETURN_SUBSTRATUM = "RETURN_SUBSTRATUM";

export const buy_substratum_action = (quantity) => {
  return {
    type: BUY_SUBSTRATUM,
    payload: quantity,
  };
};

export const return_substratum_action = (quantity) => {
  return {
    type: RETURN_SUBSTRATUM,
    payload: quantity,
  };
};
