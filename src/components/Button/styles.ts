import { css } from '@emotion/react';

export const buttonStyles = (variant: 'primary' | 'secondary') =>
  css({
    backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: variant === 'primary' ? '#0056b3' : '#5a6268',
    },
  });
