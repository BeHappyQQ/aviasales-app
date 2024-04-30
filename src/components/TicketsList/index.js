import React, { useEffect } from 'react';

import styles from './MainTicket.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { asyncThunkTikets } from '../../thunk/thunkTickets';
import { Empty } from 'antd';
import { Ticket } from './Ticket';
import { Spinner } from '../../assets/Spinner';

export const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticketsReduser.tickets);
  const isLoading = useSelector((state) => state.ticketsReduser.loading);
  const filterTickets = useSelector((state) => state.ticketsReduser.filterTickets);
  const isFiltered = useSelector((state) => state.ticketsReduser.isFiltered);
  const { emptyData } = useSelector((state) => state.errorReduser);

  useEffect(() => {
    dispatch(asyncThunkTikets());
  }, [dispatch]);

  const pending = isLoading ? <Spinner /> : null;
  const flatState = isFiltered ? filterTickets.flat().slice(0, 5) : tickets.flat().slice(0, 5);

  const ticketsList =
    !isLoading && emptyData.isEmpty ? (
      <Empty description={emptyData.message} />
    ) : (
      flatState.map((item) => {
        const id = `${item.segments[0].origin}-${item.segments[0].destination}-${item.segments[0].date}`;
        return <Ticket key={id} {...item} />;
      })
    );

  return (
    <ul className={styles.tickets_list}>
      {pending}
      {ticketsList}
    </ul>
  );
};
