'use client';

import { createContext, useContext, useState } from 'react';

const ToastContext = createContext(undefined);

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessageIndex, setToastMessageIndex] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [customMessage, setCustomMessage] = useState(null);

  const showToastMessage = (index, success, customMsg = null) => {
    setToastMessageIndex(index);
    setIsSuccess(success);
    setCustomMessage(customMsg);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setCustomMessage(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider
      value={{ showToast, toastMessageIndex, isSuccess, customMessage, showToastMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};
