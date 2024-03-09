// someReducer.js

const initialState = {
  NotifDataALL: [],
  NotifDataInformasi: [],
  NotifDataPerkerjaan: [],
};

const NotifReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIF_SUCCESS':
      return {
        ...state,
        NotifDataALL: action.payload,
      };
    case 'NOTIF_FAILED':
      return {
        ...state,
        NotifDataALL: [],
      };
    case 'NOTIF_SUCCESS_INFORMATION':
      return {
        ...state,
        NotifDataInformasi: action.payload,
      };
    case 'NOTIF_FAILED_INFORMATION':
      return {
        ...state,
        NotifDataInformasi: [],
      };
    case 'NOTIF_SUCCESS_WORK':
      return {
        ...state,
        NotifDataPerkerjaan: action.payload,
      };
    case 'NOTIF_FAILED_WORK':
      return {
        ...state,
        NotifDataPerkerjaan: [],
      };
    default:
      return state;
  }
};

export default NotifReducer;
