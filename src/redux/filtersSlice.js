const initialState = {
  name: "",
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/search":
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};
