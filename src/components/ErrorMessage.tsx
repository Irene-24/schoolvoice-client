import React from 'react';
import '../styles/Error.scss';

interface ErrorProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({ message = 'An error occurred.' }) => {
  return (
    <div className="error-message">
      <span role="img" aria-label="error">
        ❌
      </span>
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
