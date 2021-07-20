import { useState } from 'react';

import Modal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionOpenModal } from './components/NewTransactionModal';

import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpenModal, setIsNewTransactionOpenModal] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionOpenModal
        isOpen={isNewTransactionOpenModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
