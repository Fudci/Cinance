const initialState = {
  Assets: [],
  Markets: [],
  PriceLow: [],
  PriceHigh: [],
  Change24HLow: [],
  Change24HHigh: [],
};

const PhoneCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_ASSETS_COIN':
      return {
        ...state,
        Assets: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_MARKET':
      return {
        ...state,
        Markets: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_PRICELOW':
      return {
        ...state,
        PriceLow: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_PRICEHIGH':
      return {
        ...state,
        PriceHigh: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_24HLOW':
      return {
        ...state,
        Change24HLow: action.payload,
      };
    case 'SET_DATA_ASSETS_COIN_24HHIGH':
      return {
        ...state,
        Change24HLow: action.payload,
      };
    case 'CLEAR_DATA_ASSETS_COIN':
      return {
        ...state,
        Assets: [],
      };
    default:
      return state;
  }
};

export default PhoneCountryReducer;
