import React from 'react';
import styles from './FilterBestStyle.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterBestTickets } from '../../actionCreators';

export const FilterBest = () => {
  const dispatch = useDispatch();
  const isFilteredOn = useSelector((state) => state.ticketsReduser.isFiltered);

  const onFilterBestHandle = (option) => {
    dispatch(filterBestTickets(option, isFilteredOn));
  };

  return (
    <div className={styles.best}>
      <label htmlFor="cheap">
        Самый Дешевый
        <input name="radio" id="cheap" type="radio" onClick={() => onFilterBestHandle('cheap')} />
      </label>

      <label htmlFor="faster">
        Самый Быстрый
        <input name="radio" id="faster" type="radio" onClick={() => onFilterBestHandle('faster')} />
      </label>

      <label htmlFor="medium">
        Самый Оптимальный
        <input name="radio" id="medium" type="radio" />
      </label>
    </div>
  );
};
