import { ALL_FILTERS, CURRENT_FILTER } from '../actionsType';

const initialState = {
  allIsChecked: [],
  checkedList: [
    { title: 'Все', id: 'all', idTransfer: -1, checked: false },
    { title: 'Без пересадок', idTransfer: 0, id: 'without_transfer', checked: false },
    { title: '1 пересадка', idTransfer: 1, id: 'one_transfer', checked: false },
    { title: '2 пересадки', idTransfer: 2, id: 'two_transfer', checked: false },
    { title: '3 пересадки', idTransfer: 3, id: 'three_transfer', checked: false },
  ],
};

export const transferReduser = (state = initialState, action) => {
  switch (action.type) {
    case ALL_FILTERS: {
      const allChecked = state.checkedList.map((item) => ({ ...item, checked: action.isChecked }));
      return {
        ...state,
        checkedList: allChecked,
      };
    }
    case CURRENT_FILTER: {
      const currentCheck = state.checkedList.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
          return item;
        }
      });
      const allCurruntChecked = currentCheck.slice(1).every((item) => item.checked === true);

      if (allCurruntChecked) {
        return {
          ...state,
          checkedList: currentCheck.map((item) => ({ ...item, checked: true })),
        };
      } else {
        return {
          ...state,
          checkedList: currentCheck.map((item) =>
            item.id === 'all' ? { ...item, checked: false } : item,
          ),
        };
      }
    }

    default:
      return state;
  }
};
