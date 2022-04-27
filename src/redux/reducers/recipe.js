const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SEARCH_RECIPE_PENDING":
      return { ...state, isLoading: true };
    case "GET_SEARCH_RECIPE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    case "GET_SEARCH_RECIPE_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_RECIPE_PENDING":
      return { ...state, isLoading: true };
    case "GET_USER_RECIPE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    case "GET_USER_RECIPE_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export const latestReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LATEST_RECIPE_PENDING":
      return { ...state, isLoading: true };
    case "GET_LATEST_RECIPE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    case "GET_LATEST_RECIPE_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL_RECIPE_PENDING":
      return { ...state, isLoading: true };
    case "GET_DETAIL_RECIPE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        // data: action.payload.data.data,
        data: {
          ...action.payload.data.data,
          ingredients: action.payload.data.data.ingredients.split("\n"),
        },
      };
    case "GET_DETAIL_RECIPE_REJECTED":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
