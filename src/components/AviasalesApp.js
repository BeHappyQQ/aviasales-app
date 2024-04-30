import React from 'react';
import logo from '../assets/Logo.svg';
import appStyles from './App.module.scss';
import { FilterBest } from './FilterBest';
import { TicketsList } from './TicketsList';
import { FilterTransfer } from './FilterTransfer';

export function App() {
  return (
    <div className={appStyles.app}>
      <img src={logo} />
      <main className={appStyles.main}>
        <FilterBest />
        <FilterTransfer />
        <TicketsList />
      </main>
    </div>
  );
}
