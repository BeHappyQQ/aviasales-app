import {
  ALL_FILTERS,
  ASYNC_ADD_TICKETS,
  CURRENT_FILTER,
  ERROR_500_SERVER,
  ERROR_DATA_EMPTY,
  FILTER_BEST_TICKETS,
  FILTER_TICKETS,
  LOADING_DATA,
} from '../actionsType';

export const allFilters = (isChecked) => {
  return { type: ALL_FILTERS, isChecked };
};
export const currentFilter = (id) => {
  return { type: CURRENT_FILTER, id };
};

export const addTickets = (tickets, key) => {
  return { type: ASYNC_ADD_TICKETS, tickets, key };
};

export const showErrorServer = (err) => {
  return { type: ERROR_500_SERVER, error: err };
};
export const showErrorDataEmpty = (err) => {
  return { type: ERROR_DATA_EMPTY, error: err };
};

export const loadingData = (isLoading) => {
  return { type: LOADING_DATA, loading: isLoading };
};

export const filterTickets = (isChecked, idTransfer) => {
  return { type: FILTER_TICKETS, isChecked: isChecked, idTransfer: idTransfer };
};

export const filterBestTickets = (option, isTransferOn) => {
  return { type: FILTER_BEST_TICKETS, option: option, isTransferOn: isTransferOn };
};
