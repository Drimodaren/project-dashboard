/** @jsxImportSource @emotion/react */
import Button from '../Button/Button';
import { modalFooterStyles, modalHeaderStyles, modalWrapperStyles } from './styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  children: React.ReactNode;
}

function Modal({ children, isOpen, onClose, title, onConfirm }: ModalProps) {
  return (
    <>
      {isOpen ? (
        <div css={modalWrapperStyles}>
          <div css={modalHeaderStyles}>
            {title}
            <Button onClick={() => onClose()}>Close</Button>
          </div>
          {children}
          <div css={modalFooterStyles}>
            <Button
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              Confirm
            </Button>
            <Button onClick={() => onClose()}>Cancel</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
