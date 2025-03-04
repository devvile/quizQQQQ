import React, { createContext, useContext, useRef, ReactNode } from 'react';
import { Toast } from 'primereact/toast';

interface ToastContextProps {
  showToast: (severity: 'success' | 'info' | 'warn' | 'error', summary: string, detail: string, life?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
      throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
  };
  

  interface ToastProviderProps {
    children: ReactNode;
  }

  export const ToastProvider: React.FC<ToastProviderProps>= ({children})=>{
    const toast = useRef<Toast|null>(null);
    const showToast = (
        severity: 'success' | 'info' | 'warn' | 'error', 
        summary: string, 
        detail: string,
        life: number = 3000
      ) => {
        toast?.current?.show({ 
          severity, 
          summary, 
          detail, 
          life 
        });
      };

    return <ToastContext.Provider value={{showToast}}>
        <Toast ref={toast}/>
        {children}
    </ToastContext.Provider>
  }