import { addTickets, loadingData, showErrorDataEmpty, showErrorServer } from '../actionCreators';
import { ApiAviasales } from '../apiAvisales';

const api = new ApiAviasales();

export const asyncThunkTikets = () => {
  return async (dispatch) => {
    const { searchId } = await api.getSearchId();
    let isEndAsync = null;
    let countRequest = 0;
    dispatch(loadingData(true));
    do {
      try {
        const { tickets, stop } = await api.getTickets(searchId);
        isEndAsync = stop;
        if (stop && countRequest === 0) {
          dispatch(showErrorDataEmpty('Получен пустой ответ от сервера'));
          break;
        } else {
          countRequest += 1;
          dispatch(addTickets(tickets, countRequest));
        }
      } catch (err) {
        const errorMessage = new Error('Ошибка сервера', { cause: err });
        if (!countRequest) {
          dispatch(showErrorDataEmpty('Ошибка сервера, билеты не получены'));
        }
        dispatch(showErrorServer(errorMessage.message));
        break;
      }
    } while (!isEndAsync);
    dispatch(loadingData(false));
  };
};
