import Modal from "react-modal";
import { useState } from "react";

import { TransactionsProvider } from "./TransactionsContext";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { NewTransactionalModal } from "./components/NewTransactionalModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handlecloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyles />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />

      <NewTransactionalModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlecloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
