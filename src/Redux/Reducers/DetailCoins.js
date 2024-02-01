const initialState = {
  D1: [],
  H12: [],
  H6: [],
  H2: [],
  H1: [],
};

const DetailCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_ASSETS_COIN_HISTORY_D1':
      return {
        ...state,
        D1: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H12':
      return {
        ...state,
        H12: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H6':
      return {
        ...state,
        H6: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H2':
      return {
        ...state,
        H2: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_MARKET_HISTORY_H1':
      return {
        ...state,
        H1: action.payload,
      };
    case 'CLEAR_DATA_ASSETS_COIN_HISTORY':
      return {
        ...state,
        D1: [],
        H12: [],
        H6: [],
        H2: [],
        H1: [],
      };
    default:
      return state;
  }
};

export default DetailCoinReducer;
