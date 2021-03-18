import Modal from "react-modal";
import { useState } from "react";

import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";

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
    <>
      <GlobalStyles />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlecloseNewTransactionModal}
      >
        <h2>Cadastrar</h2>
      </Modal>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
    </>
  );
}
