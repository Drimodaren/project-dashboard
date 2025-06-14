import { css } from '@emotion/react';

export const modalWrapperStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
`;

export const modalHeaderStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  button {
    position: relative;
    left: 80%;
  }
`;
export const modalFooterStyles = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #ccc;
  button {
    margin-left: 8px;
    &:first-of-type {
      margin-left: 0;
    }
  }
  button:hover {
    background-color: #f0f0f0;
  }
  button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
  button:active {
    background-color: #e0e0e0;
  }
  button:disabled {
    background-color: #d0d0d0;
    cursor: not-allowed;
  }
`;
