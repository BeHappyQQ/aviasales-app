import {
  ASYNC_ADD_TICKETS,
  FILTER_BEST_TICKETS,
  FILTER_TICKETS,
  LOADING_DATA,
} from '../actionsType';

const initialState = {
  tickets: [],
  loading: true,
  filterTickets: [],
  isFiltered: false,
};
export const ticketsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_ADD_TICKETS: {
      return {
        ...state,
        tickets: [...state.tickets, action.tickets],
      };
    }
    case FILTER_TICKETS: {
      const { isChecked, idTransfer } = action;
      if (isChecked) {
        const newFilterList = state.tickets.flat().filter((item) => {
          if (
            item.segments[0].stops.length === idTransfer &&
            item.segments[1].stops.length === idTransfer
          ) {
            return item;
          } else if (idTransfer === -1) {
            return {
              ...state,
            };
          }
        });
        return {
          ...state,
          filterTickets: [...newFilterList],
          isFiltered: true,
        };
      } else {
        return {
          ...state,
          isFiltered: !state.isFiltered,
        };
      }
    }

    case FILTER_BEST_TICKETS: {
      const filterBest = (currentState) => {
        if (action.option === 'cheap') {
          return currentState.toSorted((a, b) => a.price - b.price);
        }
        if (action.option === 'faster') {
          return currentState.toSorted((a, b) => a.segments[0].duration - b.segments[0].duration);
        }
      };

      const resultFilter = filterBest(state.tickets.flat());

      return {
        ...state,
        filterTickets: [...resultFilter],
        isFiltered: true,
      };
    }

    case LOADING_DATA: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    default:
      return state;
  }
};
