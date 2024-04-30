import React from 'react';
import styles from './TransferStyle.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { allFilters, currentFilter, filterTickets } from '../../actionCreators';

export const FilterTransfer = () => {
  const checkedList = useSelector((store) => store.transferReduser.checkedList);

  const dispatch = useDispatch();

  const onCheckedHandle = (event, id) => {
    if (id === 'all') {
      dispatch(allFilters(event.target.checked));
    } else {
      dispatch(currentFilter(id));
    }
  };

  const onFilterHandler = (event, idTransfer) => {
    const id = event.target.checked;
    dispatch(filterTickets(id, idTransfer));
  };

  return (
    <div className={styles.transfer}>
      <span className={styles.count_title}>Количество пересадок</span>
      {checkedList?.map((item) => {
        const { title, id, checked, idTransfer } = item;
        return (
          <label key={id} htmlFor={id}>
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onClick={(event) => onFilterHandler(event, idTransfer)}
              onChange={(event) => onCheckedHandle(event, id)}
            />
            <span className={styles.check_box}></span>
            {title}
          </label>
        );
      })}
    </div>
  );
};
