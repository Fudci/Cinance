const initialState = {
  countryPhone: {
    name: 'Indonesia',
    dial_code: '+62',
    emoji: '🇮🇩',
    code: 'ID',
  },
};

const PhoneCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_COUNTRY_PHONE':
      return {
        ...state,
        countryPhone: action.payload,
      };
    case 'CLEAR_DATA_COUNTRY_PHONE':
      console.log(action, 'dd');
      return {
        ...state,
        countryPhone: {
          name: 'Indonesia',
          dial_code: '+62',
          emoji: '🇮🇩',
          code: 'ID',
        },
      };
    default:
      return state;
  }
};

export default PhoneCountryReducer;
