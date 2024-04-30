import { ERROR_500_SERVER, ERROR_DATA_EMPTY } from '../actionsType';

const initialState = {
  serverError: {
    isServerError: false,
    serverErorrMessage: '',
  },
  emptyData: {
    isEmpty: false,
    message: '',
  },
};

export const errorReduser = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_500_SERVER: {
      return {
        ...state,
        serverError: {
          isServerError: true,
          serverErorrMessage: action.error,
        },
      };
    }
    case ERROR_DATA_EMPTY: {
      return {
        ...state,
        emptyData: {
          isEmpty: true,
          message: action.error,
        },
      };
    }
    default:
      return state;
  }
};
