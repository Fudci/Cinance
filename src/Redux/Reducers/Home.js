// someReducer.js

const initialState = {
  homeSync: {},
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HOME_SUCCESS':
      return {
        ...state,
        homeSync: action.payload,
      };
    case 'HOME_FAILED':
      return {
        ...state,
        homeSync: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
