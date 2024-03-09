// someReducer.js

const initialState = {
  remainingDataChat: null,
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOME_DATA':
      return {
        ...state,
        someData: action.payload,
      };
    case 'CLEAR_SOME_DATA':
      return {
        ...state,
        someData: null,
      };
    default:
      return state;
  }
};

export default ChatReducer;
