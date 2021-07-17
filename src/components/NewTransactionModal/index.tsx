import Modal from 'react-modal';

interface NewTransactionOpenModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionOpenModal({
  isOpen,
  onRequestClose,
}: NewTransactionOpenModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}
